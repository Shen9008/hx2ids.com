import { PageHeader } from '@/components/layout/PageHeader';
import { ProjectGrid } from '@/components/sections/ProjectGrid';
import { CTABanner } from '@/components/sections/CTABanner';
import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/data/projects';

export function Projects() {
  const residential = projects.filter((p) => p.category === 'residential').length;
  const commercial = projects.filter((p) => p.category === 'commercial').length;

  return (
    <>
      <PageHeader
        label="Our Portfolio"
        title="Success Stories That Speak for Themselves"
        description="Residential and commercial work across Penang, Selangor, Kedah, and Singapore. Landed homes, condos, shoplots, offices, and industrial spaces."
      />

      <section className="border-b border-beige-300/50 bg-beige-50 py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6">
          {[
            { value: String(residential), label: 'Residential' },
            { value: String(commercial), label: 'Commercial' },
            { value: '4', label: 'States & Regions' },
            { value: '150+', label: 'Total Delivered' },
          ].map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.05}>
              <div className="text-center">
                <div className="font-display text-3xl font-semibold text-graphite-800">{stat.value}</div>
                <div className="mt-1 text-xs font-medium text-graphite-500">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ProjectGrid showHeading={false} />
      <CTABanner title="Want Results Like These?" description="Share your project details and we'll show you what's possible for your space." buttonText="Start Your Project" />
    </>
  );
}
