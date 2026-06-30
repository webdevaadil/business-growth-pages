import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight, Server, Search, Zap, Globe, ArrowRight } from 'lucide-react';

export default function NextjsDevelopment() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Next.js Development Services',
    description: 'Professional Next.js development services. Build server-side rendered (SSR), static site generated (SSG), and SEO-optimized fast web applications.',
    provider: {
      '@type': 'Organization',
      name: 'Tech3 Technology',
      url: 'https://tech3technology.in'
    },
    areaServed: 'Worldwide',
    serviceType: 'Next.js Development'
  };

  return (
    <Fragment>
      <Head>
        <title>Next.js Development Services | High Performance Web Apps | Tech3 Technology</title>
        <meta name="description" content="Supercharge your website loading speeds with our Next.js development services. Clean SSR/SSG setups, SEO optimized configurations, and custom web portals." />
        <meta name="keywords" content="Next.js development services, NextJS developers, server side rendering, static site generation, React web performance" />
        <link rel="canonical" href="https://tech3technology.in/services/nextjs-development" />
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
                <span className="text-muted-foreground">Next.js Development</span>
              </div>
            </div>
          </section>

          {/* HERO */}
          <section className="py-20 md:py-32 bg-gradient-hero">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  Next.js Development <br />
                  <span className="text-gradient">Services & Solutions</span>
                </h1>
                <p className="text-xl mb-8 text-muted-foreground max-w-2xl">
                  Build lightning-fast, production-ready React applications with server-side rendering, static site generation, and optimized Core Web Vitals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact">
                    <Button size="xl" variant="hero">Start Next.js Project</Button>
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
                  Why Next.js is Critical for Modern SEO
                </h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  Traditional single-page React apps run entirely in the user's browser, which can limit Google indexing capability. Our specialized **Next.js development services** solve this by pre-rendering HTML on the server. This gives you instant load speeds, optimal crawler readability, and better search rankings.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {[
                    {
                      icon: Server,
                      title: 'Server-Side Rendering (SSR)',
                      desc: 'Render dynamic pages on each request. Perfect for content that changes frequently and needs absolute up-to-the-minute accuracy.'
                    },
                    {
                      icon: Globe,
                      title: 'Static Site Generation (SSG)',
                      desc: 'Pre-compile pages at build time. Delivers blazing-fast page load speeds under 1 second and reduces server overhead.'
                    },
                    {
                      icon: Search,
                      title: 'Zero-Config SEO',
                      desc: 'Automatic metadata support, responsive title tags, sitemaps, and clean canonical link setups for search engine crawlers.'
                    },
                    {
                      icon: Zap,
                      title: 'Core Web Vitals Optimization',
                      desc: 'Advanced image sizing, font optimization, dynamic bundle splits, and script loading priorities out of the box.'
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
                  <h3 className="text-2xl font-bold mb-4">Features Included</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      'Dynamic route handlers and API Endpoints',
                      'Optimized Image and Font scripts',
                      'Incremental Static Regeneration (ISR) configuration',
                      'Vercel or AWS cloud deployment pipeline setup'
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
                Ready to Upgrade to Next.js?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Consult with our Next.js technical architects. We help with migrations, upgrades, and greenfield application architectures.
              </p>
              <Link href="/contact">
                <Button size="xl" variant="hero" className="group">
                  Schedule Free Next.js Call
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
