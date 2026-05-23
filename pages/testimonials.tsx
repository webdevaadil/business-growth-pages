import Head from 'next/head';
import { Fragment } from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Smith',
      company: 'Global Retail Solutions',
      role: 'CEO',
      text: 'Tech3 transformed our e-commerce platform. Conversion rates increased by 45% within 3 months.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'Analytics Tech Corp',
      role: 'Product Manager',
      text: 'Outstanding dashboard development. The team delivered on time and exceeded expectations.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Enterprise Sales Group',
      role: 'Operations Director',
      text: 'Our sales team productivity increased 50% after deploying the CRM system they built.',
      rating: 5
    },
    {
      name: 'Emma Wilson',
      company: 'Fitness & Wellness Co',
      role: 'Founder',
      text: 'The mobile app development was seamless. They handled everything from iOS to Android.',
      rating: 5
    },
    {
      name: 'David Brown',
      company: 'Tech Startup Inc',
      role: 'CTO',
      text: 'Professional team, great communication, and delivered a scalable solution for our SaaS.',
      rating: 5
    },
    {
      name: 'Lisa Anderson',
      company: 'Manufacturing Corp',
      role: 'Supply Chain Manager',
      text: 'The inventory system has saved us thousands in operational costs. Highly recommended!',
      rating: 5
    }
  ];

  return (
    <Fragment>
      <Head>
        <title>Client Testimonials | Tech3 Technology</title>
        <meta name="description" content="Read what our satisfied clients say about our web development and digital services." />
      </Head>
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-20 md:py-32 bg-gradient-to-br from-background to-background/80">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">What Our <span className="text-accent">Clients Say</span></h1>
                <p className="text-xl text-muted-foreground">Read real testimonials from businesses we've helped succeed.</p>
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="p-8 bg-card rounded-xl border border-border hover:border-accent transition-all">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 text-lg italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}