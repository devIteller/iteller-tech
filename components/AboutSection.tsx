import { 
  Cpu, Shield, Database, Layers, Code, Wallet
} from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const techMetrics = [
  { icon: Cpu, label: "Backend (PHP, Go, Node.js, Python)" },
  { icon: Database, label: "Frontend & Mobile (React, Vue, React Native)" },
  { icon: Layers, label: "Blockchain & Smart Contracts" },
  { icon: Code, label: "AI/ML & Data Specialists" },
  { icon: Shield, label: "DevOps & Security Experts" },
  { icon: Wallet, label: "Product & Strategy" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <AnimatedSection direction="left">
            <span className="section-label mb-4 block">About iTeller</span>
            <h2 className="font-heading max-w-xl text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Deep-Tech Studio for{" "}
              <span className="text-secondary">Digital Finance</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-2 text-lg">
              iTeller is a deep-tech software studio focused on{" "}
              <span className="text-white font-semibold">
                AI, Financial technology, and Blockchain.
              </span>
            </p>
            <p className="text-muted-foreground text-lg">
              We combine product strategy, enterprise architecture and senior
              engineering to turn complex ideas into real products: exchanges,
              tokenization platforms, payment systems, ETF and asset-management
              platforms, neobanks and AI-powered business tools. We are
              a certified knowledge-based company with multiple national and
              international certifications for software quality, information
              security and customer satisfaction.
            </p>
          </AnimatedSection>

          {/* Right Column - Tech Metrics */}
          <AnimatedSection
            className="bg-[#0B1320] px-8 py-10 rounded-3xl"
            direction="right"
            delay={200}
          >
            <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">
              Our Team Includes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {techMetrics.map((metric, index) => (
                <AnimatedSection key={metric.label} delay={300 + index * 100}>
                  <div className="flex h-16 items-center gap-1 p-2 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                      <metric.icon className="text-secondary" />
                    </div>
                    <span>{metric.label}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
