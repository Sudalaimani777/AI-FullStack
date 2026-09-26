// client/src/components/order-confirmation/OrderConfirmationHero.tsx
import React, { useState } from "react";

interface OrderConfirmationHeroProps {
  orderId: string;
  email: string;
  onCopied?: () => void;
}

export const OrderConfirmationHero: React.FC<OrderConfirmationHeroProps> = ({
  orderId,
  email,
  onCopied,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(orderId);
    setCopied(true);
    if (onCopied) onCopied();
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-space-xl">
      {/* Refined Botanical Green Confirmation Badge */}
      <div className="relative mb-space-md flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#EBF5EE] flex items-center justify-center shadow-xs">
          <svg
            className="w-7 h-7 text-[#1F5F38]"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
            viewBox="0 0 24 24"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-surface-card flex items-center justify-center shadow-xs text-terracotta-accent border border-border-card/40">
          <span className="material-symbols-outlined text-[14px]">verified</span>
        </div>
      </div>

      <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray tracking-widest mb-space-xs">
        Consignment Confirmed • Atelier Protocol
      </span>

      <h1 className="font-headline-lg text-headline-lg text-ink-charcoal tracking-tight mb-space-sm">
        Thank you for your order!
      </h1>

      <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mb-space-md">
        Your consignment has been recorded with the atelier. A confirmation receipt and consignment dossier
        have been dispatched to <span className="text-ink-charcoal font-medium">{email}</span>.
      </p>

      {/* Reference Pill with Interactive Copy Action */}
      <div className="inline-flex items-center gap-space-sm bg-surface-container-low px-4 py-2 rounded-full border border-border-card/40">
        <span className="font-label-micro text-label-micro text-mineral-gray uppercase tracking-wider">
          Order Reference
        </span>
        <span className="font-title-card text-title-card text-ink-charcoal tracking-normal font-semibold">
          #{orderId}
        </span>
        <div className="h-4 w-[1px] bg-border-subtle" />
        <button
          type="button"
          onClick={handleCopy}
          className="font-label-micro text-label-micro uppercase font-semibold text-terracotta-accent hover:text-terracotta-flame transition-colors cursor-pointer"
        >
          {copied ? "Copied" : "Copy Reference"}
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationHero;
