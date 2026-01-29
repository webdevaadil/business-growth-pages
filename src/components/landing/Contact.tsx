import { Button } from "@/components/ui/button";
import { Mail, Calendar, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/70 text-lg md:text-xl mb-10 leading-relaxed">
            Let's discuss your project and find the perfect solution for your business. 
            Get in touch today for a free consultation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="group">
              <Mail className="w-5 h-5" />
              Send Message
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary"
            >
              <Calendar className="w-5 h-5" />
              Book a Call
            </Button>
          </div>

          {/* Contact info */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/50 text-sm mb-2">
              Or reach us directly at
            </p>
            <a 
              href="mailto:hello@yoursite.com" 
              className="text-primary-foreground hover:text-accent transition-colors font-medium"
            >
              hello@yoursite.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
