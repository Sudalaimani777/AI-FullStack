// client/src/components/mobile-storefront/MobileHeroBanner.tsx
import React from "react";

interface MobileHeroBannerProps {
  onShopTrending?: () => void;
  onOpenLookbook?: () => void;
}

export const MobileHeroBanner: React.FC<MobileHeroBannerProps> = ({
  onShopTrending,
  onOpenLookbook,
}) => {
  const handleScrollToGrid = () => {
    if (onShopTrending) {
      onShopTrending();
    } else {
      const el = document.getElementById("mobile-catalog-grid");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="px-margin-mobile pt-2 pb-4">
      <div className="relative w-full rounded-2xl overflow-hidden bg-primary-container shadow-[0_12px_32px_rgba(47,38,18,0.12)]">
        <div className="relative h-[340px] w-full">
          <img
            src="https://lh3.googleusercontent.com/aida/AEtjO1V0u1v4hn8b9wloe5h34QehCfK6p8RdINsc_GU6wKk8OhnyOV8yq6MO501MWG_QDx0azSXf6mwWttcY2EY45lkaDsyGni65LKg-FeblCqdxF1B9pJ8U8SnT6Gp0pA_Gy5cPlWJ4w00RE9b8HgGMGKmenjwD_VWyO648agJhxwbrhPcFEkM-J8cMgEOcTzfIEhU0e-1gium72aLYnfy-FIAg5H1ClCQBrnZPv_4ZL-viT3SN5bJxX1G_FRc"
            alt="Sunlit architectural loft living room"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-charcoal/90 via-ink-charcoal/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end p-5">
            {/* Edition Eyebrow */}
            <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 mb-2.5 rounded-full bg-surface/90 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-flame animate-pulse" />
              <span className="font-label-micro text-label-micro uppercase tracking-widest text-ink-charcoal font-semibold">
                Atelier Release • Edition 08
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-primary mb-2 tracking-tight">
              Discover tactile ceramics, sculptural lighting, and handcrafted furniture
            </h1>

            {/* Subtitle */}
            <p className="font-body-sm text-body-sm text-secondary-fixed mb-4 line-clamp-2">
              Curated physical heirlooms made by master craftspeople across Kyoto, Copenhagen, and Lisbon.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleScrollToGrid}
                className="flex-1 h-[46px] px-4 rounded-full bg-terracotta-accent hover:bg-terracotta-flame active:scale-[0.98] text-on-primary font-label-input text-label-input uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-[0_4px_16px_rgba(232,93,63,0.35)] cursor-pointer"
              >
                <span>Shop Trending</span>
                <span className="material-symbols-outlined text-[17px]">
                  arrow_forward
                </span>
              </button>
              <button
                type="button"
                onClick={onOpenLookbook}
                className="h-[46px] px-4 rounded-full bg-surface-container-lowest/20 backdrop-blur-md hover:bg-surface-container-lowest/30 active:scale-[0.98] text-on-primary font-label-input text-label-input uppercase tracking-wider flex items-center justify-center transition-all cursor-pointer"
              >
                <span>Lookbook</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHeroBanner;
