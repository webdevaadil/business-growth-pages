import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Services from "@/components/landing/Services";
import Process from "@/components/landing/Process";
import WhyUs from "@/components/landing/WhyUs";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
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
  );
};

export default Index;
