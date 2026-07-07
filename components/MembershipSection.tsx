import ContentImage from "@/components/ContentImage";
import { membership } from "@/lib/content";

export default function MembershipSection() {
  return (
    <section
      id={membership.id}
      className="bg-cream px-6 py-20 md:py-28"
      aria-labelledby="membership-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="membership-heading" className="text-teal">
          {membership.h2}
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {membership.cards.map((card) => (
            <article
              key={card.title}
              className="overflow-hidden rounded-card bg-white shadow-soft"
            >
              <ContentImage
                src={card.image.src}
                alt={card.image.alt}
                className="aspect-[4/3] w-full"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="p-6">
                <h3 className="font-display text-xl text-ink">{card.title}</h3>
                <p className="mt-3 text-ink/80">{card.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div
          id="wegwijzer"
          className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-2 border-t border-teal-light pt-8 text-sm text-ink/70"
        >
          {membership.upcoming.map((item, index) => (
            <span key={item.label} className="inline-flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden="true" className="text-sage">
                  ·
                </span>
              )}
              {item.href ? (
                <a
                  href={item.href}
                  className="font-medium text-teal underline-offset-4 hover:underline"
                >
                  {item.label}
                </a>
              ) : (
                <span>
                  {item.label}{" "}
                  <span className="text-sage italic">({item.status})</span>
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
