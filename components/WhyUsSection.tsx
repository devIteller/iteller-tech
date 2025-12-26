import { Award, CheckCircle, Shield, Users, Zap } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const certifications = [
  { label: "Certified", sublabel: "Quality & Security" },
  { label: "Certified", sublabel: "Quality & Security" },
];

const benefits = [
  {
    icon: Shield,
    title: "Specialization in Financial Software",
    description:
      "We build only fintech, blockchain and AI-driven systems. This focus gives us deep understanding of trading, payments, risk and compliance.",
  },
  {
    icon: Zap,
    title: "Proven Platforms in Production",
    description:
      "Our exchange, payment, investment and tokenization platforms are already live with multiple clients and processing real transactions.",
  },
  {
    icon: CheckCircle,
    title: "Enterprise-grade Security",
    description:
      "Information-security and quality management certified, with strict SDLC, code review and DevOps practices protecting your assets.",
  },
  {
    icon: Users,
    title: "End-to-End Partner",
    description:
      "From white-paper and pitch deck to architecture, implementation and long-term scaling. We're with you every step of the way.",
  },
  {
    icon: Award,
    title: "Custom + White-Label",
    description:
      "Start fast with our ready-made platforms or build something completely unique on top of our battle-tested components.",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <AnimatedSection direction="left">
            <span className="section-label mb-4 block">Why iTeller</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Why Clients <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We don&apos;t just write code – we design complete business
              solutions with domain-specific logic, compliance and automation
              that help you launch faster and scale confidently.
            </p>

            {/* Certifications */}
            <div className="flex gap-4">
              {certifications.map((cert, cartIndex) => (
                <div
                  key={cartIndex + 1}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/5
                bg-linear-to-b from-[#0E1628] to-[#090E19]"
                >
                  <div
                    className={`w-10 h-10 rounded-lg ${
                      cartIndex === 0
                        ? "text-primary bg-primary/10"
                        : "bg-[#232423] text-[#F7C630] "
                    } flex items-center justify-center`}
                  >
                    <span className="text-xs font-semibold">
                      {cartIndex === 0 ? "ISO" : "24/7"}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {cert.label}
                    </div>
                    <div className="text-xs mt-0.5 text-muted-foreground">
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
                <div
                  className="p-5 rounded-xl border border-white/5
                bg-linear-to-b from-[#0E1628] to-[#090E19] hover:border-primary/30 transition-all duration-300 group card-glow"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-0.5 group-hover:text-primary transition-colors">
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
