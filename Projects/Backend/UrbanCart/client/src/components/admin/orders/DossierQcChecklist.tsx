// client/src/components/admin/orders/DossierQcChecklist.tsx
import React from "react";

interface DossierQcChecklistProps {
  totalItemUnits: number;
}

const DossierQcChecklist: React.FC<DossierQcChecklistProps> = ({ totalItemUnits }) => {
  return (
    <>
      {/* Packing Notes Box */}
      <div className="p-5 rounded-xl bg-surface-tinted flex flex-col gap-3 border border-border-card/60">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-terracotta-accent">
            <span className="material-symbols-outlined text-lg">inventory</span>
            <span className="font-label-input text-label-input text-ink-charcoal font-semibold">
              Fulfillment &amp; Packaging Notes
            </span>
          </div>
          <span className="font-label-micro text-label-micro uppercase text-status-peach-text bg-status-peach-bg px-2 py-0.5 rounded-full font-semibold">
            Special Care
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-ink-charcoal/90 leading-relaxed">
          “Patron consignment requires archival kraft wrapping with unbleached organic linen ribbon. Insert signed authenticity certificate from SoHo Flagship atelier.”
        </p>
        <div className="flex items-center gap-3 pt-2 text-mineral-gray font-label-micro text-label-micro">
          <span>Logged by Concierge Elena Vance</span>
          <span>·</span>
          <span>Location: Bay 4 Packaging Bench</span>
        </div>
      </div>

      {/* QC Sparkline */}
      <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between border border-border-card/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-card flex items-center justify-center text-ink-charcoal shadow-sm">
            <span className="material-symbols-outlined text-xl text-terracotta-flame">
              precision_manufacturing
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-input text-label-input text-ink-charcoal font-semibold">
              Packaging Verification Checklist
            </span>
            <span className="font-body-sm text-body-sm text-mineral-gray">
              Barcode verified · Weight: {(totalItemUnits * 1.34).toFixed(2)} kg · Dimensions: 44×32×28 cm
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-status-peach-text font-label-micro text-label-micro uppercase font-semibold">
          <span className="material-symbols-outlined text-base">verified</span>
          <span>QC Cleared</span>
        </div>
      </div>
    </>
  );
};

export default DossierQcChecklist;
