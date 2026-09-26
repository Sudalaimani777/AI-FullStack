// client/src/components/mobile-product-details/MobileProductAssurances.tsx
import React from "react";

interface AssuranceItem {
  icon: string;
  title: string;
  description: string;
}

const ASSURANCES: AssuranceItem[] = [
  {
    icon: "local_shipping",
    title: "Atelier Delivery",
    description: "Complimentary transit for orders over $250",
  },
  {
    icon: "cached",
    title: "30-Day Protocol",
    description: "Effortless return with waived crate fees",
  },
  {
    icon: "workspace_premium",
    title: "Signed Provenance",
    description: "Individually numbered artisan seal",
  },
  {
    icon: "forest",
    title: "Carbon-Zero Crate",
    description: "FSC-certified timber, fully recyclable",
  },
];

export const MobileProductAssurances: React.FC = () => {
  return (
    <section className="px-margin-mobile pt-5">
      <div className="grid grid-cols-2 gap-2.5">
        {ASSURANCES.map((item) => (
          <div
            key={item.title}
            className="p-3.5 rounded-xl bg-surface-container-low border border-border-card/40 flex flex-col gap-1.5"
          >
            <span className="material-symbols-outlined text-[20px] text-ink-charcoal">
              {item.icon}
            </span>
            <div className="flex flex-col">
              <span className="font-label-input text-label-input text-ink-charcoal font-semibold">
                {item.title}
              </span>
              <span className="font-sans text-[11px] text-mineral-gray leading-tight pt-0.5">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileProductAssurances;
