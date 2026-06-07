import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

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

  const closeMenu = useCallback(() => {
    setOpen(false);
    document.body.style.overflow = '';
  }, []);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, closeMenu]);

  const lightHero = isHome && !scrolled;

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 px-4 pt-[env(safe-area-inset-top)] transition-all duration-500 sm:px-6',
          scrolled || !isHome ? 'py-3' : 'py-4 sm:py-5',
        )}
      >
        <div
          className={cn(
            'mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-500 sm:px-6 sm:py-3',
            lightHero ? 'bg-transparent' : 'glass shadow-lg shadow-graphite-600/5',
          )}
        >
          <Link to="/" className="group flex min-h-[44px] items-center gap-2 sm:gap-3">
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
                'font-display text-lg font-semibold tracking-wide transition-colors sm:text-xl',
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
                  'relative min-h-[44px] rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors',
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
            <Button
              to="/contact"
              size="sm"
              variant={lightHero ? 'glass' : 'primary'}
              className={cn('ml-2', lightHero && 'text-white')}
            >
              Contact Us
            </Button>
          </nav>

          <button
            type="button"
            className={cn(
              'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl lg:hidden',
              lightHero ? 'text-white' : 'text-graphite-700',
            )}
            onClick={toggleMenu}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
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
            onClick={closeMenu}
          >
            <motion.nav
              id="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 flex h-full w-[min(320px,85vw)] flex-col gap-1 bg-beige-50 p-6 pb-safe pt-[max(6rem,env(safe-area-inset-top))] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    'flex min-h-[48px] items-center rounded-xl px-4 py-3 text-base font-medium transition-colors',
                    pathname === link.to ? 'bg-beige-200 text-graphite-800' : 'text-graphite-600 hover:bg-beige-100',
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button to="/contact" className="mt-4 w-full">
                Contact Us
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
