import { motion } from 'framer-motion';
import { PageHeader } from '@/components/layout/PageHeader';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { services } from '@/data/projects';

const details: Record<string, string[]> = {
  design: ['Concept development & mood boards', 'Detailed 3D visualization & renders', 'Space planning & layout optimization', 'Material & finish selection guidance'],
  renovation: ['Structural works & hacking', 'Tiling, flooring & wall finishes', 'Plumbing & sanitary installations', 'Electrical wiring & lighting systems'],
  carpentry: ['Kitchen cabinets & wardrobes', 'Feature walls & TV consoles', 'Office workstations & reception counters', 'Retail display & salon stations'],
  management: ['Site supervision & progress reporting', 'Budget tracking & cost control', 'Contractor & supplier coordination', 'Defect inspection & final handover'],
};

export function Services() {
  return (
    <>
      <PageHeader
        label="Our Services"
        title="Full-Service Design & Build Under One Roof"
        description="Seven years of residential and commercial work in Penang and beyond. One team for design, build, and handover."
      />

      <div className="divide-y divide-beige-300/50">
        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 sm:py-20 ${i % 2 === 1 ? 'bg-beige-200/40' : 'bg-beige-100'}`}
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <motion.div className="overflow-hidden rounded-3xl shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </motion.div>
                </Reveal>

                <Reveal delay={0.1} className={`flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-balance font-display text-3xl font-medium text-graphite-800">{service.title}</h2>
                  <p className="text-pretty mt-4 leading-relaxed text-graphite-500">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {details[service.id]?.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-graphite-500">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-beige-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-graphite-700 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading label="Unique Propositions" title="Why Clients Choose Hx2" align="center" dark />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { title: '3D Before You Build', desc: 'Photorealistic renders let you approve every detail before construction starts.' },
              { title: 'Single Point of Contact', desc: 'Design, build, and carpentry under one team with one project manager.' },
              { title: 'Quality You Can See', desc: 'In-house workshops and vetted supply chain ensure exacting standards.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="flex h-full min-h-[180px] flex-col rounded-2xl border border-white/10 bg-graphite-600/40 p-8 text-center">
                  <h3 className="font-display text-lg text-beige-50">{item.title}</h3>
                  <p className="mt-3 text-sm text-beige-200/90">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Request a Quote for Your Project" description="Tell us about your space and we'll provide a tailored proposal." buttonText="Request a Quote" />
    </>
  );
}
