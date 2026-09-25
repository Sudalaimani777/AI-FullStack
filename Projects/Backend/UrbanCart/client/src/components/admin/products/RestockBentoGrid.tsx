// client/src/components/admin/products/RestockBentoGrid.tsx
import React from "react";

interface RestockBentoGridProps {
  productsCount: number;
  totalUnits: number;
  totalValuation: number;
  sohoUnits: number;
  edisonUnits: number;
  maraisUnits: number;
  lowStockCount: number;
  estimatedRestockCost: number;
}

const RestockBentoGrid: React.FC<RestockBentoGridProps> = ({
  productsCount,
  totalUnits,
  totalValuation,
  sohoUnits,
  edisonUnits,
  maraisUnits,
  lowStockCount,
  estimatedRestockCost,
}) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg">
      {/* Bento 1: Channel Inventory Distribution */}
      <div className="lg:col-span-2 p-6 rounded-xl bg-surface-card border border-border-card shadow-[0px_8px_28px_0px_rgba(47,38,18,0.05)] flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray font-semibold">
              Channel Allocation
            </span>
            <h2 className="font-title-card text-title-card text-ink-charcoal font-semibold mt-0.5">
              Warehouse &amp; Boutique Fulfillment Nodes
            </h2>
          </div>
        </div>

        {productsCount === 0 ? (
          <div className="my-6 p-6 rounded-lg bg-surface-container-low border border-border-card text-center">
            <p className="font-body-sm text-body-sm text-mineral-gray">
              No active inventory nodes. Channel distribution will calculate once products are added.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 my-2">
            <div>
              <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                <span className="text-ink-charcoal font-medium">SoHo Flagship Store (New York)</span>
                <span className="text-mineral-gray font-mono">{sohoUnits} units / 62%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                <div className="h-full bg-ink-charcoal rounded-full" style={{ width: "62%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                <span className="text-ink-charcoal font-medium">Primary Distribution Center (Edison Hub)</span>
                <span className="text-mineral-gray font-mono">{edisonUnits} units / 29%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                <div className="h-full bg-terracotta-accent rounded-full" style={{ width: "29%" }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-body-sm font-body-sm mb-1">
                <span className="text-ink-charcoal font-medium">Marais Atelier Showroom (Paris, FR)</span>
                <span className="text-mineral-gray font-mono">{maraisUnits} units / 9%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                <div className="h-full bg-muted-sand rounded-full" style={{ width: "9%" }} />
              </div>
            </div>
          </div>
        )}

        <div className="pt-4 border-t border-border-card flex items-center justify-between text-body-sm font-body-sm text-mineral-gray mt-2">
          <span>
            Combined SKU valuation:{" "}
            <strong className="text-ink-charcoal">
              ${totalValuation.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </strong>
          </span>
          <span className="font-label-input text-label-input text-mineral-gray font-semibold">
            {totalUnits} total units in stock
          </span>
        </div>
      </div>

      {/* Bento 2: Restock Courier Quick-Action Card */}
      <div className="p-6 rounded-xl bg-surface-container-low border border-border-card shadow-[0px_8px_28px_0px_rgba(47,38,18,0.04)] flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-xl bg-surface-card border border-border-subtle flex items-center justify-center text-ink-charcoal mb-4">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <h3 className="font-title-card text-title-card text-ink-charcoal font-semibold mb-1">
            Weekly Supplier Batch
          </h3>
          <p className="font-body-sm text-body-sm text-mineral-gray leading-relaxed mb-4">
            {lowStockCount > 0
              ? `${lowStockCount} items have fallen below safety inventory thresholds and require automated PO generation.`
              : "All catalog SKUs are at optimal stock levels. No restock purchase orders are currently required."}
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <div className="p-3 rounded-lg bg-surface-card border border-border-card flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className={`w-2 h-2 rounded-full ${
                  lowStockCount > 0 ? "bg-status-peach-text" : "bg-[#2E7D32]"
                }`}
              />
              <span className="font-label-input text-label-input text-ink-charcoal">
                {lowStockCount} Supplier {lowStockCount === 1 ? "PO" : "POs"} Pending
              </span>
            </div>
            <span className="font-label-input text-label-input font-mono font-semibold text-ink-charcoal">
              ${estimatedRestockCost.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>

          <button
            disabled={lowStockCount === 0}
            className="w-full h-[46px] rounded-xl bg-ink-charcoal hover:bg-black text-on-primary font-label-input text-label-input font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            type="button"
          >
            <span>Approve &amp; Send Restock Orders</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default RestockBentoGrid;
