import { Reveal } from '@/components/ui/Reveal';
import { ShaderBackground } from '@/components/ui/ShaderBackground';

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-32 sm:pt-36">
      <ShaderBackground variant="light" opacity={1} />
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="mb-3 text-sm font-medium text-graphite-500">{label}</p>
          <h1 className="text-balance font-display text-4xl font-medium tracking-tight text-graphite-800 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-pretty mt-5 max-w-2xl text-lg leading-relaxed text-graphite-500">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
