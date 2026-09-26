// client/src/components/order-confirmation/OrderManifestSummary.tsx
import React from "react";
import type { CartItem } from "../../types";
import ProvenanceTrustCard from "./ProvenanceTrustCard";

interface OrderManifestSummaryProps {
  items: CartItem[];
  totalPrice?: number;
  onContactConcierge: () => void;
}

export const OrderManifestSummary: React.FC<OrderManifestSummaryProps> = ({
  items,
  totalPrice,
  onContactConcierge,
}) => {
  const subtotal = items.reduce(
    (sum, item) => sum + (Number(item.product.product_price) || 0) * item.quantity,
    0
  );
  const tax = subtotal * 0.08;
  const computedTotal = totalPrice || subtotal + tax;

  const fallbackImage =
    "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="flex flex-col gap-space-md">
      {/* Summary Box */}
      <div className="bg-surface-card rounded-xl shadow-xs p-space-lg flex flex-col gap-space-md border border-border-card/40">
        <div className="flex items-center justify-between pb-space-xs border-b border-border-card/30">
          <span className="font-title-card text-title-card text-ink-charcoal font-semibold">
            Consignment Manifest
          </span>
          <span className="font-label-micro text-label-micro text-mineral-gray uppercase tracking-widest">
            {items.length} {items.length === 1 ? "Curated Object" : "Curated Objects"}
          </span>
        </div>

        {/* Items List */}
        <div className="space-y-4">
          {items.map((item, idx) => {
            const { product, quantity } = item;
            const price = Number(product.product_price) || 0;
            return (
              <React.Fragment key={product._id || idx}>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-container shrink-0 shadow-xs border border-border-card/40 relative">
                    <img
                      src={product.product_image || fallbackImage}
                      alt={product.product_name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="font-label-micro text-label-micro text-mineral-gray uppercase tracking-wider truncate">
                      {product.product_category || "Atelier Edition"}
                    </span>
                    <h4 className="font-label-input text-label-input text-ink-charcoal truncate font-semibold">
                      {product.product_name}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                      {product.product_description?.slice(0, 32) || "Curated Craft"} · Qty {quantity}
                    </p>
                    <span className="font-label-input text-label-input text-ink-charcoal mt-0.5 font-semibold">
                      ${(price * quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                {idx < items.length - 1 && <div className="h-[1px] bg-border-card/30" />}
              </React.Fragment>
            );
          })}
        </div>

        {/* Financial Breakdown Ledger */}
        <div className="bg-surface-container-low rounded-lg p-space-md space-y-2.5 mt-space-xs border border-border-card/30">
          <div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
            <span>Artifacts Subtotal</span>
            <span className="text-ink-charcoal font-medium">${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
            <span className="flex items-center gap-1.5">
              <span>White-Glove Courier Logistics</span>
              <span
                className="material-symbols-outlined text-[14px] text-mineral-gray cursor-help"
                title="Complimentary for consignments over $250"
              >
                info
              </span>
            </span>
            <span className="text-terracotta-accent font-semibold uppercase font-label-micro text-label-micro">
              Complimentary
            </span>
          </div>

          <div className="flex justify-between items-center font-body-sm text-body-sm text-on-surface-variant">
            <span>Estimated Regional Tax (8%)</span>
            <span className="text-ink-charcoal font-medium">${tax.toFixed(2)}</span>
          </div>

          <div className="h-[1px] bg-border-subtle my-2" />

          <div className="flex justify-between items-baseline">
            <div className="flex flex-col">
              <span className="font-title-card text-title-card text-ink-charcoal font-bold">
                Total Settled
              </span>
              <span className="font-label-micro text-label-micro text-mineral-gray">
                USD Currency Exchange Fixed
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm text-ink-charcoal font-bold">
              ${computedTotal.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Concierge Support Contact */}
        <div className="flex items-center justify-between text-mineral-gray font-label-micro text-label-micro px-1">
          <span>Questions regarding this consignment?</span>
          <button
            type="button"
            onClick={onContactConcierge}
            className="text-terracotta-accent hover:underline font-semibold cursor-pointer"
          >
            Contact Atelier Concierge
          </button>
        </div>
      </div>

      {/* Provenance & Guarantee Trust Card */}
      <ProvenanceTrustCard />
    </div>
  );
};

export default OrderManifestSummary;
