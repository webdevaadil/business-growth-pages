import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';

export default function MobileAppService() {
  return (
    <Fragment>
      <Head>
        <title>Mobile App Development | Tech3 Technology</title>
        <meta name="description" content="Build iOS and Android mobile apps with React Native. Fast, cost-effective cross-platform development." />
        <meta name="keywords" content="mobile app, React Native, iOS, Android, app development" />
      </Head>
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-20 md:py-32 bg-gradient-hero text-foreground">
            <div className="container px-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">Mobile App Development</h1>
              <p className="text-xl mb-8 text-muted-foreground max-w-4xl mx-auto">Create powerful iOS and Android apps with React Native for cross-platform success.</p>
              <Link href="/contact"><Button size="xl" variant="hero">Start Your App</Button></Link>
            </div>
          </section>
          <section className="py-20 bg-background">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-foreground">Our Mobile Solutions</h2>
                <div className="space-y-6">
                  {['Cross-platform Apps', 'Native Performance', 'Real-time Features', 'App Store Deployment'].map((feature, i) => (
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