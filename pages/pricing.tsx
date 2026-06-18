import Head from 'next/head';
import { Fragment } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import ConsultationDialog from '@/components/landing/ConsultationDialog';
import {
  Check,
  X,
  ArrowRight,
  TrendingUp,
  Zap,
  Award,
} from 'lucide-react';

export default function Pricing() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PriceSpecification',
    priceCurrency: 'INR',
    price: 'Contact us',
  };

  const tiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: '₹29,999',
      period: 'starting at',
      highlight: false,
      features: [
        {
          text: 'Responsive business website',
          included: true,
        },
        {
          text: 'Up to 5 pages',
          included: true,
        },
        {
          text: 'Basic SEO optimization',
          included: true,
        },
        {
          text: 'Contact form integration',
          included: true,
        },
        {
          text: 'Mobile responsive design',
          included: true,
        },
        {
          text: 'Performance optimization',
          included: true,
        },
        {
          text: 'SSL certificate',
          included: true,
        },
        {
          text: 'Free hosting (3 months)',
          included: true,
        },
        {
          text: 'Advanced e-commerce features',
          included: false,
        },
        {
          text: 'Custom integrations',
          included: false,
        },
      ],
      cta: 'Get Started',
    },
    {
      name: 'Professional',
      description: 'For growing businesses needing advanced features',
      price: '₹79,999',
      period: 'starting at',
      highlight: true,
      features: [
        {
          text: 'All Starter features',
          included: true,
        },
        {
          text: 'Up to 15 pages',
          included: true,
        },
        {
          text: 'Advanced SEO strategy',
          included: true,
        },
        {
          text: 'Blog platform integration',
          included: true,
        },
        {
          text: 'Email marketing integration',
          included: true,
        },
        {
          text: 'Analytics and reporting',
          included: true,
        },
        {
          text: 'E-commerce capabilities',
          included: true,
        },
        {
          text: 'Payment gateway setup',
          included: true,
        },
        {
          text: '12 months free hosting',
          included: true,
        },
        {
          text: 'Priority support',
          included: true,
        },
      ],
      cta: 'Get Started',
    },
    {
      name: 'Enterprise',
      description: 'Custom solutions for complex requirements',
      price: 'Custom',
      period: 'pricing',
      highlight: false,
      features: [
        {
          text: 'All Professional features',
          included: true,
        },
        {
          text: 'Unlimited pages and features',
          included: true,
        },
        {
          text: 'Custom web applications',
          included: true,
        },
        {
          text: 'Advanced API integrations',
          included: true,
        },
        {
          text: 'Scalable architecture',
          included: true,
        },
        {
          text: 'Team training & onboarding',
          included: true,
        },
        {
          text: '24/7 dedicated support',
          included: true,
        },
        {
          text: 'SLA guarantee',
          included: true,
        },
        {
          text: 'Regular optimization reviews',
          included: true,
        },
        {
          text: 'White-label options',
          included: true,
        },
      ],
      cta: 'Contact Sales',
    },
  ];

  const servicePackages = [
    {
      title: 'Website Development',
      startingPrice: '₹29,999',
      description: 'Responsive, fast, and SEO-optimized websites',
      features: ['Custom design', 'Mobile responsive', 'SEO', 'CMS integration'],
    },
    {
      title: 'E-Commerce Solutions',
      startingPrice: '₹49,999',
      description: 'Complete online store with payment processing',
      features: ['Product catalog', 'Shopping cart', 'Payment gateway', 'Analytics'],
    },
    {
      title: 'Web Applications',
      startingPrice: '₹99,999',
      description: 'Custom web apps for complex business needs',
      features: ['Database design', 'User authentication', 'API development', 'Scalability'],
    },
    {
      title: 'Mobile App Development',
      startingPrice: '₹1,49,999',
      description: 'iOS and Android native or cross-platform apps',
      features: ['Native development', 'UI/UX design', 'Backend API', 'App store deployment'],
    },
    {
      title: 'CMS Implementation',
      startingPrice: '₹39,999',
      description: 'Content management systems for easy updates',
      features: ['WordPress', 'Drupal', 'Strapi', 'Training included'],
    },
    {
      title: 'Maintenance & Support',
      startingPrice: '₹2,999',
      description: 'Ongoing support and optimization',
      features: ['Monthly updates', '24/7 monitoring', 'Performance optimization', 'Backup & security'],
    },
  ];

  const faqs = [
    {
      q: 'Do you offer payment plans?',
      a: 'Yes, we offer flexible payment plans for larger projects. You can discuss payment options during your consultation.',
    },
    {
      q: 'What is included in the pricing?',
      a: 'Our pricing includes design, development, deployment, and initial support. Additional services like SEO, marketing, and extended support are available.',
    },
    {
      q: 'Can I upgrade my plan later?',
      a: 'Absolutely! You can upgrade your plan anytime as your business grows and needs more features.',
    },
    {
      q: 'Is hosting included?',
      a: 'Starter and Professional packages include free hosting for the first 3-12 months. After that, hosting is very affordable.',
    },
    {
      q: 'What about ongoing maintenance?',
      a: 'We offer separate maintenance packages starting at ₹2,999/month, which includes updates, monitoring, and performance optimization.',
    },
    {
      q: 'Do you offer discounts for long-term contracts?',
      a: 'Yes! We provide discounts for annual support contracts and retainer agreements.',
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Pricing | Tech3 Technology Web Development Services</title>
        <meta
          name="description"
          content="Transparent pricing for web development, e-commerce, and app development. Choose from Starter, Professional, or Enterprise plans."
        />
        <meta
          name="keywords"
          content="pricing, web development cost, website pricing, app development cost, software development rates"
        />
        <meta
          property="og:title"
          content="Pricing | Tech3 Technology Web Development Services"
        />
        <meta
          property="og:description"
          content="Affordable web development and digital solutions with transparent pricing"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tech3technology.in/pricing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://tech3technology.in/pricing" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-background/50">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer flexible pricing for all budgets. From startups to enterprises, we have
            a plan that fits your needs. All prices are starting prices - we can customize
            solutions based on your specific requirements.
          </p>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {tiers.map((tier, index) => (
                <div
                  key={index}
                  className={`rounded-lg border transition-all relative ${
                    tier.highlight
                      ? 'border-accent bg-card ring-2 ring-accent/20 shadow-xl md:scale-105'
                      : 'border-border bg-card hover:border-accent'
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      {tier.description}
                    </p>

                    <div className="mb-8">
                      <div className="text-4xl font-bold text-foreground">
                        {tier.price}
                      </div>
                      <p className="text-muted-foreground text-sm">{tier.period}</p>
                    </div>

                    <ConsultationDialog
                      trigger={
                        <Button
                          size="lg"
                          className="w-full mb-8"
                          variant={tier.highlight ? 'default' : 'outline'}
                        >
                          {tier.cta}
                        </Button>
                      }
                    />

                    <div className="space-y-4">
                      {tier.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                          )}
                          <span
                            className={
                              feature.included
                                ? 'text-muted-foreground'
                                : 'text-muted-foreground/50'
                            }
                          >
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-16 px-6 bg-card/50 border-y border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Service Packages</h2>
            <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              Individual services available on top of our main packages
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicePackages.map((service, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-background rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <div className="text-2xl font-bold text-accent mb-2">
                    {service.startingPrice}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              What's Included in Every Project
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Award,
                  title: 'Professional Design',
                  description: 'Modern, beautiful designs tailored to your brand',
                },
                {
                  icon: Zap,
                  title: 'Performance Optimized',
                  description: 'Fast loading times and excellent performance scores',
                },
                {
                  icon: TrendingUp,
                  title: 'SEO Ready',
                  description: 'Optimized for search engines to drive organic traffic',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="text-center">
                    <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-8">
              <h3 className="font-bold text-foreground mb-4 text-lg">
                Every project includes:
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Free consultation and requirements gathering',
                  'Responsive mobile design',
                  'Cross-browser compatibility testing',
                  'SSL certificate & security setup',
                  'Initial 3-month free hosting',
                  'Basic SEO optimization',
                  'Performance optimization',
                  'Technical support during development',
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Price Comparison */}
        <section className="py-16 px-6 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why Our Pricing is a Great Value</h2>

            <div className="space-y-6">
              {[
                {
                  title: 'All-Inclusive Services',
                  description: 'No hidden fees. Everything needed for your project is included in the price.',
                },
                {
                  title: 'Transparent Quotes',
                  description: 'We provide detailed breakdowns of what each component costs.',
                },
                {
                  title: 'Flexible Payment Terms',
                  description: 'Choose between lump sum or milestone-based payments.',
                },
                {
                  title: 'Quality Guaranteed',
                  description: 'We stand behind our work with ongoing support and maintenance options.',
                },
                {
                  title: 'Scalable Solutions',
                  description: 'Start small and upgrade as your business grows.',
                },
                {
                  title: 'ROI Focused',
                  description: 'We design solutions to generate revenue and reduce costs.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Pricing Questions?
            </h2>
            <div className="space-y-6">
              {faqs.map((item, index) => (
                <div key={index} className="border-b border-border pb-6 last:border-b-0">
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.q}</h3>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-accent/10 to-accent/5 border-y border-accent/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Not Sure Which Plan is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and find the perfect plan for your business. Get a
              free consultation today.
            </p>
            <ConsultationDialog
              trigger={
                <Button size="lg" className="group">
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}
