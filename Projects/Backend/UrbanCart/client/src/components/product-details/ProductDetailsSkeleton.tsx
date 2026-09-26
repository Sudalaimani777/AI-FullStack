// client/src/components/product-details/ProductDetailsSkeleton.tsx
import React from "react";

export const ProductDetailsSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-gutter py-8 animate-pulse">
      {/* Breadcrumb skeleton */}
      <div className="h-5 w-72 bg-surface-container-high rounded mb-8" />

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-12 items-start">
        {/* Left Column (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="w-full aspect-[4/3] rounded-xl bg-surface-container-high" />
          <div className="grid grid-cols-4 gap-3 w-full">
            <div className="aspect-[4/3] rounded-lg bg-surface-container-high" />
            <div className="aspect-[4/3] rounded-lg bg-surface-container-high" />
            <div className="aspect-[4/3] rounded-lg bg-surface-container-high" />
            <div className="aspect-[4/3] rounded-lg bg-surface-container-high" />
          </div>
          <div className="h-24 rounded-xl bg-surface-container-high mt-2" />
        </div>

        {/* Right Column (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div className="h-6 w-48 rounded-full bg-surface-container-high" />
            <div className="h-9 w-9 rounded-full bg-surface-container-high" />
          </div>

          <div className="space-y-3">
            <div className="h-10 w-3/4 rounded bg-surface-container-high" />
            <div className="h-5 w-1/2 rounded bg-surface-container-high" />
          </div>

          <div className="h-24 rounded-xl bg-surface-container-high" />
          <div className="h-8 w-60 rounded-full bg-surface-container-high" />

          <div className="space-y-2">
            <div className="h-4 w-full rounded bg-surface-container-high" />
            <div className="h-4 w-5/6 rounded bg-surface-container-high" />
            <div className="h-4 w-4/6 rounded bg-surface-container-high" />
          </div>

          <div className="h-20 rounded-xl bg-surface-container-high" />
          <div className="h-14 rounded-xl bg-surface-container-high" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
