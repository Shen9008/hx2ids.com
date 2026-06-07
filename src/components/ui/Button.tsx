import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  href?: string;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-graphite-600 text-beige-50 shadow-lg shadow-graphite-600/20 hover:bg-graphite-500 hover:shadow-xl hover:-translate-y-0.5',
  secondary:
    'bg-beige-300 text-graphite-700 hover:bg-beige-400',
  outline:
    'border-2 border-graphite-600 text-graphite-700 hover:bg-graphite-600 hover:text-beige-50',
  ghost:
    'text-graphite-600 hover:bg-beige-200/60',
  glass:
    'glass text-graphite-700 hover:bg-white/90 border-beige-300/50',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 rounded-lg font-semibold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beige-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      variants[variant],
      sizes[size],
      className,
    );

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';
