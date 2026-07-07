"use client";

import Image from "next/image";
import { useState } from "react";

type HeroImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function HeroImage({ src, alt, className = "" }: HeroImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`relative overflow-hidden rounded-card bg-gradient-to-br from-teal-light via-cream to-coral-light ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full opacity-30"
          viewBox="0 0 400 500"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 320 20 C 300 120, 340 220, 310 320 S 290 420, 330 480"
            stroke="#2D7D78"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-card ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
