import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Custom Websites", href: "/services/custom-website-development" },
      { name: "Landing Pages", href: "/services" },
      { name: "Web Applications", href: "/services/mern-stack-development" },
      { name: "E-commerce", href: "/services/ecommerce-development" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Work", href: "/portfolio" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "/contact" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/portfolio" },
      { name: "FAQ", href: "/faq" },
      { name: "Support", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-primary py-16">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image src={logo} alt="Tech3" className="h-10 mb-4 w-auto" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
              4+ years building modern, high-performance web solutions with MERN, Next.js, AWS & Python.
            </p>
            <div className="text-primary-foreground/60 text-sm space-y-1 mb-6">
              <p>📧 aadilkhany@gmail.com</p>
              <p>📞 +91-8878331005</p>
            </div>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">
              Technologies
            </h4>
            <ul className="space-y-3">
              {["MERN Stack", "Next.js", "AWS Cloud", "Python", "Web Hosting"].map((tech) => (
                <li key={tech}>
                  <span className="text-primary-foreground/60 text-sm">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground mb-4 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Tech3. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
