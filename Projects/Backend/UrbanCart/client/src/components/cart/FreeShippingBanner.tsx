// client/src/components/cart/FreeShippingBanner.tsx
import React from "react";

interface FreeShippingBannerProps {
  subtotal: number;
  threshold?: number;
}

export const FreeShippingBanner: React.FC<FreeShippingBannerProps> = ({
  subtotal,
  threshold = 250,
}) => {
  const isQualified = subtotal >= threshold;
  const progressPercent = Math.min(100, Math.round((subtotal / threshold) * 100));
  const remaining = Math.max(0, threshold - subtotal);

  return (
    <div className="p-space-md md:p-space-lg rounded-xl bg-surface-tinted flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-xs border border-border-card/40">
      <div className="flex items-start md:items-center gap-space-md">
        <div className="w-10 h-10 rounded-full bg-status-peach-bg flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-status-peach-text text-[20px]">
            local_shipping
          </span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-label-input text-label-input text-ink-charcoal font-semibold">
              {isQualified
                ? "Complimentary Courier Threshold Reached"
                : `Add $${remaining.toFixed(2)} for Complimentary Delivery`}
            </span>
            <span
              className={`font-label-micro text-label-micro uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold ${
                isQualified
                  ? "bg-status-peach-bg text-status-peach-text"
                  : "bg-surface-container text-mineral-gray"
              }`}
            >
              {isQualified ? "Unlocked" : "In Progress"}
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {isQualified
              ? "You qualify for complimentary white-glove courier dispatch on this consignment ($250 threshold met)."
              : "Consignments exceeding $250 receive complimentary white-glove courier dispatch to all continental residences."}
          </p>
        </div>
      </div>

      <div className="w-full md:w-56 shrink-0 space-y-1">
        <div className="flex justify-between font-label-micro text-label-micro text-mineral-gray uppercase tracking-wider">
          <span>Progress</span>
          <span className="text-terracotta-accent font-semibold">
            {isQualified ? "100% Qualified" : `${progressPercent}% ($${subtotal.toFixed(0)} / $${threshold})`}
          </span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
          <div
            className="h-full bg-terracotta-flame rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default FreeShippingBanner;
