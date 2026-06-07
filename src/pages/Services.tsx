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
        description="Skill sets honed over 7 years of experience in residential and commercial design — all meant to serve you better."
      />

      {services.map((service, i) => (
        <section key={service.id} id={service.id} className={i % 2 === 0 ? 'py-20' : 'bg-beige-200/40 py-20'}>
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
              <Reveal>
                <motion.div className={`overflow-hidden rounded-3xl shadow-xl ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                  <img src={service.image} alt={service.title} className="aspect-[4/3] w-full object-cover" />
                </motion.div>
              </Reveal>
              <Reveal delay={0.1} className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <span className="text-xs font-semibold uppercase tracking-widest text-beige-600">
                  {String(i + 1).padStart(2, '0')} — Service
                </span>
                <h2 className="mt-2 font-display text-3xl font-medium text-graphite-800">{service.title}</h2>
                <p className="mt-4 text-graphite-400 leading-relaxed">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {details[service.id]?.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-graphite-500">
                      <span className="h-1 w-1 rounded-full bg-beige-500" /> {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-graphite-700 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading label="Unique Propositions" title="Why Clients Choose Hx2" align="center" dark />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { title: '3D Before You Build', desc: 'Photorealistic renders let you approve every detail before construction starts.' },
              { title: 'Single Point of Contact', desc: 'Design, build, and carpentry under one team for seamless communication.' },
              { title: 'Quality You Can See', desc: 'In-house workshops and vetted supply chain ensure exacting standards.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
                  <h3 className="font-display text-lg text-beige-50">{item.title}</h3>
                  <p className="mt-3 text-sm text-beige-200/70">{item.desc}</p>
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
