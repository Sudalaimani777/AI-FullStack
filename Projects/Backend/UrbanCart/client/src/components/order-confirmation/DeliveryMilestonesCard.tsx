// client/src/components/order-confirmation/DeliveryMilestonesCard.tsx
import React from "react";

interface DeliveryMilestonesCardProps {
  deliveryTier?: "standard" | "priority";
  paymentMethodText?: string;
}

export const DeliveryMilestonesCard: React.FC<DeliveryMilestonesCardProps> = ({
  deliveryTier = "standard",
  paymentMethodText = "Visa •••• 9284",
}) => {
  const isPriority = deliveryTier === "priority";

  return (
    <div className="bg-surface-card rounded-xl shadow-xs p-space-lg flex flex-col gap-space-md border border-border-card/40">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm border-b border-border-card/30">
        <div>
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray tracking-wider">
            Estimated Delivery Window
          </span>
          <p className="font-headline-sm text-headline-sm text-ink-charcoal font-semibold mt-0.5">
            {isPriority ? "Tuesday, Oct 22 – Wednesday, Oct 23" : "Thursday, Oct 24 – Saturday, Oct 26"}
          </p>
        </div>
        <div className="self-start sm:self-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-status-peach-bg text-status-peach-text font-label-micro text-label-micro uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-flame animate-pulse" />
            {isPriority ? "Priority Air Dispatch" : "Atelier White-Glove"}
          </span>
        </div>
      </div>

      <div className="bg-surface-container-low rounded-lg p-space-md flex items-start gap-space-sm border border-border-card/30">
        <span className="material-symbols-outlined text-ink-charcoal text-[22px] mt-0.5 shrink-0">
          local_shipping
        </span>
        <div className="flex flex-col min-w-0">
          <span className="font-label-input text-label-input text-ink-charcoal font-semibold">
            Courier &amp; Handling Protocol
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {isPriority
              ? "Priority Express Air Freight • Dedicated temperature-controlled air transport from Kyoto."
              : "Standard Insured White-Glove Courier • Preparing for uncrating inspection at Brooklyn Atelier Depot."}
          </p>
        </div>
      </div>

      {/* Vertical Timeline Steps */}
      <div className="pt-space-sm flex flex-col gap-space-md">
        <p className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray tracking-wider">
          Logistics Milestones
        </p>

        <div className="relative pl-6 space-y-6 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-border-subtle">
          {/* Milestone 1 (Completed) */}
          <div className="relative flex items-start justify-between gap-space-md">
            <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-ink-charcoal text-on-primary flex items-center justify-center text-[12px]">
              <span className="material-symbols-outlined text-[13px]">check</span>
            </span>
            <div className="flex flex-col min-w-0">
              <span className="font-label-input text-label-input text-ink-charcoal font-semibold">
                Order Commissioned
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Payment captured via {paymentMethodText} &amp; ledger sealed
              </span>
            </div>
            <span className="font-label-micro text-label-micro text-mineral-gray whitespace-nowrap">
              Oct 20, 14:32
            </span>
          </div>

          {/* Milestone 2 (Active) */}
          <div className="relative flex items-start justify-between gap-space-md">
            <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-[#EBF5EE] text-[#1F5F38] flex items-center justify-center text-[12px] ring-4 ring-surface-card">
              <span className="w-2 h-2 rounded-full bg-[#1F5F38] animate-ping" />
            </span>
            <div className="flex flex-col min-w-0">
              <span className="font-label-input text-label-input text-ink-charcoal font-semibold">
                Atelier Provenance &amp; Quality Inspection
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Curing evaluation, structural joinery audit &amp; washi paper review
              </span>
            </div>
            <span className="font-label-micro text-label-micro text-terracotta-accent font-semibold whitespace-nowrap">
              Current Status
            </span>
          </div>

          {/* Milestone 3 (Upcoming) */}
          <div className="relative flex items-start justify-between gap-space-md opacity-60">
            <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-high text-mineral-gray flex items-center justify-center text-[12px] ring-4 ring-surface-card">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-sand" />
            </span>
            <div className="flex flex-col min-w-0">
              <span className="font-label-input text-label-input text-on-surface-variant font-medium">
                White-Glove Courier Handover
              </span>
              <span className="font-body-sm text-body-sm text-mineral-gray">
                Secure transit packing inside reinforced pine cradles
              </span>
            </div>
            <span className="font-label-micro text-label-micro text-mineral-gray whitespace-nowrap">
              {isPriority ? "Est. Oct 21" : "Est. Oct 23"}
            </span>
          </div>

          {/* Milestone 4 (Upcoming) */}
          <div className="relative flex items-start justify-between gap-space-md opacity-40">
            <span className="absolute -left-6 top-1 w-5 h-5 rounded-full bg-surface-container-high text-mineral-gray flex items-center justify-center text-[12px] ring-4 ring-surface-card">
              <span className="w-1.5 h-1.5 rounded-full bg-muted-sand" />
            </span>
            <div className="flex flex-col min-w-0">
              <span className="font-label-input text-label-input text-on-surface-variant font-medium">
                Scheduled Room-of-Choice Placement
              </span>
              <span className="font-body-sm text-body-sm text-mineral-gray">
                Uncrating, placement verification and packaging removal
              </span>
            </div>
            <span className="font-label-micro text-label-micro text-mineral-gray whitespace-nowrap">
              {isPriority ? "Est. Oct 23" : "Est. Oct 25"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryMilestonesCard;
