import Head from "next/head";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import WhyUs from "@/components/landing/WhyUs";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech3 Technology | Custom Web & Software Development Company</title>
        <meta name="description" content="Grow your business with Tech3 Technology. We offer professional custom software development, MERN stack, Next.js, and billing solutions to scale your business." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <div id="features">
            <Features />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="process">
            <Process />
          </div>
          <div id="about">
            <WhyUs />
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
