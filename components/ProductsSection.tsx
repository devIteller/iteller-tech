import { ArrowRight, LineChart, Coins, CreditCard, Shield, Database, Cpu } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const platforms = [
  {
    icon: LineChart,
    title: "Crypto OTC Platform",
    description:
      "A full platform for launching and operating spot, futures and hybrid crypto ETFs with NAV calculation, tokenized units, investor dashboards and on-chain transparency.",
    tags: ["NAV Calculation", "Proof-of-Reserve", "Market-Making APIs"],
  },
  {
    icon: Coins,
    title: "Neobank Platform",
    description:
      "A ready-to-customize blockchain-enabled digital bank combining traditional accounts with investment, crypto wallets and automated asset allocation.",
    tags: ["Digital KYC", "Multi-Currency", "Crypto Integration"],
  },
  {
    icon: CreditCard,
    title: "Tokenization & RWA Suite",
    description:
      "From legal & technical design to smart contracts and investor portals – tokenize real estate, metals, equity or cash-flow-producing businesses.",
    tags: ["Smart Contracts", "Investor Portal", "Secondary Trading"],
  },
  {
    icon: Shield,
    title: "Payment Safe-Payment",
    description:
      "A secure payment infrastructure for handling card transactions, bank transfers, digital wallets, and cryptocurrency payments.",
    tags: ["Payments", "Card Processing"],
  },
  {
    icon: Database,
    title: "CEX / DEX Infrastructure",
    description:
      "Battle-tested exchange architecture for both centralized and decentralized trading platforms with high-frequency matching engines.",
    tags: ["Exchange", "Matching Engine", "Liquidity"],
  },
  {
    icon: Cpu,
    title: "Enterprise Tools & APIs",
    description:
      "APIs, dashboards, document verification tools, AML/KYC integration, and risk assessment systems for enterprise compliance.",
    tags: ["Compliance", "APIs"],
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
          <p className="text-muted-foreground max-w-lg mx-auto">
            Production-ready solutions already live with multiple clients, ready
            to be customized for your business model.
          </p>
        </AnimatedSection>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <AnimatedSection key={platform.title} delay={index * 100}>
              <div
                className="relative h-full rounded-2xl border border-white/5
                bg-linear-to-b from-[#0E1628] to-[#090E19]
                p-6 transition-all duration-300
                hover:border-primary/30
                hover:shadow-[0_0_40px_-15px_rgba(56,189,248,0.25)]"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <platform.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-semibold mb-3">
                  {platform.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {platform.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {platform.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex justify-between">
                  <button className="group inline-flex items-center gap-1 text-sm  transition-all">
                    Learn More
                  </button>
                  <button className="group inline-flex items-center gap-1 text-sm  transition-all">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
