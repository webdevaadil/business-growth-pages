import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight, Code, Zap, Smartphone, Layers, ArrowRight } from 'lucide-react';

export default function ReactDevelopment() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ReactJS Development Services',
    description: 'Expert React development company building interactive SPAs, clean reusable components, and high-performing frontends.',
    provider: {
      '@type': 'Organization',
      name: 'Tech3 Technology',
      url: 'https://tech3technology.in'
    },
    areaServed: 'Worldwide',
    serviceType: 'React Development'
  };

  return (
    <Fragment>
      <Head>
        <title>React Development Company | ReactJS Frontend Services | Tech3 Technology</title>
        <meta name="description" content="Leading React development company. We build interactive single-page applications (SPAs), clean UI components, and fast ReactJS frontends." />
        <meta name="keywords" content="React development company, ReactJS developers, single page application, frontend developers, React services" />
        <link rel="canonical" href="https://tech3technology.in/services/react-development" />
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
                <span className="text-muted-foreground">React Development</span>
              </div>
            </div>
          </section>

          {/* HERO */}
          <section className="py-20 md:py-32 bg-gradient-hero">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  React Development <br />
                  <span className="text-gradient">Company & Engineers</span>
                </h1>
                <p className="text-xl mb-8 text-muted-foreground max-w-2xl">
                  Build dynamic, highly interactive, and lightning-fast user interfaces using standard ReactJS design systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact">
                    <Button size="xl" variant="hero">Hire React Developers</Button>
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
                  High-Performance Frontend Solutions with React
                </h2>
                <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                  As an established **React development company**, we specialize in engineering complex, scalable frontends with highly reusable UI components. We leverage React's Virtual DOM and modern ecosystem to build web apps that react instantly to user actions.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  {[
                    {
                      icon: Code,
                      title: 'Single Page Applications (SPAs)',
                      desc: 'Clean, modern web applications that load a single HTML page and dynamically update as the user interacts.'
                    },
                    {
                      icon: Layers,
                      title: 'Custom Component Libraries',
                      desc: 'Modular, styled, and highly-tested React components that ensure design consistency across all screens.'
                    },
                    {
                      icon: Zap,
                      title: 'State Management & API Sync',
                      desc: 'Robust client-side state using Redux, Zustand, or React Context, integrated with real-time REST/GraphQL endpoints.'
                    },
                    {
                      icon: Smartphone,
                      title: 'Mobile-First Responsive Layouts',
                      desc: 'Pixel-perfect rendering on desktop, tablets, and mobile devices utilizing modern grid and flexbox rules.'
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
                  <h3 className="text-2xl font-bold mb-4">Our React Tech Ecosystem</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      'State: Zustand, Redux Toolkit, Context API',
                      'Routing: React Router, Next.js File-system Routing',
                      'Styling: Tailwind CSS, CSS Modules, Vanilla CSS',
                      'Testing: Jest, React Testing Library, Cypress'
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
                Want to Scale Your Frontend?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Consult with our frontend architects today. Get standard clean code setups and performance-optimized bundles.
              </p>
              <Link href="/contact">
                <Button size="xl" variant="hero" className="group">
                  Schedule Free Frontend Call
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
