import { AnimatedSection } from "@/components/AnimatedSection";
import { ArrowRight, Calendar, Clock } from "lucide-react";
 
 

const Cases = [
  {
    lable: "RWA",
    title: "The Future of Tokenized Real-World Assets",
    description:
      "Exploring how tokenization is transforming traditional asset classes and opening new investment opportunities.",
  },
  {
    lable: "Exchanges",
    title: "Building a Compliant Crypto Exchange",
    description:
      "Key considerations for launching a regulated cryptocurrency exchange in different jurisdictions.",
  },
  {
    lable: "AI",
    title: "AI in Financial Services: Practical Applications",
    description:
      "How AI is being used today in trading, risk management, and customer service.",
  },
  {
    lable: "Neobank",
    title: "Neobank Architecture Best Practices",
    description:
      "Technical considerations for building a modern digital bank platform.",
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
            Blog
          </h1>
          <p className="text-[#738bb1] max-w-xl mx-auto text-sm sm:text-lg leading-relaxed">
            Insights, tutorials, and news from the iTeller Tech team on fintech,
            blockchain, and AI.
          </p>
        </div>
      </div>

      <div className="mx-auto container gap-8 py-10">
        <p className="text-[#738bb1] max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed text-center mb-14">
          Our blog is launching soon. Subscribe to get notified when we publish
          new content.
        </p>

        <section className="mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 sm:gap-5">
            {Cases.map((item, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div
                  key={index}
                  className="bg-[#0b111d] hover:border-primary/30 group cursor-pointer transition-all duration-300 border border-[#151b2b] rounded-lg p-5 h-full "
                >
                  <span className="text-primary">{item.lable}</span>
                  <h3 className="text-white text-lg md:text-2xl my-2 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-[#738BB1] text-lg ">{item.description}</p>
                  <div className="flex justify-between items-center flex-wrap gap-4 mt-3">
                    <div className="flex flex-wrap gap-4">
                      <div className="text-[#ABB9CF] text-sm flex gap-2 items-center">
                        <Calendar />
                        <span>Coming Soon</span>
                      </div>
                      <div className="text-[#ABB9CF] text-sm flex gap-2 items-center">
                        <Clock />
                        <span>5 min read</span>
                      </div>
                    </div>
                    <button className=" inline-flex items-center gap-1 text-sm bg-white/5 rounded-full p-2  transition-all">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
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
