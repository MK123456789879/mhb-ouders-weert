export const WHATSAPP_INVITE =
  "https://chat.whatsapp.com/REPLACE_WITH_INVITE_CODE";

export const site = {
  wordmark: "MHB Ouders Weert",
};

export const nav = {
  wordmark: site.wordmark,
  links: [
    { label: "Over ons", href: "#over-ons" },
    { label: "Agenda", href: "#agenda" },
    { label: "Wegwijzer", href: "#wegwijzer" },
    { label: "Community", href: "#community" },
  ],
  cta: {
    label: "Naar de community",
    href: WHATSAPP_INVITE,
  },
};

export const hero = {
  eyebrow: "VOOR OUDERS VAN HOOGBEGAAFDE KINDEREN · REGIO WEERT",
  h1: {
    before: "Een plek voor ",
    emphasis: "hoogbegaafde",
    after: " geesten.",
  },
  sub: "Samen navigeren we door de mooie complexiteit van het opvoeden van intellectueel getalenteerde kinderen in de regio Weert en Nederweert.",
  heroImage: {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=80&auto=format&fit=crop",
    alt: "Kind geconcentreerd bezig in zacht ochtendlicht",
  },
  ctas: {
    primary: { label: "Sluit je aan", href: WHATSAPP_INVITE },
    secondary: { label: "Ontdek wat we doen", href: "#over-ons" },
  },
};

export const why = {
  id: "over-ons",
  h2: "Je kent het gevoel.",
  paragraphs: [
    "Een kind dat op zijn vijfde al vloeiend leest, maar elke ochtend huilt voor school. Tien instanties gebeld. Weken wachttijd. En steeds weer het gevoel dat niemand het écht snapt.",
    "Wij snappen het wel. Omdat wij ook ouders zijn van kinderen zoals die van jou. Wat begon als een appgroep, groeit uit tot een plek waar kennis, hulp en herkenning samenkomen.",
  ],
};

export const missionVision = {
  mission: {
    title: "Onze missie",
    body: "Ouders van hoogbegaafde kinderen in Midden-Limburg met elkaar verbinden, wegwijs maken in het aanbod van zorg en onderwijs, en samen sterker maken. Laagdrempelig, warm, en zonder wachtlijst.",
  },
  vision: {
    title: "Waar we heen gaan",
    body: "Van een informele appgroep naar een stichting die de regio dekt: een blijvende, door ouders gedragen plek waar niemand er meer alleen voor staat.",
  },
};

export type PillarStatus = "live" | "soon";

export const pillars = {
  id: "wegwijzer",
  h2: "Wat we doen",
  items: [
    {
      title: "Community",
      description:
        "Direct contact met ouders die het herkennen, elke dag, in onze WhatsApp-groep.",
      status: "live" as PillarStatus,
      href: WHATSAPP_INVITE,
      icon: "users" as const,
    },
    {
      title: "Agenda",
      description: "Activiteiten en trajecten voor je kind, op één plek.",
      status: "live" as PillarStatus,
      href: "#agenda",
      icon: "calendar" as const,
    },
    {
      title: "Wegwijzer",
      description:
        "Overzicht van zorg en onderwijs in de regio die hoogbegaafdheid écht kennen.",
      status: "soon" as PillarStatus,
      icon: "compass" as const,
    },
    {
      title: "Onze chatbot",
      description: "Laagdrempelig je vraag stellen, dag en nacht.",
      status: "soon" as PillarStatus,
      icon: "message-circle" as const,
    },
  ],
};

export const agenda = {
  id: "agenda",
  h2: "Agenda",
  intro:
    "Sommige dingen doe je één keer, andere bouw je samen op. Losse activiteiten en doorlopende trajecten staan hier naast elkaar.",
  activities: [
    {
      date: "za 12 jul",
      title: "Ontdekmiddag sterrenkunde",
      age: "8–12 jr",
      location: "Weert",
    },
    {
      date: "wo 16 jul",
      title: "Ouderborrel",
      location: "Nederweert",
    },
  ],
  trajectories: [
    {
      title: "Blok: Ontwerp je eigen spel",
      sessions: "6 sessies",
      age: "7–12 jr",
      schedule: "vrijdags",
      badge: "Reeks · sessie 1 van 6",
    },
    {
      title: "Blok: Filosoferen met kinderen",
      sessions: "4 sessies",
      age: "9–12 jr",
      badge: "Reeks · inschrijving per blok",
    },
  ],
};

export const community = {
  id: "community",
  h2: "Klaar om je aan te sluiten?",
  sub: "Word onderdeel van een groep ouders die het écht snapt. Gratis, en dichtbij.",
  cta: {
    label: "Open WhatsApp-community",
    href: WHATSAPP_INVITE,
  },
  qrCaption: "Scan met je telefoon",
};

export const footer = {
  wordmark: site.wordmark,
  tagline:
    "De plek waar ouders van hoogbegaafde kinderen in Midden-Limburg samenkomen.",
  columns: [
    {
      title: "Ontdek",
      links: [
        { label: "Over ons", href: "#over-ons" },
        { label: "Agenda", href: "#agenda" },
        { label: "Community", href: "#community" },
      ],
    },
    {
      title: "Contact",
      links: [{ label: "WhatsApp-community", href: WHATSAPP_INVITE }],
    },
  ],
  disclaimer:
    "MHB Ouders Weert is een ouderinitiatief in oprichting. Informatie op deze site is met zorg samengesteld en dient ter oriëntatie.",
  copyright: "© 2026 MHB Ouders Weert",
};
