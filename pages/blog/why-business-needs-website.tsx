import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';

export default function BlogPost() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Why Every Business Needs a Website in 2024',
    description: 'A professional website is no longer optional. Learn why your business needs a digital presence and how it impacts growth.',
    author: {
      '@type': 'Person',
      name: 'Aadil Khan',
    },
    datePublished: '2026-06-12',
    publisher: {
      '@type': 'Organization',
      name: 'Tech3 Technology',
      logo: 'https://tech3technology.in/logo.png',
    },
  };

  return (
    <Fragment>
      <Head>
        <title>Why Every Business Needs a Website in 2026 | Tech3 Blog</title>
        <meta name="description" content="A professional website is no longer optional. Learn why your business needs a digital presence and how it impacts growth." />
        <meta name="keywords" content="business website, digital presence, web development, business growth" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Head>
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-20 md:py-32 bg-gradient-to-br from-background to-background/80">
            <div className="container px-6 max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent font-medium mb-6">Business</span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Why Every Business Needs a Website in 2026</h1>
              <p className="text-xl text-muted-foreground mb-6">A professional website is no longer optional. Learn why your business needs a digital presence and how it impacts growth.</p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>By Aadil Khan</span>
                <span>•</span>
                <span>June 12, 2026</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container px-6 max-w-4xl mx-auto">
              <article className="prose prose-invert max-w-none space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In today's digital-first economy, the first place customers go to verify a business's credibility is the internet. If you do not have a website, you are missing out on a massive stream of potential clients who are actively looking for your services. Here are the top reasons why a professional website is a must-have in 2024.
                </p>

                <h2 className="text-3xl font-bold text-foreground">1. 24/7 Online Presence</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Unlike a physical store or office, a website is open 24 hours a day, 7 days a week. Potential clients can find your services, read your customer reviews, and submit inquiries even when your team is offline. This continuous availability ensures you never miss a lead.
                </p>

                <h2 className="text-3xl font-bold text-foreground">2. Build Credibility and Trust</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A modern, clean website gives customers a strong first impression. It shows that your business is legitimate, professional, and forward-thinking. By displaying case studies, testimonials, and detailed service descriptions, you establish authority in your industry.
                </p>

                <h2 className="text-3xl font-bold text-foreground">3. Cost-Effective Marketing</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Traditional advertising can be extremely expensive. A website allows you to showcase your portfolio, run targeted SEO campaigns, and publish valuable content at a fraction of the cost. With search engine optimization, a website can bring in organic search traffic continuously.
                </p>

                <h2 className="text-3xl font-bold text-foreground">4. Customer Insights and Analytics</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  By tracking visitor behavior on your website, you can learn what services they are most interested in, where they are coming from, and what questions they need answered. These data-driven insights help you refine your marketing strategy and grow your business efficiently.
                </p>
              </article>
            </div>
          </section>

          <section className="py-20 bg-gradient-hero text-foreground">
            <div className="container px-6 max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Business Online?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's build a modern, high-performance website designed to attract customers and drive sales.
              </p>
              <Link href="/contact">
                <Button size="xl" variant="hero">Start Your Project</Button>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}
