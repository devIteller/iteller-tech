import { AnimatedSection } from "@/components/AnimatedSection";
 
 

const Cases = [
  {
    lable: "CEX/DEX",
    title: "Crypto Exchange Platform",
    description:
      "Built a high-performance centralized exchange with spot and margin trading for a Middle East broker.",
  },
  {
    lable: "Digital Banking",
    title: "Neobank Launch",
    description:
      "End-to-end digital bank platform with multi-currency accounts, cards, and crypto integration.",
  },
  {
    lable: "RWA",
    title: "DReal Estate Tokenization",
    description:
      "Tokenized a commercial real estate portfolio with investor portal and secondary trading.",
  },
  {
    lable: "Payments",
    title: "Payment Gateway",
    description:
      "Built a cross-border payment platform with crypto settlement for an e-commerce marketplace.",
  },
];

export default function Blog() {
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
            Case Studies
          </h1>
          <p className="text-[#738bb1] max-w-xl mx-auto text-sm sm:text-lg leading-relaxed">
            Real projects, real results. Explore how we&apos;ve helped companies
            build and launch successful fintech products.
          </p>
        </div>
      </div>

      <div className="mx-auto container gap-8 py-10">
        <p className="text-[#738bb1] max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed text-center mb-14">
          Detailed case studies coming soon. Contact us to discuss specific
          project examples.
        </p>

        <section className="mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 sm:gap-5">
            {Cases.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div
                  key={index}
                  className="bg-[#0b111d] border border-[#151b2b] rounded-lg p-5 h-full "
                >
                  <span className="text-primary">{item.lable}</span>
                  <h3 className="text-white text-lg md:text-2xl my-2 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-[#738BB1] text-lg ">{item.description}</p>
                  <div className="text-[#ABB9CF] pt-3 text-sm">Coming Soon</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
