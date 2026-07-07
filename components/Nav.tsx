import { nav } from "@/lib/content";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-teal-light bg-cream/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4"
        aria-label="Hoofdnavigatie"
      >
        <a
          href="#"
          className="font-display text-xl text-teal md:text-2xl"
        >
          {nav.wordmark}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink transition-colors hover:text-teal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={nav.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-button bg-coral px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-coral/90"
        >
          {nav.cta.label}
        </a>
      </nav>
    </header>
  );
}
