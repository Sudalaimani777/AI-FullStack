// client/src/components/mobile-storefront/MobileStorefrontView.tsx
import React, { useState } from "react";
import type { Product } from "../../types";
import MobileHeader from "./MobileHeader";
import MobileSearchBar from "./MobileSearchBar";
import MobileHeroBanner from "./MobileHeroBanner";
import MobileCategoryPills from "./MobileCategoryPills";
import MobileCatalogStatus from "./MobileCatalogStatus";
import MobileProductGrid from "./MobileProductGrid";
import MobileArtisanSpotlight from "./MobileArtisanSpotlight";
import MobileTrustAssuranceGrid from "./MobileTrustAssuranceGrid";
import MobileBottomNav from "./MobileBottomNav";
import MobileStorefrontToast from "./MobileStorefrontToast";

interface MobileStorefrontViewProps {
  products: Product[];
  totalProductsCount: number;
  isLoading?: boolean;
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onAddToCart: (product: Product) => void;
  onResetFilters: () => void;
}

export const MobileStorefrontView: React.FC<MobileStorefrontViewProps> = ({
  products,
  totalProductsCount,
  isLoading,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  onAddToCart,
  onResetFilters,
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    showToast(`Added ${product.product_name} to your Atelier Bag`);
  };

  const handleToggleWishlist = (product: Product, isWishlisted: boolean) => {
    showToast(
      isWishlisted
        ? `Saved ${product.product_name} to your Wishlist archive`
        : `Removed ${product.product_name} from Wishlist`
    );
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f2ee] md:py-6 flex justify-center items-start">
      <div className="w-full max-w-[430px] min-h-screen bg-surface text-on-surface antialiased flex flex-col relative shadow-[0_16px_48px_rgba(47,38,18,0.12)] border-x border-border-card/40 md:rounded-[32px] overflow-hidden">
        {/* 1. Fixed Top Mobile App Header */}
        <MobileHeader />

        {/* 2. Main Mobile Scrollable Body */}
        <main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface">
          {/* Search Row */}
          <MobileSearchBar
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
            onToggleFilter={() => {
              showToast("Filter parameters synchronized with Atelier Archive");
            }}
          />

          {/* Tactile Editorial Hero Banner */}
          <MobileHeroBanner
            onShopTrending={() => {
              const el = document.getElementById("mobile-catalog-grid");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            onOpenLookbook={() => {
              showToast("Lookbook Edition 08 requested");
            }}
          />

          {/* Horizontal Category Filter Pills */}
          <MobileCategoryPills
            activeCategory={activeCategory}
            onSelectCategory={onSelectCategory}
          />

          {/* Micro Status Bar & Sort */}
          <MobileCatalogStatus
            displayedCount={products.length}
            totalCount={totalProductsCount}
            sortBy={sortBy}
            onSortChange={onSortChange}
          />

          {/* 2-Column Responsive Product Grid */}
          <MobileProductGrid
            products={products}
            isLoading={isLoading}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onResetFilters={onResetFilters}
          />

          {/* Resident Atelier Kyoto Spotlight */}
          <MobileArtisanSpotlight />

          {/* Trust & Assurance Badges */}
          <MobileTrustAssuranceGrid />
        </main>

        {/* 3. Fixed Bottom App Navigation Bar */}
        <MobileBottomNav
          onWishlistClick={() => {
            showToast("Accessing Patron Wishlist Archive...");
          }}
        />

        {/* 4. Interactive Quick Add / Feedback Toast */}
        <MobileStorefrontToast message={toastMessage} />
      </div>
    </div>
  );
};

export default MobileStorefrontView;
