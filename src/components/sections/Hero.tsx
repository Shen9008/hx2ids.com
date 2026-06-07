import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ShaderBackground } from '@/components/ui/ShaderBackground';
import { stats } from '@/data/projects';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85"
          alt="Luxury interior by Hx2 Design"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-800/55 via-graphite-700/30 to-graphite-800/50" />
        <ShaderBackground variant="hero" className="z-[1] mix-blend-overlay" opacity={0.8} />
      </motion.div>

      <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_top_right,rgba(184,168,138,0.2),transparent_55%)]" />

      <motion.div style={{ opacity }} className="relative z-10 flex min-h-[100svh] flex-col justify-center px-4 pb-32 pt-28 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge variant="dark" className="mb-6 gap-1.5">
              <Sparkles size={10} /> Interior Design & Construction
            </Badge>
            <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              We Don't Just Renovate —{' '}
              <span className="bg-gradient-to-r from-beige-200 to-beige-400 bg-clip-text text-transparent">
                We Transform
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-beige-100/85">
              From residential sanctuaries to high-performance commercial hubs, Hx2 Design blends aesthetic brilliance with structural integrity.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact" size="lg" variant="shimmer" className="w-full sm:w-auto">
                Request a Consultation <ArrowRight size={16} />
              </Button>
              <Button
                to="/projects"
                size="lg"
                variant="glass"
                className="w-full border-white/40 text-white sm:w-auto"
              >
                View Our Work
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-beige-100/95 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4 sm:px-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <div className="font-display text-3xl font-semibold text-graphite-800 sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-graphite-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
