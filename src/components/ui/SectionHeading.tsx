import { cn } from '@/lib/utils';
import FoldText from '@/components/ui/FoldText';

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
      <h2 className="text-balance font-display tracking-tight">
        <FoldText
          text={title}
          splitBy="word"
          hinge="top"
          trigger="scroll"
          duration={0.55}
          stagger={0.04}
          fontSize="clamp(1.875rem, 4vw, 3rem)"
          fontWeight={500}
          color={dark ? '#faf7f0' : '#1a1a1a'}
        />
      </h2>
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
