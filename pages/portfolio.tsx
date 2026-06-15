import Head from 'next/head';
import { Fragment, useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import ConsultationDialog from '@/components/landing/ConsultationDialog';
import {
  Star,
  ExternalLink,
  TrendingUp,
  Users,
  Code,
  Zap,
  ArrowRight,
} from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Tech3 Technology Portfolio',
    description: 'Showcase of our successful web development and digital projects',
    url: 'https://tech3technology.in/portfolio',
  };

  const projects = [
    {
      id: 17,
      title: 'QuickMobile',
      category: 'ecommerce',
      client: 'QuickMobile',
      description: 'India’s most transparent mobile selling platform to sell or buy old and used second-hand mobile phones, laptops, tablets, and smartwatches for instant cash with free doorstep pickup.',
      image: 'https://d2wrrszwsz5iq4.cloudfront.net/categoryBanner/1770745495137-phone%20%281%29.png',
      features: [
        'Sell or buy old mobile phones and tablets',
        'Doorstep pickup with instant cash payment',
        'Quality-certified refurbished device marketplace',
        '20-point professional device inspection',
        'Free warranty and 30-day change-of-mind support'
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Express.js'],
      link: 'https://www.quickmobile.in/',
      repo: null,
    },
    {
      id: 11,
      title: 'Growth91',
      category: 'website',
      client: 'Growth91',
      description: 'A digital startup investment marketplace in India enabling investors to discover, co-invest, and track vetted pre-screened startup deals securely.',
      image: 'https://growth91.com/assets/images/display.png',
      features: [
        'Curated startup deals and investment opportunities',
        'Direct secure funds transfer to startup escrow',
        'Portfolio tracking and valuation round comparisons',
        'Vetted pitch decks, financials, and market sentiment',
        'Indian and global co-investment workflows'
      ],
      technologies: ['React.js', 'Tailwind CSS', 'Vercel'],
      link: 'https://growth91.com/',
      repo: null,
    },
    {
      id: 10,
      title: 'CityNect',
      category: 'website',
      client: 'CityNect',
      description: 'A digital flat and flatmate matchmaking portal in Ahmedabad helping users find roommates, search verified house listings, and connect with matching profiles.',
      image: 'https://citynect.in/logo512.png',
      features: [
        'Flat and flatmate matchmaking in Ahmedabad',
        'Verified listings database and roommate searches',
        'Direct messaging and profile matching engines',
        'Seamless, mobile-optimized user experience',
        'Razorpay integration for subscription payments'
      ],
      technologies: ['React.js', 'Tailwind CSS'],
      link: 'https://citynect.in/',
      repo: null,
    },
    {
      id: 12,
      title: 'JadeCaps',
      category: 'website',
      client: 'JadeCaps',
      description: 'A premium vacation rental and holiday home management platform in India, transforming second homes and luxury villas into income-generating stays.',
      image: 'http://jadecaps.com/New/slider1.jpg',
      features: [
        'Holiday home and villa rental management',
        'Luxury villas, farm stays, and furnished apartments',
        'Caretaker services and professionally managed stays',
        'Integration with Marriott Bonvoy and top travel channels',
        'End-to-end operational and guest support for owners'
      ],
      technologies: ['React.js', 'Tailwind CSS', 'Vercel'],
      link: 'http://jadecaps.com/',
      repo: null,
    },
    {
      id: 13,
      title: 'ZroTax',
      category: 'webapp',
      client: 'ZroTax',
      description: 'A financial and tax consultancy service specializing in Indian and international taxation, offering accurate ITR filing, GST compliance, and HUF planning.',
      image: 'https://static.wixstatic.com/media/d7fb4c_ac4a9b3f2ef14cdaa89d11464a5d9ba3~mv2.png',
      features: [
        'Income tax planning and ITR filing guidance',
        'GST registration and GSTR-1/3B compliance filings',
        'Hindu Undivided Family (HUF) formation and tax saving',
        'Capital gains computation and Foreign Tax Credit claims',
        'Bespoke investment strategies and financial planning'
      ],
      technologies: ['React.js', 'Tailwind CSS', 'REST API'],
      link: 'https://www.zrotax.com/',
      repo: null,
    },
    {
      id: 18,
      title: 'Payout Management System',
      category: 'webapp',
      client: 'Fintech Payout Platform',
      description: 'Automated payout processing engine with wallet management, transaction tracking, settlement reports, and admin approval workflows.',
      image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?w=600&h=400&fit=crop',
      features: [
        'Automated payout processing',
        'Wallet management',
        'Transaction tracking',
        'Settlement reports',
        'Admin approval workflows',
        'Payment gateway integration',
        'Financial reporting dashboard'
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Stripe Connect'],
      link: '#',
      repo: null,
    },
    {
      id: 3,
      title: 'Parswell',
      category: 'webapp',
      client: 'Workflow Management System',
      description: 'Business workflow management system featuring user role management, detailed dashboard analytics, and a scalable database structure.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      features: [
        'Business workflow management system',
        'User role management',
        'Dashboard analytics',
        'API-based architecture',
        'Scalable database structure'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      link: '#',
      repo: 'Parswell Repository',
    },
    {
      id: 4,
      title: 'CA Management Module',
      category: 'webapp',
      client: 'Accounting & Admin Panel',
      description: 'Advanced search and filtering system featuring multi-category filters, dynamic listing management, and optimized data fetching.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop',
      features: [
        'Advanced search and filtering system',
        'Multiple category-based filters',
        'Dynamic listing management',
        'Performance optimized data fetching',
        'Admin management panel'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      link: '#',
      repo: 'CA Module Repository',
    },
    {
      id: 5,
      title: 'QRTech',
      category: 'webapp',
      client: 'QR Solutions & Analytics',
      description: 'QR code generation and management platform featuring dynamic tracking, user dashboard, and custom analytics reporting.',
      image: 'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=600&h=400&fit=crop',
      features: [
        'QR code generation and management platform',
        'Dynamic QR tracking',
        'User dashboard',
        'Analytics and reporting',
        'Secure backend APIs'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      link: '#',
      repo: 'QRTech Repository',
    },
    {
      id: 6,
      title: 'Tycoon',
      category: 'webapp',
      client: 'Modern Business Dashboard',
      description: 'Modern business dashboard featuring dynamic interactive components, fast API integrations, and fully responsive layouts.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      features: [
        'Modern business dashboard',
        'Dynamic components',
        'API integration',
        'Responsive design'
      ],
      technologies: ['React.js', 'Tailwind CSS', 'REST APIs'],
      link: '#',
      repo: null,
    },
    {
      id: 8,
      title: 'E-Learning Platform',
      category: 'webapp',
      client: 'Online Education Portal',
      description: 'Online course management system featuring student dashboards, course progress tracking, and interactive learning UI.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      features: [
        'Online course management',
        'Student dashboard',
        'Progress tracking',
        'Interactive UI'
      ],
      technologies: ['React.js', 'Tailwind CSS'],
      link: '#',
      repo: null,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Websites' },
    { id: 'webapp', label: 'Web Apps' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'mobile', label: 'Mobile Apps' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const caseStudies = [
    {
      title: 'How We Increased E-Commerce Sales by 45%',
      metric: '45%',
      description: 'Through UX optimization, performance improvements, and conversion rate optimization.',
    },
    {
      title: 'Building a SaaS Platform for 10K+ Users',
      metric: '10K+',
      description: 'Scalable architecture, real-time data, and intuitive interface design.',
    },
    {
      title: 'Mobile App Launch Success Story',
      metric: '4.8★',
      description: 'Cross-platform development delivering 1M+ downloads with excellent ratings.',
    },
  ];

  return (
    <Fragment>
      <Head>
        <title>Portfolio | Tech3 Technology Web Development Projects</title>
        <meta
          name="description"
          content="View our portfolio of successful web development, mobile app, and e-commerce projects. See how we've helped businesses globally."
        />
        <meta
          name="keywords"
          content="portfolio, projects, web development, mobile apps, e-commerce, case studies, client work"
        />
        <meta
          property="og:title"
          content="Portfolio | Tech3 Technology Web Development Projects"
        />
        <meta
          property="og:description"
          content="Explore our successful projects and see how we deliver exceptional digital solutions"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tech3technology.in/portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://tech3technology.in/portfolio" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-background/50">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the successful projects we've delivered for businesses worldwide. From
            e-commerce platforms to custom web applications, see how we create digital
            solutions that drive results.
          </p>
        </section>

        {/* Filter */}
        <section className="py-8 px-6 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    activeFilter === cat.id
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-card border border-border text-foreground hover:border-accent'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col h-full"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-muted overflow-hidden group">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">Project Image</span>
                      </div>
                    )}
                    {project.link && project.link !== '#' ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
                      >
                        <ExternalLink className="w-8 h-8 text-white drop-shadow" />
                      </a>
                    ) : (
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="text-sm text-accent font-medium mb-0.5">
                            {project.client}
                          </p>
                          <h3 className="text-xl font-bold text-foreground">
                            {project.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Features list */}
                      <div className="mb-4 pb-4 border-b border-border/60">
                        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Key Features</p>
                        <ul className="text-xs text-muted-foreground space-y-1.5 h-28 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-accent/20">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <span className="text-accent mt-0.5">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      {/* Repo info */}
                      {project.repo && (
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4 bg-muted/40 p-2 rounded border border-border/50">
                          <Code className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span className="truncate">Codebase: {project.repo}</span>
                        </div>
                      )}

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.link && project.link !== '#' ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          <Button variant="default" size="sm" className="w-full gap-2 text-white bg-accent hover:bg-accent/90">
                            Visit Live Site
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      ) : (
                        <a
                          href={`/contact?project=${encodeURIComponent(project.title)}`}
                          className="block w-full"
                        >
                          <Button variant="outline" size="sm" className="w-full gap-2 border-accent/25 hover:border-accent hover:bg-accent/5">
                            Request Demo / Details
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 px-6 bg-card/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Featured Case Studies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="p-8 bg-background rounded-lg border border-border hover:border-accent transition-colors"
                >
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-4">
                    {study.metric}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{study.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{study.description}</p>
                  <Button variant="link" className="p-0 h-auto text-accent">
                    Read Full Case Study →
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '25+', label: 'Projects Delivered' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '1M+', label: 'Users Impacted' },
                { number: '4+', label: 'Years Experience' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{item.number}</div>
                  <p className="text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-6 bg-card/50 border-y border-border">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Technologies We Use</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Frontend',
                  tech: 'React, Next.js, Vue.js, Angular, TypeScript, Tailwind CSS',
                },
                {
                  title: 'Backend',
                  tech: 'Node.js, Express, Python, Django, PostgreSQL, MongoDB',
                },
                {
                  title: 'Infrastructure',
                  tech: 'AWS, Google Cloud, Docker, Kubernetes, CI/CD, GitHub Actions',
                },
              ].map((stack, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-background rounded-lg border border-border"
                >
                  <h3 className="text-lg font-bold text-foreground mb-4">{stack.title}</h3>
                  <p className="text-muted-foreground text-sm">{stack.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Client Testimonials</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Johnson',
                  company: 'Global Retail Solutions',
                  role: 'CEO',
                  text: 'Tech3 delivered our e-commerce platform on time and within budget. The results speak for themselves - 45% increase in conversion rates!',
                  rating: 5,
                },
                {
                  name: 'Michael Chen',
                  company: 'Analytics Tech Corp',
                  role: 'CTO',
                  text: 'Exceptional team. They understood our requirements, provided valuable suggestions, and delivered a world-class SaaS platform.',
                  rating: 5,
                },
                {
                  name: 'Emma Rodriguez',
                  company: 'Fitness & Wellness Co',
                  role: 'Product Manager',
                  text: 'The mobile app exceeded our expectations. User feedback has been overwhelmingly positive. Highly recommend!',
                  rating: 5,
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="p-8 bg-card border border-border rounded-lg"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">{testimonial.text}</p>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-accent font-medium">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-accent/10 to-accent/5 border-y border-accent/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Build Your Next Project?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need a website, web application, or mobile app, our team has the
              expertise to deliver results. Let's get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ConsultationDialog
                trigger={
                  <Button size="lg" className="group">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }
              />
              <Button variant="outline" size="lg">
                View Service Pricing
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}
