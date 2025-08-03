"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "../ui/button";
import { Timer, ShieldCheck, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyResumeSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative bg-muted py-28 px-4 sm:px-8 lg:px-16"
        >
            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="flex justify-center md:justify-start">
                    <div className="relative w-full max-w-md">
                        <img
                            src="/images/resume-preview.png"
                            alt="Modern Resume Example"
                            className="rounded-xl shadow-xl border w-full"
                        />
                        {/* background flare */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/30 rounded-full blur-2xl" />
                    </div>
                </div>

                {/* ─── Text Right ─────────────────────────────────────────────── */}
                <div className="text-start">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-foreground mb-6">
                        Why a Great Resume <br className="hidden md:block" />
                        Still Matters in&nbsp;2025
                    </h2>

                    <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-10">
                        In today’s hyper-competitive market, your resume isn’t just a
                        document — it’s your{" "}
                        <span className="font-semibold text-foreground">first impression</span>,
                        your{" "}
                        <span className="font-semibold text-foreground">personal brand</span>,
                        and often your{" "}
                        <span className="font-semibold text-foreground">
                            ticket to an interview
                        </span>
                        .
                    </p>

                    <ul className="space-y-5">
                        <Benefit
                            icon={<Timer className="w-6 h-6 text-primary shrink-0" />}
                            text={
                                <>
                                    Recruiters spend only{" "}
                                    <span className="font-semibold text-foreground">6–8 seconds</span>{" "}
                                    scanning each resume
                                </>
                            }
                        />
                        <Benefit
                            icon={<ShieldCheck className="w-6 h-6 text-primary shrink-0" />}
                            text={
                                <>
                                    ATS filters reject{" "}
                                    <span className="font-semibold text-foreground">75 %+</span> of
                                    resumes before a human sees them
                                </>
                            }
                        />
                        <Benefit
                            icon={<TrendingUp className="w-6 h-6 text-primary shrink-0" />}
                            text={
                                <>
                                    Keyword-optimised layouts boost interview odds{" "}
                                    <span className="font-semibold text-foreground">3 ×</span>
                                </>
                            }
                        />
                    </ul>

                    <Button className="mt-12 px-7 py-3 w-fit text-base rounded-lg shadow hover:shadow-lg transition">
                        Start Optimizing Now
                    </Button>
                </div>
            </div>
        </section>
    );
}


function Benefit({
    icon,
    text,
}: {
    icon: React.ReactNode;
    text: React.ReactNode;
}) {
    return (
        <li className="flex items-start gap-3 text-base md:text-lg text-muted-foreground">
            {icon}
            <span className="leading-snug">{text}</span>
        </li>
    );
}
