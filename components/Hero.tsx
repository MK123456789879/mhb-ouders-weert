import HeroImage from "@/components/HeroImage";
import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <p className="label-text mb-6 text-sage">{hero.eyebrow}</p>
          <h1>
            {hero.h1.before}
            <em className="italic">{hero.h1.emphasis}</em>
            {hero.h1.after}
          </h1>
          <p className="mt-6 max-w-lg text-ink/80">{hero.sub}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={hero.ctas.primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-button bg-coral px-6 py-3 font-medium text-white transition-colors hover:bg-coral/90"
            >
              {hero.ctas.primary.label}
            </a>
            <a
              href={hero.ctas.secondary.href}
              className="rounded-button border border-teal px-6 py-3 font-medium text-teal transition-colors hover:bg-teal-light"
            >
              {hero.ctas.secondary.label}
            </a>
          </div>
        </div>

        <HeroImage
          src={hero.heroImage.src}
          alt={hero.heroImage.alt}
          className="order-1 aspect-[4/5] w-full md:order-2 md:aspect-[3/4]"
        />
      </div>
    </section>
  );
}
