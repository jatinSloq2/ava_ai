"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
// import { Player } from "@lottiefiles/react-lottie-player";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Smart Resume Builder",
    description:
      "Create ATS-optimized resumes using proven templates and live feedback.",
    icon: "/images/builder-icon.png",
    lottie: "/animations/resume.json",
  },
  {
    title: "AI Resume Analyzer",
    description:
      "Scan your resume and get instant suggestions for keywords, structure, and clarity.",
    icon: "/images/analyzer-icon.png",
    lottie: "/animations/analyzer.json",
  },
  {
    title: "Real-Time Suggestions",
    description:
      "Rewrite weak phrases and improve layout in real-time using smart AI.",
    icon: "/images/suggestions-icon.png",
    lottie: "/animations/typing.json",
  },
  {
    title: "Multi-Format Export",
    description:
      "Download your resume in PDF, DOCX, or TXT formats instantly.",
    icon: "/images/export-icon.png",
    lottie: "/animations/export.json",
  },
  {
    title: "Job Role Matching",
    description:
      "Tailor resumes to specific job descriptions using smart role-match insights.",
    icon: "/images/match-icon.png",
    lottie: "/animations/match.json",
  },
  {
    title: "Interview Readiness Mode",
    description:
      "Get potential interview questions based on your resume content and job role.",
    icon: "/images/interview-icon.png",
    lottie: "/animations/interview.json",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
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
      className="relative py-28 px-4 sm:px-6 lg:px-16 bg-gradient-to-br from-muted via-background to-muted"
    >
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Everything You Can Do with{" "}
          <span className="text-primary">AVA.ai</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Supercharge your job hunt with AI-powered tools, resume intelligence,
          and interview readiness.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4500 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={24}
        loop
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <Card className="bg-muted/80 backdrop-blur border border-border hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                {/* <Player
                  autoplay
                  loop
                  src={feature.lottie}
                  style={{ height: "100px", width: "100px" }}
                  className="self-center"
                /> */}
                <div className="flex items-center gap-2">
                  <Image
                    src={feature.icon}
                    alt={`${feature.title} icon`}
                    width={28}
                    height={28}
                  />
                  <CardTitle className="text-lg text-foreground">
                    {feature.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
