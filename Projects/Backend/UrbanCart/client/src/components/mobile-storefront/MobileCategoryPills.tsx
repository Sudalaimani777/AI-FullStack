// client/src/components/mobile-storefront/MobileCategoryPills.tsx
import React from "react";

export interface MobileCategory {
  id: string;
  label: string;
  value: string;
}

export const MOBILE_DEFAULT_CATEGORIES: MobileCategory[] = [
  { id: "all", label: "All Objects", value: "All" },
  { id: "lighting", label: "Architectural Lighting", value: "Architectural Lighting" },
  { id: "ceramics", label: "Ceramics & Homeware", value: "Ceramics & Homeware" },
  { id: "furniture", label: "Furniture & Seating", value: "Furniture & Seating" },
  { id: "textiles", label: "Fine Textiles", value: "Fine Textiles" },
  { id: "tech", label: "Audio & Tech", value: "Audio & Tech" },
];

interface MobileCategoryPillsProps {
  categories?: MobileCategory[];
  activeCategory: string;
  onSelectCategory: (categoryValue: string) => void;
}

export const MobileCategoryPills: React.FC<MobileCategoryPillsProps> = ({
  categories = MOBILE_DEFAULT_CATEGORIES,
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <section className="py-1">
      <div
        className="flex items-center gap-2 overflow-x-auto px-margin-mobile scrollbar-none"
        id="categoryPillList"
      >
        {categories.map((cat) => {
          const isActive =
            activeCategory === cat.value ||
            (cat.value === "All" && (!activeCategory || activeCategory === "All"));

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onSelectCategory(cat.value)}
              className={`shrink-0 h-[34px] px-3.5 rounded-full font-label-input text-label-input flex items-center transition-all cursor-pointer ${
                isActive
                  ? "bg-ink-charcoal text-on-primary gap-1.5"
                  : "bg-surface-container-low hover:bg-surface-container text-ink-charcoal"
              }`}
            >
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-terracotta-flame" />
              )}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MobileCategoryPills;
