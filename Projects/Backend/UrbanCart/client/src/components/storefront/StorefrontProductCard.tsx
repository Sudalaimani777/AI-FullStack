// client/src/components/storefront/StorefrontProductCard.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types";
import { useCartStore } from "../../store/useCartStore";

interface StorefrontProductCardProps {
  product: Product;
}

export const StorefrontProductCard: React.FC<StorefrontProductCardProps> = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const stockNumber = Number(product.product_stock) || 0;
  const isOutOfStock = stockNumber <= 0;
  const isLowStock = stockNumber > 0 && stockNumber <= 5;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOutOfStock) return;

    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const fallbackImage =
    "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80";

  return (
    <article className="group flex flex-col bg-surface-card rounded-xl p-3 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-border-card/40">
      <Link to={`/product/${product._id}`} className="block relative aspect-square w-full rounded-lg overflow-hidden bg-surface-container-low mb-space-sm">
        <img
          src={product.product_image || fallbackImage}
          alt={product.product_name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Stock Badges */}
        <div className="absolute top-2.5 left-2.5">
          {isOutOfStock ? (
            <span className="px-2.5 py-1 rounded-full bg-ink-charcoal text-white font-label-micro text-label-micro uppercase tracking-wider font-semibold">
              Atelier Vault Depleted
            </span>
          ) : isLowStock ? (
            <span className="px-2.5 py-1 rounded-full bg-status-peach-bg text-status-peach-text font-label-micro text-label-micro uppercase tracking-wider font-semibold shadow-xs">
              Only {stockNumber} Left
            </span>
          ) : null}
        </div>

        {/* Wishlist Button */}
        <button
          aria-label="Add to Wishlist"
          onClick={handleWishlistToggle}
          type="button"
          className={`absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-surface-card/90 backdrop-blur-md flex items-center justify-center transition-all ${
            isWishlisted
              ? "text-terracotta-flame opacity-100"
              : "text-ink-charcoal hover:text-terracotta-flame opacity-0 group-hover:opacity-100"
          }`}
        >
          <span
            className={`material-symbols-outlined text-[18px] ${
              isWishlisted ? "fill-1" : ""
            }`}
          >
            favorite
          </span>
        </button>
      </Link>

      <div className="flex flex-col flex-1">
        <span className="font-label-eyebrow text-label-eyebrow text-mineral-gray uppercase tracking-widest mb-1">
          {product.product_category || "Curated Homeware"}
        </span>
        <Link to={`/product/${product._id}`}>
          <h3 className="font-title-card text-title-card text-ink-charcoal mb-2 leading-tight hover:text-terracotta-accent transition-colors line-clamp-1">
            {product.product_name}
          </h3>
        </Link>
        <p className="font-headline-sm text-headline-sm text-ink-charcoal font-semibold mb-space-md">
          ${Number(product.product_price).toFixed(2)}
        </p>

        <button
          type="button"
          onClick={handleQuickAdd}
          disabled={isOutOfStock}
          className={`mt-auto w-full h-11 rounded-lg font-label-input text-label-input flex items-center justify-center gap-2 transition-all font-semibold cursor-pointer ${
            isAdded
              ? "bg-status-peach-bg text-terracotta-flame shadow-inner"
              : isOutOfStock
              ? "bg-surface-container text-mineral-gray cursor-not-allowed opacity-60"
              : "bg-surface-container hover:bg-ink-charcoal text-ink-charcoal hover:text-on-primary active:scale-[0.98]"
          }`}
        >
          {isAdded ? (
            <>
              <span className="material-symbols-outlined text-[18px] text-terracotta-accent">
                check_circle
              </span>
              <span>Added to Atelier Cart</span>
            </>
          ) : isOutOfStock ? (
            <span>Sold Out</span>
          ) : (
            <>
              <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
              <span>Quick Add</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
};

export default StorefrontProductCard;
