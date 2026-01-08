'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { platforms } from '@/data/platforms';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams<{ productId: string }>();
  const platform = platforms[params.productId];

  if (!platform) {
    return (
      <div className="min-h-screen bg-[#080c16] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-white text-base sm:text-lg">Product not found</p>
          <button
            onClick={() => router.back()}
            className="mt-4 text-[#21d5ed] hover:underline text-sm sm:text-base"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080c16] ">
      {/* Hero */}
      <div
        className="relative py-20 sm:py-34"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1440 283' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(14.52 20.919 -43.938 9.1299 511.22 166.42)'><stop stop-color='rgba(12,34,48,1)' offset='0'/><stop stop-color='rgba(8,12,22,1)' offset='1'/></radialGradient></defs></svg>\")",
        }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-6xl font-semibold mb-4">
            {platform.name}
          </h1>
          <p className="text-[#738bb1] text-sm sm:text-lg leading-relaxed">
            {platform.longDescription}
          </p>
        </div>
      </div>

      <div className=" container mx-auto">
        {/* Overview */}
        <section className=" px-5 sm:px-6 py-10 sm:py-14">
          <h2 className="text-white text-xl sm:text-2xl font-semibold mb-3">
            Overview
          </h2>
          <p className="text-[#738bb1] text-sm sm:text-lg leading-relaxed ">
            {platform.overview}
          </p>
        </section>

        {/* Who It's For */}
        <section className=" mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="bg-[#0e2637] p-2 rounded-lg">
              <CheckCircle2 className="size-5 sm:size-6 text-[#21d5ed]" />
            </div>
            <h2 className="text-white text-xl sm:text-2xl font-semibold">
              {platform.useCasesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {platform.useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-[#0a0f1a] border border-[#172436] rounded-lg p-4 flex gap-3"
              >
                <CheckCircle2 className="size-5 text-[#21d5ed] shrink-0" />
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {useCase.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="bg-[#0e2637] p-2 rounded-lg">
              <CheckCircle2 className="size-5 sm:size-6 text-[#21d5ed]" />
            </div>
            <h2 className="text-white text-xl sm:text-2xl font-semibold">
              {platform.featuresTitle}
            </h2>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 ${
              platform.id === "neobank" ? "lg:grid-cols-3" : ""
            } gap-4 sm:gap-5`}
          >
            {platform.features.map((feature, index) => (
              <div
                key={index}
                className="bg-[#0b111d] border border-[#151b2b] rounded-lg p-5 sm:p-6"
              >
                <div className="flex gap-3 mb-4">
                  <div className="bg-[#0e2637] p-2 rounded-lg">
                    <CheckCircle2 className="size-4 sm:size-5 text-[#21d5ed]" />
                  </div>
                  <h3 className="text-white text-base sm:text-lg font-medium">
                    {feature.title}
                  </h3>
                </div>

                <ul className="space-y-2 text-[#738bb1] text-sm sm:text-base leading-relaxed">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section className="mx-auto px-5 sm:px-6 py-10 sm:py-14">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="bg-[#0e2637] p-2 rounded-lg">
              <CheckCircle2 className="size-5 sm:size-6 text-[#21d5ed]" />
            </div>
            <h2 className="text-white text-xl sm:text-2xl font-semibold">
              {platform.keyFeaturesTitle}?
            </h2>
          </div>

          <div className="space-y-4">
            {platform.whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-[#0a0f1a] border border-[#172436] rounded-lg p-4 flex gap-3"
              >
                <CheckCircle2 className="size-5 text-[#21d5ed] shrink-0" />
                <p className="text-white text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="bg-[#0C1220] mt-10 rounded-2xl py-16 px-8">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
                Need a reliable engine for your CEX or DEX? We&apos;ll help you
                choose the right modules and architecture.
              </p>
              <Link href="/contact-us">
                <Button variant="hero" size="lg">
                  Schedule a Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
