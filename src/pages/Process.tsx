import { PageHeader } from '@/components/layout/PageHeader';
import { CTABanner } from '@/components/sections/CTABanner';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { processSteps } from '@/data/projects';

const expectations = [
  { title: 'Regular Updates', desc: 'Progress photos and site reports so you always know where your project stands.' },
  { title: 'Fixed Scope & Pricing', desc: 'Clear quotations with defined scope — no hidden costs or surprise add-ons.' },
  { title: 'Quality Inspections', desc: 'Multi-stage quality checks at key milestones before proceeding.' },
  { title: 'Single Team Accountability', desc: 'One project manager coordinates design, build, and carpentry.' },
];

export function Process() {
  return (
    <>
      <PageHeader
        label="How We Work"
        title="A Clear Path From Concept to Completion"
        description="Our structured six-step process keeps you informed, involved, and confident at every stage."
      />

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.05}>
              <div className="relative flex gap-6 pb-12 last:pb-0">
                {i < processSteps.length - 1 && (
                  <div className="absolute left-6 top-14 h-[calc(100%-2rem)] w-px bg-beige-300" />
                )}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-graphite-600 font-display text-sm font-semibold text-beige-200">
                  {step.step}
                </div>
                <div className="pt-2">
                  <h3 className="font-display text-xl font-medium text-graphite-800">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-400">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-beige-200/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionHeading label="What to Expect" title="Transparency at Every Stage" align="center" />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {expectations.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-beige-300/60 bg-beige-50 p-6">
                  <h4 className="font-semibold text-graphite-700">{item.title}</h4>
                  <p className="mt-2 text-sm text-graphite-400">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Begin?" description="Book your free on-site consultation and take the first step toward your transformed space." buttonText="Book a Consultation" />
    </>
  );
}
