import Head from "next/head";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  ArrowRight,
  Globe,
  ShoppingCart,
  Layout,
  Database,
  Package,
  RefreshCw,
  Code,
  Server,
  Wrench,
  CheckCircle2,
  Zap,
  Smartphone,
  Search,
  ShieldCheck,
  Rocket,
  Headphones,
  Star,
  MessageCircle,
  Heart,
  GraduationCap,
  Store,
  Home,
  Factory,
  Sparkles,
  Truck,
  FileText,
  Laptop
} from "lucide-react";

import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ConsultationDialog from "@/components/landing/ConsultationDialog";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Responsive business websites with modern UI/UX.",
    href: "/services/custom-website-development",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Development",
    desc: "Online stores with payment gateway integration.",
    href: "/services/ecommerce-development",
  },
  {
    icon: Layout,
    title: "MERN Stack Development Company",
    desc: "Scalable full-stack web applications using MongoDB, Express, React, Node.",
    href: "/services/mern-stack-development",
  },
  {
    icon: Laptop,
    title: "Custom Software Development",
    desc: "Bespoke CRM, ERP, and enterprise software systems designed for your logic.",
    href: "/services/custom-software-development",
  },
  {
    icon: Package,
    title: "Inventory Management Software",
    desc: "Custom inventory management, warehouses, and supply tracking.",
    href: "/services/inventory-management",
  },
  {
    icon: FileText,
    title: "Billing Software Development",
    desc: "Automated GST invoicing, point of sale (POS) and ledger reporting.",
    href: "/services/billing-software-development",
  },
  {
    icon: Code,
    title: "React Development Company",
    desc: "Interactive frontend single-page applications using ReactJS.",
    href: "/services/react-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform iOS and Android mobile applications using React Native.",
    href: "/services/mobile-app-development",
  },
  {
    icon: Server,
    title: "Node.js Backend Solutions",
    desc: "Secure and scalable API systems and database management.",
    href: "/services/cloud-devops",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Regular updates, support, and security management.",
    href: "/services",
  },
];

const whyUs = [
  "Custom Development",
  "Mobile Responsive Design",
  "SEO Optimized Code",
  "Fast Loading Speed",
  "Affordable Cost",
  "Dedicated Support",
  "Scalable Architecture",
  "Modern Technologies",
];

const techStack = {
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML5"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB", "MySQL"],
  Tools: ["GitHub", "Docker", "AWS"],
};

const processSteps = [
  {
    icon: MessageCircle,
    title: "Requirement Discussion",
    desc: "Understanding your goals & vision.",
  },
  {
    icon: Layout,
    title: "Planning & Design",
    desc: "Wireframes and UI/UX mockups.",
  },
  {
    icon: Code,
    title: "Development",
    desc: "Building with modern tech stack.",
  },
  {
    icon: ShieldCheck,
    title: "Testing",
    desc: "Quality assurance & bug fixing.",
  },
  {
    icon: Rocket,
    title: "Deployment",
    desc: "Launching on production servers.",
  },
  {
    icon: Headphones,
    title: "Maintenance",
    desc: "Ongoing support and updates.",
  },
];

const faqs = [
  {
    q: "What is the cost of website development?",
    a: "Pricing depends on project scope, features, and technologies used.",
  },
  {
    q: "Do you build ecommerce websites?",
    a: "Yes, we create custom ecommerce solutions with payment integrations.",
  },
  {
    q: "Which technologies do you use?",
    a: "React.js, Node.js, MongoDB, Next.js, Express.js and more.",
  },
  {
    q: "Do you provide maintenance services?",
    a: "Yes, we provide long-term support and maintenance.",
  },
  {
    q: "How long does development take?",
    a: "Usually 1–6 weeks depending on complexity.",
  },
];

