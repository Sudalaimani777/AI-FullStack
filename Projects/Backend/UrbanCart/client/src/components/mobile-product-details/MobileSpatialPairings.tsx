// client/src/components/mobile-product-details/MobileSpatialPairings.tsx
import React from "react";
import type { SpatialPairingItem } from "./productPresets";

interface MobileSpatialPairingsProps {
  pairings: SpatialPairingItem[];
  onQuickPair: (item: SpatialPairingItem) => void;
}

export const MobileSpatialPairings: React.FC<MobileSpatialPairingsProps> = ({
  pairings,
  onQuickPair,
}) => {
  return (
    <section className="pt-8 flex flex-col gap-3">
      {/* Header and Atelier Suite Link */}
      <div className="px-margin-mobile flex items-baseline justify-between">
        <div className="flex flex-col">
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray tracking-wider font-semibold">
            Complementary Objects
          </span>
          <h3 className="font-title-card text-title-card text-ink-charcoal font-medium">
            Harmonious Spatial Pairings
          </h3>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-label-micro text-label-micro uppercase font-semibold text-terracotta-flame hover:underline tracking-wider"
        >
          Atelier Suite →
        </button>
      </div>

      {/* Horizontal Swipe Strip of Companion Products */}
      <div className="flex items-stretch gap-3 overflow-x-auto px-margin-mobile pb-2 pt-1 no-scrollbar">
        {pairings.map((item) => (
          <div
            key={item.id}
            className="shrink-0 w-44 rounded-xl bg-surface-card border border-border-card/50 shadow-xs p-2.5 flex flex-col justify-between"
          >
            <div className="aspect-square w-full rounded-lg overflow-hidden bg-surface-container relative">
              <img
                src={item.imageUrl}
                alt={item.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  if (item.fallbackUrl) {
                    (e.target as HTMLImageElement).src = item.fallbackUrl;
                  }
                }}
              />
              <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-surface/90 font-label-micro text-label-micro font-semibold uppercase text-ink-charcoal">
                {item.category}
              </span>
            </div>

            <div className="pt-2 flex flex-col gap-1">
              <span className="font-label-input text-label-input text-ink-charcoal truncate font-medium">
                {item.name}
              </span>
              <span className="font-body-sm text-body-sm font-semibold text-ink-charcoal">
                ${item.price.toFixed(2)}
              </span>
              <button
                type="button"
                onClick={() => onQuickPair(item)}
                className="mt-1.5 w-full py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-ink-charcoal font-label-micro text-label-micro uppercase font-semibold tracking-wider transition-colors"
              >
                + Quick Pair
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileSpatialPairings;
