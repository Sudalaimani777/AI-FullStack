// client/src/components/mobile-product-details/MobileProductTitleRating.tsx
import React from "react";

interface MobileProductTitleRatingProps {
  category?: string;
  sku?: string;
  name: string;
  subtitle: string;
  rating?: number;
  reviewsCount?: number;
}

export const MobileProductTitleRating: React.FC<MobileProductTitleRatingProps> = ({
  category = "Architectural Lighting • Atelier Reserve",
  sku = "UC-LGT-0041",
  name,
  subtitle,
  rating = 4.9,
  reviewsCount = 48,
}) => {
  return (
    <section className="px-margin-mobile pt-3 flex flex-col gap-1.5">
      {/* Category Eyebrow & SKU Pill */}
      <div className="flex items-center justify-between gap-2">
        <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-wider text-mineral-gray font-medium">
          {category}
        </span>
        <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-medium">
          {sku}
        </span>
      </div>

      {/* Main Product Headline */}
      <h1 className="font-editorial text-2xl font-semibold tracking-tight text-ink-charcoal leading-tight">
        {name}
      </h1>

      {/* Subtitle / Material Anatomy */}
      <p className="font-sans text-xs text-mineral-gray font-normal leading-relaxed">
        {subtitle}
      </p>

      {/* Patron Appraisal & Star Rating */}
      <div className="flex items-center gap-2 pt-1">
        <div className="flex items-center text-terracotta-accent">
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              className="material-symbols-outlined text-[16px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
          ))}
        </div>
        <span className="font-semibold text-xs text-ink-charcoal">{rating.toFixed(1)}</span>
        <span className="text-xs text-mineral-gray">({reviewsCount} patron appraisals)</span>
      </div>
    </section>
  );
};

export default MobileProductTitleRating;
