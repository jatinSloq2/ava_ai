"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

export default function FinalCTASection() {
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="bg-background border-t border-border py-24 px-4 sm:px-6 lg:px-8">
      <div
        ref={ctaRef}
        className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
          Ready to Build a Resume That Wins?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Whether you're just starting or need a revamp, AVA.ai gives you the tools to craft a standout resume that gets noticed.
        </p>
        <Button size="lg" className="text-lg px-8 py-6 w-fit rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
          Get Started Now — It’s Free
        </Button>
      </div>
    </section>
  );
}
