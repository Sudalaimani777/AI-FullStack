// client/src/components/storefront/ProductCardSkeleton.tsx
import React from "react";

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col bg-surface-card rounded-xl p-3 shadow-sm animate-pulse border border-border-card/40">
      <div className="aspect-square w-full rounded-lg bg-surface-container mb-space-sm" />
      <div className="h-3 w-28 bg-surface-container rounded mb-2" />
      <div className="h-5 w-48 bg-surface-container rounded mb-3" />
      <div className="h-7 w-20 bg-surface-container rounded mb-space-md" />
      <div className="h-11 w-full bg-surface-container rounded-lg mt-auto" />
    </div>
  );
};

export default ProductCardSkeleton;
