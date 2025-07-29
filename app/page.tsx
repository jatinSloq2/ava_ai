"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Build Professional Resumes with{" "}
              <span className="text-primary">AI Precision</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Don’t just create resumes. Create opportunities. AVA.ai helps you
              craft, analyze, and optimize resumes that actually get noticed.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base">
                Get Started for Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-primary text-primary"
              >
                Analyze Your Resume
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <Image
              src="/images/resume-hero.png"
              alt="AI Resume Illustration"
              width={640}
              height={480}
              className="rounded-xl w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Why Resumes Matter */}
      <section className="bg-muted py-20 px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why a Great Resume Still Matters in 2025
          </motion.h2>
          <motion.div
            className="text-muted-foreground text-lg space-y-6 text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              In today’s competitive job market, a recruiter spends only{" "}
              <span className="text-foreground font-semibold">6–8 seconds</span>{" "}
              on your resume. That’s all you get to make an impression.
            </p>
            <p>
              A clear, concise, and ATS-optimized resume isn&apos;t a nice-to-have — it&apos;s a
              <span className="text-foreground font-semibold"> necessity</span>.
              With AI-driven filters at the hiring stage, you must match job descriptions
              exactly.
            </p>
            <p>
              AVA.ai helps you stay ahead — formatting, scoring, and optimizing resumes so
              you always pass the first test.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Can You Do with <span className="text-primary">AVA.ai</span>?
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
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
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-muted border-t border-border text-center py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build a Resume That Works?
          </h2>
          <p className="text-muted-foreground mb-8">
            Start building or upload your resume for an instant review. It’s fast,
            accurate, and completely free.
          </p>
          <Button size="lg" className="text-lg">
            Get Started Now — It’s Free
          </Button>
        </motion.div>
      </section>
    </main>
  );
}
