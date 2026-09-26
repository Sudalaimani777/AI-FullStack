// client/src/components/storefront/StorefrontProductGrid.tsx
import React from "react";
import type { Product } from "../../types";
import StorefrontProductCard from "./StorefrontProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import StorefrontEmptyState from "./StorefrontEmptyState";
import StorefrontPagination from "./StorefrontPagination";

interface StorefrontProductGridProps {
  products: Product[];
  isLoading: boolean;
  isSkeletonPreview: boolean;
  hasActiveFilters: boolean;
  onResetFilters: () => void;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const StorefrontProductGrid: React.FC<StorefrontProductGridProps> = ({
  products,
  isLoading,
  isSkeletonPreview,
  hasActiveFilters,
  onResetFilters,
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const showSkeletons = isLoading || isSkeletonPreview;

  return (
    <section className="w-full max-w-[1440px] mx-auto px-gutter pb-space-xl">
      {showSkeletons ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter" id="grid-skeleton">
          {Array.from({ length: 8 }).map((_, idx) => (
            <ProductCardSkeleton key={idx} />
          ))}
        </div>
      ) : products.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter" id="grid-content">
            {products.map((product) => (
              <StorefrontProductCard key={product._id} product={product} />
            ))}
          </div>
          <StorefrontPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      ) : (
        <StorefrontEmptyState
          hasFilters={hasActiveFilters}
          onResetFilters={onResetFilters}
        />
      )}
    </section>
  );
};

export default StorefrontProductGrid;
