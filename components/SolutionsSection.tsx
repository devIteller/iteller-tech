import { Brain, Coins, Landmark } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const solutionCategories = [
  {
    title: "AI & Data Solutions",
    icon: Brain,
    solutions: [
      { name: "AI Trading Bots", description: "Algorithmic trading for stocks, forex, crypto, and multi-asset strategies", tags: ["Stocks", "Forex"] },
      { name: "AI Agents & Assistants", description: "Intelligent assistants for KYC, AML, customer support, and compliance", tags: ["NLP", "ML"] },
      { name: "Industry AI", description: "Custom AI solutions for healthcare, education, e-commerce, logistics, and supply chain", tags: ["Enterprise"] },
    ],
  },
  {
    title: "Blockchain & Crypto",
    icon: Coins,
    solutions: [
      { name: "CEX & DEX Development", description: "Crypto exchange frontend, orderbook, orderbook matching, token listing, and staking", tags: ["Exchange"] },
      { name: "Tokenization & RWA", description: "Real-world asset tokenization, smart contracts, fractional ownership, and NFTs", tags: ["RWA", "STO"] },
      { name: "Crypto OTC Platforms", description: "P2P and OTC trading platforms for high-volume crypto transactions", tags: ["P2P", "OTC"] },
    ],
  },
  {
    title: "Banking & Payments",
    icon: Landmark,
    solutions: [
      { name: "Neobank Platform", description: "Digital banking with account opening, card issuance, and KYC/AML", tags: ["Digital Bank"] },
      { name: "Payment Gateway", description: "Secure payment processing infrastructure for fintechs and e-commerce", tags: ["Payments"] },
      { name: "Investment Platforms", description: "Wealth management, robo-advisory, and portfolio management solutions", tags: ["Wealth"] },
    ],
  },
];

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 lg:py-32 relative bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label mb-4 block">Core Solutions</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            End-to-End Engineering for{" "}
            <span className="gradient-text">Digital Finance & AI</span>
          </h2>
          <p className="text-muted-foreground">
            Full-cycle development—from MVPs to fully production-ready apps for AI, 
            smart contracts, trading, integrations, SWIFT/ACH, and custom API systems.
          </p>
        </AnimatedSection>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutionCategories.map((category, categoryIndex) => (
            <AnimatedSection key={category.title} delay={categoryIndex * 150}>
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Solutions List */}
              <div className="space-y-4">
                {category.solutions.map((solution, solutionIndex) => (
                  <AnimatedSection key={solution.name} delay={categoryIndex * 150 + solutionIndex * 100 + 200}>
                    <div 
                      className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group card-glow"
                    >
                      <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {solution.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {solution.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
