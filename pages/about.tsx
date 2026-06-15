import Head from 'next/head';
import { Fragment } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import ConsultationDialog from '@/components/landing/ConsultationDialog';
import {
  Users,
  Target,
  Zap,
  Award,
  TrendingUp,
  Heart,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export default function About() {
  // About page with company story, mission, vision, team, and values
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tech3 Technology',
    description: 'Global web development company delivering innovative digital solutions',
    url: 'https://tech3technology.in',
    logo: 'https://tech3technology.in/logo.png',
    sameAs: [
      'https://www.facebook.com/tech3technology',
      'https://www.linkedin.com/company/tech3technology',
      'https://twitter.com/tech3technology',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'aadilkhany@gmail.com',
    },
    areaServed: 'Worldwide',
    foundingDate: '2020',
    numberOfEmployees: 5,
  };

  const values = [
    {
      icon: Target,
      title: 'Client-Focused',
      description:
        'Your success is our mission. We prioritize understanding your business goals and delivering solutions that drive measurable results and ROI.',
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description:
        'We stay ahead of technology trends, constantly learning and implementing cutting-edge solutions to give our clients competitive advantages.',
    },
    {
      icon: Heart,
      title: 'Quality Excellence',
      description:
        'We never compromise on quality. Every project undergoes rigorous testing and optimization to ensure superior performance and reliability.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description:
        'We work closely with you throughout the project lifecycle, ensuring transparent communication and exceeding expectations at every milestone.',
    },
  ];

  const achievements = [
    { number: '25+', label: 'Projects Delivered' },
    { number: '100%', label: 'On-Time Delivery' },
    { number: '4+', label: 'Years Experience' },
    { number: '95%', label: 'Client Satisfaction' },
  ];

  return (
    <Fragment>
      <Head>
        <title>About Tech3 Technology | Web Development Company</title>
        <meta
          name="description"
          content="Learn about Tech3 Technology, a global web development company delivering innovative digital solutions for businesses worldwide since 2022."
        />
        <meta
          name="keywords"
          content="about us, web development company, digital agency, tech company, software development, web solutions"
        />
        <meta
          property="og:title"
          content="About Tech3 Technology | Web Development Company"
        />
        <meta
          property="og:description"
          content="Global web development company delivering innovative digital solutions for businesses worldwide"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tech3technology.in/about" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://tech3technology.in/about" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-background/50">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About Tech3 Technology
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering businesses globally with innovative web solutions, exceptional
              design, and reliable technology since 2020.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-6 bg-card/50 border-y border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  To deliver world-class web development and digital solutions that
                  empower businesses to achieve their goals, scale efficiently, and
                  succeed in the digital economy. We believe every business, regardless
                  of size or industry, deserves access to high-quality technology that
                  drives growth and innovation.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our commitment is to understand your unique challenges and deliver
                  customized solutions that provide measurable value and sustainable
                  competitive advantages.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  To become the most trusted global web development partner for
                  businesses seeking innovative, scalable, and secure digital solutions.
                  We envision a world where technology serves as a catalyst for business
                  transformation and success.
                </p>
                <p className="text-muted-foreground text-lg">
                  By combining technical excellence, creative design, and strategic
                  thinking, we help businesses transform their digital presence and
                  achieve exponential growth in competitive global markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Trusted Globally</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    {item.number}
                  </div>
                  <p className="text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 px-6 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Our Core Values</h2>
            <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
              These principles guide everything we do and define our commitment to clients
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-background border border-border hover:border-accent transition-colors"
                  >
                    <Icon className="w-10 h-10 text-accent mb-4" />
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* Why Choose Us */}
        <section className="py-16 px-6 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose Tech3?</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  title: 'Proven Track Record',
                  description:
                    'Over 25 successful projects delivered globally with consistent quality and client satisfaction rates above 95%.',
                },
                {
                  title: 'Dedicated Team',
                  description:
                    'Experienced developers and designers skilled in modern technologies, committed to delivering exceptional web and mobile solutions.',
                },
                {
                  title: 'Custom Solutions',
                  description:
                    'We tailor solutions to your specific needs, not one-size-fits-all templates. Your business is unique.',
                },
                {
                  title: 'Agile Methodology',
                  description:
                    'We use agile practices ensuring flexibility, transparency, and rapid delivery of value.',
                },
                {
                  title: '24/7 Support',
                  description:
                    'Ongoing maintenance, updates, and support to keep your digital assets running smoothly.',
                },
                {
                  title: 'Global Standards',
                  description:
                    'We follow international best practices in security, performance, accessibility, and SEO.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Technologies We Master</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: 'Frontend',
                  technologies:
                    'React, Next.js, TypeScript, Tailwind CSS, Vue.js, Angular, JavaScript, HTML5, CSS3',
                },
                {
                  category: 'Backend',
                  technologies:
                    'Node.js, Express, Python, Django, Laravel, MongoDB, PostgreSQL, MySQL, Firebase',
                },
                {
                  category: 'Infrastructure',
                  technologies:
                    'AWS, Google Cloud, Azure, Docker, Kubernetes, CI/CD, GitHub Actions, Vercel, Netlify',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-background border border-border hover:border-accent transition-colors"
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">{item.category}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.technologies}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 bg-gradient-to-r from-accent/10 to-accent/5 border-y border-accent/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help your business achieve its digital goals. Our
              team is ready to partner with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationDialog
                trigger={
                  <Button size="lg" className="group">
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }
              />
              <Button variant="outline" size="lg">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How long have you been in business?',
                  a: 'Tech3 Technology was founded in 2022 and has successfully completed over 25 projects for clients worldwide.',
                },
                {
                  q: 'What industries do you work with?',
                  a: 'We serve diverse industries including e-commerce, healthcare, finance, education, real estate, and more. Our expertise spans all sectors.',
                },
                {
                  q: 'Do you provide ongoing support?',
                  a: 'Yes, we offer comprehensive post-launch support including maintenance, updates, monitoring, and performance optimization.',
                },
                {
                  q: 'Can you handle international projects?',
                  a: 'Absolutely! We work with clients from around the world and have experience in global markets and international compliance requirements.',
                },
                {
                  q: 'What is your development process?',
                  a: 'We follow agile methodology with regular sprints, daily standups, and weekly client updates ensuring transparency and timely delivery.',
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
