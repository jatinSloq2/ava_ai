"use client";

import FeaturesSection from "@/components/Home/FeaturesSection";
import FinalCTASection from "@/components/Home/FinalCTASection";
import HeroSection from "@/components/Home/HeroSection";
import HowItWorksSection from "@/components/Home/HowitWorks";
import ResumeExamplesSection from "@/components/Home/ReseumeExample";
import WhyResumeSection from "@/components/Home/WhyResumeSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <WhyResumeSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ResumeExamplesSection />
      {/* 
      
      <ComparisonSection />
      <TestimonialSection />
      <TrustedBySection />
      <FAQSection /> */}
      <FinalCTASection />
    </main>
  );
}
