import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'dark';
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium',
        variant === 'default' && 'bg-beige-300/60 text-graphite-700',
        variant === 'outline' && 'border border-beige-400 text-graphite-600',
        variant === 'dark' && 'border border-white/20 bg-white/10 text-beige-100',
        className,
      )}
    >
      {children}
    </span>
  );
}
