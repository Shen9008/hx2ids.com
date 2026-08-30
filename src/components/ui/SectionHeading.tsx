import { cn } from '@/lib/utils';
import BlurText from '@/components/ui/BlurText';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export function SectionHeading({ label, title, description, align = 'left', dark }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p
        className={cn(
          'mb-3 text-sm font-medium',
          dark ? 'text-beige-300' : 'text-graphite-500',
        )}
      >
        {label}
      </p>
      <BlurText
        as="h2"
        text={title}
        animateBy="words"
        direction="top"
        delay={120}
        stepDuration={0.3}
        className={cn(
          'text-balance font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl',
          dark ? 'text-beige-50' : 'text-graphite-800',
        )}
      />
      {description && (
        <p
          className={cn(
            'text-pretty mt-4 max-w-prose text-base leading-relaxed sm:text-lg',
            align === 'center' && 'mx-auto',
            dark ? 'text-beige-200/90' : 'text-graphite-500',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
