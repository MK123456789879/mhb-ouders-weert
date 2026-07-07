import { why } from "@/lib/content";

export default function WhySection() {
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
          {why.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
