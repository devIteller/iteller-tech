import { Search, Palette, Layout, Code, Shield, Rocket } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Feasibility",
    description: "We analyze your concept, market position, competition, and technical requirements.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Product & Tokenomics Design",
    description: "We design product features, UX/UI, and tokenomics tailored to your business.",
  },
  {
    number: "03",
    icon: Layout,
    title: "UX/UI & System Architecture",
    description: "We create the wireframes, high-fidelity mockups, and define the system architecture.",
  },
  {
    number: "04",
    icon: Code,
    title: "Development & Integration",
    description: "Agile sprints with continuous development and third-party API integrations.",
  },
  {
    number: "05",
    icon: Shield,
    title: "Testing & Security Audit",
    description: "Comprehensive QA, penetration testing, and security audits before deployment.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Launch & Ongoing Support",
    description: "Smooth deployment, monitoring, and ongoing optimization after launch.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 lg:py-32 relative bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label mb-4 block">Our Process</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How We <span className="gradient-text">Work With You</span>
          </h2>
          <p className="text-muted-foreground">
            From idea to production, a clear, repeatable process to build your platform.
          </p>
        </AnimatedSection>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 100}>
              <div 
                className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group card-glow h-full"
              >
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-heading font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-secondary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