export default function Services() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Tech3 Technology",
    url: "https://tech3technology.in/services",
    serviceType: [
      "Web Development",
      "Ecommerce Development",
      "MERN Stack Development",
      "Custom Software Development",
    ],
  };

  return (
    <>
      <Head>
        <title>Custom Web Development Services | Tech3 Technology</title>
        <meta
          name="description"
          content="Tech3 Technology provides custom web development, ecommerce solutions, MERN stack applications, React.js development, Node.js backend services, and software solutions for businesses worldwide."
        />
        <link rel="canonical" href="https://tech3technology.in/services" />
        <meta
          property="og:title"
          content="Custom Web Development & Software Solutions | Tech3 Technology"
        />
        <meta
          property="og:description"
          content="Custom websites, ecommerce solutions, MERN stack apps, React.js and Node.js development services."
        />
        <meta property="og:url" content="https://tech3technology.in/services" />
        <meta property="og:type" content="website" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
      </Head>

      <div className="min-h-screen bg-background overflow-hidden">
        <Header />

        <main>
          {/* HERO */}
          <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 gradient-hero overflow-hidden">
            {/* GRID BACKGROUND */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* BLOBS */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />

            <div className="container relative z-10 px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200/50 shadow-sm text-foreground text-sm mb-6">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span>Modern Digital Solutions</span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground mb-6">
                    Custom{" "}
                    <span className="text-gradient">
                      Web Development
                    </span>{" "}
                    & Software Solutions
                  </h1>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    We build scalable websites, ecommerce platforms,
                    MERN stack applications, and custom software
                    solutions for startups, businesses, and enterprises
                    worldwide.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-10">
                    <ConsultationDialog
                      trigger={
                        <Button
                          variant="hero"
                          size="xl"
                          className="group"
                        >
                          Get Free Consultation
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      }
                    />
                  </div>

                  <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
                    {[
                      "SEO Friendly",
                      "Fast Delivery",
                      "Scalable Solutions",
                      "Modern Technologies",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT VISUAL */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-2 gap-4">
                    {[Globe, ShoppingCart, Code, Server].map(
                      (Icon, i) => (
                        <div
                          key={i}
                          className="aspect-square rounded-3xl bg-white border border-slate-100 shadow-soft flex items-center justify-center hover:scale-105 transition-transform duration-300"
                        >
                          <Icon className="w-16 h-16 text-accent" />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* STATS */}
          <section className="py-12 bg-background border-y border-border/50">
            <div className="container px-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                {[
                  { number: "25+", label: "Projects Completed" },
                  { number: "4+", label: "Years Experience" },
                  { number: "99%", label: "Client Satisfaction" },
                ].map((item) => (
                  <div key={item.label}>
                    <h3 className="text-4xl font-bold text-accent mb-2">
                      {item.number}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className="py-24 bg-background">
            <div className="container px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Services
                </h2>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Complete digital solutions to help businesses grow
                  online.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    className="group p-8 rounded-3xl bg-card/80 backdrop-blur border border-border/50 shadow-soft hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 block"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-5">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="py-24 bg-secondary/30">
            <div className="container px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Why Choose Tech3 Technology
                  </h2>

                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    We combine technical expertise with business
                    understanding to create high-performing digital
                    products.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {whyUs.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: Zap,
                      label: "Fast Performance",
                    },
                    {
                      icon: Smartphone,
                      label: "Mobile First",
                    },
                    {
                      icon: Search,
                      label: "SEO Optimized",
                    },
                    {
                      icon: ShieldCheck,
                      label: "Secure Code",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-6 rounded-3xl bg-card border border-border/50 shadow-soft text-center"
                    >
                      <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-7 h-7 text-accent-foreground" />
                      </div>

                      <p className="font-semibold">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* TECH STACK */}
          <section className="py-24 bg-background">
            <div className="container px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Technologies We Use
                </h2>

                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Modern technologies for scalable digital products.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(techStack).map(
                  ([category, items]) => (
                    <div
                      key={category}
                      className="p-6 rounded-3xl bg-card border border-border/50 shadow-soft"
                    >
                      <h3 className="text-lg font-semibold text-accent mb-4">
                        {category}
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1.5 rounded-lg bg-secondary text-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 bg-secondary/30">
            <div className="container px-6 max-w-3xl">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Frequently Asked Questions
                </h2>

                <p className="text-lg text-muted-foreground">
                  Everything you need to know about our services.
                </p>
              </div>

              <Accordion
                type="single"
                collapsible
                className="space-y-4"
              >
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border border-border/50 rounded-2xl px-6 bg-card shadow-soft"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>

                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 gradient-hero relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 px-6 text-center max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
                Let's Build Something Amazing Together
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Start your digital transformation journey with
                Tech3 Technology. Our team is ready to bring your
                vision to life.
              </p>

              <ConsultationDialog
                trigger={
                  <Button
                    variant="hero"
                    size="xl"
                    className="group"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }
              />
            </div>
          </section>

          {/* SEO FOOTER */}
          <section className="py-12 border-t border-border/50 bg-background">
            <div className="container px-6 max-w-4xl text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tech3 Technology provides professional web development
                services including ecommerce development, MERN stack
                applications, React.js development, Node.js backend
                solutions, and custom software development for
                businesses worldwide.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
