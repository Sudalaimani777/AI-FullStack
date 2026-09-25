// client/src/components/admin/AdminTabs.tsx
import React from "react";
import type { AdminTab } from "./layout/AdminSidebar";

interface AdminTabsProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
  productCount: number;
  orderCount: number;
  showAlternateStates: boolean;
  onToggleAlternateStates: () => void;
}

const AdminTabs: React.FC<AdminTabsProps> = ({
  activeTab,
  onTabChange,
  productCount,
  orderCount,
  showAlternateStates,
  onToggleAlternateStates,
}) => {
  return (
    <div className="flex items-center justify-between border-b border-border-subtle mb-space-lg">
      <div className="flex items-center gap-1 sm:gap-2">
        <button
          onClick={() => onTabChange("products")}
          className={`relative px-4 py-3 font-label-input text-label-input flex items-center gap-2 transition-colors border-b-2 ${
            activeTab === "products" || activeTab === "overview"
              ? "text-ink-charcoal font-semibold border-terracotta-accent"
              : "text-mineral-gray hover:text-ink-charcoal border-transparent"
          }`}
          type="button"
        >
          <span>Products &amp; Inventory</span>
          <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-micro text-label-micro">
            {productCount}
          </span>
        </button>

        <button
          onClick={() => onTabChange("orders")}
          className={`relative px-4 py-3 font-label-input text-label-input flex items-center gap-2 transition-colors border-b-2 ${
            activeTab === "orders"
              ? "text-ink-charcoal font-semibold border-terracotta-accent"
              : "text-mineral-gray hover:text-ink-charcoal border-transparent"
          }`}
          type="button"
        >
          <span>Orders &amp; Fulfillment</span>
          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-mineral-gray font-label-micro text-label-micro">
            {orderCount}
          </span>
        </button>

        <button
          onClick={() => onTabChange("forecasts")}
          className={`relative px-4 py-3 font-label-input text-label-input transition-colors border-b-2 ${
            activeTab === "forecasts"
              ? "text-ink-charcoal font-semibold border-terracotta-accent"
              : "text-mineral-gray hover:text-ink-charcoal border-transparent"
          }`}
          type="button"
        >
          <span>Restock Forecasts</span>
        </button>
      </div>

      {/* Quick View / Alternate Toggle Pill */}
      <div className="hidden md:flex items-center gap-2 pb-2">
        <button
          onClick={onToggleAlternateStates}
          className="px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-mineral-gray hover:text-ink-charcoal text-label-micro font-label-micro uppercase tracking-wider flex items-center gap-1.5 border border-border-card transition-all"
          type="button"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
          <span>{showAlternateStates ? "Hide Alternate States" : "Toggle Alternate States"}</span>
        </button>
      </div>
    </div>
  );
};

export default AdminTabs;