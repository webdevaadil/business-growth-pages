import Head from 'next/head';
import { Fragment } from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

export default function TermsConditions() {
  return (
    <Fragment>
      <Head>
        <title>Terms & Conditions | Tech3 Technology</title>
        <meta name="description" content="Terms and conditions for Tech3 Technology services." />
      </Head>
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-20 md:py-32 bg-gradient-to-br from-background to-background/80">
            <div className="container px-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Terms & Conditions</h1>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container px-6 max-w-4xl mx-auto">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">1. Services</h2>
                <p className="text-muted-foreground mb-6">Tech3 Technology provides web development, mobile app development, and related digital services as described on our website.</p>

                <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">2. Payment Terms</h2>
                <p className="text-muted-foreground mb-6">Projects typically require 50% upfront payment to begin, with the remainder due upon completion.</p>

                <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">3. Intellectual Property</h2>
                <p className="text-muted-foreground mb-6">Upon final payment, all deliverables become the property of the client.</p>

                <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">4. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-6">We are not liable for indirect, incidental, or consequential damages arising from our services.</p>

                <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">5. Changes to Terms</h2>
                <p className="text-muted-foreground">We reserve the right to modify these terms at any time. Continued use constitutes acceptance.</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}