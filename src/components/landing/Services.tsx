import Link from "next/link";
import { Globe, Layout, Code, Cloud, ArrowUpRight, ShoppingCart, CreditCard, Smartphone, Shield, Laptop, FileText } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "MERN Stack Development",
    description: "Build custom full-stack solutions with our expert MERN stack development company. Highly scalable and performant.",
    features: ["MongoDB", "Express.js", "React", "Node.js"],
    href: "/services/mern-stack-development"
  },
  {
    icon: Layout,
    title: "Next.js Development",
    description: "Supercharge page load speeds and search engine rankings with our Next.js development services.",
    features: ["SSR & SSG", "Core Web Vitals", "SEO Ready"],
    href: "/services/nextjs-development"
  },
  {
    icon: Cloud,
    title: "AWS & Cloud Solutions",
    description: "Cloud infrastructure setup, deployment, and management on AWS. Reliable and scalable hosting solutions.",
    features: ["AWS EC2/S3", "Cloud Hosting", "CI/CD Pipelines"],
    href: "/services/cloud-devops"
  },
  {
    icon: Laptop,
    title: "Custom Software Development",
    description: "Bespoke digital architecture, database setups, ERPs, and workflow engines with a custom software development company.",
    features: ["Tailored ERP/CRM", "API Integrations", "Database Setup"],
    href: "/services/custom-software-development"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Custom online stores with product management, cart, checkout, and order tracking. Built to convert visitors into customers.",
    features: ["Shopify", "WooCommerce", "Custom Stores"],
    href: "/services/ecommerce-development"
  },
  {
    icon: FileText,
    title: "Billing Software Development",
    description: "Automate financial pipelines, invoices, and POS transactions with custom billing software development.",
    features: ["GST Invoicing", "POS Integrations", "Sales Reports"],
    href: "/services/billing-software-development"
  },
  {
    icon: Code,
    title: "React Development Company",
    description: "Build highly interactive single-page applications and modular frontend architectures with ReactJS.",
    features: ["Component Libraries", "State Management", "SPAs"],
    href: "/services/react-development"
  },
  {
    icon: Shield,
    title: "Cybersecurity & DevOps",
    description: "Secure your applications with best practices. CI/CD pipelines, monitoring, and infrastructure security.",
    features: ["SSL/TLS", "Docker", "Monitoring"],
    href: "/services/cloud-devops"
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative p-8 rounded-2xl bg-card shadow-card hover-lift border border-border/50 overflow-hidden block"
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>

                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
