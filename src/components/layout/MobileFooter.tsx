import { Link } from 'react-router-dom';
import { Coffee, Instagram, Phone, MapPin } from 'lucide-react';
import { LINKS, BUSINESS_HOURS } from '@/data/links';

export function MobileFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-content py-12">
        {/* Logo and Tagline */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-2xl font-heading font-semibold">
            <Coffee className="h-7 w-7" aria-hidden="true" />
            <span>Blue Can Coffee</span>
          </Link>
          <p className="mt-2 text-primary-foreground/80">
            Great coffee. Cozy vibes. Surat.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-8 mb-8 text-center md:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><Link to="/menu" className="hover:text-primary-foreground transition-colors">Menu</Link></li>
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Order</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a 
                  href={LINKS.zomato} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Zomato
                </a>
              </li>
              <li>
                <a 
                  href={LINKS.swiggy} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Swiggy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Hours</h3>
            <p className="text-primary-foreground/80 text-sm">
              {BUSINESS_HOURS.display}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <div className="flex justify-center gap-4">
              <a 
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href={`tel:${LINKS.phone}`}
                className="hover:text-primary-foreground/80 transition-colors"
                aria-label="Call us"
              >
                <Phone className="h-6 w-6" />
              </a>
              <a 
                href={LINKS.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/80 transition-colors"
                aria-label="Find us on Google Maps"
              >
                <MapPin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Blue Can Coffee. All rights reserved.</p>
          <p className="mt-1">Made with ☕ in Surat, India</p>
        </div>
      </div>
    </footer>
  );
}
