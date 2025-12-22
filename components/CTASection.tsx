import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Users, Cpu, Globe } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const stats = [
  { icon: Cpu, value: "500+", label: "APIs Integrated" },
  { icon: Users, value: "1M+", label: "End Users" },
  { icon: Globe, value: "30+", label: "Markets Served" },
];

export const CTASection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-card via-muted/50 to-card" />
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `radial-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
                backgroundSize: '24px 24px'
              }}
            />

            {/* Content */}
            <div className="relative px-8 py-16 lg:py-24 text-center">
              <span className="section-label mb-4 block">Get Started</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto">
                Let's Build Your Next{" "}
                <span className="gradient-text">Fintech or AI Product</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
                Whether you want to launch a neobank, AI trading tools, build a crypto 
                exchange platform, or add AI automation to your existing platform—our 
                team is ready to help from day one.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button variant="cta" size="xl">
                  Schedule a Strategy Call
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="heroOutline" size="lg">
                  <Download className="w-4 h-4" />
                  Download Company Profile
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <stat.icon className="w-6 h-6 text-secondary mx-auto mb-2" />
                    <div className="text-2xl font-heading font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
