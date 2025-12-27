"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Phone, MapPin } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
const contacts = [
  {
    label: "Email",
    value: "contact@iTeller.agency",
    icon: Mail,
  },
  {
    label: "Phone / WhatsApp",
    value: "+971 xxx xxx xxx",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Dubai · Tehran · Remote",
    icon: MapPin,
  },
];

export default function CTASection() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="container  mx-auto px-4 lg:px-8">
        <div className="absolute z-5 top-28 left-96 w-[100px] h-[100px] opacity-50 rounded-full bg-primary blur-[100px]"></div>
        <div className="absolute z-5 bottom-28 right-96 w-[100px] h-[100px] opacity-50 rounded-full bg-[#F7C630] blur-[90px]"></div>
        <AnimatedSection>
          <div className="relative  rounded-3xl max-w-5xl mx-auto overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 border border-white/5
                bg-linear-to-b from-[#0E1628] to-[#090E19]"
            />
            {/* faint dot pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Content */}
            <div className="relative px-8 py-12 text-center text-white">
              <span className="section-label mb-4 block">Get Started</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold mb-6 max-w-3xl mx-auto">
                {" "}
                Let&apos;s Build Your Next{" "}
                <span className="gradient-text">
                  Fintech or AI Product
                </span>{" "}
              </h2>

              <p className="text-[#738BB1] max-w-xl mx-auto mb-10 text-sm md:text-lg">
                Whether you want to launch a neobank, tokenize assets, build a
                regulated exchange, or add AI trading and AI agents to your
                existing platform – our team is ready to help from day one.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button
                  variant="cta"
                  className="font-bold p-4 max-md:w-full lex items-center gap-3 shadow-lg rounded-lg bg-linear-to-r from-[#19D3FF] to-[#00B3E6] text-black"
                  size="xl"
                >
                  <span>Schedule a Strategy Call</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>

                <Button
                  variant="ghost"
                  className="font-bold p-4 max-md:w-full  flex items-center text-black gap-3 shadow-lg rounded-lg border-yellow-400/10 bg-[#F7C630] hover:bg-[#F7C630]/60"
                  size="xl"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Company Profile</span>
                </Button>
              </div>

              {/* Thin separator line */}
              <div className="mx-auto max-w-3xl border-t border-white/6 mb-8" />

              {/* Contact row - matches image: three items centered */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
                {contacts.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <div className="w-11 h-11 rounded-lg bg-white/6 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div className="text-sm text-slate-400">{label}</div>
                    <div className="text-sm font-medium text-slate-200">
                      {value}
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
}
