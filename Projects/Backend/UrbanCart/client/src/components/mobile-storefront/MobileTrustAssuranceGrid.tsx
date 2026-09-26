// client/src/components/mobile-storefront/MobileTrustAssuranceGrid.tsx
import React from "react";

const ASSURANCES = [
  {
    icon: "eco",
    title: "Carbon-Neutral",
    desc: "Offset global dispatch to 42 countries.",
  },
  {
    icon: "verified",
    title: "Artisan Verified",
    desc: "Every piece individually numbered & signed.",
  },
  {
    icon: "replay",
    title: "30-Day Return",
    desc: "Full return privilege with atelier pickup.",
  },
  {
    icon: "style",
    title: "Curator Advisory",
    desc: "1-on-1 bespoke interior styling session.",
  },
];

export const MobileTrustAssuranceGrid: React.FC = () => {
  return (
    <section className="px-margin-mobile pt-1 pb-6">
      <div className="grid grid-cols-2 gap-2.5">
        {ASSURANCES.map((item) => (
          <div
            key={item.title}
            className="p-3.5 rounded-xl bg-surface-container-lowest shadow-[0_4px_16px_rgba(47,38,18,0.03)] flex flex-col justify-between"
          >
            <span className="material-symbols-outlined text-terracotta-flame text-[24px] mb-2">
              {item.icon}
            </span>
            <div>
              <h3 className="font-label-input text-label-input text-ink-charcoal font-semibold">
                {item.title}
              </h3>
              <p className="font-body-sm text-body-sm text-mineral-gray text-xs mt-0.5 leading-snug">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileTrustAssuranceGrid;
