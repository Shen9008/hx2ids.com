import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import {
  FaChevronDown,
  FaArrowRight,
  FaArrowDown,
  FaBars,
  FaXmark,
} from 'react-icons/fa6';
import LogoIcon from '@/assets/logo-icon';
import FoldText from '@/components/ui/FoldText';

export interface Hero3NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface Hero3Stat {
  value: string;
  label: string;
}

export interface Hero3Props {
  /** Brand logo icon */
  logo?: ReactNode;
  /** Brand logo text */
  logoText?: string;
  /** List of navigation items for the header */
  navItems?: Hero3NavItem[];
  /** Sign in button text */
  signInText?: string;
  /** Sign in button URL */
  signInHref?: string;
  /** Top tagline text above headline */
  tagline?: string;
  /** Headline line 1 */
  titleLine1?: string;
  /** Headline line 2 */
  titleLine2?: string;
  /** Body description paragraph */
  description?: string;
  /** Primary solid button CTA text */
  primaryCtaText?: string;
  /** Primary solid button CTA URL */
  primaryCtaHref?: string;
  /** Secondary arrow CTA text */
  secondaryCtaText?: string;
  /** Secondary arrow CTA URL */
  secondaryCtaHref?: string;
  /** Background image URL */
  backgroundImage?: string;
  /** Array of stat items for bottom row */
  stats?: Hero3Stat[];
  /** Scroll to discover CTA text */
  scrollText?: string;
  /** Scroll to discover CTA URL */
  scrollHref?: string;
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", duration: 0.65, bounce: 0 },
  },
};

function HeroLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}

