"use client";

import Link from "next/link";
import {
  AddButton,
  EditorCard,
  ItemBox,
  TextArea,
  TextField,
} from "@/components/admin/fields";
import { useCms } from "@/lib/cms";
import type { SiteContent } from "@/lib/content";

export default function ContentEditor() {
  const { content, setContent, resetContent, logout } = useCms();

  const update = (updater: (prev: SiteContent) => SiteContent) => {
    setContent(updater);
  };

  return (
    <div className="min-h-screen bg-cream">
      <header className="sticky top-0 z-50 border-b border-teal-light bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div>
            <p className="font-display text-xl text-teal">MHB Ouders Weert</p>
            <p className="text-sm text-sage">Beheer — demo CMS</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="rounded-button border border-teal px-3 py-2 text-sm font-medium text-teal transition-colors hover:bg-teal-light"
            >
              Bekijk site ↗
            </Link>
            <button
              type="button"
              onClick={() => {
                if (
                  confirm(
                    "Alle wijzigingen terugzetten naar de standaardinhoud?",
                  )
                ) {
                  resetContent();
                }
              }}
              className="rounded-button border border-sage/50 px-3 py-2 text-sm text-ink/70 transition-colors hover:bg-white"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={logout}
              className="rounded-button bg-teal px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-teal/90"
            >
              Uitloggen
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-8 px-6 py-10">
        <p className="rounded-card border border-teal-light bg-teal-light/40 px-4 py-3 text-sm text-ink/80">
          Wijzigingen worden <strong>direct opgeslagen</strong> in je browser
          (localStorage) en zijn zichtbaar op de site. Open de site in een
          nieuw tabblad om het resultaat te bekijken.
        </p>

        {/* Algemeen */}
        <EditorCard
          title="Algemeen"
          description="Wordmark en WhatsApp-communitylink — gebruikt op meerdere plekken."
        >
          <TextField
            label="Wordmark"
            value={content.wordmark}
            onChange={(v) => update((c) => ({ ...c, wordmark: v }))}
          />
          <TextField
            label="WhatsApp-invite URL"
            value={content.whatsappInvite}
            onChange={(v) => update((c) => ({ ...c, whatsappInvite: v }))}
          />
          <TextField
            label="Navigatie CTA-label"
            value={content.nav.ctaLabel}
            onChange={(v) =>
              update((c) => ({ ...c, nav: { ...c.nav, ctaLabel: v } }))
            }
          />
        </EditorCard>

        {/* Hero */}
        <EditorCard title="Hero" description="Coverfoto en hoofdboodschap.">
          <TextField
            label="Eyebrow"
            value={content.hero.eyebrow}
            onChange={(v) =>
              update((c) => ({ ...c, hero: { ...c.hero, eyebrow: v } }))
            }
          />
          <div className="grid gap-3 sm:grid-cols-3">
            <TextField
              label="H1 — voor nadruk"
              value={content.hero.h1.before}
              onChange={(v) =>
                update((c) => ({
                  ...c,
                  hero: { ...c.hero, h1: { ...c.hero.h1, before: v } },
                }))
              }
            />
            <TextField
              label="H1 — nadruk (italic)"
              value={content.hero.h1.emphasis}
              onChange={(v) =>
                update((c) => ({
                  ...c,
                  hero: { ...c.hero, h1: { ...c.hero.h1, emphasis: v } },
                }))
              }
            />
            <TextField
              label="H1 — na nadruk"
              value={content.hero.h1.after}
              onChange={(v) =>
                update((c) => ({
                  ...c,
                  hero: { ...c.hero, h1: { ...c.hero.h1, after: v } },
                }))
              }
            />
          </div>
          <TextArea
            label="Subtekst"
            value={content.hero.sub}
            rows={3}
            onChange={(v) =>
              update((c) => ({ ...c, hero: { ...c.hero, sub: v } }))
            }
          />
          <TextField
            label="Afbeelding URL"
            value={content.hero.image.src}
            onChange={(v) =>
              update((c) => ({
                ...c,
                hero: {
                  ...c.hero,
                  image: { ...c.hero.image, src: v },
                },
              }))
            }
          />
          <TextField
            label="Afbeelding alt-tekst"
            value={content.hero.image.alt}
            onChange={(v) =>
              update((c) => ({
                ...c,
                hero: {
                  ...c.hero,
                  image: { ...c.hero.image, alt: v },
                },
              }))
            }
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <TextField
              label="Primaire CTA"
              value={content.hero.primaryCtaLabel}
              onChange={(v) =>
                update((c) => ({
                  ...c,
                  hero: { ...c.hero, primaryCtaLabel: v },
                }))
              }
            />
            <TextField
              label="Secundaire CTA"
              value={content.hero.secondaryCtaLabel}
              onChange={(v) =>
                update((c) => ({
                  ...c,
                  hero: { ...c.hero, secondaryCtaLabel: v },
                }))
              }
            />
          </div>
        </EditorCard>

        {/* Waarom */}
        <EditorCard title="Waarom (herkenning)">
          <TextField
            label="Kop"
            value={content.why.h2}
            onChange={(v) =>
              update((c) => ({ ...c, why: { ...c.why, h2: v } }))
            }
          />
          {content.why.paragraphs.map((paragraph, index) => (
            <ItemBox
              key={index}
              title={`Alinea ${index + 1}`}
              onRemove={
                content.why.paragraphs.length > 1
                  ? () =>
                      update((c) => ({
                        ...c,
                        why: {
                          ...c.why,
                          paragraphs: c.why.paragraphs.filter(
                            (_, i) => i !== index,
                          ),
                        },
                      }))
                  : undefined
              }
            >
              <TextArea
                label="Tekst"
                value={paragraph}
                rows={3}
                onChange={(v) =>
                  update((c) => {
                    const paragraphs = [...c.why.paragraphs];
                    paragraphs[index] = v;
                    return { ...c, why: { ...c.why, paragraphs } };
                  })
                }
              />
            </ItemBox>
          ))}
          <AddButton
            label="Alinea toevoegen"
            onClick={() =>
              update((c) => ({
                ...c,
                why: {
                  ...c.why,
                  paragraphs: [...c.why.paragraphs, ""],
                },
              }))
            }
          />
        </EditorCard>

        {/* Missie & Visie */}
        <EditorCard title="Missie & Visie">
          <ItemBox title="Missie">
            <TextField
              label="Kop"
              value={content.missionVision.mission.title}
              onChange={(v) =>
                update((c) => ({
                  ...c,
                  missionVision: {
                    ...c.missionVision,
                    mission: { ...c.missionVision.mission, title: v },
                  },
                }))
              }
            />
            <TextArea
              label="Tekst"
              value={content.missionVision.mission.body}
              rows={4}
              onChange={(v) =>
                update((c) => ({
                  ...c,
                  missionVision: {
                    ...c.missionVision,
                    mission: { ...c.missionVision.mission, body: v },
                  },
                }))
              }
            />
          </ItemBox>
          <ItemBox title="Visie">
            <TextField
              label="Kop"
              value={content.missionVision.vision.title}
              onChange={(v) =>
                update((c) => ({
                  ...c,
                  missionVision: {
                    ...c.missionVision,
                    vision: { ...c.missionVision.vision, title: v },
                  },
                }))
              }
            />
            <TextArea
              label="Tekst"
              value={content.missionVision.vision.body}
              rows={4}
              onChange={(v) =>
                update((c) => ({
                  ...c,
                  missionVision: {
                    ...c.missionVision,
                    vision: { ...c.missionVision.vision, body: v },
                  },
                }))
              }
            />
          </ItemBox>
        </EditorCard>

        {/* Lid worden */}
        <EditorCard
          title="Waarom lid worden?"
          description="Fotokaarten en upcoming-strip."
        >
          <TextField
            label="Sectiekop"
            value={content.membership.h2}
            onChange={(v) =>
              update((c) => ({
                ...c,
                membership: { ...c.membership, h2: v },
              }))
            }
          />
          {content.membership.cards.map((card, index) => (
            <ItemBox
              key={index}
              title={`Kaart ${index + 1}: ${card.title || "Nieuw"}`}
              onRemove={() =>
                update((c) => ({
                  ...c,
                  membership: {
                    ...c.membership,
                    cards: c.membership.cards.filter((_, i) => i !== index),
                  },
                }))
              }
            >
              <TextField
                label="Titel"
                value={card.title}
                onChange={(v) =>
                  update((c) => {
                    const cards = [...c.membership.cards];
                    cards[index] = { ...cards[index], title: v };
                    return { ...c, membership: { ...c.membership, cards } };
                  })
                }
              />
              <TextArea
                label="Beschrijving"
                value={card.description}
                rows={2}
                onChange={(v) =>
                  update((c) => {
                    const cards = [...c.membership.cards];
                    cards[index] = { ...cards[index], description: v };
                    return { ...c, membership: { ...c.membership, cards } };
                  })
                }
              />
              <TextField
                label="Foto URL"
                value={card.image.src}
                onChange={(v) =>
                  update((c) => {
                    const cards = [...c.membership.cards];
                    cards[index] = {
                      ...cards[index],
                      image: { ...cards[index].image, src: v },
                    };
                    return { ...c, membership: { ...c.membership, cards } };
                  })
                }
              />
              <TextField
                label="Foto alt-tekst"
                value={card.image.alt}
                onChange={(v) =>
                  update((c) => {
                    const cards = [...c.membership.cards];
                    cards[index] = {
                      ...cards[index],
                      image: { ...cards[index].image, alt: v },
                    };
                    return { ...c, membership: { ...c.membership, cards } };
                  })
                }
              />
            </ItemBox>
          ))}
          <AddButton
            label="Kaart toevoegen"
            onClick={() =>
              update((c) => ({
                ...c,
                membership: {
                  ...c.membership,
                  cards: [
                    ...c.membership.cards,
                    {
                      title: "Nieuwe kaart",
                      description: "",
                      image: { src: "", alt: "" },
                    },
                  ],
                },
              }))
            }
          />

          <p className="label-text pt-4 text-sage">Upcoming-strip</p>
          {content.membership.upcoming.map((item, index) => (
            <ItemBox
              key={index}
              title={item.label || `Item ${index + 1}`}
              onRemove={() =>
                update((c) => ({
                  ...c,
                  membership: {
                    ...c.membership,
                    upcoming: c.membership.upcoming.filter(
                      (_, i) => i !== index,
                    ),
                  },
                }))
              }
            >
              <div className="grid gap-3 sm:grid-cols-3">
                <TextField
                  label="Label"
                  value={item.label}
                  onChange={(v) =>
                    update((c) => {
                      const upcoming = [...c.membership.upcoming];
                      upcoming[index] = { ...upcoming[index], label: v };
                      return { ...c, membership: { ...c.membership, upcoming } };
                    })
                  }
                />
                <TextField
                  label="Link (leeg = geen link)"
                  value={item.href}
                  onChange={(v) =>
                    update((c) => {
                      const upcoming = [...c.membership.upcoming];
                      upcoming[index] = { ...upcoming[index], href: v };
                      return { ...c, membership: { ...c.membership, upcoming } };
                    })
                  }
                />
                <TextField
                  label="Status"
                  value={item.status}
                  onChange={(v) =>
                    update((c) => {
                      const upcoming = [...c.membership.upcoming];
                      upcoming[index] = { ...upcoming[index], status: v };
                      return { ...c, membership: { ...c.membership, upcoming } };
                    })
                  }
                />
              </div>
            </ItemBox>
          ))}
        </EditorCard>

        {/* Agenda */}
        <EditorCard title="Agenda" description="Losse activiteiten en trajecten.">
          <TextField
            label="Sectiekop"
            value={content.agenda.h2}
            onChange={(v) =>
              update((c) => ({ ...c, agenda: { ...c.agenda, h2: v } }))
            }
          />
          <TextArea
            label="Intro"
            value={content.agenda.intro}
            rows={2}
            onChange={(v) =>
              update((c) => ({ ...c, agenda: { ...c.agenda, intro: v } }))
            }
          />

          <p className="label-text text-sage">Losse activiteiten</p>
          {content.agenda.activities.map((activity, index) => (
            <ItemBox
              key={index}
              title={activity.title || `Activiteit ${index + 1}`}
              onRemove={() =>
                update((c) => ({
                  ...c,
                  agenda: {
                    ...c.agenda,
                    activities: c.agenda.activities.filter(
                      (_, i) => i !== index,
                    ),
                  },
                }))
              }
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <TextField
                  label="Datum"
                  value={activity.date}
                  onChange={(v) =>
                    update((c) => {
                      const activities = [...c.agenda.activities];
                      activities[index] = { ...activities[index], date: v };
                      return { ...c, agenda: { ...c.agenda, activities } };
                    })
                  }
                />
                <TextField
                  label="Titel"
                  value={activity.title}
                  onChange={(v) =>
                    update((c) => {
                      const activities = [...c.agenda.activities];
                      activities[index] = { ...activities[index], title: v };
                      return { ...c, agenda: { ...c.agenda, activities } };
                    })
                  }
                />
                <TextField
                  label="Leeftijd"
                  value={activity.age}
                  onChange={(v) =>
                    update((c) => {
                      const activities = [...c.agenda.activities];
                      activities[index] = { ...activities[index], age: v };
                      return { ...c, agenda: { ...c.agenda, activities } };
                    })
                  }
                />
                <TextField
                  label="Locatie"
                  value={activity.location}
                  onChange={(v) =>
                    update((c) => {
                      const activities = [...c.agenda.activities];
                      activities[index] = {
                        ...activities[index],
                        location: v,
                      };
                      return { ...c, agenda: { ...c.agenda, activities } };
                    })
                  }
                />
              </div>
            </ItemBox>
          ))}
          <AddButton
            label="Activiteit toevoegen"
            onClick={() =>
              update((c) => ({
                ...c,
                agenda: {
                  ...c.agenda,
                  activities: [
                    ...c.agenda.activities,
                    {
                      date: "",
                      title: "Nieuwe activiteit",
                      age: "",
                      location: "",
                    },
                  ],
                },
              }))
            }
          />

          <p className="label-text pt-4 text-sage">Trajecten & reeksen</p>
          {content.agenda.trajectories.map((trajectory, index) => (
            <ItemBox
              key={index}
              title={trajectory.title || `Traject ${index + 1}`}
              onRemove={() =>
                update((c) => ({
                  ...c,
                  agenda: {
                    ...c.agenda,
                    trajectories: c.agenda.trajectories.filter(
                      (_, i) => i !== index,
                    ),
                  },
                }))
              }
            >
              <TextField
                label="Titel"
                value={trajectory.title}
                onChange={(v) =>
                  update((c) => {
                    const trajectories = [...c.agenda.trajectories];
                    trajectories[index] = {
                      ...trajectories[index],
                      title: v,
                    };
                    return { ...c, agenda: { ...c.agenda, trajectories } };
                  })
                }
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <TextField
                  label="Sessies"
                  value={trajectory.sessions}
                  onChange={(v) =>
                    update((c) => {
                      const trajectories = [...c.agenda.trajectories];
                      trajectories[index] = {
                        ...trajectories[index],
                        sessions: v,
                      };
                      return { ...c, agenda: { ...c.agenda, trajectories } };
                    })
                  }
                />
                <TextField
                  label="Leeftijd"
                  value={trajectory.age}
                  onChange={(v) =>
                    update((c) => {
                      const trajectories = [...c.agenda.trajectories];
                      trajectories[index] = {
                        ...trajectories[index],
                        age: v,
                      };
                      return { ...c, agenda: { ...c.agenda, trajectories } };
                    })
                  }
                />
                <TextField
                  label="Schema"
                  value={trajectory.schedule}
                  onChange={(v) =>
                    update((c) => {
                      const trajectories = [...c.agenda.trajectories];
                      trajectories[index] = {
                        ...trajectories[index],
                        schedule: v,
                      };
                      return { ...c, agenda: { ...c.agenda, trajectories } };
                    })
                  }
                />
                <TextField
                  label="Badge"
                  value={trajectory.badge}
                  onChange={(v) =>
                    update((c) => {
                      const trajectories = [...c.agenda.trajectories];
                      trajectories[index] = {
                        ...trajectories[index],
                        badge: v,
                      };
                      return { ...c, agenda: { ...c.agenda, trajectories } };
                    })
                  }
                />
              </div>
            </ItemBox>
          ))}
          <AddButton
            label="Traject toevoegen"
            onClick={() =>
              update((c) => ({
                ...c,
                agenda: {
                  ...c.agenda,
                  trajectories: [
                    ...c.agenda.trajectories,
                    {
                      title: "Nieuw traject",
                      sessions: "",
                      age: "",
                      schedule: "",
                      badge: "Reeks",
                    },
                  ],
                },
              }))
            }
          />
        </EditorCard>

        {/* Community */}
        <EditorCard title="Community-band">
          <TextField
            label="Kop"
            value={content.community.h2}
            onChange={(v) =>
              update((c) => ({
                ...c,
                community: { ...c.community, h2: v },
              }))
            }
          />
          <TextArea
            label="Subtekst"
            value={content.community.sub}
            rows={2}
            onChange={(v) =>
              update((c) => ({
                ...c,
                community: { ...c.community, sub: v },
              }))
            }
          />
          <TextField
            label="CTA-label"
            value={content.community.ctaLabel}
            onChange={(v) =>
              update((c) => ({
                ...c,
                community: { ...c.community, ctaLabel: v },
              }))
            }
          />
          <TextField
            label="QR-bijschrift"
            value={content.community.qrCaption}
            onChange={(v) =>
              update((c) => ({
                ...c,
                community: { ...c.community, qrCaption: v },
              }))
            }
          />
        </EditorCard>

        {/* Footer */}
        <EditorCard title="Footer">
          <TextArea
            label="Tagline"
            value={content.footer.tagline}
            rows={2}
            onChange={(v) =>
              update((c) => ({
                ...c,
                footer: { ...c.footer, tagline: v },
              }))
            }
          />
          <TextArea
            label="Disclaimer"
            value={content.footer.disclaimer}
            rows={3}
            onChange={(v) =>
              update((c) => ({
                ...c,
                footer: { ...c.footer, disclaimer: v },
              }))
            }
          />
          <TextField
            label="Copyright"
            value={content.footer.copyright}
            onChange={(v) =>
              update((c) => ({
                ...c,
                footer: { ...c.footer, copyright: v },
              }))
            }
          />
        </EditorCard>
      </main>
    </div>
  );
}
