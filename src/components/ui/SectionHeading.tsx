import { cn } from '@/lib/utils';
import { Badge } from './Badge';

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
      <Badge variant={dark ? 'dark' : 'default'} className="mb-4">
        {label}
      </Badge>
      <h2
        className={cn(
          'font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl',
          dark ? 'text-beige-50' : 'text-graphite-800',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('mt-4 text-base leading-relaxed sm:text-lg', dark ? 'text-beige-200/75' : 'text-graphite-400')}>
          {description}
        </p>
      )}
    </div>
  );
}
