import Head from 'next/head';
import { Fragment, useState } from 'react';
import Link from 'next/link';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const posts = [
    {
      id: 1,
      title: 'Why Every Business Needs a Website in 2026',
      excerpt: 'A professional website is no longer optional. Learn why your business needs a digital presence and how it impacts growth.',
      category: 'business',
      date: '2026-06-12',
      author: 'Aadil Khan',
      readTime: '5 min read',
      slug: 'why-business-needs-website'
    },
    {
      id: 2,
      title: 'MERN Stack vs WordPress: Which is Right for You?',
      excerpt: 'Comparing modern web development frameworks with traditional CMS platforms. Understand the pros and cons of each approach.',
      category: 'development',
      date: '2026-05-28',
      author: 'Aadil Khan',
      readTime: '8 min read',
      slug: 'mern-vs-wordpress'
    },
    {
      id: 3,
      title: 'Complete Guide to E-commerce Website Development',
      excerpt: 'Everything you need to know about building a successful online store. Features, platforms, and best practices included.',
      category: 'ecommerce',
      date: '2026-06-05',
      author: 'Aadil Khan',
      readTime: '10 min read',
      slug: 'ecommerce-development-guide'
    },
    {
      id: 4,
      title: 'Scaling Business Operations with Custom SaaS Platforms',
      excerpt: 'Learn how custom CRM, School ERP, and Billing SaaS applications automate operations, reduce costs, and scale business models.',
      category: 'development',
      date: '2026-07-01',
      author: 'Aadil Khan',
      readTime: '6 min read',
      slug: 'tech3-saas-products-suite'
    },
    {
      id: 5,
      title: 'Best CRM Software in Indore for Lead Management & Sales Automation (2026 Guide)',
      excerpt: 'Looking for the best CRM software in Indore? Discover how Tech3 Technology helps businesses automate lead management, Meta Ads integration, sales tracking, and follow-ups.',
      category: 'business',
      date: '2026-07-01',
      author: 'Aadil Khan',
      readTime: '7 min read',
      slug: 'best-crm-software-indore'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'business', label: 'Business' },
    { id: 'development', label: 'Development' },
    { id: 'ecommerce', label: 'E-commerce' }
  ];

  const filtered = selectedCategory === 'all' 
    ? posts 
    : posts.filter(p => p.category === selectedCategory);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Tech3 Technology Blog',
    description: 'Web development insights, tips, and industry news'
  };

  return (
    <Fragment>
      <Head>
        <title>Blog | Tech3 Technology - Web Development Tips & Industry News</title>
        <meta name="description" content="Read our latest articles on web development, design trends, e-commerce, and digital business strategies." />
        <meta name="keywords" content="web development blog, design tips, business growth, digital strategy" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Head>

      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-20 md:py-32 bg-gradient-to-br from-background to-background/80">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                  Our <span className="text-accent">Blog</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Stay updated with the latest web development trends, tips, and industry insights.
                </p>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background border-b border-border">
            <div className="container px-6">
              <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-accent text-white'
                        : 'bg-card border border-border text-foreground hover:border-accent'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container px-6">
              <div className="max-w-4xl mx-auto space-y-8">
                {filtered.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="block">
                    <article
                      className="p-8 bg-card rounded-2xl border border-border hover:border-accent transition-all duration-300 group cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className="px-4 py-1 rounded-full bg-accent/20 text-accent text-sm font-semibold capitalize">
                          {post.category}
                        </span>
                        <span className="text-muted-foreground text-sm">{post.date}</span>
                      </div>

                      <h2 className="text-3xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-lg text-muted-foreground mb-6">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">By {post.author}</p>
                          <p className="text-sm text-muted-foreground">{post.readTime}</p>
                        </div>
                        <span 
                          className="px-6 py-2 bg-gradient-accent text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                          Read More →
                        </span>
                      </div>
                    </article>
                  </Link>
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