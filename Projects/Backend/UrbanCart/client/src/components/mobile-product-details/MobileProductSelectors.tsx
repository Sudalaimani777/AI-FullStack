// client/src/components/mobile-product-details/MobileProductSelectors.tsx
import React from "react";
import type { DimensionOption, CordOption } from "./productPresets";

interface MobileProductSelectorsProps {
  dimensions: DimensionOption[];
  selectedDimensionId: string;
  onSelectDimension: (dim: DimensionOption) => void;
  onOpenScaleGuide: () => void;
  cords: CordOption[];
  selectedCordId: string;
  onSelectCord: (cord: CordOption) => void;
}

export const MobileProductSelectors: React.FC<MobileProductSelectorsProps> = ({
  dimensions,
  selectedDimensionId,
  onSelectDimension,
  onOpenScaleGuide,
  cords,
  selectedCordId,
  onSelectCord,
}) => {
  const currentCord = cords.find((c) => c.id === selectedCordId) || cords[0];

  return (
    <section className="px-margin-mobile pt-4 flex flex-col gap-4">
      {/* 1. Dimension Silhouette Selector */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-label-input text-label-input text-ink-charcoal font-medium">
            Dimension Silhouette
          </span>
          <button
            type="button"
            onClick={onOpenScaleGuide}
            className="font-label-micro text-label-micro uppercase font-semibold text-terracotta-accent hover:underline tracking-wider"
          >
            Scale Guide
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {dimensions.map((dim) => {
            const isSelected = dim.id === selectedDimensionId;
            return (
              <button
                key={dim.id}
                type="button"
                onClick={() => onSelectDimension(dim)}
                className={`py-2 px-2 rounded-xl flex flex-col items-center justify-center gap-0.5 border transition-all ${
                  isSelected
                    ? "bg-ink-charcoal text-white border-ink-charcoal shadow-xs"
                    : "bg-surface-card text-ink-charcoal border-border-card hover:bg-surface-container-low"
                }`}
              >
                <span className="text-xs font-semibold">{dim.name}</span>
                <span
                  className={`font-mono text-[9px] ${
                    isSelected ? "text-white/80" : "text-mineral-gray"
                  }`}
                >
                  {dim.dimensions}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Suspension Cord & Canopy Swatches */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-label-input text-label-input text-ink-charcoal font-medium">
            Suspension Cord &amp; Canopy
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-mineral-gray font-medium">
            {currentCord.name}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {cords.map((cord) => {
            const isSelected = cord.id === selectedCordId;
            return (
              <button
                key={cord.id}
                type="button"
                onClick={() => onSelectCord(cord)}
                aria-label={`Select ${cord.name}`}
                className={`w-9 h-9 rounded-full transition-all flex items-center justify-center ${
                  isSelected
                    ? "ring-2 ring-ink-charcoal ring-offset-2 ring-offset-surface scale-105"
                    : "opacity-85 hover:opacity-100"
                }`}
              >
                <span
                  className="w-full h-full rounded-full border border-black/10 shadow-inner"
                  style={{ backgroundColor: cord.colorHex }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MobileProductSelectors;
