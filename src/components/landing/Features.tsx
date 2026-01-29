import { Palette, Zap, Shield, Search } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Modern UI/UX",
    description: "Beautiful, intuitive designs that captivate your audience and drive engagement.",
  },
  {
    icon: Zap,
    title: "Fast & Mobile-Responsive",
    description: "Lightning-fast load times and flawless experience on every device.",
  },
  {
    icon: Shield,
    title: "Secure & Scalable Code",
    description: "Enterprise-grade security with architecture that grows with your business.",
  },
  {
    icon: Search,
    title: "SEO-Ready Foundation",
    description: "Built from the ground up to rank higher and attract organic traffic.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What You Get
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to establish a powerful online presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card shadow-soft hover-lift border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
