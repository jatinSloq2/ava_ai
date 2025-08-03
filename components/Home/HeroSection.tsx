"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import Image from "next/image";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const imgRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

        tl.from(containerRef.current, { opacity: 0, y: 50, duration: 0.5 });

        if (textRef.current) {
            const elements = textRef.current.querySelectorAll("h1, p, div");
            tl.from(
                elements,
                {
                    opacity: 0,
                    y: 30,
                    stagger: 0.2,
                },
                "-=0.3"
            );
        }

        if (imgRef.current) {
            tl.from(
                imgRef.current,
                {
                    opacity: 0,
                    scale: 0.9,
                    rotateY: 10,
                    x: 100,
                    duration: 1.2,
                },
                "-=0.8"
            );

            // Floating effect
            gsap.to(imgRef.current, {
                y: -12,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                duration: 3,
            });
        }
    }, []);

    return (
        <section className="relative overflow-hidden py-28 px-6 sm:px-8 lg:px-20 bg-background">
            {/* Background glow */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-[-100px] left-[-80px] w-[400px] h-[400px] bg-purple-500 rounded-full blur-[120px] opacity-30 animate-pulse" />
                <div className="absolute bottom-[-80px] right-[-100px] w-[400px] h-[400px] bg-blue-400 rounded-full blur-[100px] opacity-20 animate-pulse" />
            </div>

            <div
                ref={containerRef}
                className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16"
            >
                {/* Text */}
                <div ref={textRef} className="max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-gray-900 dark:text-white">
                        AI-Powered Resumes, <br className="hidden sm:inline" />
                        <span className="text-primary">Tailored for Success</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                        Create high-impact resumes that get noticed. AVA.ai leverages cutting-edge AI to build, analyze, and perfect your resume — so you stand out in seconds.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <Button size="lg" className="text-base shadow-lg hover:scale-105 transition">
                            Get Started for Free
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-base border-primary text-primary hover:scale-105 transition"
                        >
                            Analyze Your Resume
                        </Button>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-muted-foreground">
                        <FeatureItem icon="🧠" text="AI-driven resume builder" />
                        <FeatureItem icon="⚡" text="Instant resume analysis" />
                        <FeatureItem icon="🎯" text="Job-matching precision" />
                        <FeatureItem icon="📤" text="Export-ready templates" />
                    </div>
                </div>

                {/* Image */}
                <div ref={imgRef} className="w-full md:w-1/2">
                    <Image
                        src="/images/resume-hero.png"
                        alt="AI Resume Illustration"
                        width={640}
                        height={480}
                        className="rounded-xl w-full h-auto shadow-2xl border border-gray-200 dark:border-gray-700"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}

function FeatureItem({ icon, text }: { icon: string; text: string }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-xl">{icon}</span>
            <span>{text}</span>
        </div>
    );
}
