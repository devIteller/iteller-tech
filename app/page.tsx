import { AboutSection } from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProductsSection } from "@/components/ProductsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { WhyUsSection } from "@/components/WhyUsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <ProductsSection />
        <ProcessSection />
        <WhyUsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
