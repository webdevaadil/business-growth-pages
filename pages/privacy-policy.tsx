import Head from 'next/head';
import { Fragment } from 'react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';

export default function PrivacyPolicy() {
  return (
    <Fragment>
      <Head>
        <title>Privacy Policy | Tech3 Technology</title>
        <meta name="description" content="Privacy policy for Tech3 Technology website and services." />
      </Head>
      <div className="min-h-screen">
        <Header />
        <main>
          <section className="py-20 md:py-32 bg-gradient-to-br from-background to-background/80">
            <div className="container px-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">Privacy Policy</h1>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container px-6 max-w-4xl mx-auto">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-6">We collect information you provide directly to us such as name, email, phone number, and any messages you send through our contact form.</p>

                <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-6">We use collected information to respond to your inquiries, provide services, improve our website, and send occasional updates about our services.</p>

                <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">3. Data Security</h2>
                <p className="text-muted-foreground mb-6">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access.</p>

                <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">4. Third-Party Services</h2>
                <p className="text-muted-foreground mb-6">Our website may contain links to third-party websites. We are not responsible for their privacy practices.</p>

                <h2 className="text-3xl font-bold mt-8 mb-4 text-foreground">5. Contact Us</h2>
                <p className="text-muted-foreground">If you have questions about this privacy policy, please contact us at privacy@tech3technology.com</p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}