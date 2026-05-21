import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import rigsLogo from "@/assets/rigs-logo.svg";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Services", path: "/domestic" },
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
          <span className="font-medium text-foreground">
            Electricians in Hertfordshire, Buckinghamshire and Surrounding Areas
          </span>
          <span className="hidden lg:inline text-muted-foreground">NICEIC Registered • C&G Qualified • Fully Insured</span>
          <span className="lg:hidden text-[10px] text-muted-foreground">NICEIC Registered • C&G Qualified</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-3 md:py-4">
        <Link to="/" aria-label="RIGS Electrical home" className="flex items-center">
          <img src={rigsLogo} alt="RIGS Electrical" className="h-9 md:h-11 w-auto" />
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
          <Button asChild variant="secondary" className="font-heading font-700 hidden sm:inline-flex bg-primary/10 text-primary hover:bg-primary/20" size="sm">
            <a href="tel:+447989205468"><Phone className="mr-1.5 h-4 w-4" /> Call Now</a>
          </Button>
          <Button asChild className="font-heading font-700 hidden sm:inline-flex" size="sm">
            <Link to="/contact">Get a Quote</Link>
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
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
