import { Hero3 } from '@/components/ui/hero-3';
import { stats } from '@/data/projects';

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Process', href: '/process' },
];

export function HomeHero() {
  return (
    <Hero3
      logoText="Hx2 Design"
      navItems={navItems}
      signInText="Contact Us"
      signInHref="/contact"
      tagline="Interior design and construction, Penang"
      titleLine1="We don't just renovate."
      titleLine2="We build spaces you'll live in."
      description="Residential homes and commercial fit-outs across Penang, Selangor, Kedah, and Singapore. Design, build, and carpentry under one team."
      primaryCtaText="Book a consultation"
      primaryCtaHref="/contact"
      secondaryCtaText="View completed work"
      secondaryCtaHref="/projects"
      backgroundImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85"
      stats={stats}
      scrollText="Scroll to explore"
      scrollHref="#about"
    />
  );
}
