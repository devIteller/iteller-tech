import { AnimatedSection } from "@/components/AnimatedSection";
import { platforms } from "@/components/ProductsSection";
import { ArrowRight, Cpu, TrendingUp } from "lucide-react";
import Link from "next/link";

const Mission = [
  {
    title: "Escrow-Style Safe Payments",
    description:
      "To make advanced financial and AI infrastructure accessible to companies of any size – from early-stage startups to established banks and brokers.",
  },
  {
    title: "Our Vision",
    description:
      "A world where money, data and value move instantly and intelligently across borders.",
  },
];

const Differents = [
  "Focused purely on fintech, payments, trading and AI",
  "Experienced in regulated environments (KYC/AML, risk, security)",
  "Mix of product thinking + hardcore engineering",
  "Ready-made platforms plus custom development",
];

const Teams = [
  "Backend engineers (PHP, Go, Node.js, Python)",
  "Frontend & mobile developers (React, Vue, React Native)",
  "Blockchain & smart contract specialists",
  "AI/ML & data engineers",
  "DevOps & security engineers",
  "Product managers & business analysts",
];

const Works = [
  {
    title: "Dubai",
    description: "Business, product and client success",
  },
  {
    title: "Tehran & Remote",
    description: "R&D, engineering and AI",
  },
];

export default function Product() {
  return (
    <div className="min-h-screen text-white">
      <div
        className="relative py-20 sm:py-38"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 283' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(14.52 20.919 -43.938 9.1299 511.22 166.42)'><stop stop-color='rgba(12,34,48,1)' offset='0'/><stop stop-color='rgba(8,12,22,1)' offset='1'/></radialGradient></defs></svg>\")",
        }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold mb-4">
            Flagship Platforms
          </h1>
          <p className="text-[#738bb1] text-sm sm:text-lg leading-relaxed">
            Production-ready products you can launch quickly and customize
            deeply.
          </p>
        </div>
      </div>

      <div className="mx-auto container gap-8 py-14">
        <p className="text-[#738bb1] pb-24 text-center mx-auto text-sm sm:text-xl max-w-4xl leading-relaxed mt-4">
          Our platforms are already tested in real environments. You decide
          whether to launch them as-is under your brand or use them as the core
          of a fully custom product.
        </p>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <AnimatedSection key={platform.title} delay={index * 100}>
              <Link href={"/products/" + platform.url}>
                <div
                  className="relative h-full rounded-2xl border border-white/5
                bg-linear-to-b from-[#0E1628] to-[#090E19]
                p-6 transition-all duration-300
                hover:border-primary/30
                hover:shadow-[0_0_40px_-15px_rgba(56,189,248,0.25)] group cursor-pointer"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <platform.icon className="w-8 h-8 text-primary" />
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
                  <div className="flex justify-between ">
                    <button className=" inline-flex items-center gap-1 text-sm transition-all">
                      Learn More
                    </button>
                    <button className=" inline-flex items-center gap-1 text-sm bg-white/5 rounded-full p-2  transition-all">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
