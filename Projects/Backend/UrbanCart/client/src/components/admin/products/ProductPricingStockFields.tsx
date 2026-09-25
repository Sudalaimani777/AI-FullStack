// client/src/components/admin/products/ProductPricingStockFields.tsx
import React from "react";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { ProductFormData } from "../../../types";

interface ProductPricingStockFieldsProps {
  register: UseFormRegister<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
  stockCount: number;
  onStockAdjust: (delta: number) => void;
}

const ProductPricingStockFields: React.FC<ProductPricingStockFieldsProps> = ({
  register,
  errors,
  stockCount,
  onStockAdjust,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Price Input */}
      <div className="space-y-2">
        <label className="font-label-input text-label-input text-ink-charcoal font-semibold block">
          Base Valuation (USD) *
        </label>
        <div className="relative">
          <span className="absolute left-3.5 top-3 text-mineral-gray font-semibold">$</span>
          <input
            type="number"
            step="0.01"
            {...register("product_price", { required: "Valuation is required" })}
            placeholder="0.00"
            className="w-full h-12 pl-8 pr-4 rounded-xl bg-surface-container-low border border-border-card text-ink-charcoal font-body-sm text-body-sm focus:outline-none focus:border-terracotta-accent transition-colors"
          />
        </div>
        {errors.product_price && (
          <p className="font-label-micro text-label-micro text-status-peach-text">
            {errors.product_price.message}
          </p>
        )}
      </div>

      {/* Stock Stepper */}
      <div className="space-y-2">
        <label className="font-label-input text-label-input text-ink-charcoal font-semibold block">
          Vault Stock Units *
        </label>
        <div className="flex items-center h-12 rounded-xl bg-surface-container-low border border-border-card overflow-hidden">
          <button
            type="button"
            onClick={() => onStockAdjust(-1)}
            className="w-12 h-full flex items-center justify-center text-mineral-gray hover:text-ink-charcoal hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-lg">remove</span>
          </button>
          <input
            type="number"
            value={stockCount}
            onChange={(e) => {
              const val = Math.max(0, parseInt(e.target.value) || 0);
              onStockAdjust(val - stockCount);
            }}
            className="flex-1 text-center bg-transparent text-ink-charcoal font-label-input text-label-input focus:outline-none"
          />
          <button
            type="button"
            onClick={() => onStockAdjust(1)}
            className="w-12 h-full flex items-center justify-center text-mineral-gray hover:text-ink-charcoal hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-lg">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPricingStockFields;
