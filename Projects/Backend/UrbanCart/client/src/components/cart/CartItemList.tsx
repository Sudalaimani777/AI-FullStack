// client/src/components/cart/CartItemList.tsx
import React from "react";
import { Link } from "react-router-dom";
import type { CartItem } from "../../types";
import CartItemRow from "./CartItemRow";

interface CartItemListProps {
  items: CartItem[];
  onUpdateQty: (productId: string, change: number) => void;
  onRemove: (productId: string) => void;
  onClearBag: () => void;
}

export const CartItemList: React.FC<CartItemListProps> = ({
  items,
  onUpdateQty,
  onRemove,
  onClearBag,
}) => {
  return (
    <div className="space-y-space-md">
      {/* Column Table Header (Desktop Only) */}
      <div className="hidden sm:grid grid-cols-12 pb-space-xs text-mineral-gray font-label-eyebrow text-label-eyebrow uppercase tracking-widest px-2">
        <div className="col-span-7">Consigned Object</div>
        <div className="col-span-3 text-center">Quantity</div>
        <div className="col-span-2 text-right">Line Total</div>
      </div>

      {/* Items Container */}
      <div className="space-y-space-md">
        {items.map((item) => (
          <CartItemRow
            key={item.product._id}
            item={item}
            onUpdateQty={onUpdateQty}
            onRemove={onRemove}
          />
        ))}
      </div>

      {/* Bottom Actions Row */}
      <div className="pt-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 font-label-input text-label-input text-ink-charcoal hover:text-terracotta-accent transition-colors"
        >
          <span className="material-symbols-outlined text-[18px] group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          <span>Continue exploring curated catalog</span>
        </Link>
        <button
          type="button"
          onClick={onClearBag}
          className="font-label-input text-label-input text-mineral-gray hover:text-error transition-colors cursor-pointer"
        >
          Clear All Consigned Items
        </button>
      </div>
    </div>
  );
};

export default CartItemList;
