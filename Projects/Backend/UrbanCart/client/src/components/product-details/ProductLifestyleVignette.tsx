// client/src/components/product-details/ProductLifestyleVignette.tsx
import React from "react";

export const ProductLifestyleVignette: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low py-space-xl">
      <div className="max-w-[1440px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 space-y-4 lg:pr-8">
            <span className="font-label-eyebrow text-label-eyebrow uppercase text-terracotta-accent">
              Material Atmosphere
            </span>
            <h2 className="font-headline-lg text-[36px] text-ink-charcoal leading-tight">
              Illumination as Architectural Volume
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Traditional Japanese lighting treats shadows not as an absence of clarity, but as a
              deliberate textural layer. The Akari series transforms electric glare into gentle
              ambient breathing room.
            </p>
            <div className="pt-2 flex items-center gap-6">
              <div>
                <span className="font-headline-sm text-headline-sm text-ink-charcoal block">
                  95+
                </span>
                <span className="font-label-micro text-label-micro text-mineral-gray uppercase">
                  Color Rendering Index
                </span>
              </div>
              <div className="h-8 w-[1px] bg-border-subtle" />
              <div>
                <span className="font-headline-sm text-headline-sm text-ink-charcoal block">
                  100%
                </span>
                <span className="font-label-micro text-label-micro text-mineral-gray uppercase">
                  Mulberry Bark Fiber
                </span>
              </div>
              <div className="h-8 w-[1px] bg-border-subtle" />
              <div>
                <span className="font-headline-sm text-headline-sm text-ink-charcoal block">
                  18 hrs
                </span>
                <span className="font-label-micro text-label-micro text-mineral-gray uppercase">
                  Hand-Winding per Shade
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-md">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1V4iOL2_n2linDE7dz1p73PTBrZB2jAZ3zLg5xoOx6IV94m8D3--oG8oPTb8rrsQZefUw1wC63AV_fjVul4wUVoWBetJ3sYiOjLe19-M-eSPGQ72uE4u_SDa6oIHFGDc7l49pQfWUnmquzE3ghlaw86m817lWuIruOlqBoMAQLvYZdSzCONNE8qraWqiqWXKFlyAzJCUCiX3wjK1Tw7_5Idzn00DazUpIVaG5usdkNH2OAAV8AmVReQ7rI"
                alt="Editorial ambient architectural living space featuring minimalist Akari lighting and handcrafted earthenware"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLifestyleVignette;
