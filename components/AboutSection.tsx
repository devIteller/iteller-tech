import { 
  Cpu, Shield, Database, Layers, Code, Wallet
} from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const techMetrics = [
  { icon: Cpu, label: "Neural MLP, PyTorch, HuggingFace" },
  { icon: Database, label: "PostgreSQL, TimeSeries" },
  { icon: Layers, label: "Stake-chain Architecture" },
  { icon: Code, label: "API-First Development" },
  { icon: Shield, label: "Zero-Trust Security" },
  { icon: Wallet, label: "Protocol Synergy" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <AnimatedSection direction="left">
            <span className="section-label mb-4 block">About iTeller</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Deep-Tech Studio for{" "}
              <span className="text-secondary">Digital Finance</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              iTeller is a deep-tech software studio focused on AI, Financial technology, 
              and Blockchain.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We provide comprehensive strategy, engineering, and system architecture 
              services for fintech startups, crypto projects, banks, and enterprises, 
              from trading systems, tokenization (STO) and central exchange protocol 
              platforms, to banking and payment infrastructure.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our track record in capital markets, alternative investments, and fintech 
              allows us to consistently deliver solutions optimized for performance, security, 
              and market arbitrage.
            </p>
          </AnimatedSection>

          {/* Right Column - Tech Metrics */}
          <AnimatedSection direction="right" delay={200}>
            <h3 className="font-heading text-xl font-semibold mb-6 text-foreground">
              Our Tech Metadata
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techMetrics.map((metric, index) => (
                <AnimatedSection key={metric.label} delay={300 + index * 100}>
                  <div 
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300 card-glow"
                  >
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <metric.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-tight">
                      {metric.label}
                    </span>
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
