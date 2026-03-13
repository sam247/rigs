import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Commercial", path: "/commercial" },
  { label: "Domestic", path: "/domestic" },
  { label: "Gallery", path: "/gallery" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
      {/* Top bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="container flex items-center justify-between py-2 text-sm">
          <a href="tel:01onal" className="flex items-center gap-2 font-medium hover:text-accent transition-colors">
            <Phone className="h-4 w-4" />
            <span>Call us today</span>
          </a>
          <span className="hidden sm:inline text-primary-foreground/70">NICEIC Approved • Part P Registered • 60+ Years Experience</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-heading text-xl font-800 tracking-tight leading-none">GREENHILLS</span>
            <span className="font-heading text-xs font-600 tracking-[0.25em] text-primary-foreground/70">ELECTRIC</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary-foreground/10 ${
                location.pathname === link.path ? "bg-primary-foreground/15 text-accent" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 hidden sm:inline-flex">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
          <button
            className="lg:hidden p-2 hover:bg-primary-foreground/10 rounded-md transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-primary-foreground/10 pb-4">
          <div className="container flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-primary-foreground/10 ${
                  location.pathname === link.path ? "bg-primary-foreground/15 text-accent" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-700 mt-2 sm:hidden">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Get a Free Quote</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
