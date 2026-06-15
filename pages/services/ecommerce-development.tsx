import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Check, ChevronRight } from 'lucide-react';

export default function EcommerceService() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'E-commerce Development',
    description: 'Professional e-commerce website development services',
    provider: {
      '@type': 'Organization',
      name: 'Tech3 Technology'
    }
  };

  return (
    <Fragment>
      <Head>
        <title>E-commerce Website Development | Tech3 Technology</title>
        <meta name="description" content="Build powerful e-commerce websites with payment processing, inventory management, and SEO optimization." />
        <meta name="keywords" content="e-commerce development, online store, payment gateway, Shopify, WooCommerce" />
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
                <span className="text-muted-foreground">E-commerce Development</span>
              </div>
            </div>
          </section>

          <section className="py-20 md:py-32 bg-gradient-hero text-white">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  E-commerce Development
                </h1>
                <p className="text-xl mb-8 opacity-90">
                  Build powerful online stores that convert visitors into customers.
                </p>
                <Link href="/contact">
                  <Button size="xl" variant="hero">Get Started</Button>
                </Link>
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-foreground">E-commerce Solutions</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { title: 'Payment Integration', desc: 'Stripe, PayPal, Razorpay integration' },
                    { title: 'Inventory Management', desc: 'Real-time stock tracking and updates' },
                    { title: 'Shopping Cart', desc: 'Optimized cart for higher conversions' },
                    { title: 'Multi-currency Support', desc: 'Sell globally with currency conversion' }
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
                  Launch Your Online Store Today
                </h2>
                <Link href="/contact">
                  <Button size="xl" variant="hero">Get a Quote</Button>
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