import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';

export default function InventoryService() {
  return (
    <Fragment>
      <Head>
        <title>Inventory Management System | Tech3 Technology</title>
        <meta name="description" content="Real-time inventory tracking, stock management, and supply chain optimization." />
      </Head>
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-20 md:py-32 bg-gradient-hero text-white">
            <div className="container px-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">Inventory Management System</h1>
              <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">Streamline your inventory with real-time tracking and automated stock management.</p>
              <Link href="/contact"><Button size="xl" variant="hero">Get a Demo</Button></Link>
            </div>
          </section>
          <section className="py-20 bg-background">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-foreground">Key Features</h2>
                <div className="space-y-6">
                  {['Real-time Tracking', 'Automated Alerts', 'Multi-warehouse Support', 'Analytics & Reports'].map((feature, i) => (
                    <div key={i} className="p-6 bg-card rounded-lg border border-border">
                      <h3 className="text-2xl font-semibold text-foreground">{feature}</h3>
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