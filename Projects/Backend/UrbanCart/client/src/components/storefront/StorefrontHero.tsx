// client/src/components/storefront/StorefrontHero.tsx
import React from "react";

export const StorefrontHero: React.FC = () => {
  const scrollToCatalog = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("catalog-grid");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full -mt-20 overflow-hidden bg-ink-charcoal min-h-[580px] lg:min-h-[640px] flex items-end">
      {/* Background Image with Editorial Mood */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWL2LdyvUx3iUespkztt_3WFEzNd-wC7AekEefqoL_eYcmR_TYtav5QfepO5CwYZ2T041r_Paz777G6Ob_WExzFxMzFmX9RsYYTX69-qWxlRk-pUA9Due7wdYOXy2uPg2uPRGqtxe7pw81jt6Rz1I0uSNR4p6YPX79ATneCTN_5gYyKQdI1T_x7jsQeA37HhQJc4DlYEj3obtFwsTHjvtf2XRUytpga5GDj3lq6KBt8P2LSnXjtg6u')",
        }}
      />

      {/* Multi-Layer Vignette Scrim (Ensures absolute text legibility while honoring styleguide) */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink-charcoal via-ink-charcoal/60 to-ink-charcoal/20 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-charcoal/80 via-transparent to-transparent" />

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-gutter pt-36 pb-space-xl lg:pb-24">
        <div className="max-w-2xl flex flex-col items-start">

          {/* Catchy Main Headline */}
          <h1 className="font-display-hero text-[40px] sm:text-[52px] lg:text-[64px] leading-[1.08] text-white tracking-tight font-normal mb-space-md">
            Tactile Materiality for Mindful Spaces.
          </h1>

          {/* Editorial Subtitle */}
          <p className="font-body-lg text-body-lg text-secondary-fixed mb-space-lg max-w-xl text-balance leading-relaxed">
            Discover tactile ceramics, sculptural lighting, and handcrafted furniture created by independent artisans across Kyoto, Copenhagen, and SoHo.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-space-md w-full sm:w-auto">
            <button
              onClick={scrollToCatalog}
              type="button"
              className="h-[52px] px-8 rounded-xl bg-terracotta-accent hover:bg-terracotta-flame text-on-primary font-label-input text-label-input flex items-center justify-center gap-2 shadow-lg transition-transform active:translate-y-0.5 font-semibold cursor-pointer"
            >
              <span>Shop Trending Now</span>
              <span className="material-symbols-outlined text-[18px]">east</span>
            </button>
            <button
              onClick={scrollToCatalog}
              className="h-[52px] px-7 rounded-xl bg-surface-card/10 hover:bg-surface-card/20 backdrop-blur-md text-on-primary font-label-input text-label-input transition-colors flex items-center justify-center font-medium cursor-pointer"
              type="button"
            >
              Explore Lookbook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorefrontHero;
