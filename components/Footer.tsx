import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-teal-light bg-cream px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="font-display text-2xl text-teal">{footer.wordmark}</p>
            <p className="mt-3 max-w-xs text-sm text-ink/70">
              {footer.tagline}
            </p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="label-text text-sage">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-ink/80 transition-colors hover:text-teal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-sm text-sage">{footer.disclaimer}</p>
        <p className="mt-4 text-sm text-ink/60">{footer.copyright}</p>
      </div>
    </footer>
  );
}
