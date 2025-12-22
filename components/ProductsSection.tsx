import { ArrowRight, LineChart, Coins, CreditCard, Shield, Database, Cpu } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const platforms = [
  {
    icon: LineChart,
    title: "Crypto OTC Platform",
    description: "A full-featured OTC trading platform for handling large cryptocurrency transactions securely between institutional buyers and sellers.",
    tags: ["Exchange", "Custody", "OTC Trading"],
    featured: true,
  },
  {
    icon: Coins,
    title: "Neobank Platform",
    description: "A ready-to-deploy neobank core platform with multi-currency accounts, payment rails, and regulatory compliance built in.",
    tags: ["Digital Banking", "KYC/AML", "Payments"],
    featured: false,
  },
  {
    icon: CreditCard,
    title: "Tokenization & RWA Suite",
    description: "End-to-end infrastructure for tokenizing real-world assets, complete with smart contracts, compliance modules, and investor portals.",
    tags: ["Security Tokens", "Smart Contracts"],
    featured: false,
  },
  {
    icon: Shield,
    title: "Payment Safe-Payment",
    description: "A secure payment infrastructure for handling card transactions, bank transfers, digital wallets, and cryptocurrency payments.",
    tags: ["Payments", "Card Processing"],
    featured: false,
  },
  {
    icon: Database,
    title: "CEX / DEX Infrastructure",
    description: "Battle-tested exchange architecture for both centralized and decentralized trading platforms with high-frequency matching engines.",
    tags: ["Exchange", "Matching Engine", "Liquidity"],
    featured: false,
  },
  {
    icon: Cpu,
    title: "Enterprise Tools & APIs",
    description: "APIs, dashboards, document verification tools, AML/KYC integration, and risk assessment systems for enterprise compliance.",
    tags: ["Compliance", "APIs"],
    featured: false,
  },
];

export const ProductsSection = () => {
  return (
    <section id="products" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label mb-4 block">Our Products</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Flagship <span className="gradient-text">Platforms</span>
          </h2>
          <p className="text-muted-foreground">
            Pre-built, battle-tested platforms designed for white-label and custom deployments 
            to accelerate your fintech roadmap.
          </p>
        </AnimatedSection>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <AnimatedSection key={platform.title} delay={index * 100}>
              <div 
                className={`relative p-6 rounded-2xl border transition-all duration-300 card-glow group h-full
                  ${platform.featured 
                    ? 'bg-gradient-to-br from-primary/10 to-card border-primary/30' 
                    : 'bg-card border-border hover:border-primary/30'
                  }`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4
                  ${platform.featured ? 'bg-primary/20' : 'bg-muted'}`}
                >
                  <platform.icon className={`w-6 h-6 ${platform.featured ? 'text-primary' : 'text-secondary'}`} />
                </div>

                {/* Content */}
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {platform.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {platform.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {platform.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <button className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all duration-200">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
