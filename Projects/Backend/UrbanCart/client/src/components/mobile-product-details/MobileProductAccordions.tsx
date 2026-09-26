// client/src/components/mobile-product-details/MobileProductAccordions.tsx
import React, { useState } from "react";

interface SpecItem {
  label: string;
  value: string;
}

interface MobileProductAccordionsProps {
  specs?: SpecItem[];
}

const DEFAULT_SPECS: SpecItem[] = [
  { label: "Shade Dimensions", value: "Ø 65 cm × H 58 cm" },
  { label: "Suspension Reach", value: "Max 250 cm field adjustable" },
  { label: "Lamp Fitting", value: "E26 Base 12W LED included" },
  { label: "Color Temperature", value: "2700K Soft Amber (95+ CRI)" },
  { label: "Mains Compatibility", value: "110V - 240V Universal" },
];

export const MobileProductAccordions: React.FC<MobileProductAccordionsProps> = ({
  specs = DEFAULT_SPECS,
}) => {
  const [openSection, setOpenSection] = useState<string>("spec");

  const toggle = (id: string) => {
    setOpenSection((prev) => (prev === id ? "" : id));
  };

  return (
    <section className="px-margin-mobile pt-6 flex flex-col gap-3">
      <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray tracking-wider font-semibold">
        Specifications &amp; Protocols
      </span>

      {/* Accordion 1: Dimensions & Electrical Architecture */}
      <div className="rounded-xl bg-surface-card border border-border-card/50 shadow-xs overflow-hidden">
        <button
          type="button"
          onClick={() => toggle("spec")}
          className="w-full p-4 flex items-center justify-between text-left"
        >
          <span className="font-label-input text-label-input text-ink-charcoal font-medium">
            Dimensions &amp; Electrical Architecture
          </span>
          <span
            className={`material-symbols-outlined text-[18px] text-mineral-gray transition-transform duration-300 ${
              openSection === "spec" ? "rotate-180" : ""
            }`}
          >
            expand_more
          </span>
        </button>
        {openSection === "spec" && (
          <div className="px-4 pb-4 flex flex-col gap-2 text-xs">
            {specs.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between py-1.5 px-2.5 rounded-lg bg-surface-container-low"
              >
                <span className="text-mineral-gray">{item.label}</span>
                <span className="font-medium text-ink-charcoal">{item.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Accordion 2: Materials & Preservation Protocol */}
      <div className="rounded-xl bg-surface-card border border-border-card/50 shadow-xs overflow-hidden">
        <button
          type="button"
          onClick={() => toggle("mat")}
          className="w-full p-4 flex items-center justify-between text-left"
        >
          <span className="font-label-input text-label-input text-ink-charcoal font-medium">
            Materials &amp; Preservation Protocol
          </span>
          <span
            className={`material-symbols-outlined text-[18px] text-mineral-gray transition-transform duration-300 ${
              openSection === "mat" ? "rotate-180" : ""
            }`}
          >
            expand_more
          </span>
        </button>
        {openSection === "mat" && (
          <div className="px-4 pb-4 text-xs text-on-surface-variant leading-relaxed">
            <p>
              Clean exclusively with a dry goat-hair duster or compressed cool air. Keep away from humid areas or open water mist. The washi shade will naturally cure to a warm honey hue over decades of interior illumination.
            </p>
          </div>
        )}
      </div>

      {/* Accordion 3: Protective Crate & Courier Logistics */}
      <div className="rounded-xl bg-surface-card border border-border-card/50 shadow-xs overflow-hidden">
        <button
          type="button"
          onClick={() => toggle("ship")}
          className="w-full p-4 flex items-center justify-between text-left"
        >
          <span className="font-label-input text-label-input text-ink-charcoal font-medium">
            Protective Crate &amp; Courier Logistics
          </span>
          <span
            className={`material-symbols-outlined text-[18px] text-mineral-gray transition-transform duration-300 ${
              openSection === "ship" ? "rotate-180" : ""
            }`}
          >
            expand_more
          </span>
        </button>
        {openSection === "ship" && (
          <div className="px-4 pb-4 text-xs text-on-surface-variant leading-relaxed">
            <p>
              Shipped in our reinforced architectural timber crate lined with shock-absorbent wool felt. Complimentary white-glove uncrating and fixture assembly are available upon checkout in metropolitan regions.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MobileProductAccordions;
