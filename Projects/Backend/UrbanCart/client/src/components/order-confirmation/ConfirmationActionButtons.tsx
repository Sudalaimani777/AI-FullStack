// client/src/components/order-confirmation/ConfirmationActionButtons.tsx
import React from "react";
import { Link } from "react-router-dom";

interface ConfirmationActionButtonsProps {
  onTrackCourier: () => void;
}

export const ConfirmationActionButtons: React.FC<ConfirmationActionButtonsProps> = ({
  onTrackCourier,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm pt-space-xs">
      <button
        type="button"
        onClick={onTrackCourier}
        className="h-[52px] px-6 rounded-xl bg-ink-charcoal text-on-primary font-label-input text-label-input flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-xs cursor-pointer"
      >
        <span>Track Consignment Courier</span>
        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </button>

      <Link
        to="/"
        className="h-[52px] px-6 rounded-xl bg-surface-card text-ink-charcoal font-label-input text-label-input flex items-center justify-center gap-2 shadow-xs hover:bg-surface-container transition-all border border-border-card/40"
      >
        <span className="material-symbols-outlined text-[18px]">storefront</span>
        <span>Continue Shopping</span>
      </Link>

      <button
        type="button"
        onClick={() => window.print()}
        className="h-[52px] px-4 rounded-xl text-mineral-gray hover:text-ink-charcoal font-label-input text-label-input flex items-center justify-center gap-1.5 transition-colors sm:ml-auto cursor-pointer"
      >
        <span className="material-symbols-outlined text-[18px]">description</span>
        <span>Archival Invoice (PDF)</span>
      </button>
    </div>
  );
};

export default ConfirmationActionButtons;
