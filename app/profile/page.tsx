import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Download, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

const Benefits = [
  {
    title: "Who We Are",
    description:
      "iTeller Tech is a deep-tech software studio specializing in AI, financial technology, and blockchain solutions. We help companies build production-ready platforms for the modern financial ecosystem.",
  },
  {
    title: "Our Team",
    description:
      "Our team includes backend engineers, frontend developers, blockchain specialists, AI/ML engineers, DevOps experts, and product managers with deep expertise in fintech and regulated industries.",
  },
  {
    title: "Global Reach",
    description:
      "With offices in Dubai and engineering teams across multiple time zones, we serve clients globally with 24/7 support capabilities.",
  },
  {
    title: "Certifications",
    description:
      "We are a certified knowledge-based company with certifications for software quality, information security, and customer satisfaction.",
  },
];

export default function Profile() {
  return (
    <div className="min-h-screen text-white">
      <div
        className="relative py-20 sm:pt-34"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 283' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(14.52 20.919 -43.938 9.1299 511.22 166.42)'><stop stop-color='rgba(12,34,48,1)' offset='0'/><stop stop-color='rgba(8,12,22,1)' offset='1'/></radialGradient></defs></svg>\")",
        }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-semibold mb-4">
            Company Profile
          </h1>
          <p className="text-[#738bb1] text-sm sm:text-lg leading-relaxed">
            Learn more about iTeller Tech – our story, capabilities, and what
            drives us forward.
          </p>
        </div>
      </div>
      <div className="mx-auto container max-lg:px-8 gap-8 py-10">
        <div className="bg-[#0C1220] max-w-2xl mx-auto mt-10 rounded-2xl py-16 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Download Our Company Profile
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
              Get a comprehensive overview of our services, capabilities, and
              past projects in PDF format.
            </p>
            <Link href="/contact-us">
              <Button variant="hero" size="lg">
                Download PDF
                <Download className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
        <section className="mt-10">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-10 h-10 rounded-lg bg-[#0D2330] text-primary flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="text-white text-xl md:text-3xl font-semibold text-center">
              Benefits for Your Organization
            </h2>
          </div>
          <div className="max-md:space-y-5">
            {Benefits.map((Work, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div
                  key={index}
                  className="h-full sm:p-5 flex gap-2"
                >
                  <div className="bg-[#0e2637] w-fit h-fit p-2 rounded-lg">
                    <TrendingUp className="size-4 sm:size-5 text-[#21d5ed]" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg md:text-2xl mb-2 font-medium">
                      {Work.title}
                    </h3>
                    <p className="text-[#738BB1] text-lg ">
                      {Work.description}
                    </p>
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
