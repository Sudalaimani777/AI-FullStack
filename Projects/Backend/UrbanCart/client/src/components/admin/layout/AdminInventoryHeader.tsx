// client/src/components/admin/layout/AdminInventoryHeader.tsx
import React from "react";

interface AdminInventoryHeaderProps {
  onAddProduct: () => void;
}

const AdminInventoryHeader: React.FC<AdminInventoryHeaderProps> = ({ onAddProduct }) => {
  return (
    <section className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg mb-space-xl">
      <div className="flex flex-col gap-space-xs max-w-2xl">
        <div className="flex items-center gap-2">
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-terracotta-flame tracking-[1px]">
            Catalog &amp; Fulfillment / Overview
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-border-subtle" />
          <span className="font-label-micro text-label-micro uppercase text-mineral-gray">
            Updated 4m ago
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-ink-charcoal tracking-tight font-semibold mt-1">
          Inventory &amp; Operations Cockpit
        </h1>
        <p className="font-body-md text-body-md text-mineral-gray leading-relaxed">
          Monitor physical stock volumes, pending orders, and restock velocity across retail channels.
        </p>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        <button
          className="h-[44px] px-5 rounded-xl bg-surface-card border border-border-subtle text-ink-charcoal hover:bg-surface-container font-label-input text-label-input flex items-center gap-2 transition-all shadow-[0px_2px_8px_0px_rgba(47,38,18,0.04)] active:scale-[0.98]"
          type="button"
        >
          <svg className="w-4 h-4 text-mineral-gray" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" x2="12" y1="15" y2="3"></line>
          </svg>
          <span>Export Report</span>
        </button>

        <button
          onClick={onAddProduct}
          className="h-[46px] px-6 rounded-xl bg-terracotta-accent hover:bg-terracotta-flame text-on-primary font-label-input text-label-input font-semibold flex items-center gap-2 transition-all shadow-[0px_4px_16px_0px_rgba(232,93,63,0.25)] active:scale-[0.98]"
          type="button"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24">
            <line x1="12" x2="12" y1="5" y2="19"></line>
            <line x1="5" x2="19" y1="12" y2="12"></line>
          </svg>
          <span> Add New Product</span>
        </button>
      </div>
    </section>
  );
};

export default AdminInventoryHeader;
