import Head from 'next/head';
import { Fragment } from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';

export default function BlogPost() {
  return (
    <Fragment>
      <Head>
        <title>MERN Stack vs WordPress: Which is Right for You? | Tech3 Blog</title>
        <meta name="description" content="Compare modern MERN stack development with traditional WordPress. Understand pros, cons, and which is right for your project." />
      </Head>
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-20 md:py-32 bg-gradient-to-br from-background to-background/80">
            <div className="container px-6 max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium mb-6">Development</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">MERN Stack vs WordPress</h1>
              <p className="text-xl text-muted-foreground mb-6">Comprehensive comparison of modern frameworks and traditional CMS.</p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>By Alex Kumar</span>
                <span>•</span>
                <span>January 12, 2024</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
            </div>
          </section>
          <section className="py-20 bg-background">
            <div className="container px-6 max-w-4xl mx-auto">
              <article className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">MERN Stack Advantages</h2>
                <p className="text-lg text-muted-foreground mb-6">Modern, flexible, highly scalable, full control over features, single JavaScript language throughout.</p>
                
                <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">WordPress Advantages</h2>
                <p className="text-lg text-muted-foreground mb-6">Easy to use, large plugin ecosystem, quick deployment, low learning curve, great for blogs.</p>
              </article>
            </div>
          </section>
          <section className="py-20 bg-gradient-hero text-white">
            <div className="container px-6 max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Need Help Choosing?</h2>
              <a href="/contact"><Button size="xl" variant="hero">Get Expert Advice</Button></a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}