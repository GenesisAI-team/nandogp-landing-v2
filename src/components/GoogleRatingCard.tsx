/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { MouseEvent } from "react";

interface GoogleRatingCardProps {
  rating: number;
  reviewCount: number;
  href?: string;
  businessName?: string;
  ctaLabel?: string;
  className?: string;
  size?:  "md" | "mobile";
}

const SIZE_PRESETS = {
  mobile: {
    logo: "h-8 w-30",
    star: "h-4 w-4",
    text: "text-sm",
    padding: "p-3",
    starGap: "",
    maxWidth: "max-w-[200px]",
    rounding: "rounded-xl",
    dimension: "",
   
  },
  md: {
    logo: "h-8 w-30",
    star: "h-4 w-4",
    text: "text-sm",
    padding: "p-3",
    starGap: "gap-0.5",
    maxWidth: "",
    rounding: "rounded-xl",
    dimension: "w-[15rem]",
  },
} as const;

export default function GoogleRatingCard({
  rating,
  reviewCount,
  href = "#",
  businessName,
  ctaLabel,
  className = "",
  size = "md",
}: GoogleRatingCardProps) {
  const preset = SIZE_PRESETS[size];

  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  const isPlaceholder = href === "#";

  const ariaLabel = `${businessName ?? "NANDO-GP"}: ${rating} de 5 estrellas, ${reviewCount} reseñas en Google`;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isPlaceholder) {
      e.preventDefault();
    }
  };

  const linkProps = isPlaceholder
    ? {}
    : { target: "_blank", rel: "noopener noreferrer" as const };

  return (
    <a
      href={href}
      {...linkProps}
      title={isPlaceholder ? "Enlace de Google Reviews pendiente" : undefined}
      aria-label={ariaLabel}
      onClick={handleClick}
      className={`inline-flex flex-col items-center ${preset.dimension} ${preset.padding} ${preset.maxWidth} ${preset.rounding} bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_24px_-4px_rgba(0,0,0,0.12)] transition-shadow ${className}`}
    >
      <img
        src="/icons/google-icon.webp"
        alt="Google"
        className={`${preset.logo} object-contain shrink-0`}
      />

      <div className={`flex items-center`}>
        {Array.from({ length: fullStars }).map((_, i) => (
          <img
            key={`full-${i}`}
            src="/icons/star-icon.webp"
            alt=""
            className={`${preset.star} object-contain shrink-0`}
          />
        ))}
        {hasHalf && (
          <div className={`relative shrink-0 ${preset.star}`}>
            <img
              src="/icons/star-icon.webp"
              alt=""
              className="w-full h-full object-contain grayscale opacity-40"
            />
            <img
              src="/icons/star-icon.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-contain"
              style={{ clipPath: "inset(0 50% 0 0)" }}
            />
          </div>
        )}
      </div>

      <span className={`${preset.text} text-gray-700 font-bold text-center mt-0.5 leading-tight`}>
        {rating} | {reviewCount} reseñas
      </span>

      
    </a>
  );
}
