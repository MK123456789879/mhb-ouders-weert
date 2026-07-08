"use client";

import { QRCodeSVG } from "qrcode.react";
import { useContent } from "@/lib/cms";

export default function CommunityBand() {
  const { community, whatsappInvite } = useContent();
  return (
    <section
      id={community.id}
      className="bg-teal px-6 py-20 md:py-28"
      aria-labelledby="community-heading"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 id="community-heading" className="font-display text-cream">
            {community.h2}
          </h2>
          <p className="mt-4 text-cream/85">{community.sub}</p>
          <a
            href={whatsappInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-button bg-coral px-6 py-3 font-medium text-white transition-colors hover:bg-coral/90"
          >
            {community.ctaLabel}
          </a>
        </div>

        <div className="hidden flex-col items-center md:flex">
          <div className="rounded-card bg-white p-4">
            <QRCodeSVG
              value={whatsappInvite}
              size={140}
              bgColor="#FFFFFF"
              fgColor="#2E2E2E"
              level="M"
            />
          </div>
          <p className="label-text mt-3 text-cream/70">{community.qrCaption}</p>
        </div>
      </div>
    </section>
  );
}
