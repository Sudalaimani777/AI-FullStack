// client/src/components/cart/CartOrderSummary.tsx
import React, { useState } from "react";
import ExpressPaymentButtons from "./ExpressPaymentButtons";
import CartSecurityBadges from "./CartSecurityBadges";

interface CartOrderSummaryProps {
  subtotal: number;
  onCheckout: () => void;
  onApplyDiscount?: (amount: number) => void;
}

export const CartOrderSummary: React.FC<CartOrderSummaryProps> = ({
  subtotal,
  onCheckout,
  onApplyDiscount,
}) => {
  const [voucherCode, setVoucherCode] = useState("");
  const [voucherMsg, setVoucherMsg] = useState<{ text: string; isError: boolean } | null>(null);
  const [discount, setDiscount] = useState(0);

  const shippingCost = subtotal >= 250 || subtotal === 0 ? 0 : 25;
  const tax = subtotal * 0.08;
  const finalTotal = Math.max(0, subtotal + shippingCost + tax - discount);

  const handleApplyVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    const code = voucherCode.trim().toUpperCase();
    if (code === "ARCHITECT2025" || code === "PATRON") {
      setDiscount(50.0);
      setVoucherMsg({
        text: "Courteous patron benefit applied: -$50.00 USD",
        isError: false,
      });
      if (onApplyDiscount) onApplyDiscount(50.0);
    } else if (code === "") {
      setVoucherMsg({
        text: "Please enter a valid credential or promo key.",
        isError: true,
      });
    } else {
      setVoucherMsg({
        text: "Key not acknowledged for this curated consignment.",
        isError: true,
      });
    }
  };

  return (
    <div className="p-space-lg rounded-xl bg-surface-card shadow-xs space-y-space-lg border border-border-card/40">
      <div className="space-y-1">
        <h2 className="font-title-card text-title-card text-ink-charcoal">Order Summary</h2>
        <p className="font-body-sm text-body-sm text-mineral-gray">
          Consignment valuation and calculated dispatch logistics
        </p>
      </div>

      {/* Breakdown */}
      <div className="space-y-space-md font-body-sm text-body-sm">
        <div className="flex justify-between items-center text-on-surface-variant">
          <span>Consignment Subtotal</span>
          <span className="font-semibold text-ink-charcoal">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center text-on-surface-variant">
          <div className="flex items-center gap-1.5">
            <span>Shipping Estimate</span>
            <span
              className="material-symbols-outlined text-[16px] text-muted-sand cursor-help"
              title="White-glove courier dispatch to all continental residences"
            >
              info
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-label-micro text-label-micro uppercase px-2 py-0.5 rounded-full bg-status-peach-bg text-status-peach-text font-semibold">
              White-Glove
            </span>
            <span className="text-terracotta-accent font-semibold">
              {shippingCost === 0 ? "Complimentary" : `$${shippingCost.toFixed(2)}`}
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center text-on-surface-variant">
          <span>Estimated Duty &amp; Customs</span>
          <span className="text-mineral-gray font-label-micro text-label-micro uppercase">
            Included in Tier
          </span>
        </div>

        <div className="flex justify-between items-center text-on-surface-variant">
          <span>Estimated Sales Tax (8%)</span>
          <span className="text-ink-charcoal font-semibold">${tax.toFixed(2)}</span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between items-center text-terracotta-accent font-medium">
            <span>Patron Courtesy Benefit</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}

        {/* Promo Code Voucher Expansion */}
        <form onSubmit={handleApplyVoucher} className="pt-space-xs">
          <label className="block font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray mb-1.5">
            Atelier Patron Courtesy Credit
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-muted-sand">
                sell
              </span>
              <input
                type="text"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
                placeholder="E.g. ARCHITECT2025"
                className="w-full h-11 pl-10 pr-3 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-ink-charcoal placeholder:text-muted-sand uppercase focus:outline-none focus:bg-surface-card border border-border-card/40 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-4 h-11 rounded-lg bg-surface-container text-ink-charcoal font-label-input text-label-input hover:bg-surface-container-high transition-colors shrink-0 cursor-pointer"
            >
              Apply
            </button>
          </div>
          {voucherMsg && (
            <p
              className={`mt-1 font-label-micro text-label-micro ${
                voucherMsg.isError ? "text-error" : "text-terracotta-accent"
              }`}
            >
              {voucherMsg.text}
            </p>
          )}
        </form>
      </div>

      {/* Total Price Display */}
      <div className="pt-space-md border-t border-transparent bg-surface-container-low/60 p-space-md rounded-xl space-y-1">
        <div className="flex justify-between items-baseline">
          <span className="font-title-card text-title-card text-ink-charcoal">Consignment Total</span>
          <div className="text-right">
            <span className="font-headline-md text-headline-md text-ink-charcoal font-bold tracking-tight">
              ${finalTotal.toFixed(2)}
            </span>
            <span className="font-label-eyebrow text-label-eyebrow text-mineral-gray ml-1">USD</span>
          </div>
        </div>
        <p className="font-label-micro text-label-micro text-mineral-gray text-right">
          Tax inclusive where applicable according to jurisdiction
        </p>
      </div>

      {/* Primary Checkout CTA */}
      <div className="space-y-space-md">
        <button
          type="button"
          onClick={onCheckout}
          className="w-full h-[54px] rounded-lg bg-ink-charcoal text-on-primary font-label-input text-label-input flex items-center justify-center gap-2 hover:bg-primary shadow-xs hover:shadow transition-all group active:translate-y-[1px] cursor-pointer"
        >
          <span>Proceed to Secure Checkout</span>
          <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>

        {/* Express Checkout */}
        <ExpressPaymentButtons onExpressPay={() => onCheckout()} />
      </div>

      {/* Trust & Security Badges */}
      <CartSecurityBadges />
    </div>
  );
};

export default CartOrderSummary;
