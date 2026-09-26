// client/src/components/product-details/ProductGallery.tsx
import React, { useState } from "react";

interface ProductGalleryProps {
  primaryImage: string;
  productName: string;
  provenanceText?: string;
  originBadge?: string;
  isIlluminated: boolean;
  onToggleIllumination: () => void;
  onFullscreenInspect: () => void;
}

interface GalleryPerspective {
  id: string;
  label: string;
  imageUrl: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  primaryImage,
  productName,
  provenanceText = "Handcrafted in Gifu, Japan",
  originBadge = "Honshu Origin",
  isIlluminated,
  onToggleIllumination,
  onFullscreenInspect,
}) => {
  const fallbackPrimary =
    primaryImage ||
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDAUZMZRWafNHt7HHfJTNqzM8Oj0GxrTgjTuU_iyWC7eTvh8PGISIj-KjN_7aq6PGBMSi_gU-bdoSRJ8sTp-B85nO8SRqpRcYSAcc38Iv6vLnXSoErBA6h_T_pStKcboHIYnApqZX9wW2Z-LMxlTqaisknXv73AMAZJp2j1p77c8Z-EBUVXEebAafygehr-wvZ7lHEXxNJpZFOQZx9JtkVysXFeRyISIWw_CWjvKA5LRejoTHUdLfqG";

  const perspectives: GalleryPerspective[] = [
    {
      id: "silhouette",
      label: "Silhouette",
      imageUrl: fallbackPrimary,
    },
    {
      id: "loft",
      label: "Atelier Loft",
      imageUrl:
        "https://lh3.googleusercontent.com/aida/AEtjO1V4iOL2_n2linDE7dz1p73PTBrZB2jAZ3zLg5xoOx6IV94m8D3--oG8oPTb8rrsQZefUw1wC63AV_fjVul4wUVoWBetJ3sYiOjLe19-M-eSPGQ72uE4u_SDa6oIHFGDc7l49pQfWUnmquzE3ghlaw86m817lWuIruOlqBoMAQLvYZdSzCONNE8qraWqiqWXKFlyAzJCUCiX3wjK1Tw7_5Idzn00DazUpIVaG5usdkNH2OAAV8AmVReQ7rI",
    },
    {
      id: "mulberry",
      label: "Mulberry Fiber",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAHTVxG1IB5uQrt43mhwog1sa2U-7lw5EDvLm1srpvhoyyXXJGifLX845qWreGV41yTGru08BUX3Owj-vNFqfo6ZzJxnXFuPGfolmRqLUiIplcMe7yiTGocmwZxtW7GiwG8n7hPJjUW6k1bO4hW32Q9w683oBHrnZoJqdp9hgn_gXyCpNewubPDSqL3mQE1sB6yazwtXki63Org5QQmveCDTnl44rzPqI78Y6IU1AhyGeAMFEo3nXZ4",
    },
    {
      id: "canopy",
      label: "Brass Canopy",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA3GhksABKzvUdM4wVpC6lGSxhoTW7etzkdG35d_reZ2YlUH_s3tlSusNxfvuX6k1uK-K091VbGJjBk36scPMbnlWnXh_0FkWNsPwak4myX0zy5Z2oP17le_e2FIcUjjt-VfajOUpiuFadi9BfOiIaWnDhkhUOKgfg03Yktm74cirEX4sxidp1ymFqgzdxTLdOvf2XmypZ1NZ-6axIsF_c9TC7ab-98G-zEcLr6UdtN_V_EfxP_XEJc",
    },
  ];

  const [activeImage, setActiveImage] = useState<string>(fallbackPrimary);

  // Sync activeImage if primaryImage prop changes
  React.useEffect(() => {
    setActiveImage(fallbackPrimary);
  }, [primaryImage]);

  return (
    <div className="flex flex-col gap-space-md">
      {/* Primary Showcase Stage */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-surface-container-low shadow-sm group">
        <img
          src={activeImage}
          alt={productName}
          style={{
            filter: isIlluminated ? "sepia(0.2) saturate(1.2) contrast(1.05)" : "none",
          }}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Provenance Badge */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-card/90 backdrop-blur-md shadow-xs font-label-micro text-label-micro uppercase tracking-wider text-ink-charcoal">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta-flame" />
            {provenanceText}
          </span>
        </div>

        {/* Zoom & Ambience Toggle Overlay */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleIllumination}
            title="Toggle 2700K Warm Light Atmosphere"
            className="px-3.5 py-2 rounded-xl bg-surface-card/90 backdrop-blur-md text-ink-charcoal shadow-xs hover:bg-surface-card transition-all flex items-center gap-1.5 font-label-input text-label-input cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px] text-terracotta-flame">
              lightbulb
            </span>
            <span className="hidden sm:inline">
              {isIlluminated ? "Active (2700K Glow)" : "2700K Glow"}
            </span>
          </button>

          <button
            type="button"
            aria-label="Inspect Fullscreen"
            onClick={onFullscreenInspect}
            className="w-10 h-10 rounded-xl bg-surface-card/90 backdrop-blur-md text-ink-charcoal shadow-xs hover:bg-surface-card transition-all flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[19px]">zoom_in</span>
          </button>
        </div>
      </div>

      {/* Thumbnails Reel (4 Perspectives) */}
      <div className="grid grid-cols-4 gap-3 w-full">
        {perspectives.map((thumb) => {
          const isActive = activeImage === thumb.imageUrl;
          return (
            <button
              key={thumb.id}
              type="button"
              onClick={() => setActiveImage(thumb.imageUrl)}
              className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-low shadow-xs transition-all cursor-pointer ${
                isActive
                  ? "outline outline-2 outline-ink-charcoal opacity-100"
                  : "outline-0 opacity-80 hover:opacity-100"
              }`}
            >
              <img
                src={thumb.imageUrl}
                alt={`${thumb.label} perspective`}
                className="w-full h-full object-cover object-center"
              />
              <span className="absolute bottom-1 left-1.5 font-label-micro text-[9px] px-1.5 py-0.5 rounded bg-ink-charcoal/80 text-white font-medium">
                {thumb.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tactile Material Notes Callout */}
      <div className="mt-2 p-5 rounded-xl bg-surface-card shadow-xs flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-border-card/40">
        <div className="w-12 h-12 rounded-xl bg-status-peach-bg flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-status-peach-text text-[24px]">
            architecture
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-headline-sm text-[16px] text-ink-charcoal leading-tight">
            Master Guild Woodworking &amp; Ribbing
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Every ovoid structure is shaped around solid cherry wood armatures, painstakingly wound
            with spiral bamboo filaments before receiving raw mulberry pulp layers.
          </p>
        </div>
        <span className="font-label-eyebrow text-label-eyebrow text-terracotta-accent uppercase shrink-0">
          {originBadge}
        </span>
      </div>
    </div>
  );
};

export default ProductGallery;
