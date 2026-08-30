import { Reveal } from '@/components/ui/Reveal';
import FoldText from '@/components/ui/FoldText';
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
          <h1 className="text-balance font-display tracking-tight">
            <FoldText
              text={title}
              splitBy="word"
              hinge="top"
              trigger="scroll"
              duration={0.6}
              stagger={0.04}
              fontSize="clamp(2.25rem, 5vw, 3.75rem)"
              fontWeight={500}
              color="#1a1a1a"
            />
          </h1>
          <p className="text-pretty mt-5 max-w-2xl text-lg leading-relaxed text-graphite-500">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
