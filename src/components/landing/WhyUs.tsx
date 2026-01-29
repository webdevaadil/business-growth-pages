import { MessageCircle, Cpu, Target, Clock, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "Regular updates, transparent timelines, and always available when you need us.",
  },
  {
    icon: Cpu,
    title: "Modern Tech Stack",
    description: "We use cutting-edge technologies that ensure your website stays fast and secure.",
  },
  {
    icon: Target,
    title: "Business-Focused Solutions",
    description: "Every decision we make is aligned with your business objectives and growth.",
  },
  {
    icon: Clock,
    title: "Long-Term Support",
    description: "Our relationship doesn't end at launch. We're here for the long haul.",
  },
];

const WhyUs = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Work With Us
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We're not just developers — we're your partners in digital success. 
              Here's what sets us apart from the rest.
            </p>

            <div className="space-y-4">
              {[
                "Transparent pricing with no hidden fees",
                "100% satisfaction guarantee",
                "Fast turnaround without compromising quality",
                "Post-launch training and documentation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group p-6 rounded-2xl bg-card shadow-soft hover-lift border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
