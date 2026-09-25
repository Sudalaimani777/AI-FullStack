// client/src/components/admin/orders/DossierFinancialLedger.tsx
import React from "react";
import type { Order } from "../../../types";

interface DossierFinancialLedgerProps {
  order: Order;
  totalItemUnits: number;
  itemsSubtotal: number;
  shippingCost: number;
  customsVat: number;
  courtesyDiscount: number;
}

const DossierFinancialLedger: React.FC<DossierFinancialLedgerProps> = ({
  order,
  totalItemUnits,
  itemsSubtotal,
  shippingCost,
  customsVat,
  courtesyDiscount,
}) => {
  return (
    <div className="p-5 rounded-xl bg-surface-bright flex flex-col gap-3.5 border border-border-card">
      <div className="flex items-center justify-between pb-1">
        <span className="font-title-card text-title-card text-ink-charcoal font-semibold">
          Financial Ledger
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-surface-container font-label-micro text-label-micro text-ink-charcoal font-semibold font-mono">
          Stripe ID: ch_{order._id.slice(-8)}
        </span>
      </div>

      <div className="space-y-2 font-body-sm text-body-sm text-mineral-gray">
        <div className="flex justify-between">
          <span>Item Subtotal ({totalItemUnits} {totalItemUnits === 1 ? "unit" : "units"})</span>
          <span className="text-ink-charcoal font-medium">
            ${Number(itemsSubtotal).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Shipping &amp; Freight (DHL Air Priority)</span>
          <span className="text-ink-charcoal font-medium">
            ${shippingCost.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Estimated Customs &amp; VAT (EU Import)</span>
          <span className="text-ink-charcoal font-medium">
            ${customsVat.toFixed(2)}
          </span>
        </div>
        {courtesyDiscount > 0 && (
          <div className="flex justify-between text-status-peach-text">
            <span>Studio Courtesy Credit (VIP-NORD)</span>
            <span>-${courtesyDiscount.toFixed(2)}</span>
          </div>
        )}
      </div>

      <div className="pt-3 border-t border-border-card flex items-baseline justify-between">
        <div>
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray block font-semibold">
            Settled Amount
          </span>
          <span className="font-headline-sm text-headline-sm text-ink-charcoal font-bold">
            ${Number(order.total_price).toFixed(2)}
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-status-peach-bg text-status-peach-text">
          <span className="material-symbols-outlined text-sm">check_circle</span>
          <span className="font-label-micro text-label-micro uppercase font-semibold">
            Paid in Full
          </span>
        </div>
      </div>
    </div>
  );
};

export default DossierFinancialLedger;
