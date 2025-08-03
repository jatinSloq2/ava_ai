"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

export default function FinalCTASection() {
  const ctaRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.6 }
    );
  }, []);

  return (
    <section className="bg-muted border-t border-border text-center py-20 px-4 sm:px-6 lg:px-8">
      <div ref={ctaRef} className="max-w-2xl mx-auto">
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
      </div>
    </section>
  );
}
