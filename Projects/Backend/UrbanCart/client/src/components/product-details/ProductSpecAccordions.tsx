// client/src/components/product-details/ProductSpecAccordions.tsx
import React, { useState } from "react";

export const ProductSpecAccordions: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>("dimensions");

  const toggleSection = (section: string) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="space-y-2 pt-2">
      {/* Accordion 1: Dimensions & Electrical */}
      <div className="rounded-xl bg-surface-card shadow-xs overflow-hidden border border-border-card/40">
        <button
          type="button"
          onClick={() => toggleSection("dimensions")}
          className="w-full p-4 flex items-center justify-between text-left font-label-input text-label-input text-ink-charcoal hover:bg-surface-container-low transition-colors cursor-pointer"
        >
          <span className="font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-mineral-gray">straighten</span>
            Dimensions &amp; Electrical Architecture
          </span>
          <span className="material-symbols-outlined text-[20px] transition-transform duration-200">
            {openSection === "dimensions" ? "expand_less" : "expand_more"}
          </span>
        </button>

        {openSection === "dimensions" && (
          <div className="p-4 pt-0 font-body-sm text-body-sm text-on-surface-variant space-y-2">
            <div className="grid grid-cols-2 gap-2 py-1 border-b border-border-card/30">
              <span className="text-mineral-gray">Shade Dimensions:</span>
              <span className="font-medium text-ink-charcoal">Ø 65 cm × H 58 cm</span>
            </div>
            <div className="grid grid-cols-2 gap-2 py-1 border-b border-border-card/30">
              <span className="text-mineral-gray">Drop Suspension:</span>
              <span className="font-medium text-ink-charcoal">Max 250 cm (Field Adjustable)</span>
            </div>
            <div className="grid grid-cols-2 gap-2 py-1 border-b border-border-card/30">
              <span className="text-mineral-gray">Lamp Fitting:</span>
              <span className="font-medium text-ink-charcoal">E26 Base, 12W Warm LED (Included)</span>
            </div>
            <div className="grid grid-cols-2 gap-2 py-1 border-b border-border-card/30">
              <span className="text-mineral-gray">Color Temperature:</span>
              <span className="font-medium text-ink-charcoal">2700K Soft Amber, 95+ CRI</span>
            </div>
            <div className="grid grid-cols-2 gap-2 py-1">
              <span className="text-mineral-gray">Voltage:</span>
              <span className="font-medium text-ink-charcoal">110V - 240V Universal Mains</span>
            </div>
          </div>
        )}
      </div>

      {/* Accordion 2: Materials & Preservation Protocol */}
      <div className="rounded-xl bg-surface-card shadow-xs overflow-hidden border border-border-card/40">
        <button
          type="button"
          onClick={() => toggleSection("materials")}
          className="w-full p-4 flex items-center justify-between text-left font-label-input text-label-input text-ink-charcoal hover:bg-surface-container-low transition-colors cursor-pointer"
        >
          <span className="font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-mineral-gray">spa</span>
            Materials &amp; Preservation Protocol
          </span>
          <span className="material-symbols-outlined text-[20px] transition-transform duration-200">
            {openSection === "materials" ? "expand_less" : "expand_more"}
          </span>
        </button>

        {openSection === "materials" && (
          <div className="p-4 pt-0 font-body-sm text-body-sm text-on-surface-variant space-y-2">
            <p>
              Composed exclusively of wild-harvested Japanese mulberry bark (Kozo) soaked in pure alpine
              river waters, stretched around a spiral split-bamboo core.
            </p>
            <div className="p-3 bg-surface-container-low rounded-lg mt-2 text-label-input font-normal text-on-surface-variant">
              <strong className="font-semibold text-ink-charcoal">Care Protocol:</strong> Do not introduce liquid
              moisture or chemical abrasives. Lightly whisk exterior with an unbleached ostrich feather duster once
              every solstice.
            </div>
          </div>
        )}
      </div>

      {/* Accordion 3: Protective Crate & Logistics */}
      <div className="rounded-xl bg-surface-card shadow-xs overflow-hidden border border-border-card/40">
        <button
          type="button"
          onClick={() => toggleSection("dispatch")}
          className="w-full p-4 flex items-center justify-between text-left font-label-input text-label-input text-ink-charcoal hover:bg-surface-container-low transition-colors cursor-pointer"
        >
          <span className="font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-mineral-gray">inventory_2</span>
            Protective Crate &amp; Courier Logistics
          </span>
          <span className="material-symbols-outlined text-[20px] transition-transform duration-200">
            {openSection === "dispatch" ? "expand_less" : "expand_more"}
          </span>
        </button>

        {openSection === "dispatch" && (
          <div className="p-4 pt-0 font-body-sm text-body-sm text-on-surface-variant space-y-2">
            <p>
              Shipped in customized reinforced paulownia timber casing with shock absorption suspension.
              Dispatched within 24-48 business hours with tracked climate-controlled courier service.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSpecAccordions;
