// client/src/components/layout/StorefrontHeader.tsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";
import { useAuthStore } from "../../store/useAuthStore";
import StorefrontCategoryNav from "./StorefrontCategoryNav";

interface StorefrontHeaderProps {
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  activeCategory?: string;
  onCategorySelect?: (cat: string) => void;
}

export const StorefrontHeader: React.FC<StorefrontHeaderProps> = ({
  searchQuery,
  onSearchChange,
  activeCategory,
  onCategorySelect,
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const totalCartItems = useCartStore((state) => state.getTotalItems());
  const { user } = useAuthStore();

  const currentCategory = activeCategory || searchParams.get("category") || "All";
  const currentSearch = searchQuery !== undefined ? searchQuery : searchParams.get("search") || "";
  const [localSearch, setLocalSearch] = useState(currentSearch);

  useEffect(() => {
    setLocalSearch(currentSearch);
  }, [currentSearch]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchChange) {
      onSearchChange(localSearch);
    } else {
      const newParams = new URLSearchParams(searchParams);
      if (localSearch.trim()) {
        newParams.set("search", localSearch.trim());
      } else {
        newParams.delete("search");
      }
      navigate(`/?${newParams.toString()}#catalog-grid`);
    }
  };

  const handleCategoryClick = (categoryValue: string) => {
    if (onCategorySelect) {
      onCategorySelect(categoryValue);
    } else {
      const newParams = new URLSearchParams(searchParams);
      if (categoryValue === "All") {
        newParams.delete("category");
      } else {
        newParams.set("category", categoryValue);
      }
      navigate(`/?${newParams.toString()}#catalog-grid`);
    }
    const catalogEl = document.getElementById("catalog-grid");
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Top tier: Brand, Search, Utilities */}
      <div className="h-20 w-full max-w-[1440px] mx-auto px-gutter flex items-center justify-between gap-space-lg">
        {/* Brand Logo & Monogram */}
        <div className="flex items-center gap-space-md shrink-0">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-ink-charcoal text-white flex items-center justify-center font-bold text-lg tracking-wider shadow-sm group-hover:bg-terracotta-accent transition-colors">
              U
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm tracking-tight text-ink-charcoal">
                UrbanCart
              </span>
            </div>
          </Link>
        </div>

        {/* Global Catalog Search Input */}
        <div className="hidden xl:flex flex-1 max-w-md mx-space-md">
          <form onSubmit={handleSearchSubmit} className="relative w-full flex items-center">
            <span className="material-symbols-outlined absolute left-3 text-mineral-gray text-[18px] pointer-events-none">
              search
            </span>
            <input
              type="text"
              value={localSearch}
              onChange={(e) => {
                setLocalSearch(e.target.value);
                if (onSearchChange) onSearchChange(e.target.value);
              }}
              placeholder="Search curated objects, lighting, ceramics..."
              className="w-full h-[42px] pl-10 pr-4 bg-surface-card rounded-xl border border-border-card font-body-sm text-body-sm text-on-surface placeholder:text-muted-sand focus:outline-none focus:border-ink-charcoal transition-all"
            />
          </form>
        </div>

        {/* Right Utilities: Currency, Wishlist, Cart, Account */}
        <div className="flex items-center gap-space-md shrink-0">
          <div className="hidden sm:flex items-center gap-1 px-space-xs py-1 rounded-lg text-mineral-gray font-label-input text-label-input hover:text-on-surface cursor-pointer transition-colors">
            <span className="material-symbols-outlined text-[16px]">public</span>
            <span>USD $</span>
          </div>

          {/* Wishlist Icon */}
          <button
            type="button"
            aria-label="Wishlist"
            className="relative p-2 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[22px]">favorite</span>
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-terracotta-flame" />
          </button>

          {/* Cart Icon & Live Count */}
          <Link
            to="/cart"
            aria-label="Cart"
            className="relative flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-[20px] text-ink-charcoal">
              shopping_bag
            </span>
            <span className="font-label-micro text-label-micro px-1.5 py-0.5 rounded-full bg-terracotta-accent text-on-primary font-semibold">
              {totalCartItems}
            </span>
          </Link>

          <div className="h-6 w-[1px] bg-border-subtle hidden sm:block" />

          {/* Patron Account Profile */}
          {user ? (
            <Link to="/profile" className="flex items-center gap-2.5 pl-1 rounded-full group">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.user_name}
                  className="w-8 h-8 rounded-full object-cover ring-1 ring-border-card group-hover:ring-ink-charcoal transition-all"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-surface-container-high text-ink-charcoal flex items-center justify-center font-bold text-xs ring-1 ring-border-card">
                  {user.user_name?.slice(0, 1).toUpperCase() || "A"}
                </div>
              )}
              <span className="hidden lg:inline font-label-input text-label-input text-on-surface group-hover:text-ink-charcoal">
                {user.is_admin ? "Atelier Curator (Admin)" : "Atelier Member"}
              </span>
            </Link>
          ) : (
            <Link
              to="/signin"
              className="h-9 px-4 rounded-xl bg-ink-charcoal text-white hover:bg-primary font-label-input text-label-input font-medium flex items-center transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>

      {/* Tier 2: Category Navigation Strip */}
      <StorefrontCategoryNav
        currentCategory={currentCategory}
        onSelectCategory={handleCategoryClick}
      />
    </header>
  );
};

export default StorefrontHeader;
