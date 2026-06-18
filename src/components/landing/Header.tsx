import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  const handleNavClick = (link: { name: string; href: string }) => {
    setIsMenuOpen(false);
    if (link.href.startsWith("/")) {
      router.push(link.href);
    } else {
      if (router.pathname !== "/") {
        router.push("/" + link.href);
      } else {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <div className="max-w-7xl mx-auto px-6 py-4 rounded-2xl glass-effect bg-white/80 dark:bg-black/80 backdrop-blur-md border border-slate-200/50 shadow-soft">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image src={logo} alt="Tech3" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
              {navLinks.map((link) => (
                link.href.startsWith("/") ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link)}
                    className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </button>
                )
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <Link href="/contact">
                <Button variant="hero" size="default">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="xl:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="xl:hidden mt-4 pt-4 border-t border-slate-200/50 max-h-[75vh] overflow-y-auto">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link)}
                      className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium text-left"
                    >
                      {link.name}
                    </button>
                  )
                )}
                <Link href="/contact" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="hero" size="default" className="mt-2 w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

