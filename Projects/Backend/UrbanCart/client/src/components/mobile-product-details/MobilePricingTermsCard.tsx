// client/src/components/mobile-product-details/MobilePricingTermsCard.tsx
import React from "react";

interface MobilePricingTermsCardProps {
  price: number;
  currency?: string;
  stockStatus?: string;
}

export const MobilePricingTermsCard: React.FC<MobilePricingTermsCardProps> = ({
  price,
  currency = "USD",
  stockStatus = "In Atelier Stock",
}) => {
  const installmentAmount = (price / 4).toFixed(2);

  return (
    <section className="px-margin-mobile pt-3">
      <div className="rounded-2xl bg-surface-container-low p-4 flex flex-col gap-3 border border-border-card/50 shadow-xs">
        {/* Price and Stock Badge Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="font-editorial text-2xl font-semibold text-ink-charcoal">
              ${price.toFixed(2)}
            </span>
            <span className="font-mono text-xs uppercase text-mineral-gray font-medium">
              {currency}
            </span>
          </div>

          <span className="px-2.5 py-0.5 rounded-full bg-status-peach-bg text-status-peach-text font-label-micro text-label-micro uppercase font-semibold tracking-wider">
            {stockStatus}
          </span>
        </div>

        {/* Custom Crating & Duty Assurance Note */}
        <div className="flex items-start gap-2 pt-1 border-t border-border-card/40">
          <span className="material-symbols-outlined text-[16px] text-mineral-gray shrink-0 mt-0.5">
            verified
          </span>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            Custom crating, transit insurance &amp; import duties included.
          </p>
        </div>

        {/* Installment Split Note */}
        <div className="flex items-center justify-between text-xs pt-1 border-t border-border-card/40">
          <span className="text-on-surface-variant font-medium">
            Or 4 installments of <strong className="text-ink-charcoal">${installmentAmount}</strong>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-mineral-gray font-semibold">
            Klarna / Afterpay
          </span>
        </div>
      </div>
    </section>
  );
};

export default MobilePricingTermsCard;
