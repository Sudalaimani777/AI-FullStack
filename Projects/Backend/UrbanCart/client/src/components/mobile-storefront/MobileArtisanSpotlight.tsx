// client/src/components/mobile-storefront/MobileArtisanSpotlight.tsx
import React from "react";

export const MobileArtisanSpotlight: React.FC = () => {
  return (
    <section className="px-margin-mobile py-4">
      <div className="relative rounded-2xl overflow-hidden bg-primary-container text-on-primary shadow-[0_12px_28px_rgba(47,38,18,0.08)]">
        <div className="p-5 flex flex-col">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBae4wDwDETWH8LfOdluOu-v86884sXvUSc073GxWFWAeh1vbOalzkHjNbrjWR8Ft8QQyVlGm9cGd5bNEjV8yB35DeFf7dk7hMs-w1hS8lS3AOqvmxTcviZsouJ7hVopv_TjMkx4gn_AwbJHAFrI1OA9eSfCrutANFAhqWAAraO1RZLr28OTvngaJVr5aAyJME42okzBdRf18OrHrO9m2dqnnN7djVnTEkNs1ptr8fEjGSMAOFVC8QR"
                alt="Master Kenzo Kyoto artisan"
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-full object-cover ring-1 ring-white/20"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80";
                }}
              />
              <div>
                <span className="font-label-micro text-label-micro uppercase tracking-wider text-secondary-fixed block">
                  Resident Atelier #04
                </span>
                <span className="font-label-input text-label-input text-on-primary font-medium">
                  Studio Kenzo • Kyoto
                </span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-terracotta-accent/30 text-tertiary-fixed font-label-micro text-label-micro uppercase tracking-wider font-semibold">
              Spotlight
            </span>
          </div>

          {/* Headline Quote */}
          <blockquote className="font-headline-sm text-headline-sm text-on-primary my-1 leading-snug font-serif italic">
            “Physical poetry shaped by disciplined hands.”
          </blockquote>

          {/* Description */}
          <p className="font-body-sm text-body-sm text-secondary-fixed mt-1 mb-4 leading-relaxed">
            Master Kenzo fires each stoneware batch using slow-cured pine wood kilns, yielding unique organic mineral gradients that cannot be replicated by automated machines.
          </p>

          {/* 2-Column Metrics */}
          <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-surface-container-lowest/10 backdrop-blur-sm mb-4">
            <div className="flex flex-col">
              <span className="font-headline-sm text-[20px] text-on-primary font-semibold">
                100%
              </span>
              <span className="font-label-micro text-label-micro uppercase text-secondary-fixed">
                Traceable Clay
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-[20px] text-on-primary font-semibold">
                24 Mo.
              </span>
              <span className="font-label-micro text-label-micro uppercase text-secondary-fixed">
                Craft Guarantee
              </span>
            </div>
          </div>

          {/* Action Link */}
          <a
            href="#atelier-journal"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center justify-between text-on-primary font-label-input text-label-input py-1 group cursor-pointer"
          >
            <span className="group-hover:text-terracotta-accent transition-colors">
              Read Resident Artisan Journals
            </span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              east
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MobileArtisanSpotlight;
