import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, Hammer, Ruler, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { services } from '@/data/projects';

const icons = { Palette, Hammer, Ruler, ClipboardCheck };

export function BentoServices() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            label="Our Services"
            title="Comprehensive Design & Build Solutions"
            description="Everything you need under one roof — from initial concept to keys-in-hand delivery."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons];

            return (
              <Reveal key={service.id} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group gradient-border relative flex h-full min-h-[380px] overflow-hidden rounded-2xl bg-beige-50 shadow-sm transition-shadow hover:shadow-xl sm:min-h-[400px]"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-800/95 via-graphite-800/40 to-graphite-800/10" />
                  <div className="relative mt-auto p-6">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-beige-100 backdrop-blur-sm">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display text-xl font-medium text-white sm:text-2xl">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-beige-100/75">{service.description}</p>
                    <Link
                      to={`/services#${service.id}`}
                      className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-beige-200 transition-colors group-hover:text-white"
                    >
                      Explore <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
