import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { shouldUseLightweightGraphics } from '@/lib/mobile';

const VERTEX = `
  attribute vec2 a_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_dark;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p = rot * p * 2.1 + vec2(1.7, 2.3);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float aspect = u_resolution.x / u_resolution.y;
    vec2 p = vec2(uv.x * aspect, uv.y);
    float t = u_time * 0.35;

    float flow1 = fbm(p * 2.2 + vec2(t * 0.7, t * 0.4));
    float flow2 = fbm(p * 3.8 - vec2(t * 0.5, t * 0.9));
    float flow3 = sin(p.x * 4.0 + t * 1.2) * sin(p.y * 3.5 - t * 0.8) * 0.5 + 0.5;
    float blend = flow1 * 0.45 + flow2 * 0.35 + flow3 * 0.2;

    vec3 beige = vec3(0.961, 0.941, 0.902);
    vec3 sand = vec3(0.855, 0.816, 0.753);
    vec3 gold = vec3(0.820, 0.745, 0.580);
    vec3 taupe = vec3(0.620, 0.540, 0.420);
    vec3 grey = vec3(0.320, 0.320, 0.320);
    vec3 charcoal = vec3(0.120, 0.120, 0.120);

    vec3 col;
    if (u_dark > 0.5) {
      col = mix(charcoal, grey, blend);
      col = mix(col, taupe, smoothstep(0.35, 0.85, flow2) * 0.55);
      col = mix(col, gold, smoothstep(0.55, 1.0, flow1) * 0.35);
      col += gold * 0.08 * sin(t * 2.0 + p.x * 8.0);
    } else {
      col = mix(beige, sand, blend);
      col = mix(col, gold, smoothstep(0.4, 0.9, flow2) * 0.45);
      col = mix(col, taupe, smoothstep(0.6, 1.0, flow1) * 0.2);
      col += vec3(0.04, 0.03, 0.02) * sin(p.x * 7.0 + t * 2.5) * sin(p.y * 6.0 - t * 1.5);
    }

    float vignette = 1.0 - length((uv - 0.5) * vec2(1.0, 1.15)) * 0.28;
    col *= clamp(vignette, 0.82, 1.0);

    gl_FragColor = vec4(col, 1.0);
  }
`;

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

type Variant = 'light' | 'dark' | 'hero';

interface ShaderBackgroundProps {
  variant?: Variant;
  className?: string;
  opacity?: number;
}

export function ShaderBackground({ variant = 'light', className, opacity = 1 }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const [mode, setMode] = useState<'loading' | 'webgl' | 'fallback'>('loading');

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    if (shouldUseLightweightGraphics()) {
      setMode('fallback');
      return;
    }

    const gl = canvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) {
      setMode('fallback');
      return;
    }

    const vs = compileShader(gl, gl.VERTEX_SHADER, VERTEX);
    const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    if (!vs || !fs) {
      setMode('fallback');
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      setMode('fallback');
      return;
    }

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      setMode('fallback');
      return;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'u_time');
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uDark = gl.getUniformLocation(program, 'u_dark');

    const isDark = variant === 'dark' || variant === 'hero' ? 1 : 0;
    let isVisible = true;
    let tabVisible = !document.hidden;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      const { clientWidth, clientHeight } = container;
      if (clientWidth === 0 || clientHeight === 0) return;
      canvas.width = Math.floor(clientWidth * dpr);
      canvas.height = Math.floor(clientHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (container.clientWidth > 0 && container.clientHeight > 0) {
        setMode('webgl');
      }
    });
    ro.observe(container);

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(container);

    const onVisibility = () => {
      tabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', onVisibility);

    const start = performance.now();

    const draw = (now: number) => {
      if (!isVisible || !tabVisible) {
        frameRef.current = requestAnimationFrame(draw);
        return;
      }
      if (canvas.width === 0 || canvas.height === 0) {
        frameRef.current = requestAnimationFrame(draw);
        return;
      }
      const t = (now - start) / 1000;
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uDark, isDark);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buffer);
    };
  }, [variant]);

  const isDark = variant === 'dark' || variant === 'hero';

  return (
    <div
      ref={containerRef}
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden
    >
      <canvas
        ref={canvasRef}
        className={cn('h-full w-full', mode !== 'webgl' && 'hidden')}
        style={{ opacity: mode === 'webgl' ? opacity : 0 }}
      />
      <div
        className={cn(
          'shader-fallback absolute inset-0',
          isDark ? 'shader-fallback--dark' : 'shader-fallback--light',
          mode === 'webgl' && 'hidden',
        )}
        style={{ opacity: mode === 'webgl' ? 0 : opacity }}
      />
    </div>
  );
}
