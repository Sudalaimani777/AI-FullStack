// client/src/components/cart/CartSecurityBadges.tsx
import React from "react";

export const CartSecurityBadges: React.FC = () => {
  return (
    <div className="pt-space-sm space-y-space-sm border-t border-border-card/30">
      <div className="flex items-center gap-3 text-mineral-gray">
        <span className="material-symbols-outlined text-[18px] text-terracotta-accent">lock</span>
        <span className="font-body-sm text-body-sm">256-bit Encrypted SSL Atelier Protocol</span>
      </div>
      <div className="flex items-center gap-3 text-mineral-gray">
        <span className="material-symbols-outlined text-[18px] text-terracotta-accent">
          verified_user
        </span>
        <span className="font-body-sm text-body-sm">
          30-Day Atelier Return &amp; Authenticity Guarantee
        </span>
      </div>
      <div className="flex items-center gap-3 text-mineral-gray">
        <span className="material-symbols-outlined text-[18px] text-terracotta-accent">nature</span>
        <span className="font-body-sm text-body-sm">100% Carbon-Neutral Insured Transport</span>
      </div>
    </div>
  );
};

export default CartSecurityBadges;
