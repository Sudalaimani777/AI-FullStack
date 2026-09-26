// client/src/pages/OrderConfirmationPage.tsx
import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { useAuthStore } from "../store/useAuthStore";
import type { CartItem } from "../types";
import {
  FALLBACK_ORDER_ITEMS,
  type PostCheckoutItem,
  OrderConfirmationStepper,
  OrderConfirmationHero,
  DeliveryMilestonesCard,
  DestinationBillingCard,
  ConfirmationActionButtons,
  OrderManifestSummary,
  PostCheckoutRecommendations,
  ConfirmationToast,
} from "../components/order-confirmation";
import type { ShippingAddressState } from "../components/checkout";

interface OrderNavState {
  orderId?: string;
  items?: CartItem[];
  totalPrice?: number;
  shippingAddress?: ShippingAddressState;
  deliveryTier?: "standard" | "priority";
  paymentMethod?: string;
}

export const OrderConfirmationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { addToCart } = useCartStore();
  const { user } = useAuthStore();

  const state = (location.state as OrderNavState) || {};
  const orderId = id || state.orderId || "ORD-9021";
  const confirmedItems =
    state.items && state.items.length > 0 ? state.items : FALLBACK_ORDER_ITEMS;

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleTrackCourier = () => {
    showToast("Connecting to White Glove Courier satellite telemetry...");
  };

  const handleContactConcierge = () => {
    showToast("Opening direct channel with Atelier Concierge dispatch...");
  };

  const handleAddRecommendation = (item: PostCheckoutItem) => {
    addToCart(
      {
        _id: item.id,
        product_name: item.name,
        product_description: item.category,
        product_category: item.category,
        product_image: item.imageUrl,
        product_price: item.price.toString(),
        product_stock: "10",
      },
      1
    );
    showToast(`Added ${item.name} to your shopping bag`);
  };

  const patronEmail = user?.user_email || "elena.vance@studio-arch.com";

  return (
    <div className="flex flex-col w-full bg-surface">
      {/* 1. Stepper Breadcrumbs */}
      <OrderConfirmationStepper />

      {/* 2. Hero Headline, Badge & Copy Order Reference */}
      <OrderConfirmationHero
        orderId={orderId}
        email={patronEmail}
        onCopied={() => showToast(`Order reference #${orderId} copied to clipboard`)}
      />

      {/* 3. Main 2-Column Editorial Grid (7 : 5) */}
      <section className="w-full pb-space-xl">
        <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-space-xl items-start">
            {/* Left Column (7 cols): Timeline, Consignment Destination & Settlement, Actions */}
            <div className="lg:col-span-7 space-y-space-lg">
              <DeliveryMilestonesCard />

              <DestinationBillingCard
                shippingAddress={state.shippingAddress}
                paymentMethodText={
                  state.paymentMethod === "card"
                    ? "Visa ending in 9284"
                    : state.paymentMethod === "vault"
                    ? "Atelier Vault Credit Account"
                    : "Apple / Google Pay Express"
                }
              />

              <ConfirmationActionButtons onTrackCourier={handleTrackCourier} />
            </div>

            {/* Right Column (5 cols): Order Manifest Summary & Provenance Trust */}
            <div className="lg:col-span-5 sticky top-28 space-y-space-md">
              <OrderManifestSummary
                items={confirmedItems}
                totalPrice={state.totalPrice}
                onContactConcierge={handleContactConcierge}
              />
            </div>
          </div>

          {/* 4. Curated Post-Checkout Additions */}
          <PostCheckoutRecommendations onAddToCart={handleAddRecommendation} />
        </div>
      </section>

      {/* Non-blocking feedback toast */}
      <ConfirmationToast
        message={toastMessage}
        onDismiss={() => setToastMessage(null)}
      />
    </div>
  );
};

export default OrderConfirmationPage;
