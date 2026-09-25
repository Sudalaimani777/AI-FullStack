// client/src/components/admin/orders/OrderEmptyState.tsx
import React from "react";

interface OrderEmptyStateProps {
  onResetFilters: () => void;
}

const OrderEmptyState: React.FC<OrderEmptyStateProps> = ({ onResetFilters }) => {
  return (
    <div className="p-12 text-center bg-surface-card rounded-2xl border border-border-card shadow-[0px_8px_28px_0px_rgba(47,38,18,0.04)] my-6 flex flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-mineral-gray mb-4">
        <span className="material-symbols-outlined text-3xl">inventory</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm font-semibold text-ink-charcoal mb-2">
        No Orders Match Current Logistics Filters
      </h3>
      <p className="font-body-md text-body-md text-mineral-gray max-w-md mx-auto mb-6">
        No active orders found matching your search query or selected dispatch node. Reset filters to
        inspect the complete order registry.
      </p>
      <button
        onClick={onResetFilters}
        className="px-5 py-2.5 rounded-xl bg-ink-charcoal text-white hover:bg-black font-label-input text-label-input font-semibold shadow-sm transition-all"
        type="button"
      >
        Reset Filter Parameters
      </button>
    </div>
  );
};

export default OrderEmptyState;
