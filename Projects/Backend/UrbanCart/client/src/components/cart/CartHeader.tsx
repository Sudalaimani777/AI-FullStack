// client/src/components/cart/CartHeader.tsx
import React from "react";

interface CartHeaderProps {
  itemCount: number;
  activeView: "active" | "empty";
  onSwitchView: (view: "active" | "empty") => void;
}

export const CartHeader: React.FC<CartHeaderProps> = ({
  itemCount,
  activeView,
  onSwitchView,
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pb-space-lg">
      <div className="space-y-space-xs">
        <h1 className="font-headline-lg text-headline-lg text-ink-charcoal tracking-tight">
          Your Curated Bag (<span>{itemCount}</span>)
        </h1>
      </div>

      {/* State Switcher Pill */}
      <div className="flex items-center self-start lg:self-auto p-1 rounded-full bg-surface-container-high shadow-inner">
        <button
          type="button"
          onClick={() => onSwitchView("active")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-label-input text-label-input transition-all cursor-pointer ${
            activeView === "active"
              ? "bg-surface-card text-ink-charcoal shadow-xs"
              : "text-mineral-gray hover:text-ink-charcoal"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-terracotta-flame" />
          <span>Active Consignment ({itemCount} {itemCount === 1 ? "item" : "items"})</span>
        </button>
        <button
          type="button"
          onClick={() => onSwitchView("empty")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-label-input text-label-input transition-all cursor-pointer ${
            activeView === "empty"
              ? "bg-surface-card text-ink-charcoal shadow-xs"
              : "text-mineral-gray hover:text-ink-charcoal"
          }`}
        >
          <span>Empty Bag State</span>
        </button>
      </div>
    </div>
  );
};

export default CartHeader;
