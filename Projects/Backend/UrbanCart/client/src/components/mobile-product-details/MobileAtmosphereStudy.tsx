// client/src/components/mobile-product-details/MobileAtmosphereStudy.tsx
import React from "react";

interface AtmosphereStudyProps {
  imageUrl?: string;
  fallbackUrl?: string;
  eyebrow?: string;
  title?: string;
}

export const MobileAtmosphereStudy: React.FC<AtmosphereStudyProps> = ({
  imageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBjOPZ-6KAVeLql9nzYSD42Wl3xrkKLWZpFCh_-K-v441DwV8D2BvM45UlRc594dbWk_6DXR1tNCWZODFK4WiRHUVH_TMU2MHxpvS-F1Aar2UkVVpRUojZKikPCEy7zFUhug2cO8vWwSxV4-1eFyh6bF8elVeqNW6hfjgiXtE7Vx60u9yEZLFNzJjFC7JV57QTHt_aC8Ski4n9cDTrnoRNaIRfRlWJdGgS01b9GqSJXsCRnCvFk1UVB",
  fallbackUrl = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  eyebrow = "ATMOSPHERE STUDY",
  title = "Illumination as Architectural Volume",
}) => {
  return (
    <section className="px-margin-mobile pt-6 flex flex-col gap-3">
      {/* Editorial Atmosphere Visual */}
      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-surface-container shadow-xs">
        <img
          src={imageUrl}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
          onError={(e) => {
            if (fallbackUrl) {
              (e.target as HTMLImageElement).src = fallbackUrl;
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/80 font-medium">
            {eyebrow}
          </span>
          <h2 className="font-editorial text-lg text-white font-medium leading-snug mt-0.5">
            {title}
          </h2>
        </div>
      </div>

      {/* Metrology Statistics Bar */}
      <div className="grid grid-cols-3 gap-2 py-3 px-2 rounded-xl bg-surface-container-low border border-border-card/40 text-center">
        <div className="flex flex-col">
          <span className="font-editorial text-lg font-bold text-ink-charcoal">95+</span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-mineral-gray font-medium">
            CRI Fidelity
          </span>
        </div>

        <div className="flex flex-col border-x border-border-card/60">
          <span className="font-editorial text-lg font-bold text-ink-charcoal">100%</span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-mineral-gray font-medium">
            Mulberry Bark
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-editorial text-lg font-bold text-ink-charcoal">18 hrs</span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-mineral-gray font-medium">
            Hand-Wound
          </span>
        </div>
      </div>
    </section>
  );
};

export default MobileAtmosphereStudy;
