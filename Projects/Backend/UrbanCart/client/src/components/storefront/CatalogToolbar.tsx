// client/src/components/storefront/CatalogToolbar.tsx
import React from "react";

interface CatalogToolbarProps {
  categories: { label: string; value: string }[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  isSkeletonPreview: boolean;
  onToggleSkeletonPreview: (val: boolean) => void;
  displayedCount: number;
  totalCount: number;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const CatalogToolbar: React.FC<CatalogToolbarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  isSkeletonPreview,
  onToggleSkeletonPreview,
  displayedCount,
  totalCount,
  sortBy,
  onSortChange,
}) => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-gutter pt-space-xl pb-space-md" id="catalog-grid">
      {/* Top Row: Category Selection Chips & View Switcher */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md pb-space-md">
        {/* Horizontal Scrollable Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => onSelectCategory(cat.value)}
                className={`cat-pill h-9 px-4 rounded-full font-label-input text-label-input shrink-0 transition-all cursor-pointer ${
                  isActive
                    ? "bg-ink-charcoal text-on-primary shadow-sm font-semibold"
                    : "bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-medium"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Right Controls: View Switcher / Simulator */}
        <div className="flex items-center gap-2 shrink-0 bg-surface-container p-1 rounded-xl">
          <span className="font-label-micro text-label-micro text-mineral-gray uppercase px-2 font-semibold">
            State:
          </span>
          <button
            type="button"
            onClick={() => onToggleSkeletonPreview(false)}
            className={`h-8 px-3 rounded-lg font-label-input text-label-input transition-all cursor-pointer ${
              !isSkeletonPreview
                ? "bg-surface-card text-ink-charcoal shadow-sm font-semibold"
                : "text-mineral-gray hover:text-on-surface"
            }`}
          >
            Default Grid
          </button>
          <button
            type="button"
            onClick={() => onToggleSkeletonPreview(true)}
            className={`h-8 px-3 rounded-lg font-label-input text-label-input transition-all cursor-pointer ${
              isSkeletonPreview
                ? "bg-surface-card text-ink-charcoal shadow-sm font-semibold"
                : "text-mineral-gray hover:text-on-surface"
            }`}
          >
            Skeleton Preview
          </button>
        </div>
      </div>

      {/* Secondary Filter Bar: Count & Sorting */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm pt-space-xs pb-space-sm">
        <div className="flex items-center gap-2">
          <p className="font-body-sm text-body-sm text-mineral-gray">
            Showing <span className="font-semibold text-ink-charcoal">{displayedCount}</span> of{" "}
            <span className="font-semibold text-ink-charcoal">{totalCount}</span> Curated Pieces
          </p>
          <span className="w-1.5 h-1.5 rounded-full bg-border-subtle" />
          <span className="font-label-micro text-label-micro uppercase text-terracotta-flame tracking-wider font-semibold">
            Atelier Reserve
          </span>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-3">
          <span className="font-label-input text-label-input text-mineral-gray">Sort by:</span>
          <div className="relative inline-block">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="appearance-none h-10 pl-3.5 pr-9 rounded-xl bg-surface-container font-label-input text-label-input text-ink-charcoal cursor-pointer focus:outline-none focus:bg-surface-container-high transition-colors"
            >
              <option value="featured">Featured Atelier Pieces</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest Arrivals</option>
            </select>
            <span className="material-symbols-outlined text-[18px] text-mineral-gray absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
              expand_more
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogToolbar;
