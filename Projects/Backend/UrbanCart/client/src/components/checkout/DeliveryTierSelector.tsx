// client/src/components/checkout/DeliveryTierSelector.tsx
import React from "react";

interface DeliveryTierSelectorProps {
  deliveryTier: "standard" | "priority";
  onSelectTier: (tier: "standard" | "priority") => void;
}

export const DeliveryTierSelector: React.FC<DeliveryTierSelectorProps> = ({
  deliveryTier,
  onSelectTier,
}) => {
  return (
    <div className="pt-4 space-y-3">
      <label className="font-label-input text-label-input text-ink-charcoal block">
        Consignment Logistics Tier
      </label>
      <div className="space-y-3">
        {/* Option 1: Standard White-Glove */}
        <div
          onClick={() => onSelectTier("standard")}
          className={`p-4 rounded-xl flex items-center justify-between cursor-pointer transition-all border ${
            deliveryTier === "standard"
              ? "bg-surface-container-low border-ink-charcoal"
              : "bg-surface-card border-border-card/40 hover:bg-surface-container-low"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                deliveryTier === "standard" ? "bg-ink-charcoal border-ink-charcoal" : "border-border-card"
              }`}
            >
              {deliveryTier === "standard" && <div className="w-2 h-2 rounded-full bg-on-primary" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-body-md text-body-md text-ink-charcoal font-semibold">
                  Standard Insured White-Glove Courier
                </span>
                <span className="px-2 py-0.5 rounded-full bg-status-peach-bg text-status-peach-text font-label-micro text-label-micro uppercase font-medium">
                  Included
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-mineral-gray">
                Scheduled placement inside room of choice • 3–5 business days
              </p>
            </div>
          </div>
          <span className="font-title-card text-title-card text-ink-charcoal font-semibold">Free</span>
        </div>

        {/* Option 2: Priority Air Freight */}
        <div
          onClick={() => onSelectTier("priority")}
          className={`p-4 rounded-xl flex items-center justify-between cursor-pointer transition-all border ${
            deliveryTier === "priority"
              ? "bg-surface-container-low border-ink-charcoal"
              : "bg-surface-card border-border-card/40 hover:bg-surface-container-low"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                deliveryTier === "priority" ? "bg-ink-charcoal border-ink-charcoal" : "border-border-card"
              }`}
            >
              {deliveryTier === "priority" && <div className="w-2 h-2 rounded-full bg-on-primary" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-body-md text-body-md text-on-surface">
                  Priority Express Air Freight
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-mineral-gray">
                Dedicated temperature-controlled air transport • 1–2 business days
              </p>
            </div>
          </div>
          <span className="font-title-card text-title-card text-on-surface font-semibold">$35.00</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTierSelector;
