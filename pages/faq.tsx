import Head from 'next/head';
import { Fragment, useState } from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      category: 'General',
      items: [
        { q: 'What services do you offer?', a: 'We offer web development, mobile apps, e-commerce, cloud deployment, and digital strategy.' },
        { q: 'How long does a project take?', a: 'Timeline varies by project scope. Simple websites take 4-8 weeks, complex apps 3-6 months.' },
        { q: 'Do you offer ongoing support?', a: 'Yes, we provide maintenance packages starting from ₹2,999/month.' }
      ]
    },
    {
      category: 'Technical',
      items: [
        { q: 'What technologies do you use?', a: 'React, Node.js, MongoDB, Next.js, TypeScript, AWS, Docker, and more.' },
        { q: 'Do you use modern frameworks?', a: 'Yes, we specialize in modern tech stacks like MERN, JAMstack, and serverless.' },
        { q: 'Is SEO included?', a: 'Yes, all our websites are built with SEO best practices.' }
      ]
    },
    {
      category: 'Pricing',
      items: [
        { q: 'What\'s your minimum project size?', a: 'Minimum is typically ₹29,999 for basic websites.' },
        { q: 'Do you offer custom quotes?', a: 'Absolutely. Contact us for a personalized proposal.' },
        { q: 'Can we scale up later?', a: 'Yes, our solutions are built to scale with your business.' }
      ]
    }
  ];

  return (
    <Fragment>
      <Head>
        <title>FAQ | Tech3 Technology - Frequently Asked Questions</title>
        <meta name="description" content="Find answers to common questions about our web development services, pricing, and process." />
      </Head>
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-20 md:py-32 bg-gradient-to-br from-background to-background/80">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Frequently Asked <span className="text-accent">Questions</span></h1>
                <p className="text-xl text-muted-foreground">Find answers to common questions about our services.</p>
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container px-6 max-w-4xl mx-auto">
              {faqs.map((category, idx) => (
                <div key={idx} className="mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-foreground">{category.category}</h2>
                  <Accordion type="single" collapsible>
                    {category.items.map((item, i) => (
                      <AccordionItem key={i} value={`${idx}-${i}`}>
                        <AccordionTrigger className="text-lg text-foreground hover:text-accent">{item.q}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base">{item.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}