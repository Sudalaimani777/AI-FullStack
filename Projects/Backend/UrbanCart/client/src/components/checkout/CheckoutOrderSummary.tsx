// client/src/components/checkout/CheckoutOrderSummary.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { CartItem } from "../../types";
import CheckoutManifestItem from "./CheckoutManifestItem";
import CheckoutTrustGuarantees from "./CheckoutTrustGuarantees";

interface CheckoutOrderSummaryProps {
  items: CartItem[];
  subtotal: number;
  deliveryTier: "standard" | "priority";
  isSubmitting: boolean;
  onPlaceOrder: () => void;
  onApplyDiscount?: (amount: number) => void;
}

export const CheckoutOrderSummary: React.FC<CheckoutOrderSummaryProps> = ({
  items,
  subtotal,
  deliveryTier,
  isSubmitting,
  onPlaceOrder,
  onApplyDiscount,
}) => {
  const [voucherCode, setVoucherCode] = useState("");
  const [voucherDiscount, setVoucherDiscount] = useState(0);
  const [voucherMsg, setVoucherMsg] = useState<{ text: string; isError: boolean } | null>(null);

  const shippingCost = deliveryTier === "priority" ? 35 : subtotal >= 250 || subtotal === 0 ? 0 : 25;
  const tax = subtotal * 0.08;
  const finalTotal = Math.max(0, subtotal + shippingCost + tax - voucherDiscount);
  const totalItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleApplyVoucher = (e: React.FormEvent) => {
    e.preventDefault();
    const code = voucherCode.trim().toUpperCase();
    if (code === "ARCH-EDITION-2025" || code === "ARCHITECT2025" || code === "PATRON") {
      setVoucherDiscount(50.0);
      setVoucherMsg({
        text: "Patron courtesy benefit applied: -$50.00 USD",
        isError: false,
      });
      if (onApplyDiscount) onApplyDiscount(50.0);
    } else if (code === "") {
      setVoucherMsg({
        text: "Please enter a voucher key.",
        isError: true,
      });
    } else {
      setVoucherMsg({
        text: "Key not acknowledged for this consignment.",
        isError: true,
      });
    }
  };

  return (
    <div className="bg-surface-card p-space-lg rounded-xl shadow-md space-y-space-md border border-border-card/40">
      {/* Manifest Header */}
      <div className="flex items-center justify-between pb-space-xs border-b border-border-card/30">
        <div>
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray">
            Curated Shipment
          </span>
          <h3 className="font-title-card text-title-card text-ink-charcoal font-semibold">
            Consignment Manifest ({totalItemCount} {totalItemCount === 1 ? "item" : "items"})
          </h3>
        </div>
        <Link
          to="/cart"
          className="font-label-input text-label-input text-terracotta-flame hover:underline transition-all"
        >
          Edit Cart
        </Link>
      </div>

      {/* Product Thumbnails & Detail Rows */}
      <div className="space-y-4 py-2 divide-y divide-border-card/20">
        {items.map((item) => (
          <CheckoutManifestItem key={item.product._id} item={item} />
        ))}
      </div>

      {/* Courtesy / Promo Code Bar */}
      <form onSubmit={handleApplyVoucher} className="pt-2">
        <label className="font-label-micro text-label-micro uppercase text-mineral-gray tracking-wider block mb-1.5">
          Patron Courtesy Credit / Voucher
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={voucherCode}
            onChange={(e) => setVoucherCode(e.target.value)}
            placeholder="ARCH-EDITION-2025"
            className="flex-1 h-[44px] px-3.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-ink-charcoal uppercase focus:outline-none focus:bg-surface-card border border-border-card/40 transition-all"
          />
          <button
            type="submit"
            className="px-5 h-[44px] bg-surface-container hover:bg-surface-container-high text-ink-charcoal rounded-lg font-label-input text-label-input transition-colors font-medium cursor-pointer"
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

      {/* Cost Breakdown Ledger */}
      <div className="space-y-2.5 pt-3 border-t border-border-card/30">
        <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
          <span>Consignment Subtotal</span>
          <span className="text-ink-charcoal font-medium">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            White-Glove Courier Dispatch
            <span
              className="material-symbols-outlined text-[14px] text-terracotta-flame cursor-help"
              title="Complimentary for consignments over $250"
            >
              info
            </span>
          </span>
          <span className="text-terracotta-flame font-medium">
            {shippingCost === 0 ? "Complimentary" : `$${shippingCost.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
          <span>Estimated Regional Duty &amp; State Taxes (8%)</span>
          <span className="text-ink-charcoal font-medium">${tax.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-body-sm text-body-sm text-on-surface-variant">
          <span>Archival Crate Insurance</span>
          <span className="text-mineral-gray">Included</span>
        </div>

        {voucherDiscount > 0 && (
          <div className="flex justify-between font-body-sm text-body-sm text-terracotta-accent font-medium">
            <span>Patron Courtesy Benefit</span>
            <span>-${voucherDiscount.toFixed(2)}</span>
          </div>
        )}

        <div className="pt-3 flex justify-between items-baseline border-t border-border-card/30">
          <div>
            <span className="font-title-card text-title-card text-ink-charcoal font-bold">
              Consignment Total
            </span>
            <span className="block font-label-micro text-label-micro text-mineral-gray uppercase">
              All duties &amp; insurance settled
            </span>
          </div>
          <div className="text-right">
            <span className="font-headline-sm text-headline-sm text-ink-charcoal font-bold">
              ${finalTotal.toFixed(2)}
            </span>
            <span className="block font-label-micro text-label-micro text-mineral-gray uppercase tracking-widest">
              USD Currency
            </span>
          </div>
        </div>
      </div>

      {/* Primary Place Order CTA Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={onPlaceOrder}
          disabled={isSubmitting}
          className="w-full h-[52px] rounded-xl bg-ink-charcoal hover:bg-primary text-on-primary font-label-input text-label-input font-semibold tracking-wide flex items-center justify-center gap-2 shadow-xs transition-all active:translate-y-[1px] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span>Securing Consignment...</span>
          ) : (
            <>
              <span>Place Order &amp; Finalize Consignment</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </>
          )}
        </button>
        <p className="text-center font-label-micro text-label-micro text-mineral-gray mt-2">
          By commissioning, you accept our{" "}
          <a href="#" className="underline hover:text-ink-charcoal">
            Terms of Consignment
          </a>{" "}
          &amp; Authenticity Policy.
        </p>
      </div>

      {/* Atelier Trust Guarantees */}
      <CheckoutTrustGuarantees />
    </div>
  );
};

export default CheckoutOrderSummary;
