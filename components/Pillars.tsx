import {
  Calendar,
  Compass,
  MessageCircle,
  Users,
  type LucideIcon,
} from "lucide-react";
import { pillars } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  calendar: Calendar,
  compass: Compass,
  "message-circle": MessageCircle,
};

export default function Pillars() {
  return (
    <section
      id={pillars.id}
      className="bg-cream px-6 py-20 md:py-28"
      aria-labelledby="pillars-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="pillars-heading" className="text-teal">
          {pillars.h2}
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {pillars.items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <article
                key={item.title}
                className="rounded-card bg-teal-light p-6 shadow-soft"
              >
                <Icon
                  className="mb-4 h-5 w-5 text-gold"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="text-xl font-display text-ink">{item.title}</h3>
                <p className="mt-3 text-ink/80">{item.description}</p>
                {item.status === "soon" ? (
                  <span className="label-text mt-4 inline-block rounded-full border border-sage/40 px-3 py-1 text-sage">
                    Binnenkort
                  </span>
                ) : item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="mt-4 inline-block text-sm font-medium text-teal underline-offset-4 hover:underline"
                  >
                    {item.title === "Community"
                      ? "Naar WhatsApp"
                      : "Bekijk agenda"}
                  </a>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
