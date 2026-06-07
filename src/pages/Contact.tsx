import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <PageHeader
        label="Get in Touch"
        title="Let's Discuss Your Next Project"
        description="Fill out the form below, or call us to set up a free on-site consultation. We serve Penang, Selangor, Kedah, and Singapore."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <h2 className="font-display text-2xl font-medium text-graphite-800">We'd Love to Hear From You</h2>
              <p className="mt-4 text-graphite-400">Whether you're planning a home renovation, commercial fit-out, or just exploring ideas — we'll respond within 1 business day.</p>

              <div className="mt-8 space-y-6">
                {[
                  { icon: MapPin, title: 'Office Address', content: '62, Lintang Delima 2, Greenlane\n11600 George Town, Penang' },
                  { icon: Phone, title: 'Phone / WhatsApp', content: '+60 16-427 9389', href: 'tel:+60164279389' },
                  { icon: Mail, title: 'Email', content: 'hx2ids@gmail.com', href: 'mailto:hx2ids@gmail.com' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-beige-200 text-beige-600">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-graphite-700">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="mt-1 block text-sm text-graphite-400 hover:text-beige-600">{item.content}</a>
                      ) : (
                        <p className="mt-1 whitespace-pre-line text-sm text-graphite-400">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <a href="https://www.instagram.com/hx2ids/" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-beige-300 text-graphite-500 transition-colors hover:border-graphite-600 hover:text-graphite-700" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="https://www.facebook.com/hx2design" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-beige-300 text-graphite-500 transition-colors hover:border-graphite-600 hover:text-graphite-700" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-3">
              <motion.form
                onSubmit={handleSubmit}
                className="gradient-border rounded-3xl bg-beige-50 p-8 shadow-lg sm:p-10"
              >
                <h3 className="font-display text-2xl font-medium text-graphite-800">Send Us a Message</h3>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-graphite-500">First Name</label>
                    <input required name="firstName" className="w-full rounded-xl border border-beige-300 bg-beige-100 px-4 py-3 text-sm outline-none transition-colors focus:border-beige-500" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-graphite-500">Last Name</label>
                    <input required name="lastName" className="w-full rounded-xl border border-beige-300 bg-beige-100 px-4 py-3 text-sm outline-none transition-colors focus:border-beige-500" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-graphite-500">Email</label>
                    <input required type="email" name="email" className="w-full rounded-xl border border-beige-300 bg-beige-100 px-4 py-3 text-sm outline-none transition-colors focus:border-beige-500" />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-graphite-500">Phone</label>
                    <input required type="tel" name="phone" className="w-full rounded-xl border border-beige-300 bg-beige-100 px-4 py-3 text-sm outline-none transition-colors focus:border-beige-500" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-graphite-500">Service</label>
                    <select name="service" className="w-full rounded-xl border border-beige-300 bg-beige-100 px-4 py-3 text-sm outline-none transition-colors focus:border-beige-500">
                      <option value="">Select a service</option>
                      <option value="design">Interior Design & Consultancy</option>
                      <option value="renovation">Renovation & Construction</option>
                      <option value="carpentry">Custom Carpentry</option>
                      <option value="management">Project Management</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-graphite-500">Message</label>
                    <textarea required name="message" rows={4} placeholder="Tell us about your project..." className="w-full resize-y rounded-xl border border-beige-300 bg-beige-100 px-4 py-3 text-sm outline-none transition-colors focus:border-beige-500" />
                  </div>
                </div>
                <Button type="submit" className="mt-6 w-full">Submit Enquiry</Button>
                {submitted && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 rounded-xl bg-green-50 p-4 text-center text-sm text-green-700">
                    Thank you! We'll be in touch within 1 business day.
                  </motion.p>
                )}
              </motion.form>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl shadow-lg">
          <iframe
            title="Hx2 Design office location"
            src="https://maps.google.com/maps?q=62+Lintang+Delima+2+Greenlane+11600+George+Town+Penang&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="h-80 w-full border-0 sm:h-96"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
