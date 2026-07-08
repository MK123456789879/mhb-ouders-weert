"use client";

import { useContent } from "@/lib/cms";

export default function Agenda() {
  const { agenda } = useContent();
  return (
    <section
      id={agenda.id}
      className="bg-white px-6 py-20 md:py-28"
      aria-labelledby="agenda-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="agenda-heading" className="text-teal">
          {agenda.h2}
        </h2>
        <p className="mt-4 max-w-2xl text-ink/80">{agenda.intro}</p>

        <div className="mt-12 space-y-8">
          <div>
            <h3 className="label-text mb-4 text-sage">
              {agenda.activitiesLabel}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {agenda.activities.map((activity, index) => (
                <article
                  key={`${activity.date}-${activity.title}-${index}`}
                  className="rounded-card border border-teal-light bg-cream p-6 shadow-soft"
                >
                  <p className="label-text text-teal">{activity.date}</p>
                  <h4 className="mt-2 font-display text-xl text-ink">
                    {activity.title}
                  </h4>
                  <p className="mt-2 text-sm text-sage">
                    {[activity.age, activity.location]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div>
            <h3 className="label-text mb-4 text-sage">
              {agenda.trajectoriesLabel}
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {agenda.trajectories.map((trajectory, index) => (
                <article
                  key={`${trajectory.title}-${index}`}
                  className="rounded-card border border-teal-light border-l-4 border-l-teal bg-teal-light/50 p-6 shadow-soft"
                >
                  <span className="label-text inline-block rounded-full bg-teal/10 px-3 py-1 text-teal">
                    {trajectory.badge}
                  </span>
                  <h4 className="mt-3 font-display text-xl text-ink">
                    {trajectory.title}
                  </h4>
                  <p className="mt-2 text-sm text-sage">
                    {[trajectory.sessions, trajectory.age, trajectory.schedule]
                      .filter(Boolean)
                      .join(" · ")}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
