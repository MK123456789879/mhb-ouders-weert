export type ContentImageData = { src: string; alt: string };
export type LinkItem = { label: string; href: string };
export type UpcomingItem = { label: string; href: string; status: string };
export type MembershipCard = {
  title: string;
  description: string;
  image: ContentImageData;
};
export type ActivityItem = {
  date: string;
  title: string;
  age: string;
  location: string;
};
export type TrajectoryItem = {
  title: string;
  sessions: string;
  age: string;
  schedule: string;
  badge: string;
};

export const defaultContent = {
  whatsappInvite: "https://chat.whatsapp.com/GoUIdeTtTHgCQztLSbdbHk",
  wordmark: "MHB Ouders Weert",

  nav: {
    links: [
      { label: "Over ons", href: "#over-ons" },
      { label: "Agenda", href: "#agenda" },
      { label: "Wegwijzer", href: "#wegwijzer" },
      { label: "Community", href: "#community" },
    ] as LinkItem[],
    ctaLabel: "Naar de community",
  },

  hero: {
    eyebrow: "HB OUDERS COMMUNITY · WEERT & NEDERWEERT",
    h1: {
      before: "Je hoeft dit niet ",
      emphasis: "alléén",
      after: " uit te zoeken.",
    },
    sub: "Voor (groot)ouders met een kind met een ontwikkelingsvoorsprong of kenmerken van hoogbegaafdheid. Stel vragen, deel ervaringen en vind passende activiteiten — samen met ouders uit jouw regio.",
    image: {
      src: "https://plus.unsplash.com/premium_photo-1663040460452-ef2d644aaa94?w=1600&q=80&auto=format&fit=crop",
      alt: "Twee meisjes vol energie op de bank, lachen en juichen",
    } as ContentImageData,
    primaryCtaLabel: "Open de WhatsApp-community",
    secondaryCtaLabel: "Bekijk de agenda",
    secondaryCtaHref: "#agenda",
  },

  why: {
    id: "over-ons",
    h2: "Je kent het gevoel.",
    paragraphs: [
      "Een kind dat op zijn vijfde al vloeiend leest, maar elke ochtend huilt voor school. Tien instanties gebeld. Weken wachttijd. En steeds weer het gevoel dat niemand het écht snapt.",
      "Wij snappen het wel. Omdat wij ook ouders zijn van kinderen zoals die van jou. Wat begon als een appgroep, groeit uit tot een plek waar kennis, hulp en herkenning samenkomen.",
    ] as string[],
  },

  missionVision: {
    mission: {
      title: "Onze missie",
      body: "Ouders van hoogbegaafde kinderen in Midden-Limburg met elkaar verbinden, wegwijs maken in het aanbod van zorg en onderwijs, en samen sterker maken. Laagdrempelig, warm, en zonder wachtlijst.",
    },
    vision: {
      title: "Waar we heen gaan",
      body: "Van een informele appgroep naar een stichting die de regio dekt: een blijvende, door ouders gedragen plek waar niemand er meer alleen voor staat.",
    },
  },

  membership: {
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
    ] as MembershipCard[],
    upcoming: [
      { label: "Agenda", href: "#agenda", status: "live" },
      { label: "HB Wegwijzer", href: "", status: "binnenkort" },
      { label: "Onze chatbot", href: "", status: "binnenkort" },
    ] as UpcomingItem[],
  },

  agenda: {
    id: "agenda",
    h2: "Agenda",
    intro:
      "Sommige dingen doe je één keer, andere bouw je samen op. Losse activiteiten en doorlopende trajecten staan hier naast elkaar.",
    activitiesLabel: "Losse activiteiten",
    trajectoriesLabel: "Trajecten & reeksen",
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
        age: "",
        location: "Nederweert",
      },
    ] as ActivityItem[],
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
        schedule: "",
        badge: "Reeks · inschrijving per blok",
      },
    ] as TrajectoryItem[],
  },

  community: {
    id: "community",
    h2: "Klaar om je aan te sluiten?",
    sub: "Word onderdeel van een groep ouders die het écht snapt. Gratis, en dichtbij.",
    ctaLabel: "Open WhatsApp-community",
    qrCaption: "Scan met je telefoon",
  },

  footer: {
    tagline:
      "De plek waar ouders van hoogbegaafde kinderen in Midden-Limburg samenkomen.",
    ontdekTitle: "Ontdek",
    ontdekLinks: [
      { label: "Over ons", href: "#over-ons" },
      { label: "Agenda", href: "#agenda" },
      { label: "Community", href: "#community" },
    ] as LinkItem[],
    contactTitle: "Contact",
    contactLabel: "WhatsApp-community",
    disclaimer:
      "MHB Ouders Weert is een ouderinitiatief in oprichting. Informatie op deze site is met zorg samengesteld en dient ter oriëntatie.",
    copyright: "© 2026 MHB Ouders Weert",
  },
};

export type SiteContent = typeof defaultContent;

export const WHATSAPP_INVITE = defaultContent.whatsappInvite;
