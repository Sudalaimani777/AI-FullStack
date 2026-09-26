// client/src/components/mobile-storefront/MobileProductGrid.tsx
import React from "react";
import type { Product } from "../../types";
import MobileProductCard from "./MobileProductCard";

interface MobileProductGridProps {
  products: Product[];
  isLoading?: boolean;
  onAddToCart: (product: Product) => void;
  onToggleWishlist?: (product: Product, isWishlisted: boolean) => void;
  onResetFilters?: () => void;
}

export const MobileProductGrid: React.FC<MobileProductGridProps> = ({
  products,
  isLoading,
  onAddToCart,
  onToggleWishlist,
  onResetFilters,
}) => {
  if (isLoading) {
    return (
      <section className="px-margin-mobile py-2" id="mobile-catalog-grid">
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_6px_20px_rgba(47,38,18,0.04)] animate-pulse p-3"
            >
              <div className="w-full aspect-square bg-surface-container-low rounded-lg mb-3" />
              <div className="h-3 w-16 bg-surface-container-high rounded mb-2" />
              <div className="h-4 w-28 bg-surface-container-high rounded mb-1" />
              <div className="h-3 w-20 bg-surface-container rounded mb-3" />
              <div className="flex items-center justify-between pt-2">
                <div className="h-5 w-14 bg-surface-container-high rounded" />
                <div className="w-8 h-8 rounded-full bg-surface-container-high" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="px-margin-mobile py-12 text-center" id="mobile-catalog-grid">
        <div className="w-16 h-16 rounded-full bg-surface-container-low mx-auto flex items-center justify-center text-mineral-gray mb-3">
          <span className="material-symbols-outlined text-3xl">search_off</span>
        </div>
        <h3 className="font-title-card text-ink-charcoal mb-1">
          No artifacts found
        </h3>
        <p className="font-body-sm text-mineral-gray max-w-xs mx-auto mb-4">
          We could not find items matching your search or category filter in the atelier.
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="px-4 py-2 rounded-full bg-ink-charcoal text-white text-xs uppercase tracking-wider font-semibold"
          >
            Clear Filters
          </button>
        )}
      </section>
    );
  }

  return (
    <section className="px-margin-mobile py-2" id="mobile-catalog-grid">
      <div className="grid grid-cols-2 gap-3">
        {products.map((product) => (
          <MobileProductCard
            key={product._id}
            product={product}
            onAddToCart={onAddToCart}
            onToggleWishlist={onToggleWishlist}
          />
        ))}
      </div>
    </section>
  );
};

export default MobileProductGrid;
