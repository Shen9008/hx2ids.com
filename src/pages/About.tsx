import { motion } from 'framer-motion';
import { PageHeader } from '@/components/layout/PageHeader';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

const values = [
  { title: '150+ Projects Delivered', desc: 'From bespoke apartments to large-scale corporate offices across Penang, Selangor, Kedah, and Singapore.' },
  { title: 'In-House Workshops', desc: 'Specialized carpentry workshops enable bespoke fabrication with strict quality control.' },
  { title: 'Reliable Supply Chain', desc: 'Established supplier relationships ensure premium materials and timely delivery.' },
  { title: '3D Visualization', desc: 'Detailed 3D renders bridge the gap between concept and reality before construction.' },
  { title: 'Turnkey Solutions', desc: 'One team from design consultancy through renovation, carpentry, and handover.' },
  { title: 'Residential & Commercial', desc: 'Homes, condominiums, shoplots, offices, and industrial spaces.' },
];

const areas = [
  { title: 'Penang', desc: 'George Town, Bayan Lepas, Balik Pulau, Tanjung Tokong, and surrounding areas.' },
  { title: 'Selangor & KL', desc: 'Puchong, Subang Jaya, Bukit Jalil, and the greater Klang Valley.' },
  { title: 'Singapore & Beyond', desc: 'Cross-border projects including executive condominiums and commercial fit-outs.' },
];

export function About() {
  return (
    <>
      <PageHeader
        label="About Hx2 Design"
        title="Designing With Purpose, Building With Integrity"
        description="A Penang design and build firm with 150+ completed homes, condos, and commercial fit-outs across Malaysia and Singapore."
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <motion.div className="overflow-hidden rounded-3xl shadow-xl">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Hx2 team" className="aspect-[4/5] w-full object-cover" />
              </motion.div>
            </Reveal>
            <Reveal delay={0.1}>
              <SectionHeading
                label="Our Story"
                title="More Than a Design Firm"
                description="Over seven years, Hx2 Design has grown into a full-service firm covering layout, 3D renders, renovation, and in-house carpentry."
              />
              <p className="text-pretty mt-4 leading-relaxed text-graphite-500">
                From landed homes to shoplots and offices, we manage each stage from first sketch through construction to handover.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-beige-200/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeading
                label="Our Vision"
                title="The Gold Standard in Spatial Transformation"
                description="To be the most trusted partner in spatial transformation, setting the gold standard for craftsmanship and innovation in Malaysia."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <motion.div className="overflow-hidden rounded-3xl shadow-xl">
                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt="Hx2 project" className="aspect-[4/5] w-full object-cover" />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading label="Our Strengths" title="Scale, Quality & Control" align="center" />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-beige-300/60 bg-beige-50 p-6 transition-shadow hover:shadow-md">
                  <h4 className="font-semibold text-beige-600">{v.title}</h4>
                  <p className="mt-2 text-sm text-graphite-500">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-graphite-700 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading label="Service Areas" title="Where We Work" align="center" dark />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {areas.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
                  <h3 className="font-display text-xl text-beige-50">{a.title}</h3>
                  <p className="mt-3 text-sm text-beige-200/70">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Transform Your Space?" description="Let's start with a conversation about your project goals and vision." buttonText="Schedule a Consultation" />
    </>
  );
}
