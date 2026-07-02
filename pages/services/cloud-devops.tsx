import Head from 'next/head';
import { Fragment } from 'react';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { ChevronRight, Server, Cloud, Cpu, Shield, Zap, Activity, Terminal, Check } from 'lucide-react';

export default function CloudDevopsService() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Cloud & DevOps Services',
    description: 'Secure, scalable cloud infrastructure and CI/CD automation on AWS, GCP, and private VPS hosts.'
  };

  const devopsServices = [
    {
      icon: Cloud,
      title: 'AWS & GCP Cloud Setup',
      description: 'Enterprise-grade cloud architectures designed for high availability, security, and scalability.',
      bullets: [
        'Virtual Private Servers (AWS EC2 / GCP Compute Engine)',
        'Managed Databases (RDS, PostgreSQL, MySQL, Cloud SQL)',
        'Scalable Object Storage (Amazon S3 / Google Cloud Storage)',
        'Load Balancers (ALB) and CDN (CloudFront / Cloudflare)'
      ]
    },
    {
      icon: Server,
      title: 'VPS & Linux Hosting',
      description: 'High-performance and budget-friendly Virtual Private Servers tailored for fast web applications.',
      bullets: [
        'Setup on DigitalOcean, Linode, Vultr, and AWS Lightsail',
        'Custom Nginx / Apache reverse proxy configuration',
        'SSL certificates (Let\'s Encrypt) and automatic renewals',
        'Linux server hardening (UFW firewall, SSH keys, fail2ban)'
      ]
    },
    {
      icon: Zap,
      title: 'CI/CD Automation Pipelines',
      description: 'Streamline your development workflows with automated building, testing, and deployments.',
      bullets: [
        'GitHub Actions, GitLab CI, and Jenkins integration',
        'Zero-downtime rolling deployments to production',
        'Automated unit testing and syntax code quality checks',
        'Slack / Discord push notifications for deployment alerts'
      ]
    },
    {
      icon: Cpu,
      title: 'Docker & Containerization',
      description: 'Package your MERN stack and Python applications into isolated, lightweight containers.',
      bullets: [
        'Dockerization of React frontend and Node.js/Python backends',
        'Multi-stage Docker builds for optimized, secure images',
        'Docker Compose setup for multi-container orchestration',
        'Kubernetes setup for scaling microservices in production'
      ]
    },
    {
      icon: Activity,
      title: 'Infrastructure Monitoring',
      description: 'Proactive metrics collection and server health monitoring to maximize application uptime.',
      bullets: [
        'Real-time CPU, RAM, and disk utilization monitoring',
        'Live uptime checking and instant alert systems (UptimeRobot)',
        'Centralized log management (ELK stack / Winston / PM2)',
        'Database query optimization and slow-log auditing'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Backup Automation',
      description: 'Strict security policies and daily automated backups to protect your business databases.',
      bullets: [
        'Automated database snapshots to secure offsite storage',
        'Web Application Firewall (WAF) integration',
        'Regular vulnerability scans and OS package upgrades',
        'Database recovery drill validation and support'
      ]
    }
  ];

  return (
    <Fragment>
      <Head>
        <title>Cloud & DevOps Services | AWS, GCP, VPS & CI/CD | Tech3 Technology</title>
        <meta name="description" content="Deploy, scale, and automate your application infrastructure. Expert setup for AWS, GCP, VPS Linux servers, Docker, and GitHub Actions CI/CD." />
        <meta name="keywords" content="AWS, GCP, VPS, CI/CD, Docker, Kubernetes, Nginx, server setup, DevOps, cloud deployment" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Breadcrumbs */}
          <section className="py-6 bg-background border-b border-border">
            <div className="container px-6">
              <div className="flex items-center gap-2 max-w-4xl mx-auto text-sm">
                <Link href="/services" className="text-accent hover:underline">Services</Link>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Cloud & DevOps</span>
              </div>
            </div>
          </section>

          {/* Hero section */}
          <section className="py-20 md:py-32 bg-gradient-hero text-foreground">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Cloud & DevOps Services
                </h1>
                <p className="text-xl mb-8 text-muted-foreground">
                  Build secure, fast, and scalable infrastructure on AWS, Google Cloud, or custom VPS. 
                  Automate your software delivery with robust CI/CD pipelines.
                </p>
                <Link href="/contact">
                  <Button size="xl" variant="hero">Talk to our Cloud Experts</Button>
                </Link>
              </div>
            </div>
          </section>

          {/* DevOps Features Grid */}
          <section className="py-20 bg-background">
            <div className="container px-6 max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">What We Deliver</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Our comprehensive Cloud and DevOps solutions ensure your site is fast, secure, and always online.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {devopsServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div 
                      key={index} 
                      className="p-8 bg-card rounded-2xl border border-border shadow-soft hover-lift flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{service.description}</p>
                        
                        <ul className="space-y-2 mb-6">
                          {service.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20 bg-gradient-hero text-foreground border-t border-border">
            <div className="container px-6 max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Get a Reliable Infrastructure Setup Today</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stop worrying about server crashes, slow load times, or manual deployment mistakes. Let us automate your cloud workflow.
              </p>
              <Link href="/contact">
                <Button size="xl" variant="hero">Request a Custom Proposal</Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </Fragment>
  );
}