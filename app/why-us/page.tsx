import { AnimatedSection } from "@/components/AnimatedSection";
import { ProcessSteps } from "@/components/ProcessSection";
import { CheckCircle2, TrendingUp } from "lucide-react";

const Specializations = [
  "Trading systems and risk",
  "Banking & payment flows",
  "KYC/AML, KYT and compliance",
  "Security and uptime requirements",
 ];

const Provens = [
  "Platforms already processing real deposits, withdrawals and trades",
  "Architectures designed for high availability and horizontal scaling",
  "Experience with audits, regulators and banking partners",
];

const Securities = [
  "Secure SDLC, mandatory code review and DevOps best practices",
  "Separation of environments (dev/stage/prod) and least-privilege access",
  "Monitoring, alerting and backup strategies",
];

 const Collaborations = [
   "Start fast with a white-label solution",
   "Or design something unique from scratch",
   "Transparent communication, regular demos, clear documentation",
 ];

export default function WhyUs() {
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
            Why Clients Choose iTeller Tech
          </h1>
          <p className="text-[#738bb1] max-w-xl mx-auto text-sm sm:text-lg leading-relaxed">
            Focused expertise, proven platforms and enterprise-level security.
          </p>
        </div>
      </div>

      <div className="mx-auto container gap-8 py-10">
        <section className="mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <div className="mb-10">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-[#0D2330] text-primary flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h2 className="text-white text-xl lg:text-3xl font-semibold text-center">
                What We Do
              </h2>
            </div>
            <p className="text-[#738bb1] max-w-xl mt-2 text-sm sm:text-lg leading-relaxed">
              We work almost exclusively on{" "}
              <span className="text-white font-semibold">
                {" "}
                fintech, payments, trading and AI.{" "}
              </span>
              This focus gives us a strong understanding of:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {Specializations.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div
                  key={index}
                  className="bg-[#0b111d] h-full border my-auto border-[#151b2b] rounded-lg p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0D2330] text-primary flex items-center justify-center">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h3 className="text-white text-lg md:text-xl">{item}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        <section className="mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-10 h-10 rounded-lg bg-[#0D2330] text-primary flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-white text-xl lg:text-3xl font-semibold text-center">
              Proven in Production
            </h2>
          </div>
          <div className="space-y-5">
            {Provens.map((item, index) => (
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
          <div className="flex items-center gap-2 mb-5">
            <div className="w-10 h-10 rounded-lg bg-[#0D2330] text-primary flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-white text-xl lg:text-3xl font-semibold text-center">
              Security & Quality
            </h2>
          </div>
          <div className="space-y-5">
            {Securities.map((item, index) => (
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
          <div className="flex items-center gap-2 mb-5">
            <div className="w-10 h-10 rounded-lg bg-[#0D2330] text-primary flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-white text-xl lg:text-3xl font-semibold text-center">
              Flexible Collaboration
            </h2>
          </div>
          <div className="space-y-5">
            {Collaborations.map((item, index) => (
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
      </div>
    </div>
  );
}
