// client/src/components/product-details/ProductOptionSelectors.tsx
import React from "react";

export interface SizeOption {
  label: string;
  dimension: string;
  priceOffset: number;
}

export interface CordOption {
  name: string;
  colorHex: string;
}

export const SIZES: SizeOption[] = [
  { label: "Small", dimension: '45cm / 18"', priceOffset: -50 },
  { label: "Medium", dimension: '65cm / 26"', priceOffset: 0 },
  { label: "Grand", dimension: '85cm / 34"', priceOffset: 140 },
];

export const CORDS: CordOption[] = [
  { name: "Natural Twisted Linen", colorHex: "#E5DFD5" },
  { name: "Muted Charcoal Silk", colorHex: "#242320" },
  { name: "Raw Patinated Brass Rod", colorHex: "#C4A468" },
];

interface ProductOptionSelectorsProps {
  selectedSize: string;
  onSelectSize: (size: string, priceOffset: number) => void;
  selectedCord: string;
  onSelectCord: (cord: string) => void;
}

export const ProductOptionSelectors: React.FC<ProductOptionSelectorsProps> = ({
  selectedSize,
  onSelectSize,
  selectedCord,
  onSelectCord,
}) => {
  return (
    <div className="space-y-4">
      {/* Dimension Silhouette Size Options */}
      <div className="space-y-2.5">
        <div className="flex justify-between items-center">
          <label className="font-label-input text-label-input text-ink-charcoal font-medium">
            Dimension Silhouette
          </label>
          <button
            type="button"
            className="font-label-micro text-label-micro text-mineral-gray underline hover:text-ink-charcoal transition-colors cursor-pointer"
          >
            Dimension Guide
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {SIZES.map((size) => {
            const isSelected = selectedSize === size.label;
            return (
              <button
                key={size.label}
                type="button"
                onClick={() => onSelectSize(size.label, size.priceOffset)}
                className={`py-2.5 px-3 rounded-xl shadow-xs text-center font-label-input text-label-input transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-ink-charcoal text-on-primary border-ink-charcoal"
                    : "bg-surface-card text-on-surface border-border-card/40 hover:bg-surface-container-high"
                }`}
              >
                <span className={`block ${isSelected ? "font-semibold" : ""}`}>{size.label}</span>
                <span
                  className={`block font-label-micro text-label-micro ${
                    isSelected ? "text-surface-variant" : "text-mineral-gray"
                  }`}
                >
                  {size.dimension}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Cord Suspension Options */}
      <div className="space-y-2.5">
        <div className="flex justify-between items-center">
          <label className="font-label-input text-label-input text-ink-charcoal font-medium">
            Cord Suspension &amp; Hardware
          </label>
          <span className="font-body-sm text-body-sm text-mineral-gray">{selectedCord}</span>
        </div>
        <div className="flex items-center gap-3">
          {CORDS.map((cord) => {
            const isSelected = selectedCord === cord.name;
            return (
              <button
                key={cord.name}
                type="button"
                onClick={() => onSelectCord(cord.name)}
                title={cord.name}
                className={`relative p-1 rounded-full transition-all shadow-xs cursor-pointer ${
                  isSelected ? "bg-ink-charcoal" : "bg-transparent hover:bg-surface-container"
                }`}
              >
                <span
                  className="w-8 h-8 rounded-full block border border-border-card/30"
                  style={{ backgroundColor: cord.colorHex }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductOptionSelectors;
