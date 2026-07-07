# Beslissingen & afwijkingen

Documentatie van keuzes die zijn gemaakt tijdens het bouwen van dit prototype, inclusief eventuele afwijkingen van de oorspronkelijke brief.

## Stack

- **Tailwind CSS v4** in plaats van een apart `tailwind.config.ts`-bestand. Design tokens staan in `app/globals.css` via `@theme` en CSS-variabelen — functioneel gelijk aan de brief, maar volgens het Tailwind v4-patroon.
- **Handmatige project-setup** i.p.v. `create-next-app` in de projectmap, omdat de mapnaam spaties en hoofdletters bevat (npm-beperking).

## Design

- **Doodle-lijn**: één doorlopend SVG-pad langs de rechterkant van de pagina, teal, ~1.5px. Lichte draw-animatie bij laden; uitgeschakeld bij `prefers-reduced-motion`.
- **Teal als hoofdkleur**, koraal alleen op CTA's (nav, hero, community-band).
- **Hero**: full-bleed cover (min. 70vh desktop) met tekst over een donkere gradient — geïnspireerd op de warme, fotogedreven studiokauw-pagina. Geen split-layout meer.
- **Missie & Visie-sectie**: witte achtergrond (`bg-white`) voor visuele scheiding tussen editorial blokken.

## Doelgroep-framing

- Copy gebruikt de bredere, inclusievere formulering uit de bijgewerkte brief: *(groot)ouders* met een kind met *ontwikkelingsvoorsprong óf kenmerken van hoogbegaafdheid*.
- Sectie §6.5 heet nu **"Waarom lid worden?"** met drie fotokaarten (geen iconen), plus een rustige upcoming-strip voor Agenda / HB Wegwijzer / chatbot.

## Afbeeldingen (Unsplash)

| Plaats | Foto | Query |
|--------|------|-------|
| Hero | `photo-1503454537195` | child concentration, morning light |
| Stel je vraag | `photo-1516627145497` | parent-child conversation |
| Connect met peers | `photo-1529156069898` | group conversation |
| HB-activiteiten | `photo-1588075592446` | kids hands, building blocks |

Fallback bij laadfout: teal→cream gradient met mini doodle-overlay (`ContentImage`-component).

## WhatsApp

- Canonieke hoofd-CTA: `https://chat.whatsapp.com/GoUIdeTtTHgCQztLSbdbHk`
- Eén constante in `lib/content.ts` (`WHATSAPP_INVITE`), overal hergebruikt.
- De aparte "activiteit-toevoegen"-groep is bewust **niet** als hoofd-CTA gebruikt.

## Deploy

- Vercel staat op privé-account (`mk123456789879` / team `marten-kopps-projects`), gekoppeld aan privé GitHub `MK123456789879/mhb-ouders-weert`.

## Buiten scope (bewust niet gebouwd)

- Auth, database, backend
- Extra pagina's (Wegwijzer-detail, chatbot)
- Browser storage
- shadcn of andere UI-libraries
