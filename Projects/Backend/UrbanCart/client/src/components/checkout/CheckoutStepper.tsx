// client/src/components/checkout/CheckoutStepper.tsx
import React from "react";
import { Link } from "react-router-dom";

export const CheckoutStepper: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low py-space-md border-b border-border-card/40">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex items-center justify-center max-w-2xl mx-auto">
          {/* Step 1: Cart */}
          <Link to="/cart" className="flex items-center gap-2 group transition-all">
            <span className="w-7 h-7 rounded-full bg-ink-charcoal text-on-primary flex items-center justify-center font-label-micro text-label-micro">
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'wght' 600" }}>
                check
              </span>
            </span>
            <span className="font-label-input text-label-input text-on-surface-variant group-hover:text-ink-charcoal transition-colors">
              1. Cart
            </span>
          </Link>

          {/* Connector Line */}
          <div className="flex-1 h-[2px] bg-terracotta-flame/30 mx-3" />

          {/* Step 2: Shipping (Active) */}
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-terracotta-flame text-on-primary flex items-center justify-center font-label-micro text-label-micro font-semibold shadow-xs">
              2
            </span>
            <div className="flex items-center gap-1.5">
              <span className="font-label-input text-label-input text-ink-charcoal font-semibold">
                Consignment Address
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-flame" />
            </div>
          </div>

          {/* Connector Line */}
          <div className="flex-1 h-[2px] bg-surface-container-highest mx-3" />

          {/* Step 3: Payment */}
          <div className="flex items-center gap-2 text-muted-sand">
            <span className="w-7 h-7 rounded-full bg-surface-container text-mineral-gray flex items-center justify-center font-label-micro text-label-micro">
              3
            </span>
            <span className="font-label-input text-label-input hidden sm:inline">Settlement</span>
          </div>

          {/* Connector Line */}
          <div className="flex-1 h-[2px] bg-surface-container-highest mx-3" />

          {/* Step 4: Confirmation */}
          <div className="flex items-center gap-2 text-muted-sand">
            <span className="w-7 h-7 rounded-full bg-surface-container text-mineral-gray flex items-center justify-center font-label-micro text-label-micro">
              4
            </span>
            <span className="font-label-input text-label-input hidden sm:inline">Receipt</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutStepper;
