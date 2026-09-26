// client/src/components/storefront/StorefrontEmptyState.tsx
import React from "react";

interface StorefrontEmptyStateProps {
  onResetFilters: () => void;
  hasFilters: boolean;
}

export const StorefrontEmptyState: React.FC<StorefrontEmptyStateProps> = ({
  onResetFilters,
  hasFilters,
}) => {
  return (
    <div className="col-span-full py-16 px-6 rounded-2xl bg-surface-card border border-border-card text-center flex flex-col items-center justify-center gap-4 shadow-sm my-6">
      <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-terracotta-accent">
        <span className="material-symbols-outlined text-3xl">inventory_2</span>
      </div>

      <div className="max-w-md space-y-1">
        <h3 className="font-headline-sm text-headline-sm text-ink-charcoal font-semibold">
          {hasFilters ? "No Matching Atelier Pieces" : "Atelier Vault Empty"}
        </h3>
        <p className="font-body-sm text-body-sm text-mineral-gray leading-relaxed">
          {hasFilters
            ? "We could not find any physical pieces matching your active curation filters or search query."
            : "No pieces are currently cataloged in the database. New artisanal consignment drops are scheduled weekly."}
        </p>
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={onResetFilters}
          className="h-10 px-5 rounded-xl bg-ink-charcoal text-white hover:bg-primary font-label-input text-label-input transition-all shadow-sm"
        >
          Reset All Curation Filters
        </button>
      )}
    </div>
  );
};

export default StorefrontEmptyState;
