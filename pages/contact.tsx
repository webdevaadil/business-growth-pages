import Head from 'next/head';
import { Fragment, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Linkedin,
  Twitter,
  Facebook,
  CheckCircle2,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tech3 Technology',
    description: 'Global web development company',
    url: 'https://tech3technology.in',
    email: 'aadilkhany@gmail.com',
    telephone: '+91 8878331005',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Indore',
      addressRegion: 'MP',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.facebook.com/tech3technology',
      'https://www.linkedin.com/company/tech3technology',
      'https://twitter.com/tech3technology',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'aadilkhany@gmail.com',
      availableLanguage: ['en'],
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: '',
          message: `Subject: ${formData.subject}\nCompany: ${formData.company || 'N/A'}\n\nMessage:\n${formData.message}`,
        }),
      });

      if (!response.ok) {
        throw new Error('API submission failed');
      }

      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      detail: 'aadilkhany@gmail.com',
      description: 'Response within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '+91 8878331005',
      description: 'Monday - Saturday, 10 AM - 7 PM IST',
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      detail: 'Indore, India',
      description: 'Serving clients globally',
    },
    {
      icon: Clock,
      title: 'Available 24/7',
      detail: 'Online Support',
      description: 'Chat, email, and phone support',
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Contact Tech3 Technology | Get in Touch Today</title>
        <meta
          name="description"
          content="Contact Tech3 Technology for web development, custom software, and digital solutions. Reach out to our team today for a free consultation."
        />
        <meta
          name="keywords"
          content="contact us, get in touch, web development inquiry, free consultation, customer support"
        />
        <meta
          property="og:title"
          content="Contact Tech3 Technology | Get in Touch Today"
        />
        <meta
          property="og:description"
          content="Reach out to Tech3 Technology for web development and digital solutions. Available 24/7 for support."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tech3technology.in/contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://tech3technology.in/contact" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-background/50">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Get in Touch With Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our services or ready to start your project? Our team is
            here to help. Reach out and let's discuss how we can transform your business.
          </p>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-card border border-border hover:border-accent transition-colors text-center"
                  >
                    <Icon className="w-10 h-10 text-accent mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="font-medium text-foreground mb-1">{method.detail}</p>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-card rounded-lg border border-border p-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
                      <h3 className="text-lg font-bold text-green-900 mb-1">
                        Thank you for your message!
                      </h3>
                      <p className="text-green-700">
                        We'll be in touch soon. Check your email for updates.
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Website Development Project"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, timeline, and budget..."
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </>
                  )}
                </form>
              </div>

              {/* Info */}
              <div>
                <div className="bg-card rounded-lg border border-border p-8 mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-6">Why Contact Us?</h2>
                  <ul className="space-y-4">
                    {[
                      'Get a free consultation with our technology experts',
                      'Discuss your project requirements and goals',
                      'Receive a detailed proposal and timeline',
                      'Learn about our portfolio and past projects',
                      'Understand our process and methodology',
                      'Get answers to all your questions',
                    ].map((item, index) => (
                      <li key={index} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent/10 rounded-lg border border-accent/20 p-8">
                  <h3 className="text-lg font-bold text-foreground mb-4">Response Time</h3>
                  <p className="text-muted-foreground mb-4">
                    We typically respond to inquiries within 24 hours during business days.
                    For urgent matters, please call us directly.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Our support team is available 24/7 for existing clients and partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-16 px-6 bg-card/50 border-y border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Follow Us Online</h2>
            <p className="text-muted-foreground mb-8">
              Stay updated with our latest projects, insights, and industry news
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="lg" className="gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Twitter className="w-5 h-5" />
                Twitter
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Facebook className="w-5 h-5" />
                Facebook
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Common Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How quickly can you respond to my inquiry?',
                  a: 'We respond to all inquiries within 24 business hours. For urgent matters, call us directly at our phone number.',
                },
                {
                  q: 'Do you offer free consultations?',
                  a: 'Yes! We provide free initial consultations to discuss your project requirements, goals, and how we can help.',
                },
                {
                  q: 'What information should I include in my message?',
                  a: 'Please include your project scope, timeline, budget range, and any specific requirements or challenges you face.',
                },
                {
                  q: 'Can I schedule a call with your team?',
                  a: 'Absolutely! We can arrange a call at your convenience to discuss your project in detail.',
                },
                {
                  q: 'Do you work with startups and small businesses?',
                  a: 'Yes, we work with businesses of all sizes, from startups to enterprises, and tailor solutions to your budget.',
                },
                {
                  q: 'What is your service area?',
                  a: 'We work with clients globally. Our team operates across multiple time zones to serve international clients.',
                },
              ].map((item, index) => (
                <div key={index} className="border-b border-border pb-6 last:border-b-0">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}
