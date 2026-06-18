import { Button } from "@/components/ui/button";
import { Mail, Phone, ArrowRight, MessageCircle } from "lucide-react";
import ConsultationDialog from "./ConsultationDialog";


const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Let's discuss your project and find the perfect solution for your business. 
              Get in touch today for a free consultation.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:aadilkhany@gmail.com" 
              className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-soft hover-lift hover:border-accent/40 transition-all text-center"
            >
              <div className="w-12 h-12 rounded-full gradient-accent mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-slate-800 font-semibold mb-1">Email Us</h3>
              <p className="text-muted-foreground text-sm">aadilkhany@gmail.com</p>
            </a>

            <a 
              href="tel:+918878331005" 
              className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-soft hover-lift hover:border-accent/40 transition-all text-center"
            >
              <div className="w-12 h-12 rounded-full gradient-accent mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-slate-800 font-semibold mb-1">Call Us</h3>
              <p className="text-muted-foreground text-sm">+91 8878331005</p>
            </a>

            <a 
              href="https://wa.me/918878331005" 
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-white border border-slate-100 shadow-soft hover-lift hover:border-accent/40 transition-all text-center"
            >
              <div className="w-12 h-12 rounded-full gradient-accent mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="text-slate-800 font-semibold mb-1">WhatsApp</h3>
              <p className="text-muted-foreground text-sm">Chat with us</p>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationDialog
              trigger={
                <Button variant="hero" size="xl" className="group">
                  <Mail className="w-5 h-5" />
                  Send Message
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />

            <Button 
              variant="heroOutline" 
              size="xl" 
              className="text-foreground border-slate-200 hover:bg-slate-50 hover:text-foreground"
              asChild
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
