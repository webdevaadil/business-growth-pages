import Link from "next/link";
import { Globe, Layout, Code, Cloud, ArrowUpRight, ShoppingCart, CreditCard, Smartphone, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "MERN Stack Development",
    description: "Full-stack applications using MongoDB, Express.js, React, and Node.js. Scalable and performant solutions.",
    features: ["MongoDB", "Express.js", "React", "Node.js"],
    href: "/services/mern-stack-development"
  },
  {
    icon: Layout,
    title: "Next.js Applications",
    description: "Server-side rendered and static websites with Next.js. SEO-optimized and lightning-fast performance.",
    features: ["SSR/SSG", "API Routes", "SEO Optimized"],
    href: "/services/custom-website-development"
  },
  {
    icon: Cloud,
    title: "AWS & Cloud Solutions",
    description: "Cloud infrastructure setup, deployment, and management on AWS. Reliable and scalable hosting solutions.",
    features: ["AWS EC2/S3", "Cloud Hosting", "CI/CD Pipelines"],
    href: "/services/cloud-devops"
  },
  {
    icon: Code,
    title: "Python Development",
    description: "Backend APIs, automation scripts, and data-driven applications using Python and modern frameworks.",
    features: ["Django/Flask", "REST APIs", "Automation"],
    href: "/services/cloud-devops"
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Custom online stores with product management, cart, checkout, and order tracking. Built to convert visitors into customers.",
    features: ["Shopify", "WooCommerce", "Custom Stores"],
    href: "/services/ecommerce-development"
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description: "Secure payment processing with Stripe, Razorpay, PayPal, and more. PCI-compliant and seamless checkout experiences.",
    features: ["Stripe", "Razorpay", "PayPal"],
    href: "/services/ecommerce-development"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications using React Native. Native-like performance on both iOS and Android.",
    features: ["React Native", "iOS", "Android"],
    href: "/services/mobile-app-development"
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
