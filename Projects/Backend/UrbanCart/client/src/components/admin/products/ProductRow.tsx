// client/src/components/admin/products/ProductRow.tsx
import React from "react";
import type { Product } from "../../../types";

interface ProductRowProps {
  product: Product;
  index: number;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

const ProductRow: React.FC<ProductRowProps> = ({
  product,
  index,
  onEdit,
  onDelete,
}) => {
  const stockNum = Number(product.product_stock) || 0;
  const isOutOfStock = stockNum <= 0;
  const isLowStock = stockNum > 0 && stockNum <= 5;
  const shortSku = `UC-${(product.product_category || "SKU").slice(0, 3).toUpperCase()}-${product._id.slice(-4).toUpperCase()}`;

  return (
    <tr className="hover:bg-surface-container-low/60 transition-colors group">
      {/* Product Image & Name */}
      <td className="py-4 pl-6 pr-4 whitespace-nowrap">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-surface-container flex-shrink-0 overflow-hidden border border-border-card">
            {product.product_image ? (
              <img
                src={product.product_image}
                alt={product.product_name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-mineral-gray font-bold text-xs">
                IMG
              </div>
            )}
          </div>
          <div className="flex flex-col">
            <span className="font-title-card text-title-card text-ink-charcoal font-semibold truncate max-w-xs">
              {product.product_name}
            </span>
            <span className="font-label-micro text-label-micro text-mineral-gray mt-0.5">
              Line {index + 1} · Added {product.createdAt ? new Date(product.createdAt).toLocaleDateString() : "Active"}
            </span>
          </div>
        </div>
      </td>

      {/* SKU Identifier */}
      <td className="py-4 px-4 whitespace-nowrap">
        <span className="font-label-input text-label-input font-mono text-mineral-gray bg-surface-container px-2.5 py-1 rounded-md">
          {shortSku}
        </span>
      </td>

      {/* Discipline / Category */}
      <td className="py-4 px-4 whitespace-nowrap">
        <span className="font-body-sm text-body-sm text-ink-charcoal">
          {product.product_category}
        </span>
      </td>

      {/* Valuation / Price */}
      <td className="py-4 px-4 whitespace-nowrap">
        <span className="font-title-card text-title-card font-semibold text-ink-charcoal">
          ${Number(product.product_price).toFixed(2)}
        </span>
      </td>

      {/* Vault Stock / Units */}
      <td className="py-4 px-4 whitespace-nowrap">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              isOutOfStock
                ? "bg-mineral-gray"
                : isLowStock
                ? "bg-terracotta-flame animate-pulse"
                : "bg-ink-charcoal"
            }`}
          />
          <span
            className={`font-label-input text-label-input ${
              isOutOfStock
                ? "text-mineral-gray font-medium"
                : isLowStock
                ? "text-terracotta-flame font-semibold"
                : "text-ink-charcoal font-medium"
            }`}
          >
            {stockNum} {stockNum === 1 ? "unit" : "units"}
          </span>
          {isLowStock && (
            <span className="font-label-micro text-label-micro uppercase px-1.5 py-0.5 rounded bg-status-peach-bg text-status-peach-text font-semibold">
              Low
            </span>
          )}
        </div>
      </td>

      {/* Status Badge */}
      <td className="py-4 px-4 whitespace-nowrap">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full font-label-micro text-label-micro font-medium uppercase tracking-wider ${
            isOutOfStock
              ? "bg-surface-container text-mineral-gray"
              : isLowStock
              ? "bg-status-peach-bg text-status-peach-text"
              : "bg-secondary-container text-on-secondary-container"
          }`}
        >
          {isOutOfStock ? "Depleted" : isLowStock ? "Under Stock" : "Live Syndicated"}
        </span>
      </td>

      {/* Actions */}
      <td className="py-4 pl-4 pr-6 text-right whitespace-nowrap">
        <div className="flex items-center justify-end gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onEdit(product)}
            className="p-2 rounded-lg text-mineral-gray hover:text-ink-charcoal hover:bg-surface-container transition-colors"
            title="Edit SKU"
            type="button"
          >
            <span className="material-symbols-outlined text-lg">edit</span>
          </button>
          <button
            onClick={() => onDelete(product)}
            className="p-2 rounded-lg text-mineral-gray hover:text-status-peach-text hover:bg-status-peach-bg transition-colors"
            title="Purge SKU"
            type="button"
          >
            <span className="material-symbols-outlined text-lg">delete</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;
