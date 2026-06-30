import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight, FileText, ShoppingCart, BarChart3, ShieldAlert, ArrowRight } from 'lucide-react';

export default function BillingSoftwareDevelopment() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Billing Software Development Services',
    description: 'Custom billing software development services including GST invoicing, retail POS, and custom financial reports.',
    provider: {
      '@type': 'Organization',
      name: 'Tech3 Technology',
      url: 'https://tech3technology.in'
    },
    areaServed: 'Worldwide',
    serviceType: 'Billing Software Development'
  };

  return (
    <Fragment>
      <Head>
        <title>Billing Software Development in Indore | Invoicing POS Systems</title>
        <meta name="description" content="Best billing software development in Indore. We build customized GST-compliant invoicing, point-of-sale (POS) registers, and sales auditing applications." />
        <meta name="keywords" content="billing software development in indore, billing software indore, POS system Indore, custom billing software Indore, GST invoicing Indore" />
        <link rel="canonical" href="https://tech3technology.in/services/billing-software-development" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main>
          {/* BREADCRUMB */}
          <section className="py-6 bg-background border-b border-border mt-20">
            <div className="container px-6">
              <div className="flex items-center gap-2 max-w-4xl mx-auto text-sm">
                <Link href="/services" className="text-accent hover:underline">Services</Link>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Billing Software Development</span>
              </div>
            </div>
          </section>

          {/* HERO */}
          <section className="py-20 md:py-32 bg-gradient-hero">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Billing Software <br />
                  <span className="text-gradient">Development in Indore</span>
                </h1>
                <p className="text-xl mb-8 text-muted-foreground max-w-2xl">
                  Automate invoicing, simplify GST compliance, and speed up checkouts with high-performance, secure billing software.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact">
                    <Button size="xl" variant="hero">Request a Custom Demo</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FEATURES SECTION */}
          <section className="py-24 bg-background">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left">
                  Feature-Rich Invoicing & POS Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  Every industry has unique transactions. Whether you run a retail outlet, a wholesale warehouse, or a subscription-based service agency, we build **billing software development** solutions tailored specifically to capture and process payments efficiently.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {[
                    {
                      icon: FileText,
                      title: 'GST-Compliant Invoicing',
                      desc: 'Generate tax-compliant invoices automatically, manage HSN/SAC codes, and compile GST tax reports instantly.'
                    },
                    {
                      icon: ShoppingCart,
                      title: 'Retail Point-of-Sale (POS)',
                      desc: 'Fast desktop and web POS screens with barcode integration, offline billing capabilities, and receipt printing.'
                    },
                    {
                      icon: BarChart3,
                      title: 'Revenue & Sales Analytics',
                      desc: 'Track daily sales metrics, generate profit/loss reports, and follow cash-flow cycles with interactive dashboards.'
                    },
                    {
                      icon: ShieldAlert,
                      title: 'Payment Reminders',
                      desc: 'Automated email/SMS notification alerts for overdue client invoices and payment collection pathways.'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-8 rounded-3xl bg-secondary/30 border border-border/50">
                  <h3 className="text-2xl font-bold mb-4">Optimized Billing Architecture</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      'Fast search for catalog items (under 100ms)',
                      'Multiple payment methods support (UPI, card, cash)',
                      'Cloud backend sync with auto-backup triggers',
                      'Multi-tier discount configurations & coupons'
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 bg-gradient-hero text-center">
            <div className="container px-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                Need a Custom Billing System?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Tell us your transaction flows, and we will build a responsive billing system that simplifies your accounting operations.
              </p>
              <Link href="/contact">
                <Button size="xl" variant="hero" className="group">
                  Schedule Free Billing Consultation
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
