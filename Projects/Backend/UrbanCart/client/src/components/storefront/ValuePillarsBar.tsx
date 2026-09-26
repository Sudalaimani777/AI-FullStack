// client/src/components/storefront/ValuePillarsBar.tsx
import React from "react";

export const ValuePillarsBar: React.FC = () => {
  const pillars = [
    {
      icon: "eco",
      title: "Carbon-Neutral Global Dispatch",
      description: "Every consignment is fully offset with certified reforestation partners.",
    },
    {
      icon: "verified",
      title: "Artisan Provenance Verified",
      description: "Directly stamped and signed by independent generational studios.",
    },
    {
      icon: "published_with_changes",
      title: "30-Day Atelier Return Privilege",
      description: "Experience objects in your sanctuary with full risk-free courier returns.",
    },
    {
      icon: "chair",
      title: "Curator Design Consultation",
      description: "Complimentary white-glove advisory for architectural spaces and suites.",
    },
  ];

  return (
    <section className="w-full bg-surface-card py-space-xl mt-space-md border-b border-border-card/50">
      <div className="w-full max-w-[1440px] mx-auto px-gutter">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex items-start gap-space-md p-space-sm rounded-xl hover:bg-surface-container-low transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-ink-charcoal">
                <span className="material-symbols-outlined text-[24px] text-terracotta-flame">
                  {pillar.icon}
                </span>
              </div>
              <div className="flex flex-col">
                <h4 className="font-label-input text-label-input text-ink-charcoal font-semibold mb-1">
                  {pillar.title}
                </h4>
                <p className="font-body-sm text-body-sm text-mineral-gray leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePillarsBar;
