"use client";

import { Sparkles } from "lucide-react";

const steps = [
  {
    title: "1. Start or Upload",
    description:
      "Begin by uploading your existing resume or start fresh using our AI-powered resume builder.",
    icon: <Sparkles className="w-8 h-8 text-primary" />,
  },
  {
    title: "2. Analyze with AI",
    description:
      "Our AI scans and scores your resume, suggesting real-time improvements tailored to your target job.",
    icon: <Sparkles className="w-8 h-8 text-primary" />,
  },
  {
    title: "3. Optimize & Customize",
    description:
      "Fine-tune sections like skills, achievements, and summary with intelligent guidance.",
    icon: <Sparkles className="w-8 h-8 text-primary" />,
  },
  {
    title: "4. Download & Apply",
    description:
      "Export your resume in professional formats and apply with confidence.",
    icon: <Sparkles className="w-8 h-8 text-primary" />,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-20 bg-muted/40 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Build a job-winning resume in minutes with our simple and intelligent workflow.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-background shadow-lg rounded-2xl p-6 text-center border border-border transition-transform hover:scale-105 duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
