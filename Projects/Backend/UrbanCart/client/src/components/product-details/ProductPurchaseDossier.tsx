// client/src/components/product-details/ProductPurchaseDossier.tsx
import React from "react";
import type { Product } from "../../types";
import ProductTrustBadges from "./ProductTrustBadges";
import ProductSpecAccordions from "./ProductSpecAccordions";
import ProductOptionSelectors from "./ProductOptionSelectors";

interface ProductPurchaseDossierProps {
  product: Product;
  unitPrice: number;
  quantity: number;
  onQuantityChange: (qty: number) => void;
  selectedSize: string;
  onSelectSize: (size: string, priceOffset: number) => void;
  selectedCord: string;
  onSelectCord: (cord: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  onAddToCart: () => void;
  onDirectCheckout: () => void;
  isWaitlistMode?: boolean;
}

export const ProductPurchaseDossier: React.FC<ProductPurchaseDossierProps> = ({
  product,
  unitPrice,
  quantity,
  onQuantityChange,
  selectedSize,
  onSelectSize,
  selectedCord,
  onSelectCord,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onDirectCheckout,
  isWaitlistMode = false,
}) => {
  const stockCount = Number(product.product_stock) || 0;
  const isOutOfStock = isWaitlistMode || stockCount <= 0;
  const isLowStock = !isOutOfStock && stockCount <= 5;

  const totalPrice = (unitPrice * quantity).toFixed(2);
  const installmentPrice = (unitPrice / 4).toFixed(2);

  return (
    <div className="flex flex-col gap-6">
      {/* Category & Reserve Badge + Wishlist */}
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container font-label-eyebrow text-label-eyebrow text-ink-charcoal uppercase">
          {product.product_category || "Architectural Lighting"} • Atelier Reserve
        </span>
        <button
          type="button"
          aria-label="Save to Wishlist"
          onClick={onToggleWishlist}
          className="w-9 h-9 rounded-full bg-surface-card shadow-xs hover:bg-surface-container transition-all flex items-center justify-center text-on-surface-variant hover:text-terracotta-flame cursor-pointer border border-border-card/40"
        >
          <span
            className={`material-symbols-outlined text-[20px] ${
              isWishlisted ? "text-terracotta-flame" : ""
            }`}
            style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
          >
            favorite
          </span>
        </button>
      </div>

      {/* Product Title & Reviews */}
      <div className="space-y-2">
        <h1 className="font-headline-lg text-headline-lg text-ink-charcoal leading-[1.1] tracking-tight">
          {product.product_name}
        </h1>
        <div className="flex items-center flex-wrap gap-2 text-body-sm">
          <div className="flex items-center text-terracotta-accent">
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
          </div>
          <span className="font-label-input text-label-input text-ink-charcoal font-semibold">4.9</span>
          <span className="text-muted-sand">•</span>
          <a href="#reviews-anchor" className="text-on-surface-variant hover:text-ink-charcoal underline underline-offset-4 decoration-border-subtle transition-colors">
            48 patron reviews
          </a>
          <span className="text-muted-sand">•</span>
          <span className="text-mineral-gray">Japanese Mulberry Washi &amp; Bamboo</span>
        </div>
      </div>

      {/* Price & Installments Box */}
      <div className="p-4 rounded-xl bg-surface-card shadow-xs space-y-1.5 border border-border-card/40">
        <div className="flex items-baseline gap-3">
          <span className="font-headline-lg text-[34px] font-semibold text-ink-charcoal tracking-tight">
            ${unitPrice.toFixed(2)}
          </span>
          <span className="font-label-input text-label-input text-mineral-gray uppercase">USD</span>
          <span className="font-label-micro text-label-micro text-muted-sand">
            Import tariff &amp; crate insurance included
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[16px] text-mineral-gray">payments</span>
          <span>or 4 interest-free payments of <strong>${installmentPrice}</strong> via Klarna / Afterpay</span>
        </p>
      </div>

      {/* Dynamic Stock Status Pill */}
      <div className="flex items-center gap-2">
        {isOutOfStock ? (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-status-peach-bg text-status-peach-text font-label-input text-[13px] font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta-flame animate-pulse" />
            <span>Edition Exhausted — Next kiln firing arriving in 18 days</span>
          </div>
        ) : isLowStock ? (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-status-peach-bg text-status-peach-text font-label-input text-[13px] font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta-flame" />
            <span>Low Inventory — Only {stockCount} Reserve Editions Remaining</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container font-label-input text-[13px] text-ink-charcoal font-medium">
            <span className="w-2.5 h-2.5 rounded-full bg-[#34A853]" />
            <span>In Stock — Ready to dispatch from Brooklyn Depot</span>
          </div>
        )}
      </div>

      {/* Editorial Description */}
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        {product.product_description}
      </p>

      {/* Dimension & Cord Selection */}
      <ProductOptionSelectors
        selectedSize={selectedSize}
        onSelectSize={onSelectSize}
        selectedCord={selectedCord}
        onSelectCord={onSelectCord}
      />

      {/* Stepper, Primary & Secondary Buy Actions */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-3">
          {/* Counter Step */}
          <div className="flex items-center bg-surface-card rounded-xl shadow-xs h-[52px] px-2 border border-border-card/40">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-ink-charcoal hover:bg-surface-container transition-colors text-headline-sm cursor-pointer"
            >
              −
            </button>
            <span className="w-10 text-center font-label-input text-label-input text-ink-charcoal font-semibold">
              {quantity}
            </span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => onQuantityChange(quantity + 1)}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-ink-charcoal hover:bg-surface-container transition-colors text-headline-sm cursor-pointer"
            >
              +
            </button>
          </div>

          {/* Primary Action Button */}
          <button
            type="button"
            onClick={onAddToCart}
            className={`flex-1 h-[52px] px-6 rounded-xl font-label-input text-label-input font-semibold flex items-center justify-center gap-2.5 transition-all shadow-xs cursor-pointer ${
              isOutOfStock
                ? "bg-terracotta-accent hover:bg-terracotta-flame text-on-primary"
                : "bg-ink-charcoal hover:bg-primary text-on-primary active:scale-[0.99]"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">
              {isOutOfStock ? "schedule" : "shopping_bag"}
            </span>
            <span>
              {isOutOfStock
                ? "Join Waitlist & Reserve Edition"
                : `Add to Cart — $${totalPrice}`}
            </span>
          </button>
        </div>

        {/* Secondary Instant Buy Button */}
        <button
          type="button"
          onClick={onDirectCheckout}
          className="w-full h-[50px] rounded-xl bg-surface-card hover:bg-surface-container text-ink-charcoal font-label-input text-label-input font-semibold transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer border border-border-card/40"
        >
          <span>Instant Express Consignment</span>
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </div>

      {/* Atelier Trust Badges */}
      <ProductTrustBadges />

      {/* Collapsible Accordion Specifications */}
      <ProductSpecAccordions />
    </div>
  );
};

export default ProductPurchaseDossier;
