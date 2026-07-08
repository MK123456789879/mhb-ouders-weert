"use client";

import ContentImage from "@/components/ContentImage";
import { useContent } from "@/lib/cms";

export default function Hero() {
  const { hero, whatsappInvite } = useContent();
  return (
    <section className="relative min-h-[85vh] md:min-h-[70vh]">
      <ContentImage
        src={hero.image.src}
        alt={hero.image.alt}
        rounded={false}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/35 to-ink/10"
      />

      <div className="relative z-10 flex min-h-[85vh] flex-col justify-end px-6 pb-12 pt-32 md:min-h-[70vh] md:pb-16 md:pt-40">
        <div className="mx-auto w-full max-w-3xl">
          <p className="label-text mb-4 text-cream/80">{hero.eyebrow}</p>
          <h1 className="text-cream">
            {hero.h1.before}
            <em className="italic">{hero.h1.emphasis}</em>
            {hero.h1.after}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-cream/90">{hero.sub}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={whatsappInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-button bg-coral px-6 py-3 font-medium text-white transition-colors hover:bg-coral/90"
            >
              {hero.primaryCtaLabel}
            </a>
            <a
              href={hero.secondaryCtaHref}
              className="rounded-button border border-cream/60 px-6 py-3 font-medium text-cream transition-colors hover:bg-cream/10"
            >
              {hero.secondaryCtaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
