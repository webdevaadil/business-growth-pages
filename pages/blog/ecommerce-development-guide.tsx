import Head from 'next/head';
import { Fragment } from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';

export default function EcommerceBlog() {
  return (
    <Fragment>
      <Head>
        <title>Complete Guide to E-commerce Development | Tech3 Blog</title>
        <meta name="description" content="Everything you need to know about building a successful online store. Features, platforms, and best practices." />
      </Head>
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-20 md:py-32 bg-gradient-to-br from-background to-background/80">
            <div className="container px-6 max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium mb-6">E-commerce</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Complete E-commerce Guide</h1>
              <p className="text-xl text-muted-foreground mb-6">Build a successful online store from planning to launch.</p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>By Maria Garcia</span>
                <span>•</span>
                <span>January 10, 2024</span>
                <span>•</span>
                <span>10 min read</span>
              </div>
            </div>
          </section>
          <section className="py-20 bg-background">
            <div className="container px-6 max-w-4xl mx-auto">
              <article className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">Essential E-commerce Features</h2>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li>✓ Secure payment processing</li>
                  <li>✓ Inventory management</li>
                  <li>✓ Product search & filtering</li>
                  <li>✓ Shopping cart & checkout</li>
                  <li>✓ Order tracking</li>
                </ul>
              </article>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}