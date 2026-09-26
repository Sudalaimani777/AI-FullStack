// client/src/components/product-details/ProductTrustBadges.tsx
import React from "react";

interface TrustBadgeItem {
  icon: string;
  title: string;
  subtitle: string;
}

const BADGES: TrustBadgeItem[] = [
  {
    icon: "local_shipping",
    title: "Complimentary Delivery",
    subtitle: "Orders exceeding $250",
  },
  {
    icon: "published_with_changes",
    title: "30-Day Atelier Return",
    subtitle: "Restocking fee waived",
  },
  {
    icon: "verified_user",
    title: "Lifetime Provenance",
    subtitle: "Authenticity Certificate",
  },
  {
    icon: "eco",
    title: "Carbon-Neutral Crate",
    subtitle: "FSC Certified packaging",
  },
];

export const ProductTrustBadges: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3 pt-2">
      {BADGES.map((badge) => (
        <div
          key={badge.title}
          className="p-3 rounded-xl bg-surface-card shadow-xs flex items-center gap-3 border border-border-card/40"
        >
          <span className="material-symbols-outlined text-terracotta-accent text-[22px] shrink-0">
            {badge.icon}
          </span>
          <div className="min-w-0">
            <span className="block font-label-input text-[12px] font-semibold text-ink-charcoal leading-snug">
              {badge.title}
            </span>
            <span className="block font-label-micro text-label-micro text-mineral-gray truncate">
              {badge.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductTrustBadges;
