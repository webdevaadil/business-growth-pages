import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight } from 'lucide-react';

export default function CustomWebsiteService() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Website Development',
    description: 'Bespoke website solutions tailored to your business needs'
  };

  return (
    <Fragment>
      <Head>
        <title>Custom Website Development | Tech3 Technology</title>
        <meta name="description" content="Get a custom-built website designed specifically for your business. Responsive, fast, and optimized for conversions." />
        <meta name="keywords" content="custom website, web design, responsive website, business website" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Head>

      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-6 bg-background border-b border-border">
            <div className="container px-6">
              <div className="flex items-center gap-2 max-w-4xl mx-auto text-sm">
                <Link href="/services" className="text-accent hover:underline">Services</Link>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Custom Website Development</span>
              </div>
            </div>
          </section>

          <section className="py-20 md:py-32 bg-gradient-hero text-white">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Custom Website Development
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Unique, professional websites built from scratch for your business.
                </p>
                <Link href="/contact">
                  <Button size="xl" variant="hero">Start Your Project</Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-foreground">What's Included</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: 'Responsive Design', desc: 'Works perfectly on all devices' },
                    { title: 'SEO Optimized', desc: 'Built for search engine visibility' },
                    { title: 'Fast Performance', desc: 'Optimized for speed and user experience' },
                    { title: 'Modern Technologies', desc: 'React, Next.js, Node.js stack' },
                    { title: 'Security First', desc: 'SSL, security headers, and protection' },
                    { title: 'Content Management', desc: 'Easy-to-use admin dashboard' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 bg-card rounded-xl border border-border">
                      <h3 className="text-xl font-semibold mb-2 text-foreground flex items-center">
                        <Check className="w-5 h-5 text-accent mr-2" />
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}