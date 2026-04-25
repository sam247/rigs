import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import rigsLogoWhite from "@/assets/rigs-logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-rigs-dark text-primary-foreground">
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src={rigsLogoWhite} alt="RIGS Electrical" className="h-10 md:h-12 w-auto mb-4" />
            <p className="text-primary-foreground/70 text-xs md:text-sm leading-relaxed">
              Your local Tring electrician. NICEIC registered, C&G qualified and fully insured —
              over 30 years of trusted domestic electrical work across Hertfordshire.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-700 text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4 text-accent">Services</h3>
            <ul className="space-y-2 text-xs md:text-sm text-primary-foreground/70">
              <li><Link to="/domestic" className="hover:text-accent transition-colors">Domestic Electrical</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Recent Work</Link></li>
              <li><Link to="/testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-700 text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2 text-xs md:text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/portal" className="hover:text-accent transition-colors">Login</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-heading font-700 text-xs md:text-sm uppercase tracking-wider mb-3 md:mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-2.5 md:space-y-3 text-xs md:text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2.5 md:gap-3">
                <Phone className="h-3.5 w-3.5 md:h-4 md:w-4 mt-0.5 text-accent shrink-0" />
                <a href="tel:+447989205468" className="hover:text-accent transition-colors">07989 205468</a>
              </li>
              <li className="flex items-start gap-2.5 md:gap-3">
                <Mail className="h-3.5 w-3.5 md:h-4 md:w-4 mt-0.5 text-accent shrink-0" />
                <a href="mailto:rigselectrical@icloud.com" className="break-all hover:text-accent transition-colors">rigselectrical@icloud.com</a>
              </li>
              <li className="flex items-start gap-2.5 md:gap-3">
                <Instagram className="h-3.5 w-3.5 md:h-4 md:w-4 mt-0.5 text-accent shrink-0" />
                <a href="https://www.instagram.com/rigselectrical" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">@rigselectrical</a>
              </li>
              <li className="flex items-start gap-2.5 md:gap-3">
                <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 mt-0.5 text-accent shrink-0" />
                <span>Tring, Hertfordshire & surrounding areas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-4 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} RIGS Electrical. All rights reserved.</p>
          <div className="flex items-center gap-4 md:gap-6">
            <span>NICEIC Registered</span>
            <span>C&G Qualified</span>
            <span className="hidden sm:inline">Fully Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
