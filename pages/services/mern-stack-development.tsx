import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight } from 'lucide-react';

export default function MERNStackService() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'MERN Stack Development',
    description: 'Professional MERN stack development services for scalable web applications',
    provider: {
      '@type': 'Organization',
      name: 'Tech3 Technology'
    },
    areaServed: 'Worldwide',
    serviceType: 'Web Development'
  };

  return (
    <Fragment>
      <Head>
        <title>MERN Stack Development | Tech3 Technology</title>
        <meta name="description" content="Expert MERN stack development services. Build scalable, high-performance web applications with MongoDB, Express, React, and Node.js." />
        <meta name="keywords" content="MERN stack, web development, React, Node.js, MongoDB, Express" />
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
                <span className="text-muted-foreground">MERN Stack Development</span>
              </div>
            </div>
          </section>

          <section className="py-20 md:py-32 bg-gradient-hero text-white">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  MERN Stack Development
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Build scalable, high-performance web applications using the modern MERN stack.
                </p>
                <Link href="/contact">
                  <Button size="xl" variant="hero">Get a Quote</Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-foreground">Why Choose MERN Stack?</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {[
                    { title: 'Full JavaScript Stack', desc: 'Single language across frontend and backend' },
                    { title: 'Highly Scalable', desc: 'Handle millions of requests with ease' },
                    { title: 'Cost-Effective', desc: 'Open-source technologies reduce costs' },
                    { title: 'Strong Community', desc: 'Extensive libraries and community support' }
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

          <section className="py-20 bg-gradient-hero text-white">
            <div className="container px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Build Your MERN Application?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Let's discuss your project requirements and create a scalable solution.
                </p>
                <Link href="/contact">
                  <Button size="xl" variant="hero">Schedule a Consultation</Button>
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}