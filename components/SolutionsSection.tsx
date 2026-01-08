import {
  Brain,
  Coins,
  Landmark,
  Bot,
  ShieldCheck,
  Banknote,
  CreditCard,
  LucideIcon,
  ArrowRightLeft,
  ChartNoAxesCombined,
  TrendingUp,
  CircleDollarSign,
} from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

type Solution = {
  name: string;
  description: string;
  icon: LucideIcon;
};

type SolutionCategory = {
  title: string;
  icon: LucideIcon;
  accent: "primary" | "gold";
  solutions: Solution[];
};

const solutionCategories: SolutionCategory[] = [
  {
    title: "AI & Data Solutions",
    icon: Brain,
    accent: "primary",
    solutions: [
      {
        name: "AI Trading Suite",
        icon: TrendingUp,
        description:
          "Algorithmic trading for crypto, forex & stocks with AI-driven signals",
      },
      {
        name: "AI Agents & Assistants",
        icon: Bot,
        description: "Multilingual support, KYC guidance & internal copilots",
      },
      {
        name: "Industry AI",
        icon: ShieldCheck,
        description:
          "Risk scoring, fraud detection, healthcare triage & marketing AI",
      },
    ],
  },
  {
    title: "Blockchain & Crypto",
    icon: Coins,
    accent: "gold",
    solutions: [
      {
        name: "CEX & DEX Development",
        icon: ArrowRightLeft,
        description: "Order-book engines, AMM, liquidity pools & copy trading",
      },
      {
        name: "Tokenization & RWA",
        icon: Coins,
        description:
          "Real-world asset tokenization, smart contracts & investor portals",
      },
      {
        name: "Crypto OTC Platforms",
        icon: ChartNoAxesCombined,
        description: "Spot, futures & hybrid ETFs with NAV calculation",
      },
    ],
  },
  {
    title: "Banking & Payments",
    icon: Landmark,
    accent: "primary",
    solutions: [
      {
        name: "Neobank Platform",
        icon: Banknote,
        description:
          "Digital onboarding, multi-currency accounts & crypto integration",
      },
      {
        name: "Payment Gateway",
        icon: CreditCard,
        description: "Escrow payments, milestones & crypto payment rails",
      },
      {
        name: "Investment Platforms",
        icon: CircleDollarSign,
        description: "Wealth management, robo-advisory & portfolio analytics",
      },
    ],
  },
];

const accentTokens = {
  primary: {
    base: "bg-primary/10 text-primary",
    hoverBorder: "hover:border-primary/30",
    hoverText: "group-hover:text-primary",
  },
  gold: {
    base: "bg-[#232423] text-[#F7C630]",
    hoverBorder: "hover:border-[#F7C630]/30",
    hoverText: "group-hover:text-[#F7C630]",
  },
};

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="relative bg-card/30 py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mx-auto mb-16 max-w-3xl lg:text-center">
          <span className="section-label mb-4 block">Core Solutions</span>

          <h2 className="font-heading mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            End-to-End Engineering for{" "}
            <span className="gradient-text">Digital Finance & AI</span>
          </h2>

          <p className="text-muted-foreground">
            Full-cycle development – from feasibility study and tokenomics to
            UX/UI,
            <br />
            smart contracts, core engine, integrations, KYC/AML and production
            support.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutionCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const accent = accentTokens[category.accent];

            return (
              <AnimatedSection key={category.title} delay={categoryIndex * 150}>
                {/* Category Header */}
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-lg ${accent.base}`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold">
                    {category.title}
                  </h3>
                </div>

                {/* Solutions */}
                <div className="space-y-4">
                  {category.solutions.map((solution, solutionIndex) => {
                    const SolutionIcon = solution.icon;

                    return (
                      <AnimatedSection
                        key={solution.name}
                        delay={categoryIndex * 150 + solutionIndex * 100 + 200}
                      >
                        <div
                          className={`group flex items-center h-[120px] gap-3 rounded-xl border-2 border-[#151B2B] bg-[#0B111D] p-5 transition-all duration-300 ${accent.hoverBorder}`}
                        >
                          <div
                            className={`flex h-10 w-10 p-2 items-center justify-center rounded-lg ${accent.base}`}
                          >
                            <SolutionIcon className="h-6 w-6" />
                          </div>
                          <div>
                            <h4
                              className={`text-lg font-semibold transition-colors ${accent.hoverText}`}
                            >
                              {solution.name}
                            </h4>
                            <p className="leading-relaxed text-muted-foreground">
                              {solution.description}
                            </p>
                          </div>
                        </div>
                      </AnimatedSection>
                    );
                  })}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};
