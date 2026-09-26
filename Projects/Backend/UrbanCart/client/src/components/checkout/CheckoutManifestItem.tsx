// client/src/components/checkout/CheckoutManifestItem.tsx
import React from "react";
import type { CartItem } from "../../types";

interface CheckoutManifestItemProps {
  item: CartItem;
}

export const CheckoutManifestItem: React.FC<CheckoutManifestItemProps> = ({ item }) => {
  const { product, quantity } = item;
  const unitPrice = Number(product.product_price) || 0;
  const lineTotal = (unitPrice * quantity).toFixed(2);
  const shortId = product._id ? product._id.slice(-6).toUpperCase() : "0041";
  const sku = `SKU: UC-${product.product_category?.slice(0, 3).toUpperCase() || "OBJ"}-${shortId}`;

  const fallbackImage =
    "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80";

  return (
    <div className="flex items-center gap-3.5 group">
      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-surface-container shrink-0 border border-border-card/40">
        <img
          src={product.product_image || fallbackImage}
          alt={product.product_name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-1 right-1 px-1.5 py-0.5 rounded-full bg-ink-charcoal text-on-primary font-label-micro text-label-micro font-semibold leading-none">
          {quantity}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <h4 className="font-body-md text-body-md text-ink-charcoal font-medium truncate">
            {product.product_name}
          </h4>
          <span className="font-body-md text-body-md text-ink-charcoal font-semibold shrink-0">
            ${lineTotal}
          </span>
        </div>
        <p className="font-label-micro text-label-micro text-mineral-gray uppercase tracking-wider truncate">
          {sku} • {product.product_description?.slice(0, 28) || "Curated Edition"}
        </p>
        <p className="font-label-micro text-label-micro text-status-peach-text truncate">
          {product.product_category || "Atelier Reserve Object"}
        </p>
      </div>
    </div>
  );
};

export default CheckoutManifestItem;
