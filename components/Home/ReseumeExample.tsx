"use client";

import Image from "next/image";

const examples = [
  {
    title: "Before Optimization",
    description: "A typical resume with generic formatting and no targeting.",
    image: "/images/resume-before.png", // Replace with your actual image path
  },
  {
    title: "After Optimization",
    description: "AI-optimized resume with strong keywords and a clean layout.",
    image: "/images/resume-after.png", // Replace with your actual image path
  },
];

export default function ResumeExamplesSection() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-20 bg-background dark:bg-muted/10">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Real Resume Transformations</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          See how our AI turns average resumes into standout applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {examples.map((example, index) => (
          <div
            key={index}
            className="rounded-xl border border-border shadow-md bg-white dark:bg-muted p-6 transition-transform hover:scale-[1.02] duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <h3 className="text-xl font-semibold mb-2">{example.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {example.description}
            </p>
            <div className="overflow-hidden rounded-lg">
              <Image
                src={example.image}
                alt={example.title}
                width={600}
                height={800}
                className="w-full h-auto object-cover border"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
