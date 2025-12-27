import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Rocket, Sparkles } from "lucide-react";
import { CountUpStat } from "./CountUpStat";

const stats = [
  { value: 10, suffix: "+", label: "Uptime SLA" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 99.9, suffix: "%", label: "Years Experience" },
];

const features = [
  { icon: Sparkles, label: "AI-Powered Solutions" },
  { icon: Shield, label: "Enterprise Security" },
  { icon: Rocket, label: "Production-Ready Code" },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden max-sm:pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(137.65deg,#0E2C40_-4.98%,#080C16_64.62%)]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(#132737 1px, transparent 1px),
                           linear-gradient(90deg, #132737 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A111D] rounded-full border border-border  backdrop-blur-sm mb-8 animate-fade-in-up">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground">
              Trusted by Industry Leaders
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Building the Next Generation <br className="hidden md:block" />
            of <span className="gradient-text">AI, Fintech & Blockchain</span>
            <br className="hidden md:block" />
            Platforms
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-[17px] text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            We design, build and launch end-to-end solutions – from AI trading
            and tokenization to neobanking, CEX/DEX exchanges, payment gateways
            and enterprise AI agents.
          </p>

          {/* Features */}
          <div
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 px-2 py-1 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <feature.icon className="w-4 h-4 text-primary" />
                <span>{feature.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="lg">
              Book a Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Download Company Profile
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 max-w-xl mx-auto"
            style={{ animationDelay: "0.5s" }}
          >
            {stats.map((stat) => (
              <CountUpStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
};
