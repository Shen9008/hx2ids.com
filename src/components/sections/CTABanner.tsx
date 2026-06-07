import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { ShaderBackground } from '@/components/ui/ShaderBackground';

interface CTABannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export function CTABanner({
  title = "Let's Discuss Your Next Project",
  description = 'Fill out our contact form or reach us directly to schedule a free on-site consultation.',
  buttonText = 'Get in Touch',
}: CTABannerProps) {
  return (
    <section className="py-16 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <motion.div className="relative overflow-hidden rounded-2xl bg-graphite-800 px-6 py-12 text-center sm:px-16 sm:py-16">
            <ShaderBackground variant="dark" opacity={1} />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(184,168,138,0.12),transparent_60%)]" />
            <div className="relative">
              <h2 className="font-display text-2xl font-medium text-beige-50 sm:text-4xl">{title}</h2>
              <p className="text-pretty mx-auto mt-4 max-w-md text-base text-beige-200/90 sm:text-lg">{description}</p>
              <Button to="/contact" variant="secondary" size="lg" className="mt-8 w-full sm:w-auto">
                {buttonText} <ArrowRight size={16} />
              </Button>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
