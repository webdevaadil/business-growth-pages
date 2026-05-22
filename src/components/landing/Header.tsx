import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Services", href: "/services" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <div className="max-w-7xl mx-auto px-6 py-4 rounded-2xl glass-effect bg-primary/80 backdrop-blur-md border border-primary-foreground/10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/">
              <img src={logo} alt="Tech3" className="h-10" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  // onClick={() => scrollToSection(link.href)}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium"
                >
                  <Link to={link.href.startsWith("/") ? link.href : undefined}>
                  {link.name}
                  </Link>
                </button>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <Button variant="hero" size="default">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-primary-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t border-primary-foreground/10">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium text-left"
                  >
                    {link.name}
                  </button>
                ))}
                <Button variant="hero" size="default" className="mt-2">
                  Get Started
                </Button>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
