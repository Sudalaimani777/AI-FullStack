// client/src/components/mobile-storefront/MobileCatalogStatus.tsx
import React, { useState } from "react";

interface MobileCatalogStatusProps {
  displayedCount: number;
  totalCount: number;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-low" },
  { label: "Price: High to Low", value: "price-high" },
  { label: "Newest Pieces", value: "newest" },
];

export const MobileCatalogStatus: React.FC<MobileCatalogStatusProps> = ({
  displayedCount,
  totalCount,
  sortBy,
  onSortChange,
}) => {
  const [sortOpen, setSortOpen] = useState(false);
  const currentOption = SORT_OPTIONS.find((o) => o.value === sortBy) || SORT_OPTIONS[0];

  return (
    <section className="px-margin-mobile pt-3 pb-2 flex items-center justify-between relative">
      <div className="flex items-center gap-1.5 min-w-0">
        <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray truncate">
          Showing {displayedCount} of {totalCount} Curated Pieces
        </span>
        <span className="w-1 h-1 rounded-full bg-muted-sand shrink-0" />
        <span className="font-label-micro text-label-micro text-status-peach-text bg-status-peach-bg px-1.5 py-0.5 rounded shrink-0 font-medium">
          Reserve
        </span>
      </div>

      <div className="relative shrink-0">
        <button
          type="button"
          onClick={() => setSortOpen(!sortOpen)}
          className="flex items-center gap-1 text-ink-charcoal font-label-input text-label-input active:opacity-70 cursor-pointer"
        >
          <span className="text-mineral-gray font-normal">Sort:</span>
          <span>{currentOption.label}</span>
          <span className="material-symbols-outlined text-[16px] text-mineral-gray">
            expand_more
          </span>
        </button>

        {sortOpen && (
          <div className="absolute right-0 top-full mt-1 bg-surface-card border border-border-card rounded-xl shadow-lg py-1 z-50 w-44">
            {SORT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => {
                  onSortChange(opt.value);
                  setSortOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2 text-xs transition-colors flex items-center justify-between ${
                  sortBy === opt.value
                    ? "bg-surface-container font-semibold text-ink-charcoal"
                    : "text-mineral-gray hover:bg-surface-container-low hover:text-ink-charcoal"
                }`}
              >
                <span>{opt.label}</span>
                {sortBy === opt.value && (
                  <span className="material-symbols-outlined text-[14px] text-terracotta-accent">
                    check
                  </span>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MobileCatalogStatus;
