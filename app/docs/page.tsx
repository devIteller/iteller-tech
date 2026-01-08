import { AnimatedSection } from "@/components/AnimatedSection";
import { TrendingUp } from "lucide-react";

const Cases = [
  {
    title: "Getting Started",
    description: "Introduction to our platforms and how to begin integration.",
  },
  {
    title: "API Reference",
    description:
      "Complete API documentation for all our products and services.",
  },
  {
    title: "SDK & Libraries",
    description: "Client libraries and SDKs for popular programming languages.",
  },
  {
    title: "Integration Guides",
    description:
      "Step-by-step guides for integrating with your existing systems.",
  },
];

export default function Documentation() {
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
            Documentation
          </h1>
          <p className="text-[#738bb1] max-w-xl mx-auto text-sm sm:text-lg leading-relaxed">
            Technical documentation, API references, and integration guides for
            iTeller Tech products.
          </p>
        </div>
      </div>

      <div className="mx-auto container gap-8 py-10">
        <p className="text-[#738bb1] mx-auto text-sm sm:text-lg leading-relaxed text-center mb-14">
          Our documentation portal is under development. Contact us for
          technical specifications and integration support.
        </p>

        <section className="mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-4 sm:gap-5">
            {Cases.map((item, index) => (
              <AnimatedSection
                key={index}
                delay={index * 150 + index * 100 + 200}
              >
                <div
                  className={`group flex flex-col gap-3 rounded-xl border border-white/5
                bg-linear-to-b from-[#0E1628] to-[#090E19] p-5 transition-all duration-300 hover:border-primary/30`}
                >
                  <div
                    className={`flex w-fit p-2 mb-1 items-center justify-center rounded-lg bg-primary/10 text-primary`}
                  >
                    <TrendingUp className="size-7" />
                  </div>
                  <div>
                    <h4
                      className={`text-lg mb-1 font-semibold transition-colors group-hover:text-primary`}
                    >
                      {item.title}
                    </h4>
                    <p className="leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  <div className="text-[#ABB9CF] pt-3 text-sm">Coming Soon</div>
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
