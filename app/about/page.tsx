import { Cpu, TrendingUp } from "lucide-react";

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
];

export default function About() {
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
            About iTeller Tech
          </h1>
          <p className="text-[#738bb1] max-w-xl mx-auto text-sm sm:text-lg leading-relaxed">
            Deep-tech studio building AI, fintech and blockchain products for
            regulated financial institutions and ambitious startups.
          </p>
        </div>
      </div>

      <div className="mx-auto container gap-8 py-10">
        <section className=" mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <h2 className="text-white text-xl sm:text-2xl font-semibold mb-3">
            Who We Are
          </h2>
          <p className="text-[#738bb1] text-sm sm:text-xl leading-relaxed ">
            iTeller Tech is a software studio focused on{" "}
            <span className="text-white font-semibold">
              AI, financial technology and blockchain.
            </span>
          </p>
          <p className="text-[#738bb1] text-sm sm:text-xl leading-relaxed mt-4">
            We combine strategy, product and engineering to turn complex ideas
            into{" "}
            <span className="text-white font-semibold">real products:</span>{" "}
            exchanges, neobanks, tokenization platforms, payment gateways, ETF
            and investment platforms, and enterprise AI agents.
          </p>
        </section>

        <section className="mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <h2 className="text-white text-xl lg:text-3xl font-semibold mb-10 text-center">
            Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 sm:gap-5">
            {Mission.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0b111d] border border-[#151b2b] rounded-lg p-5 sm:p-8"
              >
                <div className="flex gap-3 mb-3">
                  <div className="bg-[#0e2637] h-fit p-2 rounded-lg">
                    <TrendingUp className="size-4 sm:size-5 text-[#21d5ed]" />
                  </div>
                  <h3 className="text-white text-lg md:text-2xl font-medium">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[#738BB1] text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <h2 className="text-white text-xl lg:text-3xl font-semibold mb-10 text-center">
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 sm:gap-5">
            {Differents.map((diff, index) => (
              <div
                key={index}
                className="bg-[#0b111d] border border-[#151b2b] rounded-lg p-5 sm:p-8"
              >
                <div className="flex gap-3 mb-3">
                  <div className="bg-[#0e2637] p-2 rounded-lg h-fit">
                    <TrendingUp className="size-4 sm:size-5 text-[#21d5ed]" />
                  </div>
                  <h3 className="text-white text-lg md:text-xl">{diff}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <h2 className="text-white text-xl lg:text-3xl font-semibold mb-2 text-center">
            Our Team
          </h2>
          <h2 className="text-lg lg:text-2xl text-center text-[#738BB1] mb-10">
            Our core team includes:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {Teams.map((Team, index) => (
              <div
                key={index}
                className="bg-[#0b111d] border border-[#151b2b] rounded-lg p-5 sm:p-8"
              >
                <div className="flex gap-3 mb-3">
                  <div className="bg-[#0e2637] p-2 rounded-lg h-fit">
                    <Cpu className="size-4 sm:size-5 text-[#21d5ed]" />
                  </div>
                  <h3 className="text-white text-lg md:text-xl">{Team}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <h2 className="text-white text-xl lg:text-3xl font-semibold mb-10 text-center">
            Where We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2  gap-4 sm:gap-5">
            {Works.map((Work, index) => (
              <div
                key={index}
                className="bg-[#0b111d] border border-[#151b2b] rounded-lg p-5 sm:p-8"
              >
                <div className="flex flex-col items-center gap-2 mb-3">
                  <div className="bg-[#0e2637] h-fit p-2 rounded-lg">
                    <TrendingUp className="size-4 sm:size-5 text-[#21d5ed]" />
                  </div>
                  <h3 className="text-white text-lg md:text-2xl font-medium">
                    {Work.title}
                  </h3>
                  <p className="text-[#738BB1] text-lg mt-2">
                    {Work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
