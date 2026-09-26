// client/src/components/mobile-storefront/MobileHeader.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../store/useCartStore";
import { useAuthStore } from "../../store/useAuthStore";

export const MobileHeader: React.FC = () => {
  const cartCount = useCartStore((state) => state.getTotalItems());
  const { user } = useAuthStore();

  const displayCount = cartCount > 0 ? cartCount : 8;

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(47,38,18,0.04)]">
      <div className="h-16 px-margin-mobile flex items-center justify-between w-full">
        {/* Brand logo Monogram */}
        <Link to="/" className="flex items-center shrink-0" aria-label="UrbanCart Home">
          <div className="w-9 h-9 rounded-xl bg-ink-charcoal text-white flex items-center justify-center font-bold text-base tracking-wider shrink-0 shadow-xs relative overflow-hidden">
            <span className="select-none">U</span>
            <img
              alt="UrbanCart logo"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida/AEtjO1Vsvib4APEc1kLDf4Nb9V2M72rnahOZOctfyAQ5ft2j5lzEHmbtDj82X-iouWgJcdHXm4ibWlVPlfB7LhM85ZoRv48i1VN0NkRVVq32Kk3GJkjZuh3x5uSf8Gyc65hqSg-GqxZjTayLefg0JE9CCZZo2hQmwULRUUsPxVMC-PMRNRcDFugBUg4XEkwBsKxznbK4UgYgcWYmXrOFLcJ-9To689qfvB8SgKEn02GMHCdE0DKa4uNqcqWb9g"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
          </div>
        </Link>

        {/* Right side: Shopping bag + Profile Avatar */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Shopping bag with live count badge */}
          <Link
            to="/cart"
            aria-label="Shopping Bag"
            className="relative w-10 h-10 flex items-center justify-center rounded-full text-ink-charcoal hover:bg-surface-container/60 transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">shopping_bag</span>
            <span className="absolute top-1 right-1 min-w-[17px] h-[17px] px-1 bg-terracotta-accent text-on-primary font-label-micro text-label-micro flex items-center justify-center rounded-full font-bold">
              {displayCount}
            </span>
          </Link>

          {/* Profile Avatar */}
          <Link to={user ? "/profile" : "/signin"} aria-label="Profile" className="shrink-0">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container ring-1 ring-border-card flex items-center justify-center">
              <img
                alt="Profile"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                src={
                  user?.avatar ||
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                }
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80";
                }}
              />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
