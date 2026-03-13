import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-greenhills-dark text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-heading text-xl font-800 tracking-tight">GREENHILLS</span>
              <br />
              <span className="font-heading text-xs font-600 tracking-[0.25em] text-accent">ELECTRIC</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Professional electrical contractors with over 60 years of combined experience. 
              NICEIC approved and Part P registered.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-700 text-sm uppercase tracking-wider mb-4 text-accent">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/commercial" className="hover:text-accent transition-colors">Commercial Services</Link></li>
              <li><Link to="/domestic" className="hover:text-accent transition-colors">Domestic Services</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Our Projects</Link></li>
              <li><Link to="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-700 text-sm uppercase tracking-wider mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/portal" className="hover:text-accent transition-colors">Customer Portal</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-700 text-sm uppercase tracking-wider mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>Call us for a free quote</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>info@greenhillselectric.co.uk</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-accent shrink-0" />
                <span>Serving London &amp; surrounding areas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Greenhills Electric. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>NICEIC Approved</span>
            <span>Part P Registered</span>
            <span>Trustmark</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
