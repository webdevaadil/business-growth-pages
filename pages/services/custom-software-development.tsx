import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight, Settings, Users, Database, ArrowRight } from 'lucide-react';

export default function CustomSoftwareDevelopment() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Software Development Services',
    description: 'Expert custom software development company building tailored CRM, ERP, and bespoke business applications.',
    provider: {
      '@type': 'Organization',
      name: 'Tech3 Technology',
      url: 'https://tech3technology.in'
    },
    areaServed: 'Worldwide',
    serviceType: 'Custom Software Development'
  };

  return (
    <Fragment>
      <Head>
        <title>Custom Software Development Company in Indore | Tech3</title>
        <meta name="description" content="Looking for a reliable custom software development company in Indore? We build tailored CRM, ERP, API integrations, and scalable business software solutions." />
        <meta name="keywords" content="custom software development company in indore, custom software development indore, CRM developers indore, ERP development Indore, Tech3 Technology" />
        <link rel="canonical" href="https://tech3technology.in/services/custom-software-development" />
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
                <span className="text-muted-foreground">Custom Software Development</span>
              </div>
            </div>
          </section>

          {/* HERO */}
          <section className="py-20 md:py-32 bg-gradient-hero">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Custom Software <br />
                  <span className="text-gradient">Development in Indore</span>
                </h1>
                <p className="text-xl mb-8 text-muted-foreground max-w-2xl">
                  Streamline operations, automate complex workflows, and build proprietary software assets designed specifically for your unique business logic.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact">
                    <Button size="xl" variant="hero">Start Your Project</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CONTENT SECTION */}
          <section className="py-24 bg-background">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left">
                  Bespoke Software Solutions for Modern Enterprises
                </h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  Off-the-shelf software often forces you to change your workflows to match the system. As a leading **custom software development company**, we build solutions that adapt to *your* processes, ensuring higher efficiency, security, and scalability.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {[
                    {
                      icon: Users,
                      title: 'Tailored CRM Solutions',
                      desc: 'Manage customer journeys, track leads, and automate client follow-ups with a CRM built specifically for your sales cycle.'
                    },
                    {
                      icon: Settings,
                      title: 'Custom ERP Systems',
                      desc: 'Integrate departments like finance, inventory, human resources, and operations into a single, unified database.'
                    },
                    {
                      icon: Database,
                      title: 'Database & API Integrations',
                      desc: 'Connect disparate systems, legacy applications, and third-party APIs seamlessly to eliminate data silos.'
                    },
                    {
                      icon: Check,
                      title: 'Workflow Automation',
                      desc: 'Replace repetitive manual tasks with automated triggers and secure digital pipelines to save time and prevent errors.'
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
                  <h3 className="text-2xl font-bold mb-4">Why Invest in Custom Software?</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      '100% ownership with zero recurring license fees',
                      'High scalability that grows with your transaction volume',
                      'Enhanced security parameters customized to your threat model',
                      'Seamless integration with your existing tools and workflows'
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
                Ready to Automate Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Consult with our custom software experts today. We offer a free architectural blueprint for your project.
              </p>
              <Link href="/contact">
                <Button size="xl" variant="hero" className="group">
                  Schedule Free Blueprint Call
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
