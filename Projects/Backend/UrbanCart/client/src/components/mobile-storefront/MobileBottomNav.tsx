// client/src/components/mobile-storefront/MobileBottomNav.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/useAuthStore";

interface MobileBottomNavProps {
  onWishlistClick?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onWishlistClick,
}) => {
  const location = useLocation();
  const { user } = useAuthStore();
  const pathname = location.pathname;

  const isCatalog = pathname === "/" || pathname === "" || pathname === "/mobile";
  const isOrders = pathname.includes("orders") || pathname.includes("order-confirmation");
  const isProfile = pathname === "/profile" || pathname === "/signin" || pathname === "/signup";

  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(47,38,18,0.04)]"
      data-active-classes="text-ink-charcoal font-semibold"
    >
      <div className="h-20 px-space-sm flex items-center justify-around w-full">
        {/* 1. Catalog Tab */}
        <Link
          to="/"
          aria-current={isCatalog ? "page" : undefined}
          className={`min-w-[44px] min-h-[44px] px-3 flex flex-col items-center justify-center gap-1 transition-colors ${
            isCatalog
              ? "text-ink-charcoal font-semibold"
              : "text-mineral-gray hover:text-ink-charcoal font-medium"
          }`}
        >
          <span className="material-symbols-outlined text-[24px]">grid_view</span>
          <span className="font-label-micro text-label-micro uppercase tracking-wider">
            Catalog
          </span>
          <span
            className={`w-1 h-1 rounded-full ${
              isCatalog ? "bg-terracotta-flame" : "bg-transparent"
            }`}
          />
        </Link>

        {/* 2. Wishlist Tab */}
        <button
          type="button"
          onClick={onWishlistClick}
          className="min-w-[44px] min-h-[44px] px-3 flex flex-col items-center justify-center gap-1 text-mineral-gray hover:text-ink-charcoal transition-colors font-medium cursor-pointer"
        >
          <span className="material-symbols-outlined text-[24px]">favorite</span>
          <span className="font-label-micro text-label-micro uppercase tracking-wider">
            Wishlist
          </span>
          <span className="w-1 h-1 rounded-full bg-transparent" />
        </button>

        {/* 3. Orders Tab */}
        <Link
          to={user ? "/profile" : "/signin"}
          className={`min-w-[44px] min-h-[44px] px-3 flex flex-col items-center justify-center gap-1 transition-colors ${
            isOrders
              ? "text-ink-charcoal font-semibold"
              : "text-mineral-gray hover:text-ink-charcoal font-medium"
          }`}
        >
          <span className="material-symbols-outlined text-[24px]">receipt_long</span>
          <span className="font-label-micro text-label-micro uppercase tracking-wider">
            Orders
          </span>
          <span
            className={`w-1 h-1 rounded-full ${
              isOrders ? "bg-terracotta-flame" : "bg-transparent"
            }`}
          />
        </Link>

        {/* 4. Atelier Profile Tab */}
        <Link
          to={user ? "/profile" : "/signin"}
          className={`min-w-[44px] min-h-[44px] px-3 flex flex-col items-center justify-center gap-1 transition-colors ${
            isProfile
              ? "text-ink-charcoal font-semibold"
              : "text-mineral-gray hover:text-ink-charcoal font-medium"
          }`}
        >
          <span className="material-symbols-outlined text-[24px]">account_circle</span>
          <span className="font-label-micro text-label-micro uppercase tracking-wider">
            Atelier
          </span>
          <span
            className={`w-1 h-1 rounded-full ${
              isProfile ? "bg-terracotta-flame" : "bg-transparent"
            }`}
          />
        </Link>
      </div>
    </nav>
  );
};

export default MobileBottomNav;
