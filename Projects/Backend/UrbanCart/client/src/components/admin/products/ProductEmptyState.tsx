// client/src/components/admin/products/ProductEmptyState.tsx
import React from "react";

interface ProductEmptyStateProps {
  isSearching: boolean;
  onResetFilters: () => void;
  onAddProduct: () => void;
}

const ProductEmptyState: React.FC<ProductEmptyStateProps> = ({
  isSearching,
  onResetFilters,
  onAddProduct,
}) => {
  return (
    <div className="p-12 text-center bg-surface-card rounded-2xl border border-border-card shadow-[0px_8px_28px_0px_rgba(47,38,18,0.04)] my-6 flex flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-mineral-gray mb-4">
        <span className="material-symbols-outlined text-3xl">inventory_2</span>
      </div>

      <h3 className="font-headline-sm text-headline-sm font-semibold text-ink-charcoal mb-2">
        {isSearching
          ? "No Products Match Selected Filters"
          : "No Physical Pieces Registered in Vault"}
      </h3>

      <p className="font-body-md text-body-md text-mineral-gray max-w-md mx-auto mb-6">
        {isSearching
          ? "Try adjusting your search criteria or resetting filters to inspect the full catalog."
          : "Begin cataloging by registering your first atelier piece or importing consignment manifests."}
      </p>

      <div className="flex items-center gap-3">
        {isSearching ? (
          <button
            onClick={onResetFilters}
            className="px-5 py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-ink-charcoal font-label-input text-label-input font-semibold transition-all"
            type="button"
          >
            Reset Catalog Filters
          </button>
        ) : (
          <button
            onClick={onAddProduct}
            className="px-5 py-2.5 rounded-xl bg-ink-charcoal text-white hover:bg-black font-label-input text-label-input font-semibold shadow-sm transition-all"
            type="button"
          >
            + Register First Piece
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductEmptyState;
