import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
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
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
          srcSet="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=640&q=75 640w, https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1080&q=80 1080w, https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85 1920w"
          sizes="100vw"
          alt="Luxury interior by Hx2 Design"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-graphite-800/55 via-graphite-700/30 to-graphite-800/50" />
        <ShaderBackground variant="hero" className="z-shader mix-blend-overlay" opacity={0.8} />
      </motion.div>

      <div className="absolute inset-0 z-overlay bg-[radial-gradient(ellipse_at_top_right,rgba(184,168,138,0.2),transparent_55%)]" />

      <motion.div style={{ opacity }} className="relative z-content flex min-h-[100svh] flex-col justify-center px-4 pb-28 pt-24 sm:px-6 sm:pb-32 sm:pt-28">
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 text-sm font-medium text-beige-200/90">Interior design and construction, Penang</p>
            <h1 className="text-balance max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
              We don't just renovate.
              <span className="mt-1 block text-beige-200 sm:mt-0 sm:inline sm:pl-2">We build spaces you'll live in.</span>
            </h1>
            <p className="text-pretty mt-5 max-w-xl text-base leading-relaxed text-beige-100 sm:mt-6 sm:text-lg">
              Residential homes and commercial fit-outs across Penang, Selangor, Kedah, and Singapore. Design, build, and carpentry under one team.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Button to="/contact" size="lg" className="w-full sm:w-auto">
                Book a consultation <ArrowRight size={16} />
              </Button>
              <Button
                to="/projects"
                size="lg"
                variant="outline"
                className="w-full border-white/50 text-white hover:bg-white hover:text-graphite-800 sm:w-auto"
              >
                View completed work
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0 z-content border-t border-white/10 bg-beige-100/95 backdrop-blur-xl">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 pb-safe sm:grid-cols-4 sm:gap-6 sm:px-6 sm:py-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="font-display text-3xl font-semibold text-graphite-800 sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs font-medium text-graphite-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
