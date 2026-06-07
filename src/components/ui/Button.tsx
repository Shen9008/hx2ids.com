import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass' | 'shimmer';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  to?: string;
  href?: string;
  shine?: boolean;
}

const variants: Record<Variant, string> = {
  primary: 'btn-elegant btn-elegant--primary text-beige-50',
  secondary: 'btn-elegant btn-elegant--secondary text-graphite-700',
  outline: 'btn-elegant btn-elegant--outline text-graphite-700',
  ghost: 'btn-elegant btn-elegant--ghost text-graphite-600',
  glass: 'btn-elegant btn-elegant--glass text-graphite-700',
  shimmer: 'btn-elegant btn-elegant--shimmer text-beige-50',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm',
};

const base =
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl font-semibold uppercase tracking-wider transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beige-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', to, href, shine = true, children, ...props }, ref) => {
    const classes = cn(base, variants[variant], sizes[size], className);

    const inner = (
      <>
        {shine && <span className="btn-shine" aria-hidden />}
        <span className="btn-glow" aria-hidden />
        <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      </>
    );

    if (to) {
      return (
        <Link to={to} className={classes}>
          {inner}
        </Link>
      );
    }

    if (href) {
      return (
        <a href={href} className={classes}>
          {inner}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {inner}
      </button>
    );
  },
);
Button.displayName = 'Button';
