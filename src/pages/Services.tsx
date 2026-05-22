import { useState } from "react";
import { Helmet } from "react-helmet-async";
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
  Building2,
  Home,
  Factory,
  Sparkles,
  Truck,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import ConsultationDialog from "@/components/landing/ConsultationDialog";

const services = [
  { icon: Globe, title: "Website Development", desc: "Responsive business websites with modern UI/UX." },
  { icon: ShoppingCart, title: "Ecommerce Development", desc: "Online stores with payment gateway integration." },
  { icon: Layout, title: "MERN Stack Development", desc: "Scalable web applications using React & Node.js." },
  { icon: Database, title: "Custom Web Applications", desc: "CRM, ERP, dashboards, admin panels." },
  { icon: Package, title: "Inventory Management System", desc: "Custom inventory & billing software for businesses." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Upgrade old websites into modern responsive designs." },
  { icon: Code, title: "React Development", desc: "Interactive frontend development using React.js." },
  { icon: Server, title: "Node.js Backend", desc: "Secure and scalable backend systems." },
  { icon: Wrench, title: "Website Maintenance", desc: "Regular updates, support, and security management." },
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
  { icon: MessageCircle, title: "Requirement Discussion", desc: "Understanding your goals & vision." },
  { icon: Layout, title: "Planning & Design", desc: "Wireframes and UI/UX mockups." },
  { icon: Code, title: "Development", desc: "Building with modern tech stack." },
  { icon: ShieldCheck, title: "Testing", desc: "Quality assurance & bug fixing." },
  { icon: Rocket, title: "Deployment", desc: "Launching on production servers." },
  { icon: Headphones, title: "Maintenance", desc: "Ongoing support and updates." },
];

const industries = [
  { icon: Heart, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: Store, name: "Retail" },
  { icon: ShoppingCart, name: "Ecommerce" },
  { icon: Home, name: "Real Estate" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Sparkles, name: "Startups" },
  { icon: Truck, name: "Logistics" },
];

const testimonials = [
  { name: "Rahul Sharma", role: "Founder, RetailKart", text: "Tech3 built our ecommerce store professionally and delivered on time. Highly recommended!" },
  { name: "Priya Verma", role: "CEO, EduSpark", text: "Great team with strong technical skills. Our MERN app runs flawlessly." },
  { name: "Amit Patel", role: "Director, MediCare", text: "Smooth communication and quality code. They understood our business needs perfectly." },
];

const faqs = [
  { q: "What is the cost of website development in India?", a: "It depends on the features, pages, and technology stack. We offer flexible packages starting from affordable rates for small businesses." },
  { q: "Do you build ecommerce websites?", a: "Yes, we create custom ecommerce solutions with payment gateway integration, product management, and order tracking." },
  { q: "Which technologies do you use?", a: "We work with React, Node.js, MongoDB, Next.js, Express, MySQL, AWS, and more modern technologies." },
  { q: "Do you provide maintenance services?", a: "Yes, we provide ongoing support, updates, and security maintenance after the website launch." },
  { q: "How long does development take?", a: "Usually 1–6 weeks depending on the project scope and complexity." },
];

const Services = () => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Web Development Company in Bhopal | Tech3 Technology</title>
        <meta
          name="description"
          content="Tech3 Technology offers professional web development services in Bhopal including ecommerce, MERN stack, custom web applications, React & Node.js development across India."
        />
        <link rel="canonical" href="/services" />
        <meta property="og:title" content="Web Development & Software Solutions in Bhopal | Tech3" />
        <meta property="og:description" content="Custom websites, ecommerce, MERN stack & business software solutions." />
        <meta property="og:url" content="/services" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Header />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 gradient-hero overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
          </div>
          <div className="container relative z-10 px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-primary-foreground/80 text-sm mb-6">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span>Web Development & Software Solutions</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
                  Web Development Company in{" "}
                  <span className="text-gradient">Bhopal</span>
                </h1>
                <p className="text-lg text-primary-foreground/70 mb-8 leading-relaxed">
                  Tech3 Technology provides custom website development, MERN stack development, ecommerce solutions, and business software services across India.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <ConsultationDialog
                    trigger={
                      <Button variant="hero" size="xl" className="group">
                        Get Free Quote
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    }
                  />
                  <Button variant="heroOutline" size="xl" className="text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary">
                    View Portfolio
                  </Button>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-primary-foreground/80 text-sm">
                  {["SEO Friendly", "MERN Experts", "Fast Delivery", "Affordable Pricing"].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
                  <div className="relative grid grid-cols-2 gap-4">
                    {[Globe, Code, ShoppingCart, Server].map((Icon, i) => (
                      <div key={i} className="aspect-square rounded-2xl glass-effect flex items-center justify-center">
                        <Icon className="w-16 h-16 text-accent" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 bg-background">
          <div className="container px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Complete digital solutions to grow your business online
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <s.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
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
                  Why Businesses Choose Tech3 Technology
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  We combine technical expertise with business understanding to deliver solutions that drive real growth.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {whyUs.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, label: "Fast Performance" },
                  { icon: Smartphone, label: "Mobile First" },
                  { icon: Search, label: "SEO Optimized" },
                  { icon: ShieldCheck, label: "Secure Code" },
                ].map((f) => (
                  <div key={f.label} className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft text-center">
                    <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mx-auto mb-3">
                      <f.icon className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <p className="font-semibold">{f.label}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Modern, proven tech stack for reliable solutions
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category} className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft">
                  <h3 className="text-lg font-semibold mb-4 text-accent">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 bg-secondary/30">
          <div className="container px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Working Process</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A proven 6-step approach to deliver quality projects
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step, i) => (
                <div key={step.title} className="relative p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover-lift">
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 ml-6">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="py-24 bg-background">
          <div className="container px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Delivering tailored digital solutions across diverse sectors
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {industries.map((ind) => (
                <div key={ind.name} className="p-6 rounded-2xl bg-card border border-border/50 shadow-soft hover-lift text-center group">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <ind.icon className="w-7 h-7 text-accent" />
                  </div>
                  <p className="font-semibold">{ind.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 bg-secondary/30">
          <div className="container px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Trusted by businesses across India
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="p-8 rounded-2xl bg-card border border-border/50 shadow-soft">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic">"{t.text}"</p>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-muted-foreground text-sm">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-background">
          <div className="container px-6 max-w-3xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">
                Everything you need to know about our services
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
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

        {/* FINAL CTA */}
        <section className="py-24 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
          </div>
          <div className="container relative z-10 px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
              Ready to Build Your Website or Software?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10">
              Let's create modern digital solutions for your business. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationDialog
                trigger={
                  <Button variant="hero" size="xl" className="group">
                    Contact Us
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }
              />
              <a
                href="https://wa.me/918878331005"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="heroOutline" size="xl" className="text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary w-full">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* SEO FOOTER PARA */}
        <section className="py-12 bg-background border-t border-border/50">
          <div className="container px-6 max-w-4xl text-center">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tech3 Technology is a trusted <strong className="text-foreground">web development company in Bhopal</strong> offering ecommerce development, MERN stack development, custom web applications, React development, Node.js development, and software solutions across India. We help startups and enterprises build SEO-friendly, scalable, and high-performance digital products.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
