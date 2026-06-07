import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { BentoServices } from '@/components/sections/BentoServices';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { ShaderBackground } from '@/components/ui/ShaderBackground';
import { processSteps } from '@/data/projects';

const usps = [
  { title: 'Design to Build', desc: 'End-to-end from 3D visualization through construction and final handover.' },
  { title: 'In-House Carpentry', desc: 'Bespoke furniture fabricated in our own workshops for precision and quality.' },
  { title: 'Proven Track Record', desc: 'Over 150 successfully delivered projects across Malaysia and Singapore.' },
];

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      <section className="bg-beige-200/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                label="About Hx2 Design"
                title="Crafting Spaces That Inspire"
                description="With over 7 years of industry expertise, we serve clients across Penang, Selangor, Kedah, and Singapore — blending aesthetic brilliance with structural integrity."
              />
              <Button to="/about" variant="outline" className="mt-8">
                Learn More About Us
              </Button>
            </Reveal>
            <Reveal delay={0.15}>
              <motion.div whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe3c67fb0?w=800&q=80"
                  alt="Hx2 Design interior"
                  className="aspect-[4/5] w-full object-cover"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              label="Why Choose Us"
              title="What Sets Hx2 Apart"
              description="Our own specialized workshops and reliable supply chain ensure strict quality control and timely delivery."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {usps.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="gradient-border rounded-2xl bg-beige-50 p-8 text-center shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-beige-400 text-beige-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <h3 className="font-display text-xl font-medium text-graphite-800">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite-400">{item.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BentoServices />

      <section className="relative overflow-hidden bg-graphite-700 py-20 text-beige-50 sm:py-28">
        <ShaderBackground variant="dark" opacity={0.4} />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading
              label="Our Process"
              title="From Vision to Reality"
              description="A structured, transparent approach that keeps you informed at every stage."
              align="center"
              dark
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {processSteps.slice(0, 3).map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                  <span className="font-display text-5xl font-light text-beige-400/40">{step.step}</span>
                  <h3 className="mt-4 font-display text-xl font-medium">{step.title}</h3>
                  <p className="mt-3 text-sm text-beige-200/70">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/process" variant="glass" className="border-white/20 text-white">
              See Full Process
            </Button>
          </div>
        </div>
      </section>

      <ProjectGrid />
      <CTABanner />
    </>
  );
}
