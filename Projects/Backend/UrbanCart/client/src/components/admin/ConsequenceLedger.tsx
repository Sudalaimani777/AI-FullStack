// client/src/components/admin/ConsequenceLedger.tsx
import React from "react";

interface ConsequenceLedgerProps {
  targetSku: string;
  targetCategory: string;
  targetStock: number | string;
  targetPrice: string;
}

const ConsequenceLedger: React.FC<ConsequenceLedgerProps> = ({
  targetSku,
  targetCategory,
  targetStock,
  targetPrice,
}) => {
  return (
    <div className="bg-surface-container-low rounded-xl p-4 flex flex-col gap-3.5 border border-border-card/60">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 bg-surface-container-high/40 rounded-lg p-2.5">
        <div className="flex flex-col">
          <span className="font-label-micro text-label-micro uppercase text-mineral-gray tracking-wider">
            Target SKU
          </span>
          <span className="font-label-input text-label-input text-ink-charcoal font-semibold font-mono">
            {targetSku}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-micro text-label-micro uppercase text-mineral-gray tracking-wider">
            Classification
          </span>
          <span className="font-body-sm text-body-sm text-ink-charcoal font-medium">
            {targetCategory}
          </span>
        </div>
        <div className="flex flex-col text-right">
          <span className="font-label-micro text-label-micro uppercase text-mineral-gray tracking-wider">
            On-Hand Stock
          </span>
          <span className="font-body-sm text-body-sm text-status-peach-text font-semibold">
            {targetStock} units ({targetPrice})
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2.5 pt-1">
        <span className="font-label-micro text-label-micro uppercase tracking-wider text-mineral-gray font-semibold">
          Consequence Ledger:
        </span>
        <div className="flex items-start gap-2.5 text-body-sm font-body-sm text-ink-charcoal">
          <svg className="w-4 h-4 text-terracotta-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19.5 12h-15" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Product listing will be immediately removed from the live boutique storefront.</span>
        </div>
        <div className="flex items-start gap-2.5 text-body-sm font-body-sm text-ink-charcoal">
          <svg className="w-4 h-4 text-terracotta-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19.5 12h-15" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>
            Historical order manifests referencing this SKU will preserve records as immutable
            archived snapshots.
          </span>
        </div>
        <div className="flex items-start gap-2.5 text-body-sm font-body-sm text-ink-charcoal">
          <svg className="w-4 h-4 text-terracotta-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M19.5 12h-15" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>
            Associated media assets and physical depot bin allocations will be detached permanently.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConsequenceLedger;
