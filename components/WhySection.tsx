"use client";

import { useContent } from "@/lib/cms";

export default function WhySection() {
  const { why } = useContent();
  return (
    <section
      id={why.id}
      className="bg-cream px-6 py-20 md:py-28"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2 id="why-heading" className="text-teal">
          {why.h2}
        </h2>
        <div className="mt-8 space-y-6 text-ink/85">
          {why.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
