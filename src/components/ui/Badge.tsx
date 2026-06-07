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
        'inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em]',
        variant === 'default' && 'bg-beige-300/60 text-beige-600',
        variant === 'outline' && 'border border-beige-400 text-beige-600',
        variant === 'dark' && 'bg-white/10 text-beige-200 border border-white/20',
        className,
      )}
    >
      {children}
    </span>
  );
}
