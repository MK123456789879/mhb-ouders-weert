"use client";

import { useContent } from "@/lib/cms";

export default function MissionVision() {
  const { missionVision } = useContent();
  return (
    <section
      className="bg-white px-6 py-20 md:py-28"
      aria-labelledby="mission-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-24">
        <article>
          <h3 id="mission-heading" className="text-teal">
            {missionVision.mission.title}
          </h3>
          <p className="mt-6 text-ink/85">{missionVision.mission.body}</p>
        </article>
        <article>
          <h3 className="text-teal">{missionVision.vision.title}</h3>
          <p className="mt-6 text-ink/85">{missionVision.vision.body}</p>
        </article>
      </div>
    </section>
  );
}
