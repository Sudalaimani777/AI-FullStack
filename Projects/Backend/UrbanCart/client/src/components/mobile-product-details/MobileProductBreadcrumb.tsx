// client/src/components/mobile-product-details/MobileProductBreadcrumb.tsx
import React from "react";
import { Link } from "react-router-dom";

interface MobileProductBreadcrumbProps {
  category?: string;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  onShare: () => void;
}

export const MobileProductBreadcrumb: React.FC<MobileProductBreadcrumbProps> = ({
  category = "LIGHTING / ATELIER",
  isWishlisted,
  onToggleWishlist,
  onShare,
}) => {
  return (
    <div className="w-full px-margin-mobile py-2.5 flex items-center justify-between">
      {/* Back button and category link */}
      <div className="flex items-center gap-2">
        <Link
          to="/"
          aria-label="Back to Catalog"
          className="w-8 h-8 rounded-full flex items-center justify-center text-ink-charcoal hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
        </Link>
        <span className="font-label-eyebrow text-label-eyebrow uppercase tracking-widest text-mineral-gray font-medium">
          {category}
        </span>
      </div>

      {/* Right utility actions: Share & Wishlist */}
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={onShare}
          aria-label="Share Piece"
          className="w-8 h-8 rounded-full flex items-center justify-center text-ink-charcoal hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">share</span>
        </button>

        <button
          type="button"
          onClick={onToggleWishlist}
          aria-label={isWishlisted ? "Remove from wishlist" : "Save to wishlist"}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isWishlisted
              ? "text-terracotta-accent bg-status-peach-bg"
              : "text-ink-charcoal hover:bg-surface-container"
          }`}
        >
          <span
            className="material-symbols-outlined text-[20px]"
            style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
          >
            favorite
          </span>
        </button>
      </div>
    </div>
  );
};

export default MobileProductBreadcrumb;
