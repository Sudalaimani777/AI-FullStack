// client/src/components/cart/CartItemRow.tsx
import React from "react";
import { Link } from "react-router-dom";
import type { CartItem } from "../../types";

interface CartItemRowProps {
  item: CartItem;
  onUpdateQty: (productId: string, change: number) => void;
  onRemove: (productId: string) => void;
}

export const CartItemRow: React.FC<CartItemRowProps> = ({
  item,
  onUpdateQty,
  onRemove,
}) => {
  const { product, quantity } = item;
  const unitPrice = Number(product.product_price) || 0;
  const lineTotal = (unitPrice * quantity).toFixed(2);
  const stockCount = Number(product.product_stock) || 0;
  const shortId = product._id ? product._id.slice(-6).toUpperCase() : "0041";
  const sku = `SKU: UC-${product.product_category?.slice(0, 3).toUpperCase() || "OBJ"}-${shortId}`;

  const fallbackImage =
    "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="p-space-md md:p-space-lg rounded-xl bg-surface-card shadow-xs transition-all hover:shadow-md border border-border-card/40">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-space-md items-center">
        {/* Thumb + Description (7 cols) */}
        <div className="sm:col-span-7 flex items-start gap-space-md">
          <Link
            to={`/product/${product._id}`}
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden bg-surface-container shrink-0 block group"
          >
            <img
              src={product.product_image || fallbackImage}
              alt={product.product_name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          <div className="space-y-1 min-w-0 flex-1">
            <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray block truncate">
              {product.product_category || "Architectural Homeware"}
            </span>
            <Link
              to={`/product/${product._id}`}
              className="font-title-card text-title-card text-ink-charcoal truncate block hover:text-terracotta-accent transition-colors"
            >
              {product.product_name}
            </Link>
            <p className="font-body-sm text-body-sm text-mineral-gray line-clamp-1">
              {product.product_description || "Handcrafted Architectural Object"}
            </p>
            <p className="font-label-micro text-label-micro text-muted-sand">{sku}</p>

            {/* Dynamic Stock Indicator */}
            {stockCount > 0 && stockCount <= 3 ? (
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-status-peach-bg text-status-peach-text font-label-micro text-label-micro">
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta-flame" />
                <span>Low Stock — {stockCount} left in reserve</span>
              </div>
            ) : stockCount <= 0 ? (
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container text-mineral-gray font-label-micro text-label-micro">
                <span className="w-1.5 h-1.5 rounded-full bg-mineral-gray" />
                <span>Edition Vault Depleted</span>
              </div>
            ) : (
              <span className="font-label-micro text-label-micro text-mineral-gray block">
                Handcrafted Individual Piece
              </span>
            )}
          </div>
        </div>

        {/* Quantity Controller (3 cols) */}
        <div className="sm:col-span-3 flex sm:justify-center items-center gap-space-md">
          <div className="flex items-center rounded-lg bg-surface-container-low px-1 py-1 border border-border-card/30">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => onUpdateQty(product._id, -1)}
              className="w-8 h-8 rounded flex items-center justify-center text-ink-charcoal hover:bg-surface-card transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">remove</span>
            </button>
            <span className="w-8 text-center font-label-input text-label-input text-ink-charcoal font-semibold">
              {quantity}
            </span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => onUpdateQty(product._id, 1)}
              className="w-8 h-8 rounded flex items-center justify-center text-ink-charcoal hover:bg-surface-card transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
            </button>
          </div>

          {/* Mobile Price */}
          <span className="sm:hidden font-title-card text-title-card text-ink-charcoal ml-auto">
            ${lineTotal}
          </span>
        </div>

        {/* Price & Delete Action (2 cols desktop) */}
        <div className="hidden sm:flex sm:col-span-2 flex-col items-end justify-between h-full space-y-4">
          <span className="font-title-card text-title-card text-ink-charcoal">
            ${lineTotal}
          </span>
          <button
            type="button"
            onClick={() => onRemove(product._id)}
            title="Remove from consignment"
            className="p-1.5 rounded-full text-mineral-gray hover:text-error hover:bg-error-container/40 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">delete</span>
          </button>
        </div>
      </div>

      {/* Mobile Remove button */}
      <div className="sm:hidden mt-space-sm pt-space-xs flex justify-end border-t border-border-card/30">
        <button
          type="button"
          onClick={() => onRemove(product._id)}
          className="flex items-center gap-1 font-label-micro text-label-micro text-mineral-gray hover:text-error cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">delete</span>
          <span>Remove item</span>
        </button>
      </div>
    </div>
  );
};

export default CartItemRow;
