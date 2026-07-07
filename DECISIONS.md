# Beslissingen & afwijkingen

Documentatie van keuzes die zijn gemaakt tijdens het bouwen van dit prototype, inclusief eventuele afwijkingen van de oorspronkelijke brief.

## Stack

- **Tailwind CSS v4** in plaats van een apart `tailwind.config.ts`-bestand. Design tokens staan in `app/globals.css` via `@theme` en CSS-variabelen — functioneel gelijk aan de brief, maar volgens het Tailwind v4-patroon.
- **Handmatige project-setup** i.p.v. `create-next-app` in de projectmap, omdat de mapnaam spaties en hoofdletters bevat (npm-beperking).

## Design

- **Doodle-lijn**: één doorlopend SVG-pad langs de rechterkant van de pagina, teal, ~1.5px. Lichte draw-animatie bij laden; uitgeschakeld bij `prefers-reduced-motion`.
- **Teal als hoofdkleur**, koraal alleen op CTA's (nav, hero, community-band).
- **Missie & Visie-sectie**: witte achtergrond (`bg-white`) i.p.v. cream voor visuele scheiding tussen editorial blokken — past bij de rustige, tijdschrift-achtige opbouw.

## Hero-afbeelding

- Gekozen Unsplash-foto: kind geconcentreerd bezig in zacht ochtendlicht (`photo-1503454537195`).
- Query: *child concentration playing morning light*.
- Fallback bij laadfout: teal→cream gradient met mini doodle-overlay.

## WhatsApp

- Placeholder-URL: `https://chat.whatsapp.com/REPLACE_WITH_INVITE_CODE`
- Eén constante in `lib/content.ts`, overal hergebruikt.

## Buiten scope (bewust niet gebouwd)

- Auth, database, backend
- Extra pagina's (Wegwijzer-detail, chatbot)
- Browser storage
- shadcn of andere UI-libraries
