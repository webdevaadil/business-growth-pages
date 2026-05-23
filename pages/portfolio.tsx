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
    url: 'https://tech3technology.com/portfolio',
  };

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform Redesign',
      category: 'ecommerce',
      client: 'Global Retail Solutions',
      description:
        'Complete redesign and migration of legacy e-commerce platform to modern MERN stack, resulting in 45% increase in conversion rates.',
      image: 'https://images.unsplash.com/photo-1460925895917-aaf19ac89472?w=600&h=400&fit=crop',
      results: ['45% Higher Conversion', '60% Faster Loading', '99.9% Uptime'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      id: 2,
      title: 'SaaS Dashboard Development',
      category: 'webapp',
      client: 'Analytics Tech Corp',
      description:
        'Built comprehensive analytics dashboard with real-time data visualization and advanced reporting features for 10,000+ users.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      results: ['10K+ Users', '50+ Reports', 'Real-time Data'],
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'D3.js'],
      link: '#',
    },
    {
      id: 3,
      title: 'Mobile App Development',
      category: 'mobile',
      client: 'Fitness & Wellness Co',
      description:
        'Native iOS and Android fitness tracking app with social features, workout plans, and nutrition guidance integrated with wearables.',
      image: 'https://images.unsplash.com/photo-1512941691920-25bef266aad1?w=600&h=400&fit=crop',
      results: ['1M+ Downloads', '4.8 Star Rating', 'iOS & Android'],
      technologies: ['React Native', 'Firebase', 'Node.js'],
      link: '#',
    },
    {
      id: 4,
      title: 'CRM System Implementation',
      category: 'webapp',
      client: 'Enterprise Sales Group',
      description:
        'Custom CRM solution with sales pipeline automation, lead scoring, and integration with email and calendar systems.',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop',
      results: ['Sales Up 35%', 'Team Efficiency +50%', '200+ Employees'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
    },
    {
      id: 5,
      title: 'Inventory Management System',
      category: 'webapp',
      client: 'Supply Chain Leaders',
      description:
        'Real-time inventory tracking system with automated reorder points, warehouse management, and detailed analytics.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      results: ['Inventory Reduced 25%', 'Real-time Tracking', 'Multi-location'],
      technologies: ['Next.js', 'PostgreSQL', 'Redis', 'AWS'],
      link: '#',
    },
    {
      id: 6,
      title: 'Corporate Website Redesign',
      category: 'website',
      client: 'Tech Innovation Inc',
      description:
        'Modern, responsive corporate website with content management system, blog, and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1460925895917-aaf19ac89472?w=600&h=400&fit=crop',
      results: ['150% Traffic Growth', '#1 Google Rankings', 'Mobile Optimized'],
      technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
      link: '#',
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
        <meta property="og:url" content="https://tech3technology.com/portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://tech3technology.com/portfolio" />
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
                  className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-muted overflow-hidden group">
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Project Image</span>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-sm text-accent font-medium mb-1">
                          {project.client}
                        </p>
                        <h3 className="text-xl font-bold text-foreground">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-border">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <p className="font-bold text-accent text-sm">{result}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded bg-accent/10 text-accent font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" className="w-full gap-2">
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Button>
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
                { number: '150+', label: 'Projects Delivered' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '50M+', label: 'Users Impacted' },
                { number: '5+', label: 'Years Experience' },
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
