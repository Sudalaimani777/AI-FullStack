// client/src/components/mobile-product-details/MobileProductGallery.tsx
import React, { useState } from "react";
import type { MobileProductGalleryItem } from "./productPresets";

interface MobileProductGalleryProps {
  items: MobileProductGalleryItem[];
  productName: string;
  onZoom: () => void;
}

export const MobileProductGallery: React.FC<MobileProductGalleryProps> = ({
  items,
  productName,
  onZoom,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const currentItem = items[activeIndex] || items[0];

  return (
    <section className="px-margin-mobile flex flex-col gap-3">
      {/* Main Image Showcase */}
      <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-surface-container shadow-xs group">
        <img
          key={currentItem.id}
          src={currentItem.url}
          alt={currentItem.alt || productName}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={(e) => {
            if (currentItem.fallbackUrl) {
              (e.target as HTMLImageElement).src = currentItem.fallbackUrl;
            }
          }}
        />

        {/* Top-Left Artisan Origin Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink-charcoal/70 backdrop-blur-md text-white font-label-micro text-label-micro uppercase tracking-wider font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta-accent animate-pulse" />
          <span>Handcrafted in Gifu, Japan</span>
        </div>

        {/* Top-Right Inspect Zoom Trigger */}
        <button
          type="button"
          onClick={onZoom}
          aria-label="Zoom Image Details"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md text-ink-charcoal flex items-center justify-center hover:bg-white transition-colors shadow-xs"
        >
          <span className="material-symbols-outlined text-[18px]">zoom_in</span>
        </button>

        {/* Bottom-Left Color Temperature & Illumination Badge */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-ink-charcoal/75 backdrop-blur-md text-amber-200 font-label-micro text-label-micro tracking-wider">
          <span className="material-symbols-outlined text-[14px] text-amber-400">
            wb_incandescent
          </span>
          <span>2700K Soft Amber Glow</span>
        </div>
      </div>

      {/* Horizontal Thumbnails Carousel */}
      <div className="grid grid-cols-4 gap-2.5">
        {items.map((item, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`View thumbnail ${item.label}`}
              className={`relative aspect-square rounded-xl overflow-hidden bg-surface-container transition-all ${
                isActive
                  ? "ring-2 ring-ink-charcoal ring-offset-2 ring-offset-surface scale-[1.02]"
                  : "opacity-75 hover:opacity-100"
              }`}
            >
              <img
                src={item.url}
                alt={item.label}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  if (item.fallbackUrl) {
                    (e.target as HTMLImageElement).src = item.fallbackUrl;
                  }
                }}
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default MobileProductGallery;
