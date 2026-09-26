// client/src/components/order-confirmation/OrderConfirmationStepper.tsx
import React from "react";
import { Link } from "react-router-dom";

export const OrderConfirmationStepper: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low py-space-sm border-b border-border-card/40">
      <div className="max-w-[1440px] mx-auto px-gutter flex items-center justify-between">
        <div className="flex items-center gap-space-xs text-mineral-gray font-label-micro text-label-micro uppercase tracking-wider">
          <Link to="/" className="hover:text-ink-charcoal transition-colors">
            UrbanCart
          </Link>
          <span className="text-muted-sand">/</span>
          <Link to="/checkout" className="hover:text-ink-charcoal transition-colors">
            Atelier Checkout
          </Link>
          <span className="text-muted-sand">/</span>
          <span className="text-ink-charcoal font-semibold">Confirmation</span>
        </div>

        {/* 4-Stage Stepper Pill */}
        <nav
          aria-label="Progress"
          className="hidden sm:flex items-center gap-3 bg-surface-card px-4 py-1.5 rounded-full shadow-xs border border-border-card/40"
        >
          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-micro text-label-micro">
            <span className="w-4 h-4 rounded-full bg-surface-container-highest flex items-center justify-center text-ink-charcoal">
              <span className="material-symbols-outlined text-[12px]">check</span>
            </span>
            <span className="font-medium">Cart</span>
          </div>
          <div className="w-3 h-[1px] bg-border-subtle" />

          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-micro text-label-micro">
            <span className="w-4 h-4 rounded-full bg-surface-container-highest flex items-center justify-center text-ink-charcoal">
              <span className="material-symbols-outlined text-[12px]">check</span>
            </span>
            <span className="font-medium">Shipping</span>
          </div>
          <div className="w-3 h-[1px] bg-border-subtle" />

          <div className="flex items-center gap-1.5 text-on-surface-variant font-label-micro text-label-micro">
            <span className="w-4 h-4 rounded-full bg-surface-container-highest flex items-center justify-center text-ink-charcoal">
              <span className="material-symbols-outlined text-[12px]">check</span>
            </span>
            <span className="font-medium">Payment</span>
          </div>
          <div className="w-3 h-[1px] bg-border-subtle" />

          <div className="flex items-center gap-1.5 text-ink-charcoal font-label-micro text-label-micro font-semibold">
            <span className="w-4 h-4 rounded-full bg-ink-charcoal text-on-primary flex items-center justify-center text-[10px]">
              4
            </span>
            <span>Confirmation</span>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default OrderConfirmationStepper;
