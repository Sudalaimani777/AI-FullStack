// client/src/components/mobile-product-details/MobileProductDetailsView.tsx
import React, { useState } from "react";
import type { Product } from "../../types";
import { MobileHeader } from "../mobile-storefront/MobileHeader";
import { MobileBottomNav } from "../mobile-storefront/MobileBottomNav";
import { MobileStorefrontToast } from "../mobile-storefront/MobileStorefrontToast";
import { AKARI_MOBILE_PRESET } from "./productPresets";
import type { DimensionOption, CordOption, SpatialPairingItem } from "./productPresets";
import MobileProductBreadcrumb from "./MobileProductBreadcrumb";
import MobileProductGallery from "./MobileProductGallery";
import MobileProductOverview from "./MobileProductOverview";
import MobileProductSelectors from "./MobileProductSelectors";
import MobilePurchaseModule from "./MobilePurchaseModule";
import MobileProductAssurances from "./MobileProductAssurances";
import MobileAtmosphereStudy from "./MobileAtmosphereStudy";
import MobileProductAccordions from "./MobileProductAccordions";
import MobileSpatialPairings from "./MobileSpatialPairings";

interface MobileProductDetailsViewProps {
  product?: Product | null;
  onAddToCart?: (product: Product, quantity: number) => void;
  onDirectCheckout?: (product: Product, quantity: number) => void;
}

export const MobileProductDetailsView: React.FC<MobileProductDetailsViewProps> = ({
  product,
  onAddToCart,
  onDirectCheckout,
}) => {
  const [selectedDimension, setSelectedDimension] = useState<DimensionOption>(AKARI_MOBILE_PRESET.dimensions[1]);
  const [selectedCord, setSelectedCord] = useState<CordOption>(AKARI_MOBILE_PRESET.cords[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2400);
  };

  const basePrice = product ? Number(product.product_price) || 340 : AKARI_MOBILE_PRESET.basePrice;
  const currentUnitPrice = Math.max(1, basePrice + selectedDimension.priceOffset);

  const effectiveProduct: Product = {
    _id: product?._id || AKARI_MOBILE_PRESET.id,
    product_name: product?.product_name || AKARI_MOBILE_PRESET.name,
    product_description: product?.product_description || AKARI_MOBILE_PRESET.curatorialText,
    product_price: currentUnitPrice.toString(),
    product_category: product?.product_category || "Lighting",
    product_stock: product?.product_stock ? String(product.product_stock) : "12",
    product_image: product?.product_image || AKARI_MOBILE_PRESET.gallery[0].url,
  };

  const handleAcquire = () => {
    if (onAddToCart) onAddToCart(effectiveProduct, quantity);
    showToast(`${quantity}x ${effectiveProduct.product_name} added to Bag`);
  };

  const handleQuickPair = (item: SpatialPairingItem) => {
    const companion: Product = {
      _id: item.id,
      product_name: item.name,
      product_description: `Companion piece: ${item.category}`,
      product_price: item.price.toString(),
      product_category: item.category,
      product_stock: "5",
      product_image: item.imageUrl,
    };
    if (onAddToCart) onAddToCart(companion, 1);
    showToast(`Paired ${item.name} with your consignment`);
  };

  const categoryLabel = product?.product_category
    ? `${product.product_category.toUpperCase()} / ATELIER`
    : "LIGHTING / ATELIER";

  return (
    <div className="min-h-screen w-full bg-[#f4f2ee] md:py-6 flex justify-center items-start">
      <div className="w-full max-w-[430px] min-h-screen bg-surface text-on-surface antialiased flex flex-col relative shadow-[0_16px_48px_rgba(47,38,18,0.12)] border-x border-border-card/40 md:rounded-[32px] overflow-hidden">
        <MobileHeader />

        <main className="flex-1 flex flex-col relative w-full pt-16 pb-28 bg-surface">
          <MobileProductBreadcrumb
            category={categoryLabel}
            isWishlisted={isWishlisted}
            onToggleWishlist={() => {
              setIsWishlisted(!isWishlisted);
              showToast(isWishlisted ? "Removed from private wishlist" : "Saved to your private wishlist");
            }}
            onShare={() => {
              if (navigator.share) navigator.share({ title: effectiveProduct.product_name, url: window.location.href });
              else {
                navigator.clipboard?.writeText(window.location.href);
                showToast("Product link copied to clipboard");
              }
            }}
          />

          <MobileProductGallery
            items={AKARI_MOBILE_PRESET.gallery}
            productName={effectiveProduct.product_name}
            onZoom={() => showToast("Inspection zoom: pinch or tap to inspect fibers")}
          />

          <MobileProductOverview
            name={effectiveProduct.product_name}
            subtitle={AKARI_MOBILE_PRESET.subtitle}
            sku={AKARI_MOBILE_PRESET.sku}
            category={effectiveProduct.product_category}
            price={currentUnitPrice}
            curatorialText={effectiveProduct.product_description}
          />

          <MobileProductSelectors
            dimensions={AKARI_MOBILE_PRESET.dimensions}
            selectedDimensionId={selectedDimension.id}
            onSelectDimension={setSelectedDimension}
            onOpenScaleGuide={() => showToast("Opening Atelier Architectural Scale Guide...")}
            cords={AKARI_MOBILE_PRESET.cords}
            selectedCordId={selectedCord.id}
            onSelectCord={setSelectedCord}
          />

          <MobilePurchaseModule
            quantity={quantity}
            onQuantityChange={setQuantity}
            unitPrice={currentUnitPrice}
            onAcquire={handleAcquire}
            onInstantConsignment={() => onDirectCheckout ? onDirectCheckout(effectiveProduct, quantity) : handleAcquire()}
          />

          <MobileProductAssurances />
          <MobileAtmosphereStudy />
          <MobileProductAccordions />
          <MobileSpatialPairings pairings={AKARI_MOBILE_PRESET.pairings} onQuickPair={handleQuickPair} />
        </main>

        <MobileBottomNav />
        <MobileStorefrontToast message={toastMessage} />
      </div>
    </div>
  );
};

export default MobileProductDetailsView;
