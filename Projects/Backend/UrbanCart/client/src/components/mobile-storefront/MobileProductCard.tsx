// client/src/components/mobile-storefront/MobileProductCard.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types";

interface MobileProductCardProps {
  product: Product;
  badgeText?: string;
  onAddToCart: (product: Product) => void;
  onToggleWishlist?: (product: Product, isWishlisted: boolean) => void;
}

export const MobileProductCard: React.FC<MobileProductCardProps> = ({
  product,
  badgeText,
  onAddToCart,
  onToggleWishlist,
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  const priceNum = Number(product.product_price) || 0;
  const formattedPrice = `$${priceNum.toFixed(2)}`;

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextState = !isWishlisted;
    setIsWishlisted(nextState);
    if (onToggleWishlist) {
      onToggleWishlist(product, nextState);
    }
  };

  const handleAddClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 200);
    onAddToCart(product);
  };

  // Derive badge if not provided
  const displayBadge =
    badgeText ||
    (Number(product.product_stock) <= 5 && Number(product.product_stock) > 0
      ? `Limited ${product.product_stock}`
      : Number(product.product_stock) > 20
      ? "Made to Order"
      : undefined);

  return (
    <article className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_6px_20px_rgba(47,38,18,0.04)] group">
      <Link to={`/product/${product._id}`} className="block relative w-full aspect-square bg-surface-container-low overflow-hidden">
        <img
          src={product.product_image}
          alt={product.product_name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=600&q=80";
          }}
        />

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistClick}
          aria-label="Save to Wishlist"
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-ink-charcoal flex items-center justify-center active:scale-90 transition-transform cursor-pointer"
        >
          <span
            className={`material-symbols-outlined text-[17px] transition-colors ${
              isWishlisted ? "text-terracotta-flame" : ""
            }`}
            style={{
              fontVariationSettings: isWishlisted
                ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                : "'FILL' 0, 'wght' 350, 'GRAD' 0, 'opsz' 24",
            }}
          >
            favorite
          </span>
        </button>

        {/* Stock / Provenance Badge */}
        {displayBadge && (
          <div className="absolute bottom-2 left-2 px-1.5 py-0.5 rounded bg-surface/90 backdrop-blur-sm pointer-events-none">
            <span
              className={`font-label-micro text-label-micro uppercase font-medium ${
                displayBadge.toLowerCase().includes("limited")
                  ? "text-status-peach-text"
                  : "text-ink-charcoal"
              }`}
            >
              {displayBadge}
            </span>
          </div>
        )}
      </Link>

      <div className="p-3 flex flex-col flex-1 justify-between">
        <Link to={`/product/${product._id}`}>
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray block truncate">
            {product.product_category}
          </span>
          <h2 className="font-label-input text-label-input text-ink-charcoal mt-0.5 line-clamp-1">
            {product.product_name}
          </h2>
          <p className="font-body-sm text-body-sm text-mineral-gray text-xs mt-0.5 truncate">
            {product.product_description}
          </p>
        </Link>

        <div className="flex items-center justify-between pt-2.5 mt-1">
          <span className="font-title-card text-[17px] text-ink-charcoal tracking-tight font-semibold">
            {formattedPrice}
          </span>
          <button
            type="button"
            onClick={handleAddClick}
            aria-label={`Add ${product.product_name} to cart`}
            className={`w-8 h-8 rounded-full bg-ink-charcoal hover:bg-terracotta-accent active:scale-95 text-on-primary flex items-center justify-center transition-all cursor-pointer ${
              isBouncing ? "scale-125 bg-terracotta-accent" : ""
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default MobileProductCard;
