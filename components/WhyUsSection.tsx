import { Award, CheckCircle, Shield, Users, Zap } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const certifications = [
  { label: "Certified", sublabel: "ISO 27001" },
  { label: "Certified", sublabel: "SOC 2 Type II" },
];

const benefits = [
  {
    icon: Shield,
    title: "Specialization in Financial Software",
    description: "We focus exclusively on fintech, blockchain, and AI—no distractions from other verticals.",
  },
  {
    icon: Zap,
    title: "Proven Platforms on Production",
    description: "Our platforms are running in production handling real transactions and real users.",
  },
  {
    icon: CheckCircle,
    title: "Enterprise-grade Security",
    description: "Information security and compliance are built into our DNA—SOC 2, ISO 27001, PCI DSS.",
  },
  {
    icon: Users,
    title: "End-to-End Partner",
    description: "From concept to launch and beyond—we're with you for the long haul.",
  },
  {
    icon: Award,
    title: "Custom + White-Label",
    description: "Get the best of both worlds: customizable platforms that accelerate your go-to-market.",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <AnimatedSection direction="left">
            <span className="section-label mb-4 block">Why iTeller</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Clients <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              iTeller combines deep technical expertise, market understanding,
              and proven systems to help fintech, crypto, and AI ventures launch
              faster and scale confidently.
            </p>

            {/* Certifications */}
            <div className="flex gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.sublabel}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border"
                >
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-semibold text-sm text-foreground">
                      {cert.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {cert.sublabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right Column - Benefits */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <AnimatedSection
                key={benefit.title}
                direction="right"
                delay={index * 100}
              >
                <div className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group card-glow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