export function Hero3({
  logo,
  logoText = 'Watermelon',
  navItems = [
    { label: 'Solutions', href: '#', hasDropdown: true },
    { label: 'Technology', href: '#', hasDropdown: true },
    { label: 'Documentation', href: '#' },
    { label: 'Community', href: '#' },
  ],
  signInText = 'Sign in',
  signInHref = '#',
  tagline = 'Quantum-powered. Designed for scale.',
  titleLine1 = 'Unleashing Potential',
  titleLine2 = 'Across The Cosmos.',
  description = 'We engineer decentralized infrastructure and quantum applications that accelerate compute speeds and unlock next-generation solutions.',
  primaryCtaText = 'Explore Platform',
  primaryCtaHref = '#',
  secondaryCtaText = 'Request Access',
  secondaryCtaHref = '#',
  backgroundImage = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920',
  stats = [
    { value: '250+', label: 'Nodes Deployed' },
    { value: '1.2B', label: 'Queries Processed' },
    { value: '99.9%', label: 'Uptime Guaranteed' },
  ],
  scrollText = 'Scroll to Discover',
  scrollHref = '#',
}: Hero3Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-graphite-900 font-sans text-beige-50">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="pointer-events-none h-full w-full object-cover brightness-[0.42] select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-graphite-900/85 via-graphite-800/50 to-graphite-900/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/95 via-graphite-900/20 to-graphite-800/45" />
        </div>
      )}

      <motion.header
        initial={{ opacity: 0, y: -14, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ type: "spring", duration: 0.6, bounce: 0 }}
        className="absolute top-0 left-0 z-30 w-full"
      >
        <div className="flex max-w-full items-center justify-between px-6 py-6 sm:px-10 md:px-16 lg:px-20">
          <HeroLink
            href="/"
            className="flex items-center gap-2.5 font-display text-xl font-medium tracking-tight text-white sm:text-2xl"
          >
            <span className="flex items-center justify-center text-beige-200">
              {logo || <LogoIcon className="size-8 text-beige-100" />}
            </span>
            <span>{logoText}</span>
          </HeroLink>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((navItem) => (
              <HeroLink
                key={navItem.label}
                href={navItem.href}
                className="group flex items-center gap-1.5 text-sm font-medium text-beige-100/90 transition-colors duration-200 hover:text-white"
              >
                <span>{navItem.label}</span>
                {navItem.hasDropdown && (
                  <FaChevronDown className="h-3 w-3 fill-current text-beige-200/70 transition-transform duration-200 group-hover:translate-y-0.5" />
                )}
              </HeroLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <HeroLink
              href={signInHref}
              className="rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:border-white/50 hover:bg-white/20"
            >
              {signInText}
            </HeroLink>
          </div>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center justify-center rounded-full p-2 text-white transition-colors hover:bg-white/10 md:hidden"
            aria-label="Toggle navigation menu"
          >
            <FaBars className="h-5 w-5 fill-current" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence initial={false}>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
            transition={{ type: "spring", duration: 0.3, bounce: 0 }}
            className="fixed inset-0 z-50 flex flex-col bg-graphite-900/95 p-6 backdrop-blur-md md:hidden"
          >
          <div className="flex items-center justify-between">
            <HeroLink
              href="/"
              className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="flex items-center justify-center text-beige-200">
                {logo || <LogoIcon className="size-8 text-beige-100" />}
              </span>
              <span>{logoText}</span>
            </HeroLink>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center rounded-full p-2 text-white transition-colors hover:bg-white/10"
              aria-label="Close menu"
            >
              <FaXmark className="h-5 w-5 fill-current" />
            </button>
          </div>

          <nav className="mt-12 flex flex-col gap-6">
            {navItems.map((navItem) => (
              <HeroLink
                key={navItem.label}
                href={navItem.href}
                className="flex items-center justify-between border-b border-white/15 pb-3 text-lg font-medium text-beige-50 transition-colors hover:text-beige-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{navItem.label}</span>
                {navItem.hasDropdown && (
                  <FaChevronDown className="h-4 w-4 fill-current text-beige-200/70" />
                )}
              </HeroLink>
            ))}
          </nav>

          <div className="mt-auto">
            <HeroLink
              href={signInHref}
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-full border border-white/25 bg-white/10 py-3 text-base font-medium text-white transition-colors hover:bg-white/20"
            >
              {signInText}
            </HeroLink>
          </div>
        </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex min-h-screen max-w-7xl flex-col justify-between px-6 pt-32 pb-12 sm:px-10 md:px-16 md:pt-40 lg:px-20 lg:pt-48">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.38 }}
          className="flex flex-1 flex-col justify-center"
        >
          <div className="max-w-4xl">
            {tagline && (
              <motion.p
                variants={item}
                className="mb-4 text-sm font-medium tracking-wide text-beige-200 sm:text-base"
              >
                {tagline}
              </motion.p>
            )}

            <h1 className="mb-6 font-display tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
              {titleLine1 && (
                <span className="block">
                  <FoldText
                    text={titleLine1}
                    splitBy="word"
                    hinge="top"
                    trigger="mount"
                    duration={0.65}
                    stagger={0.045}
                    fontSize="clamp(2.25rem, 5vw, 4.5rem)"
                    fontWeight={500}
                    color="#ffffff"
                  />
                </span>
              )}
              {titleLine2 && (
                <span className="block">
                  <FoldText
                    text={titleLine2}
                    splitBy="word"
                    hinge="top"
                    trigger="mount"
                    duration={0.65}
                    stagger={0.04}
                    fontSize="clamp(2.25rem, 5vw, 4.5rem)"
                    fontWeight={500}
                    color="#ebe3d4"
                  />
                </span>
              )}
            </h1>

            {description && (
              <motion.p
                variants={item}
                className="mb-4 max-w-2xl text-base leading-relaxed text-beige-100/95 sm:text-lg"
              >
                {description}
              </motion.p>
            )}

            <motion.div
              variants={item}
              className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {primaryCtaText && (
                <HeroLink
                  href={primaryCtaHref}
                  className="rounded-full bg-white px-8 py-3.5 text-sm font-normal text-black shadow-lg transition-all duration-200 sm:text-base"
                >
                  {primaryCtaText}
                </HeroLink>
              )}
              {secondaryCtaText && (
                <HeroLink
                  href={secondaryCtaHref}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-beige-50 transition-colors duration-200 hover:text-white sm:text-base"
                >
                  <span>{secondaryCtaText}</span>
                  <FaArrowRight className="h-4 w-4 fill-current transition-transform duration-200 group-hover:translate-x-1" />
                </HeroLink>
              )}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          className="mt-12 border-t border-white/20 pt-8 sm:mt-16"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            {stats.length > 0 && (
              <div className="flex flex-col divide-y divide-white/20 md:flex-row md:items-center md:divide-x md:divide-y-0">
                {stats.map((stat) => (
                  <motion.div
                    variants={item}
                    key={stat.label}
                    className="flex flex-col gap-1.5 py-4 first:pt-0 last:pb-0 md:px-6 md:py-0 md:first:pl-0 md:last:pr-0"
                  >
                    <span className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      {stat.value}
                    </span>

                    <span className="text-xs font-medium text-beige-200/90 sm:text-sm">
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            {scrollText && (
              <motion.a
                variants={item}
                href={scrollHref}
                className="flex items-center gap-2 self-start text-xs font-semibold text-beige-200 transition-colors hover:text-white sm:text-sm md:self-auto"
              >
                <span>{scrollText}</span>
                <FaArrowDown className="h-4 w-4 fill-current" />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
