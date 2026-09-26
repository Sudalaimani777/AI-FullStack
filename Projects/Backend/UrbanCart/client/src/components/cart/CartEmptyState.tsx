// client/src/components/cart/CartEmptyState.tsx
import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types";
import { RECOMMENDED_OBJECTS, type RecommendedObject } from "./cartPresets";

interface CartEmptyStateProps {
  onAddRecommended: (product: Product) => void;
}

export const CartEmptyState: React.FC<CartEmptyStateProps> = ({ onAddRecommended }) => {
  const handleAdd = (rec: RecommendedObject) => {
    const productItem: Product = {
      _id: rec.id,
      product_name: rec.name,
      product_description: rec.description,
      product_category: rec.category,
      product_image: rec.imageUrl,
      product_price: rec.price.toString(),
      product_stock: "10",
    };
    onAddRecommended(productItem);
  };

  return (
    <div className="space-y-space-xl py-space-xl">
      {/* Central Empty State Notice */}
      <div className="max-w-2xl mx-auto text-center space-y-space-md p-space-xl rounded-2xl bg-surface-card shadow-xs border border-border-card/40">
        <div className="w-20 h-20 mx-auto rounded-full bg-surface-container-low flex items-center justify-center text-mineral-gray">
          <svg className="w-10 h-10 text-muted-sand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
        <div className="space-y-space-xs">
          <h2 className="font-headline-md text-headline-md text-ink-charcoal">
            Your cart is currently empty
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
            Discover our hand-selected collection of architectural lighting, tactile ceramics, and
            sculptural furniture handcrafted across Kyoto, Copenhagen, and SoHo.
          </p>
        </div>
        <div className="pt-space-sm">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 h-[52px] rounded-lg bg-ink-charcoal text-on-primary font-label-input text-label-input hover:bg-primary transition-all shadow-xs"
          >
            <span>Explore Curated Catalog</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </div>

      {/* Quick Recommendations Carousel/Grid */}
      <div className="space-y-space-md max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray tracking-wider">
              Handcrafted Recommendations
            </span>
            <h3 className="font-headline-sm text-headline-sm text-ink-charcoal">
              Recommended Objects for You
            </h3>
          </div>
          <Link
            to="/"
            className="font-label-input text-label-input text-ink-charcoal hover:text-terracotta-accent transition-colors flex items-center gap-1"
          >
            <span>View All Editions</span>
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {RECOMMENDED_OBJECTS.map((rec) => (
            <div
              key={rec.id}
              className="group rounded-xl bg-surface-card p-space-md shadow-xs transition-all hover:shadow-md flex flex-col justify-between border border-border-card/40"
            >
              <div className="space-y-3">
                <div className="aspect-square rounded-lg overflow-hidden bg-surface-container relative">
                  <img
                    src={rec.imageUrl}
                    alt={rec.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {rec.badge && (
                    <span
                      className={`absolute top-3 left-3 font-label-micro text-label-micro px-2 py-0.5 rounded-full font-semibold uppercase ${
                        rec.badgeStyle === "peach"
                          ? "bg-status-peach-bg text-status-peach-text"
                          : "bg-surface-card/90 text-ink-charcoal backdrop-blur-md shadow-xs"
                      }`}
                    >
                      {rec.badge}
                    </span>
                  )}
                </div>
                <div>
                  <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray">
                    {rec.category}
                  </span>
                  <h4 className="font-title-card text-title-card text-ink-charcoal group-hover:text-terracotta-accent transition-colors">
                    {rec.name}
                  </h4>
                  <p className="font-body-sm text-body-sm text-mineral-gray mt-1">
                    {rec.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 flex items-center justify-between border-t border-border-card/30">
                <span className="font-title-card text-title-card text-ink-charcoal">
                  ${rec.price.toFixed(2)}
                </span>
                <button
                  type="button"
                  onClick={() => handleAdd(rec)}
                  className="px-3.5 py-1.5 rounded-lg bg-surface-container text-ink-charcoal font-label-input text-label-input hover:bg-ink-charcoal hover:text-on-primary transition-all cursor-pointer shadow-xs active:scale-95"
                >
                  Add to Bag
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartEmptyState;
