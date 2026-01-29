import { Globe, Layout, Code, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Business Websites",
    description: "Tailored websites that reflect your brand identity and convert visitors into customers. From corporate sites to e-commerce platforms.",
    features: ["Custom Design", "CMS Integration", "Analytics Setup"],
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description: "High-converting landing pages optimized for marketing campaigns, product launches, and lead generation.",
    features: ["A/B Testing Ready", "Fast Load Times", "Mobile Optimized"],
  },
  {
    icon: Code,
    title: "Full-Stack Web Applications",
    description: "Complex web applications with robust backends, real-time features, and seamless user experiences.",
    features: ["Modern Tech Stack", "API Development", "Database Design"],
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card shadow-card hover-lift border border-border/50 overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>

                <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
