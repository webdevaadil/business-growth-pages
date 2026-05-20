import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import ConsultationDialog from "./ConsultationDialog";


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-primary-foreground/80 text-sm mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Modern Web Solutions for Growing Businesses</span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-up-delay-1 text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6">
            Build a Website That{" "}
            <span className="text-gradient">Grows Your Business</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            We design and develop modern, high-performance websites for startups and small businesses. Fast, secure, and built to convert.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationDialog
              trigger={
                <Button variant="hero" size="xl" className="group">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />

            <Button variant="heroOutline" size="xl" className="text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary">
              View Our Work
            </Button>
          </div>

          {/* Stats indicators */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10">
            <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">3+</div>
                <div className="text-primary-foreground/60 text-sm mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">20+</div>
                <div className="text-primary-foreground/60 text-sm mt-1">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground">100%</div>
                <div className="text-primary-foreground/60 text-sm mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
