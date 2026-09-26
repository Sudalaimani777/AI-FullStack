// client/src/components/layout/StorefrontFooter.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const StorefrontFooter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="hidden md:block w-full bg-surface-container-low text-on-surface pt-space-xl pb-space-lg mt-space-xl border-t border-border-card/50">
      <div className="w-full max-w-[1440px] mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-xl">
          {/* Column 1: Brand & Gazette Newsletter Subscription */}
          <div className="lg:col-span-4 space-y-space-md pr-space-md">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-ink-charcoal text-white flex items-center justify-center font-bold text-base shadow-sm">
                U
              </div>
              <span className="font-headline-sm text-headline-sm text-ink-charcoal tracking-tight font-semibold">
                UrbanCart
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm leading-relaxed">
              Curated architectural homeware, timeless illumination, and grounded physical artifacts. Engineered for mindful spaces and restrained modern living.
            </p>
            <div className="pt-space-xs">
              <p className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray mb-space-xs font-semibold">
                The UrbanCart Gazette
              </p>
              {subscribed ? (
                <div className="p-3 rounded-xl bg-status-peach-bg text-status-peach-text font-body-sm text-body-sm flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>Thank you for subscribing to curatorial releases.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex max-w-sm gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your correspondence email..."
                    className="w-full h-11 px-4 rounded-xl bg-surface-card border border-border-card font-body-sm text-body-sm text-on-surface placeholder:text-muted-sand focus:outline-none focus:border-ink-charcoal transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-5 h-11 rounded-xl bg-ink-charcoal text-on-primary font-label-input text-label-input hover:bg-primary transition-all shrink-0 font-medium"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Curated Catalog */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray font-semibold">
              Curated Catalog
            </p>
            <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
              <li className="hover:text-on-surface cursor-pointer transition-colors">Pendant Luminaires</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Ceramic Vessels</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Architectural Seating</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Belgian Linens</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Acoustic Wall Panels</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Archive Editions</li>
            </ul>
          </div>

          {/* Column 3: Client Services */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray font-semibold">
              Client Services
            </p>
            <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
              <li className="hover:text-on-surface cursor-pointer transition-colors">Bespoke Trade Program</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">White-Glove Logistics</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Material Sampling</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Care &amp; Restoration</li>
              <li>
                <Link to="/profile" className="hover:text-on-surface cursor-pointer transition-colors">
                  Order Tracking
                </Link>
              </li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Schedule Consultation</li>
            </ul>
          </div>

          {/* Column 4: The Atelier */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray font-semibold">
              The Atelier
            </p>
            <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
              <li className="hover:text-on-surface cursor-pointer transition-colors">Founding Philosophy</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Resident Artisans</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Sustainable Provenance</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Press Inquiries</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Exhibition Schedule</li>
            </ul>
          </div>

          {/* Column 5: Legal & Policy */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray font-semibold">
              Legal &amp; Policy
            </p>
            <ul className="space-y-2 font-body-sm text-body-sm text-on-surface-variant">
              <li className="hover:text-on-surface cursor-pointer transition-colors">Terms of Consignment</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Privacy Framework</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Authenticity Guarantee</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Global Shipping Terms</li>
              <li className="hover:text-on-surface cursor-pointer transition-colors">Accessibility Notice</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Payment Strip */}
        <div className="pt-space-md border-t border-border-card/60 flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-micro text-label-micro text-mineral-gray">
          <p>© 2025 UrbanCart Atelier Inc. Crafted with deliberate restraint for architectural living.</p>
          <div className="flex items-center gap-space-md">
            <span className="tracking-wider uppercase font-semibold">Secure Checkout</span>
            <span className="h-3 w-[1px] bg-border-subtle" />
            <span>Visa • Mastercard • AMEX • Apple Pay • Stripe 3DS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default StorefrontFooter;
