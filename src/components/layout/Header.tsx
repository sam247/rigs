import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Commercial", path: "/commercial" },
  { label: "Domestic", path: "/domestic" },
  { label: "Gallery", path: "/gallery" },
  { label: "Testimonials", path: "/testimonials" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top bar */}
      <div className="border-b border-border bg-muted">
        <div className="container flex items-center justify-between py-1.5 md:py-2 text-xs md:text-sm">
          <a href="tel:01442264125" className="flex items-center gap-1.5 md:gap-2 font-medium text-foreground hover:text-primary transition-colors">
            <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
            <span className="hidden xs:inline">Call us today</span> <span>01442 264125</span>
          </a>
          <span className="hidden md:inline text-muted-foreground">NICEIC Approved • Part P Registered • 60+ Years Experience</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-heading text-lg md:text-xl font-800 tracking-tight leading-none text-foreground">GREENHILLS</span>
            <span className="font-heading text-[10px] md:text-xs font-600 tracking-[0.25em] text-muted-foreground">ELECTRIC</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted ${
                location.pathname === link.path ? "bg-muted text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <Button asChild className="font-heading font-700 hidden sm:inline-flex" size="sm">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border pb-4">
          <div className="container flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-muted ${
                  location.pathname === link.path ? "bg-muted text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="font-heading font-700 mt-2 sm:hidden">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Get a Free Quote</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
