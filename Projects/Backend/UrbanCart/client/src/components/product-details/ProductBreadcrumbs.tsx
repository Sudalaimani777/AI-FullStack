// client/src/components/product-details/ProductBreadcrumbs.tsx
import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types";

interface ProductBreadcrumbsProps {
  product: Product;
  activeScenario?: string;
  onSelectScenario?: (scenario: string) => void;
}

export const ProductBreadcrumbs: React.FC<ProductBreadcrumbsProps> = ({
  product,
  activeScenario = "in-stock",
  onSelectScenario,
}) => {
  const shortId = product._id ? product._id.slice(-6).toUpperCase() : "0041";
  const sku = `SKU: UC-${product.product_category?.slice(0, 3).toUpperCase() || "LGT"}-${shortId}`;

  return (
    <div className="w-full">
      {/* Optional Curator Scenario Simulator Bar */}
      {onSelectScenario && (
        <div className="w-full bg-surface-container py-2.5 px-gutter">
          <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-3 text-body-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terracotta-accent animate-pulse" />
              <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray">
                Curator Scenario Simulator
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-surface-card p-1 rounded-xl shadow-xs">
              <button
                type="button"
                onClick={() => onSelectScenario("in-stock")}
                className={`px-3 py-1.5 rounded-lg font-label-input text-label-input transition-all cursor-pointer ${
                  activeScenario === "in-stock"
                    ? "bg-ink-charcoal text-on-primary shadow-xs"
                    : "text-on-surface-variant hover:text-ink-charcoal hover:bg-surface-container-low"
                }`}
              >
                In Stock Live
              </button>
              <button
                type="button"
                onClick={() => onSelectScenario("waitlist")}
                className={`px-3 py-1.5 rounded-lg font-label-input text-label-input transition-all cursor-pointer ${
                  activeScenario === "waitlist"
                    ? "bg-ink-charcoal text-on-primary shadow-xs"
                    : "text-on-surface-variant hover:text-ink-charcoal hover:bg-surface-container-low"
                }`}
              >
                Waitlist / Vault Reserve
              </button>
              <button
                type="button"
                onClick={() => onSelectScenario("tech")}
                className={`px-3 py-1.5 rounded-lg font-label-input text-label-input transition-all cursor-pointer ${
                  activeScenario === "tech"
                    ? "bg-ink-charcoal text-on-primary shadow-xs"
                    : "text-on-surface-variant hover:text-ink-charcoal hover:bg-surface-container-low"
                }`}
              >
                Acoustic Hardware
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumbs & SKU Banner */}
      <div className="w-full max-w-[1440px] mx-auto px-gutter pt-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-label-input text-label-input text-mineral-gray">
            <Link to="/" className="hover:text-ink-charcoal transition-colors">
              Home
            </Link>
            <span className="text-muted-sand">/</span>
            <Link
              to={`/?category=${encodeURIComponent(product.product_category || "All")}`}
              className="hover:text-ink-charcoal transition-colors"
            >
              {product.product_category || "Architectural Lighting"}
            </Link>
            <span className="text-muted-sand">/</span>
            <span className="text-ink-charcoal font-semibold truncate max-w-xs md:max-w-md">
              {product.product_name}
            </span>
          </nav>

          <div className="flex items-center gap-3">
            <span className="font-label-micro text-label-micro uppercase tracking-widest px-2.5 py-1 bg-surface-container rounded-md text-mineral-gray font-medium">
              {sku}
            </span>
            <span className="font-label-micro text-label-micro uppercase tracking-widest text-mineral-gray flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-terracotta-accent">verified</span>
              Atelier Certified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBreadcrumbs;
