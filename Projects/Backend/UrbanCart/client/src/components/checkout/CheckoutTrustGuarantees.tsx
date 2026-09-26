// client/src/components/checkout/CheckoutTrustGuarantees.tsx
import React from "react";

export const CheckoutTrustGuarantees: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Atelier Trust Guarantees */}
      <div className="space-y-3 bg-surface-container-low p-4 rounded-xl border border-border-card/30">
        <div className="flex items-start gap-2.5">
          <span className="material-symbols-outlined text-[18px] text-terracotta-flame shrink-0 mt-0.5">
            published_with_changes
          </span>
          <div>
            <h5 className="font-label-input text-label-input text-ink-charcoal font-semibold">
              30-Day Atelier Return Privilege
            </h5>
            <p className="font-label-micro text-label-micro text-mineral-gray">
              Unconditional return with complimentary white-glove pack-up service.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <span className="material-symbols-outlined text-[18px] text-terracotta-flame shrink-0 mt-0.5">
            workspace_premium
          </span>
          <div>
            <h5 className="font-label-input text-label-input text-ink-charcoal font-semibold">
              Archival Provenance Certificate
            </h5>
            <p className="font-label-micro text-label-micro text-mineral-gray">
              Individually stamped and cataloged certificate of authenticity included.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <span className="material-symbols-outlined text-[18px] text-terracotta-flame shrink-0 mt-0.5">
            support_agent
          </span>
          <div>
            <h5 className="font-label-input text-label-input text-ink-charcoal font-semibold">
              Dedicated Concierge Desk
            </h5>
            <p className="font-label-micro text-label-micro text-mineral-gray">
              Inquiries: <span className="text-ink-charcoal font-medium">concierge@urbancart.atelier</span>
            </p>
          </div>
        </div>
      </div>

      {/* Discrete Patron Support Bar */}
      <div className="px-2 flex items-center justify-between text-mineral-gray font-label-micro text-label-micro">
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">shield</span>
          Certified Carbon-Neutral Delivery
        </span>
        <a href="#" className="hover:text-ink-charcoal underline">
          Shipping FAQ
        </a>
      </div>
    </div>
  );
};

export default CheckoutTrustGuarantees;
