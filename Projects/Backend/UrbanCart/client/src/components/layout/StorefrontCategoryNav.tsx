// client/src/components/layout/StorefrontCategoryNav.tsx
import React from "react";

interface StorefrontCategoryNavProps {
  currentCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const StorefrontCategoryNav: React.FC<StorefrontCategoryNavProps> = ({
  currentCategory,
  onSelectCategory,
}) => {
  const navCategories = [
    { label: "New Arrivals", category: "All" },
    { label: "Architectural Lighting", category: "Architectural Lighting" },
    { label: "Ceramics & Homeware", category: "Ceramics & Homeware" },
    { label: "Furniture", category: "Furniture & Seating" },
    { label: "Fine Textiles", category: "Fine Textiles" },
    { label: "Audio & Tech", category: "Audio & Tech" },
    { label: "Journal", category: "Journal" },
  ];

  return (
    <div className="hidden md:block w-full border-t border-border-card/60 bg-surface/95">
      <div className="w-full max-w-[1440px] mx-auto px-gutter">
        <nav className="flex items-center justify-center gap-space-xl py-2.5">
          {navCategories.map((item) => {
            const isActive = currentCategory === item.category;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => onSelectCategory(item.category)}
                className={`font-label-input text-label-input transition-colors py-1 relative cursor-pointer ${
                  isActive
                    ? "text-terracotta-accent font-semibold after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-terracotta-flame"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default StorefrontCategoryNav;
