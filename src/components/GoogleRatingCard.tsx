/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import type { MouseEvent } from "react";
import { PenTool } from "lucide-react";
import { GOOGLE_REVIEWS } from "../config/googleReviews";

interface GoogleRatingCardProps {
  rating: number;
  reviewCount: number;
  href?: string;
  businessName?: string;
  className?: string;
  size?: "md" | "mobile";
  writeReviewHref?: string;
  showWriteReview?: boolean;
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
    writeLayout: "inline",
    writeBtn: "mt-1 text-[10px]",
    writeIcon: "w-3 h-3",
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
    writeLayout: "block",
    writeBtn: "py-1.5 px-3 text-xs",
    writeIcon: "w-3.5 h-3.5",
  },
} as const;

export default function GoogleRatingCard({
  rating,
  reviewCount,
  href = "#",
  businessName,
  className = "",
  size = "md",
  writeReviewHref = GOOGLE_REVIEWS.writeReviewUrl,
  showWriteReview = true,
}: GoogleRatingCardProps) {
  const preset = SIZE_PRESETS[size];

  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  const isPlaceholder = href === "#";

  const ariaLabel = `${businessName ?? "NANDO-GP"}: ${rating} de 5 estrellas, ${reviewCount} reseñas en Google`;

  const linkProps = isPlaceholder
    ? {}
    : { target: "_blank", rel: "noopener noreferrer" as const };

  return (
    <div
      className={`relative inline-flex flex-col items-center ${preset.dimension} ${preset.padding} ${preset.maxWidth} ${preset.rounding} bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_24px_-4px_rgba(0,0,0,0.12)] transition-shadow ${className}`}
    >
      <a
        href={href}
        {...linkProps}
        title={isPlaceholder ? "Enlace de Google Reviews pendiente" : undefined}
        aria-label={ariaLabel}
        onClick={(e: MouseEvent<HTMLAnchorElement>) => {
          if (isPlaceholder) e.preventDefault();
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 pointer-events-none flex flex-col items-center w-full">
        <img
          src="/icons/google-icon.webp"
          alt="Google"
          className={`${preset.logo} object-contain shrink-0`}
        />

        <div className={`flex items-center ${preset.starGap}`}>
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
      </div>

      {showWriteReview && preset.writeLayout === "block" && (
        <>
          <div className="relative z-10 w-full h-px bg-gray-100 my-2.5" />
          <a
            href={writeReviewHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative z-10 ${preset.writeBtn} w-full inline-flex items-center justify-center space-x-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold transition-colors cursor-pointer`}
          >
            <PenTool className={`${preset.writeIcon} text-gray-700`} />
            <span>Redactar Reseña</span>
          </a>
        </>
      )}

      {showWriteReview && preset.writeLayout === "inline" && (
        <a
          href={writeReviewHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative z-10 ${preset.writeBtn} inline-flex items-center space-x-1 text-[#4285F4] font-bold cursor-pointer hover:underline`}
        >
          <PenTool className={`${preset.writeIcon} text-[#4285F4]`} />
          <span>Redactar Reseña</span>
        </a>
      )}
    </div>
  );
}
