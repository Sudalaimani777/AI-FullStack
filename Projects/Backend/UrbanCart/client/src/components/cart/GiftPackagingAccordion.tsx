// client/src/components/cart/GiftPackagingAccordion.tsx
import React, { useState } from "react";

export const GiftPackagingAccordion: React.FC = () => {
  const [giftMessage, setGiftMessage] = useState("");
  const [omitPricing, setOmitPricing] = useState(false);

  return (
    <div className="rounded-xl bg-surface-card p-space-md shadow-xs border border-border-card/40">
      <details className="group">
        <summary className="flex items-center justify-between cursor-pointer list-none select-none">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-mineral-gray text-[22px]">
              featured_seasonal_and_gifts
            </span>
            <div>
              <h4 className="font-label-input text-label-input text-ink-charcoal font-semibold">
                Complimentary Gift Packaging &amp; Parchment Inscription
              </h4>
              <p className="font-body-sm text-body-sm text-mineral-gray">
                Hand-tied linen twill ribbon and calligraphy wax-sealed message
              </p>
            </div>
          </div>
          <span className="material-symbols-outlined text-mineral-gray group-open:rotate-180 transition-transform">
            expand_more
          </span>
        </summary>

        <div className="mt-space-md pt-space-md space-y-space-md border-t border-border-card/30">
          <div className="space-y-1.5">
            <label className="font-label-input text-label-input text-ink-charcoal block">
              Handwritten Message for Recipient
            </label>
            <textarea
              value={giftMessage}
              onChange={(e) => setGiftMessage(e.target.value)}
              rows={3}
              placeholder="Enter your thoughtful sentiments to be transcribed on heavy cream Japanese stock..."
              className="w-full p-space-md rounded-xl bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-muted-sand focus:outline-none focus:bg-surface-card border border-border-card/40 transition-colors"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                id="gift-receipt"
                type="checkbox"
                checked={omitPricing}
                onChange={(e) => setOmitPricing(e.target.checked)}
                className="w-4 h-4 rounded text-ink-charcoal bg-surface-container-low accent-ink-charcoal cursor-pointer"
              />
              <label
                htmlFor="gift-receipt"
                className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer select-none"
              >
                Omit item pricing details from enclosed parcel manifesto
              </label>
            </div>
            <span className="font-label-eyebrow text-label-eyebrow uppercase text-terracotta-accent font-semibold">
              Gratis
            </span>
          </div>
        </div>
      </details>
    </div>
  );
};

export default GiftPackagingAccordion;
