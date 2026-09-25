// client/src/components/admin/orders/OrderTableToolbar.tsx
import React from "react";

interface OrderTableToolbarProps {
  statusFilter: string;
  onStatusFilterChange: (status: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedNode: string;
  onNodeChange: (node: string) => void;
  totalOrdersCount: number;
  pendingCount: number;
  processingCount: number;
  shippedCount: number;
  deliveredCount: number;
  previewEmpty: boolean;
  onTogglePreviewEmpty: () => void;
}

const OrderTableToolbar: React.FC<OrderTableToolbarProps> = ({
  statusFilter,
  onStatusFilterChange,
  searchTerm,
  onSearchChange,
  selectedNode,
  onNodeChange,
  totalOrdersCount,
  pendingCount,
  processingCount,
  shippedCount,
  deliveredCount,
  previewEmpty,
  onTogglePreviewEmpty,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {/* 1. Stage Selector Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onStatusFilterChange("All")}
            className={`px-4 py-2 rounded-xl font-label-input text-label-input transition-all ${
              statusFilter === "All"
                ? "bg-primary-container text-on-primary shadow-sm font-semibold"
                : "bg-surface-card hover:bg-surface-container text-mineral-gray hover:text-ink-charcoal border border-border-card"
            }`}
            type="button"
          >
            <span>All Orders ({totalOrdersCount})</span>
          </button>

          <button
            onClick={() => onStatusFilterChange("Pending")}
            className={`px-4 py-2 rounded-xl font-label-input text-label-input transition-all flex items-center gap-1.5 ${
              statusFilter === "Pending"
                ? "bg-status-peach-bg text-status-peach-text border border-status-peach-text font-semibold shadow-sm"
                : "bg-surface-card hover:bg-surface-container text-mineral-gray hover:text-ink-charcoal border border-border-card"
            }`}
            type="button"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-flame" />
            <span>Needs Packing ({pendingCount})</span>
          </button>

          <button
            onClick={() => onStatusFilterChange("Processing")}
            className={`px-4 py-2 rounded-xl font-label-input text-label-input transition-all ${
              statusFilter === "Processing"
                ? "bg-secondary-container text-on-secondary-container border border-secondary font-semibold shadow-sm"
                : "bg-surface-card hover:bg-surface-container text-mineral-gray hover:text-ink-charcoal border border-border-card"
            }`}
            type="button"
          >
            <span>Processing ({processingCount})</span>
          </button>

          <button
            onClick={() => onStatusFilterChange("Shipped")}
            className={`px-4 py-2 rounded-xl font-label-input text-label-input transition-all ${
              statusFilter === "Shipped"
                ? "bg-surface-container-high text-ink-charcoal border border-mineral-gray font-semibold shadow-sm"
                : "bg-surface-card hover:bg-surface-container text-mineral-gray hover:text-ink-charcoal border border-border-card"
            }`}
            type="button"
          >
            <span>In Transit ({shippedCount})</span>
          </button>

          <button
            onClick={() => onStatusFilterChange("Delivered")}
            className={`px-4 py-2 rounded-xl font-label-input text-label-input transition-all ${
              statusFilter === "Delivered"
                ? "bg-[#E8F5E9] text-[#2E7D32] border border-[#2E7D32] font-semibold shadow-sm"
                : "bg-surface-card hover:bg-surface-container text-mineral-gray hover:text-ink-charcoal border border-border-card"
            }`}
            type="button"
          >
            <span>Delivered ({deliveredCount})</span>
          </button>
        </div>

        {/* Alternate States Simulator Toggle */}
        <button
          onClick={onTogglePreviewEmpty}
          className="px-3 py-1.5 rounded-lg border border-border-card bg-surface-container-low hover:bg-surface-container text-mineral-gray hover:text-ink-charcoal font-label-micro text-label-micro uppercase tracking-wider transition-colors"
          type="button"
        >
          {previewEmpty ? "View Real Ledger" : "Preview Zero State"}
        </button>
      </div>

      {/* 2. Search & Node Filters Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-surface-card p-3 rounded-xl border border-border-card">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search order ID, recipient name, city, or SKU..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-lg bg-surface-container-low border border-border-card font-body-sm text-body-sm text-ink-charcoal placeholder:text-mineral-gray focus:outline-none focus:border-terracotta-accent transition-colors"
          />
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-mineral-gray text-lg pointer-events-none">
            search
          </span>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={selectedNode}
            onChange={(e) => onNodeChange(e.target.value)}
            className="h-10 px-3 rounded-lg bg-surface-container-low border border-border-card font-label-input text-label-input text-ink-charcoal focus:outline-none cursor-pointer"
          >
            <option value="All">All Dispatch Nodes</option>
            <option value="SoHo">SoHo Flagship (#01)</option>
            <option value="Marais">Marais Atelier (#02)</option>
            <option value="Edison">Edison Central Depot (#03)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default OrderTableToolbar;
