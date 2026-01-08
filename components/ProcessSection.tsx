import { Search, Palette, Layout, Code, Shield, Rocket } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export const ProcessSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Feasibility",
    description:
      "Market & technical research, regulatory constraints, product strategy and high-level architecture.",
  },
  {
    number: "02",
    icon: Palette,
    title: "Product & Tokenomics Design",
    description:
      "Business model, revenue streams, token design (utility, governance, RWA, DeFi) and compliance requirements.",
  },
  {
    number: "03",
    icon: Layout,
    title: "UX/UI & System Architecture",
    description:
      "User flows, dashboards, admin tools, scalable micro-service architecture and DevOps design.",
  },
  {
    number: "04",
    icon: Code,
    title: "Development & Integration",
    description:
      "Backend, frontend, mobile and smart contracts with KYC/AML, exchanges, banks and PSP integrations.",
  },
  {
    number: "05",
    icon: Shield,
    title: "Testing & Security Audit",
    description:
      "Functional, load and penetration testing with support for third-party smart-contract audits.",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Launch & Ongoing Support",
    description:
      "Production rollout, team training and SLA-based maintenance with feature upgrades.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="Services" className="py-24 lg:py-32 relative bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <AnimatedSection className="lg:text-center max-w-3xl mx-auto mb-16">
          <span className="section-label mb-4 block">Our Process</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            How We <span className="gradient-text">Work With You</span>
          </h2>
          <p className="text-muted-foreground">
            From a one-page idea to a fully regulated, revenue-generating
            platform.
          </p>
        </AnimatedSection>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProcessSteps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 100}>
              <div
                className="relative p-6 rounded-2xl border border-white/5
                bg-linear-to-b from-[#0E1628] to-[#090E19] hover:border-[#F7C630]/30 transition-all duration-300 group card-glow h-full"
              >
                {/* Step Number */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="absolute -top-5 -left-3 bg-[#0D2330] font-semibold w-11 h-11 flex items-center justify-center text-sm rounded-full text-primary group-hover:text-[#F7C630]/40 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-[#232423] text-[#F7C630] flex items-center justify-center">
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg text-foreground mb-0.5">
                  {step.title}
                </h3>
                <p className="text-[#738BB1]">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
