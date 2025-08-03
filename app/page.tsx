"use client";

import FeaturesSection from "@/components/Home/FeaturesSection";
import FinalCTASection from "@/components/Home/FinalCTASection";
import HeroSection from "@/components/Home/HeroSection";
import WhyResumeSection from "@/components/Home/WhyResumeSection";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
     <HeroSection/>

      {/* Why Resumes Matter */}
     <WhyResumeSection/>

      {/* Features Section */}
     <FeaturesSection/>

      {/* Final CTA */}
     <FinalCTASection/>
    </main>
  );
}
