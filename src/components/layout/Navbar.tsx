import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/process', label: 'Process' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  const lightHero = isHome && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 px-4 pt-[env(safe-area-inset-top)] transition-all duration-500 sm:px-6',
          scrolled || !isHome ? 'py-3' : 'py-5',
        )}
      >
        <div
          className={cn(
            'mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6',
            lightHero
              ? 'bg-transparent'
              : 'glass shadow-lg shadow-graphite-600/5',
          )}
        >
          <Link to="/" className="group flex items-center gap-3">
            <span
              className={cn(
                'flex h-10 w-10 items-center justify-center rounded-lg text-xs font-bold tracking-wider transition-colors',
                lightHero
                  ? 'border border-white/30 bg-white/10 text-white'
                  : 'bg-graphite-600 text-beige-200',
              )}
            >
              HX2
            </span>
            <span
              className={cn(
                'font-display text-xl font-semibold tracking-wide transition-colors',
                lightHero ? 'text-white' : 'text-graphite-800',
              )}
            >
              Hx2 Design
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'relative rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors',
                  lightHero ? 'text-white/90 hover:text-white' : 'text-graphite-600 hover:text-graphite-800',
                  pathname === link.to && (lightHero ? 'text-white' : 'text-graphite-800'),
                )}
              >
                {link.label}
                {pathname === link.to && (
                  <motion.span
                    layoutId="nav-indicator"
                    className={cn('absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full', lightHero ? 'bg-white' : 'bg-graphite-600')}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className={cn(
                'ml-2 inline-flex items-center justify-center rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all',
                lightHero
                  ? 'border border-white/40 bg-white/10 text-white hover:bg-white/20'
                  : 'bg-graphite-600 text-beige-50 shadow-lg hover:bg-graphite-500',
              )}
            >
              Contact Us
            </Link>
          </nav>

          <button
            type="button"
            className={cn(
              'flex h-11 w-11 items-center justify-center rounded-xl lg:hidden',
              lightHero ? 'text-white' : 'text-graphite-700',
            )}
            onClick={() => {
              setOpen((v) => !v);
              document.body.style.overflow = open ? '' : 'hidden';
            }}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-graphite-800/40 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 flex h-full w-[min(320px,85vw)] flex-col gap-1 bg-beige-50 p-6 pt-24 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'rounded-xl px-4 py-3 text-base font-medium transition-colors',
                    pathname === link.to ? 'bg-beige-200 text-graphite-800' : 'text-graphite-600 hover:bg-beige-100',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 flex w-full items-center justify-center rounded-lg bg-graphite-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-beige-50 transition-colors hover:bg-graphite-500"
              >
                Contact Us
              </Link>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
