"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Smart Resume Builder",
    description:
      "Pre-designed templates, content guidance, and export-ready resumes — no design skills needed.",
    icon: "/images/builder-icon.png",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "Upload your resume and get instant insights into improvements, keyword density, and ATS compatibility.",
    icon: "/images/analyzer-icon.png",
  },
  {
    title: "Real-Time Suggestions",
    description:
      "Get feedback as you type. Fix weak verbs, restructure layout, and optimize your resume instantly.",
    icon: "/images/suggestions-icon.png",
  },
];

export default function FeaturesSection() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          What Can You Do with <span className="text-primary">AVA.ai</span>?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="opacity-0"
            >
              <Card className="bg-muted text-muted-foreground hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    width={40}
                    height={40}
                    className="mb-4"
                  />
                  <CardTitle className="text-xl text-foreground mb-2">
                    {feature.title}
                  </CardTitle>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
