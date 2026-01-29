import { Search, PenTool, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Planning",
    description: "We dive deep into understanding your business goals, target audience, and project requirements.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design & Development",
    description: "Our team crafts stunning designs and builds your website with clean, efficient code.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Testing & Launch",
    description: "Rigorous testing ensures everything works perfectly before your site goes live.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Ongoing Support",
    description: "We provide continuous maintenance, updates, and support to keep your site running smoothly.",
  },
];

const Process = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A streamlined approach that delivers results on time, every time
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="group text-center p-6 rounded-2xl bg-card border border-border/50 hover-lift shadow-soft">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-accent text-accent-foreground text-sm font-bold">
                    {step.number}
                  </div>

                  <div className="w-16 h-16 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>

                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
