import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ChevronRight, Users, GraduationCap, FileText, ArrowRight, ExternalLink } from 'lucide-react';

const products = [
  {
    title: "Tech3 CRM",
    tagline: "Accelerate Sales Cycles with Smart Lead Management",
    description: "A customer relationship management system engineered to capture leads from multiple channels, automate sales follow-ups, and track employee performance with real-time dashboards.",
    icon: Users,
    url: "https://crm.tech3technology.in",
    badge: "Sales & Marketing",
    features: [
      "Lead pipelines & deal tracking",
      "Automated follow-up reminders (Email/SMS)",
      "Sales executive performance analytics",
      "Customer contact database & interaction history",
      "Role-based permissions for sales reps"
    ]
  },
  {
    title: "Tech3 School",
    tagline: "All-in-One School Administration & Management Platform",
    description: "A comprehensive school management system designed to coordinate student admissions, track fee collection, manage schedules, and bridge communication between parents, teachers, and school authorities.",
    icon: GraduationCap,
    url: "https://school.tech3technology.in",
    badge: "Education ERP",
    features: [
      "Student & teacher credentials portal",
      "Fee payment collection & automated PDF receipts",
      "Class timetables & exam schedules organizer",
      "Attendance auditing & parent warning alerts",
      "Student performance card management"
    ]
  },
  {
    title: "Tech3 Billing",
    tagline: "Lightning-Fast POS & GST Invoicing Software",
    description: "Built for retail shops, outlets, and wholesale distributors, this software enables fast checkout counters, barcode scanner integration, stock cataloging, and automatic tax calculation.",
    icon: FileText,
    url: "https://billing.tech3technology.in",
    badge: "Finance & POS",
    features: [
      "Instant PDF invoice & bill generation",
      "Point of Sale (POS) quick billing checkout",
      "GST compliance & tax reports compilation",
      "Barcode scanner & receipt printer integration",
      "Inventory sync & product catalog listing"
    ]
  }
];

export default function ProductsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Tech3 Technology SaaS Product Suite',
    description: 'Explore custom-built SaaS applications by Tech3 Technology: CRM, School Management System, and Billing Software.',
    url: 'https://tech3technology.in/products'
  };

  return (
    <Fragment>
      <Head>
        <title>SaaS Product Suite | CRM, School ERP & Billing Software in Indore</title>
        <meta name="description" content="Discover Tech3's custom SaaS applications. We deploy the best CRM systems, school management ERP portals, and POS billing software in Indore & worldwide." />
        <meta name="keywords" content="CRM software Indore, School management software Indore, Billing software Indore, GST invoicing Indore, POS system Indore, Tech3 Technology" />
        <link rel="canonical" href="https://tech3technology.in/products" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main>
          {/* BREADCRUMB */}
          <section className="py-6 bg-background border-b border-border mt-20">
            <div className="container px-6">
              <div className="flex items-center gap-2 max-w-6xl mx-auto text-sm">
                <Link href="/" className="text-accent hover:underline">Home</Link>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Products</span>
              </div>
            </div>
          </section>

          {/* HERO */}
          <section className="py-20 md:py-32 bg-gradient-hero relative overflow-hidden">
            <div className="container relative z-10 px-6 text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Empower Your Business With Our <br />
                <span className="text-gradient">SaaS Product Suite in Indore</span>
              </h1>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto font-medium">
                High-performance, secure, and production-ready applications built to automate, organize, and grow your business operations in Indore and globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="xl" variant="hero">Request a Personal Demo</Button>
                </Link>
              </div>
            </div>
          </section>

          {/* PRODUCTS LISTING */}
          <section className="py-24 bg-background">
            <div className="container px-6 max-w-6xl mx-auto">
              <div className="space-y-24">
                {products.map((product, idx) => (
                  <div key={product.title} className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Visual Card / Details */}
                    <div className={idx % 2 === 1 ? 'lg:order-last' : ''}>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent mb-4 border border-accent/20">
                        {product.badge}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold mb-3">{product.title}</h2>
                      <p className="text-lg font-medium text-accent mb-4">{product.tagline}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {product.description}
                      </p>

                      <div className="flex flex-wrap gap-4 mb-8">
                        <a href={product.url} target="_blank" rel="noopener noreferrer">
                          <Button size="lg" variant="hero" className="gap-2">
                            Launch Application
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                        <Link href="/contact">
                          <Button size="lg" variant="outline">Contact Sales</Button>
                        </Link>
                      </div>
                    </div>

                    {/* Features List Box */}
                    <div className="p-8 rounded-3xl bg-card border border-border shadow-soft hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center">
                          <product.icon className="w-7 h-7 text-accent" />
                        </div>
                        <h3 className="text-xl font-bold">Key Modules & Features</h3>
                      </div>

                      <ul className="space-y-4">
                        {product.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 bg-gradient-hero text-center border-t border-border/30">
            <div className="container px-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                Need a Custom SaaS Built?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We design and build bespoke cloud applications, CRM platforms, and software engines tailored to your target operation model.
              </p>
              <Link href="/contact">
                <Button size="xl" variant="hero" className="group">
                  Schedule Architect Call
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
}
