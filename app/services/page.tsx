import { AnimatedSection } from "@/components/AnimatedSection";
import { ProcessSteps } from "@/components/ProcessSection";
import { CheckCircle2,  TrendingUp } from "lucide-react";
 

const WeDo = [
  "Product & technical consulting",
  "Architecture & solution design",
  "Full-cycle software development",
  "Integrations with banks, PSPs, KYC providers & blockchains",
  "Long-term maintenance & feature development",
 ];

const Works = [
  {
    title: "End-to-End Build",
    description: "We build the whole product from 0 to launch.",
  },
  {
    title: "White-Label Customization",
    description:
      "Start from our existing platforms and adapt to your brand and logic.",
  },
  {
    title: "Dedicated Team",
    description: "A long-term team working only on your backlog.",
  },
  {
    title: "Consulting & Audits",
    description:
      "Product, architecture or code review; due diligence before investment or launch.",
  },
];

export default function Services() {
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
            Services & Engagement Models
          </h1>
          <p className="text-[#738bb1] max-w-xl mx-auto text-sm sm:text-lg leading-relaxed">
            From idea to running platform – we cover the full lifecycle.
          </p>
        </div>
      </div>

      <div className="mx-auto container gap-8 py-10">
        <section className="mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <h2 className="text-white text-xl lg:text-3xl font-semibold mb-10 text-center">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {WeDo.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div
                  key={index}
                  className="bg-[#0b111d] h-full border my-auto border-[#151b2b] rounded-lg p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg h-fit">
                      <CheckCircle2 className="size-6 sm:size-8 text-[#21d5ed]" />
                    </div>
                    <h3 className="text-white text-lg md:text-xl">{item}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <h2 className="text-white text-xl lg:text-3xl font-semibold mb-10 text-center">
            Our Process
          </h2>
          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ProcessSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 100}>
                <div
                  className="relative p-6 rounded-2xl border border-white/5
                     bg-linear-to-b from-[#0E1628] to-[#090E19] hover:border-primary/30 transition-all duration-300 group card-glow h-full"
                >
                  {/* Step Number */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="absolute -top-5 -left-3 bg-[#0D2330] font-semibold w-11 h-11 flex items-center justify-center text-sm rounded-full text-primary group-hover:text-primary/40 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#0D2330] text-primary flex items-center justify-center">
                      <step.icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-0.5">
                    {step.title}
                  </h3>
                  <p className="text-[#738BB1]">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <h2 className="text-white text-xl lg:text-3xl font-semibold mb-10 text-center">
            Engagement Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 sm:gap-5">
            {Works.map((Work, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div
                  key={index}
                  className="bg-[#0b111d] border border-[#151b2b] rounded-lg p-5 h-full sm:p-8"
                >
                  <div className="bg-[#0e2637] w-fit h-fit p-2 rounded-lg">
                    <TrendingUp className="size-4 sm:size-5 text-[#21d5ed]" />
                  </div>
                  <h3 className="text-white text-lg md:text-2xl my-2 font-medium">
                    {Work.title}
                  </h3>
                  <p className="text-[#738BB1] text-lg ">{Work.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
