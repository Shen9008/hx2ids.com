import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-beige-300/50 bg-graphite-700 text-beige-200/70">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-graphite-600 text-xs font-bold text-beige-200">
                HX2
              </span>
              <span className="font-display text-xl font-semibold text-beige-50">Hx2 Design</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Full-service interior design and construction firm based in Penang, Malaysia. Transforming spaces with craftsmanship and innovation.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-beige-50">Services</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/services#design" className="hover:text-beige-100">Interior Design</Link>
              <Link to="/services#renovation" className="hover:text-beige-100">Renovation</Link>
              <Link to="/services#carpentry" className="hover:text-beige-100">Custom Carpentry</Link>
              <Link to="/services#management" className="hover:text-beige-100">Project Management</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-beige-50">Company</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="hover:text-beige-100">About Us</Link>
              <Link to="/projects" className="hover:text-beige-100">Projects</Link>
              <Link to="/process" className="hover:text-beige-100">Our Process</Link>
              <Link to="/contact" className="hover:text-beige-100">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-beige-50">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+60164279389" className="flex items-center gap-2 hover:text-beige-100">
                <Phone size={14} /> +60 16-427 9389
              </a>
              <a href="mailto:hx2ids@gmail.com" className="flex items-center gap-2 hover:text-beige-100">
                <Mail size={14} /> hx2ids@gmail.com
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                62, Lintang Delima 2, Greenlane, 11600 George Town, Penang
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-beige-200/50">&copy; {new Date().getFullYear()} Hx2 Design. All rights reserved.</p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/hx2ids/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-beige-400 hover:bg-beige-400/20 hover:text-beige-100"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://www.facebook.com/hx2design"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-beige-400 hover:bg-beige-400/20 hover:text-beige-100"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
