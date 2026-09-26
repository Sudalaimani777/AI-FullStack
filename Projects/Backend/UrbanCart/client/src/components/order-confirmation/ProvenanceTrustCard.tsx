// client/src/components/order-confirmation/ProvenanceTrustCard.tsx
import React from "react";

export const ProvenanceTrustCard: React.FC = () => {
  return (
    <div className="bg-surface-card rounded-xl p-space-md shadow-xs space-y-space-sm border border-border-card/40">
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-ink-charcoal shrink-0">
          <span className="material-symbols-outlined text-[18px]">nature</span>
        </span>
        <div className="flex flex-col">
          <span className="font-label-input text-label-input text-ink-charcoal font-semibold">
            Carbon-Neutral Logistics
          </span>
          <span className="font-body-sm text-body-sm text-mineral-gray">
            Emissions fully offset through Verified Gold Standard forestry reserves.
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-1 border-t border-border-card/30">
        <span className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-ink-charcoal shrink-0">
          <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
        </span>
        <div className="flex flex-col">
          <span className="font-label-input text-label-input text-ink-charcoal font-semibold">
            Serialized Provenance Dossier
          </span>
          <span className="font-body-sm text-body-sm text-mineral-gray">
            Includes certificate of authenticity signed by resident craft masters.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProvenanceTrustCard;
