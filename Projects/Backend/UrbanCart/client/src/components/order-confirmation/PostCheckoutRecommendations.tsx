// client/src/components/order-confirmation/PostCheckoutRecommendations.tsx
import React from "react";
import { Link } from "react-router-dom";
import {
  POST_CHECKOUT_RECOMMENDATIONS,
  type PostCheckoutItem,
} from "./confirmationPresets";

interface PostCheckoutRecommendationsProps {
  onAddToCart: (item: PostCheckoutItem) => void;
}

export const PostCheckoutRecommendations: React.FC<
  PostCheckoutRecommendationsProps
> = ({ onAddToCart }) => {
  return (
    <section className="mt-20 pt-16 border-t border-stone-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-stone-400 font-medium">
            Harmonious Additions
          </span>
          <h2 className="font-serif text-2xl lg:text-3xl font-light text-stone-900 mt-1">
            Objects That Complement Your Collection
          </h2>
        </div>
        <Link
          to="/"
          className="text-xs uppercase tracking-widest text-stone-600 hover:text-stone-900 flex items-center gap-1.5 transition-colors font-medium self-start md:self-auto"
        >
          <span>Explore All Studio Artifacts</span>
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {POST_CHECKOUT_RECOMMENDATIONS.map((item) => (
          <article
            key={item.id}
            className="group flex flex-col justify-between bg-stone-50/60 p-4 border border-stone-200/80 rounded transition-all hover:bg-stone-50 hover:border-stone-300"
          >
            <div>
              <div className="relative aspect-square w-full overflow-hidden bg-stone-100 rounded mb-4">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">
                {item.category}
              </span>
              <h3 className="font-serif text-stone-900 text-sm font-medium mt-1 line-clamp-1">
                {item.name}
              </h3>
            </div>

            <div className="flex items-center justify-between mt-4 pt-3 border-t border-stone-200/60">
              <span className="font-mono text-xs text-stone-800 font-medium">
                ${item.price.toFixed(2)}
              </span>
              <button
                type="button"
                onClick={() => onAddToCart(item)}
                className="w-8 h-8 rounded-full bg-stone-900 text-stone-50 flex items-center justify-center hover:bg-stone-800 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-400 focus:ring-offset-1"
                aria-label={`Add ${item.name} to bag`}
                title="Add to shopping bag"
              >
                <span className="material-symbols-outlined text-[18px]">add</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
