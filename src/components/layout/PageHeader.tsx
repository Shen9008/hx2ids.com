import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-beige-200/50 pb-16 pt-32 sm:pt-36">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <Badge className="mb-4">{label}</Badge>
          <h1 className="font-display text-4xl font-medium tracking-tight text-graphite-800 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-graphite-400">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
