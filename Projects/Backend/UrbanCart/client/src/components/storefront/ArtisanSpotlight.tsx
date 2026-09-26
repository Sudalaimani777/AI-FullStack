// client/src/components/storefront/ArtisanSpotlight.tsx
import React from "react";

export const ArtisanSpotlight: React.FC = () => {
  return (
    <section className="w-full bg-canvas-secondary py-space-xl my-space-md border-y border-border-card/40">
      <div className="w-full max-w-[1440px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          {/* Left Visual Block */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10]">
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOiCDB8egfcE6vmyRrQVn8JALn1pKEyLnWt7ywQ6Xpq2-DS0u1HqSiY-7KUSaEftwV3QOT3dEpzxw0VUOcYijA5LKx1i-RDfUWK3XYgUASinNEpFdd-wcIzJu7XiT15-0-V4aeg-E_uBfPU-vOFCSMUjlBMhxp2zE_HkUFRRUwivOYF0xnzZ958mTZMGtGUxSr-ayjjK5uj0nrwmS-yRoU0hSO6uiTJKMmeDpbfosNThmhX54AdYFr')",
              }}
            />
            <div className="absolute bottom-4 left-4 bg-surface-card/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-md border border-white/20">
              <p className="font-label-micro text-label-micro uppercase tracking-wider text-mineral-gray font-semibold">
                Atelier Resident #04
              </p>
              <p className="font-label-input text-label-input text-ink-charcoal font-semibold">
                Studio Kenzo • Kyoto, Japan
              </p>
            </div>
          </div>

          {/* Right Content Block */}
          <div className="lg:col-span-5 lg:pl-space-md flex flex-col items-start">
            <span className="font-label-eyebrow text-label-eyebrow uppercase text-terracotta-accent tracking-[0.2em] mb-2 font-semibold">
              Artisan Provenance
            </span>
            <h2 className="font-headline-lg text-headline-lg text-ink-charcoal mb-space-md leading-tight">
              Physical poetry shaped by disciplined hands.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
              Every vessel, luminaire, and bench consigned to UrbanCart undergoes rigorous inspection by our architectural curatorial council. We honor traditional joinery, unglazed stoneware, and honest raw textures designed to age with natural dignity.
            </p>
            <div className="grid grid-cols-2 gap-space-md w-full mb-space-lg">
              <div className="p-3 bg-surface-card rounded-xl border border-border-card/60">
                <span className="font-headline-sm text-headline-sm text-ink-charcoal font-semibold">
                  100%
                </span>
                <p className="font-label-micro text-label-micro text-mineral-gray uppercase mt-0.5 font-semibold">
                  Traceable Sourcing
                </p>
              </div>
              <div className="p-3 bg-surface-card rounded-xl border border-border-card/60">
                <span className="font-headline-sm text-headline-sm text-ink-charcoal font-semibold">
                  24 Mo.
                </span>
                <p className="font-label-micro text-label-micro text-mineral-gray uppercase mt-0.5 font-semibold">
                  Atelier Craft Warranty
                </p>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 font-label-input text-label-input text-terracotta-flame hover:text-ink-charcoal transition-colors font-semibold cursor-pointer"
            >
              <span>Read Resident Artisan Journals</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanSpotlight;
