"use client";

import Image from "next/image";
import { useState } from "react";

type ContentImageProps = {
  src: string;
  alt: string;
  className?: string;
  rounded?: boolean;
  priority?: boolean;
  sizes?: string;
};

function ImageFallback({
  alt,
  className,
  rounded,
}: {
  alt: string;
  className: string;
  rounded: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-teal-light via-cream to-coral-light ${rounded ? "rounded-card" : ""} ${className}`}
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

export default function ContentImage({
  src,
  alt,
  className = "",
  rounded = true,
  priority = false,
  sizes = "100vw",
}: ContentImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <ImageFallback alt={alt} className={className} rounded={rounded} />;
  }

  return (
    <div
      className={`relative overflow-hidden ${rounded ? "rounded-card" : ""} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  );
}
