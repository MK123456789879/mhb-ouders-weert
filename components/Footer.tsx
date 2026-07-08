"use client";

import Link from "next/link";
import { useContent } from "@/lib/cms";

export default function Footer() {
  const { footer, wordmark, whatsappInvite } = useContent();
  return (
    <footer className="border-t border-teal-light bg-cream px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="font-display text-2xl text-teal">{wordmark}</p>
            <p className="mt-3 max-w-xs text-sm text-ink/70">{footer.tagline}</p>
          </div>

          <div>
            <h3 className="label-text text-sage">{footer.ontdekTitle}</h3>
            <ul className="mt-4 space-y-2">
              {footer.ontdekLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-ink/80 transition-colors hover:text-teal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="label-text text-sage">{footer.contactTitle}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={whatsappInvite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink/80 transition-colors hover:text-teal"
                >
                  {footer.contactLabel}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 max-w-2xl text-sm text-sage">{footer.disclaimer}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink/60">
          <p>{footer.copyright}</p>
          <Link
            href="/admin"
            className="text-ink/40 underline-offset-4 transition-colors hover:text-teal hover:underline"
          >
            Beheer (demo)
          </Link>
        </div>
      </div>
    </footer>
  );
}
