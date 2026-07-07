export const WHATSAPP_INVITE =
  "https://chat.whatsapp.com/GoUIdeTtTHgCQztLSbdbHk";

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
  eyebrow: "HB OUDERS COMMUNITY · WEERT & NEDERWEERT",
  h1: {
    before: "Je hoeft dit niet ",
    emphasis: "alléén",
    after: " uit te zoeken.",
  },
  sub: "Voor (groot)ouders met een kind met een ontwikkelingsvoorsprong of kenmerken van hoogbegaafdheid. Stel vragen, deel ervaringen en vind passende activiteiten — samen met ouders uit jouw regio.",
  heroImage: {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=80&auto=format&fit=crop",
    alt: "Kind geconcentreerd bezig in zacht ochtendlicht",
  },
  ctas: {
    primary: { label: "Open de WhatsApp-community", href: WHATSAPP_INVITE },
    secondary: { label: "Bekijk de agenda", href: "#agenda" },
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

export const membership = {
  id: "lid-worden",
  h2: "Waarom lid worden?",
  cards: [
    {
      title: "Stel je vraag",
      description:
        "Over school, begeleiding, diagnostiek of andere HB-gerelateerde vraagstukken.",
      image: {
        src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80&auto=format&fit=crop",
        alt: "Ouder en kind in een warm, intiem gesprek",
      },
    },
    {
      title: "Connect met peers",
      description:
        "Hoor hoe andere ouders trajecten met school, zorg of externe hulp hebben ervaren.",
      image: {
        src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop",
        alt: "Groep mensen in gesprek, warm en informeel",
      },
    },
    {
      title: "Gerichte HB-activiteiten",
      description:
        "Blijf op de hoogte van passende activiteiten voor kinderen en (groot)ouders.",
      image: {
        src: "https://images.unsplash.com/photo-1588075592446-265fd1a6f761?w=800&q=80&auto=format&fit=crop",
        alt: "Kinderhanden bouwen met blokken in natuurlijk licht",
      },
    },
  ],
  upcoming: [
    { label: "Agenda", href: "#agenda", status: "live" as const },
    { label: "HB Wegwijzer", status: "binnenkort" as const },
    { label: "Onze chatbot", status: "binnenkort" as const },
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
