// client/src/pages/CartPage.tsx
import React, { useState, useEffect } from "react";
import { useCartStore } from "../store/useCartStore";
import type { Product } from "../types";
import {
  CartHeader,
  FreeShippingBanner,
  CartItemList,
  GiftPackagingAccordion,
  CartOrderSummary,
  CartEmptyState,
  CartToast,
  DEMO_CART_ITEMS,
} from "../components/cart";

export const CartPage: React.FC = () => {
  const {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  } = useCartStore();

  const [activeView, setActiveView] = useState<"active" | "empty">("active");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // If cart is empty on first load, seed with the Stitch demo items
  useEffect(() => {
    if (items.length === 0 && activeView === "active") {
      DEMO_CART_ITEMS.forEach((prod) => addToCart(prod, 1));
    }
  }, []);

  const totalItems = getTotalItems();
  const subtotal = getTotalPrice();

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleUpdateQty = (productId: string, change: number) => {
    const item = items.find((i) => i.product._id === productId);
    if (!item) return;

    const nextQty = item.quantity + change;
    if (nextQty <= 0) {
      removeFromCart(productId);
      showToast(`${item.product.product_name} removed from consignment`);
    } else {
      updateQuantity(productId, nextQty);
    }
  };

  const handleRemove = (productId: string) => {
    const item = items.find((i) => i.product._id === productId);
    removeFromCart(productId);
    if (item) {
      showToast(`${item.product.product_name} removed from consignment`);
    }
  };

  const handleClearBag = () => {
    clearCart();
    setActiveView("empty");
    showToast("Consignment manifest cleared");
  };

  const handleAddRecommended = (product: Product) => {
    addToCart(product, 1);
    setActiveView("active");
    showToast(`${product.product_name} added to your bag`);
  };

  const handleCheckout = () => {
    showToast("Dispatching to secure SSL atelier checkout...");
  };

  // Determine effective display state
  const isActuallyEmpty = items.length === 0;
  const showEmptyState = activeView === "empty" || isActuallyEmpty;

  return (
    <div className="flex flex-col w-full">
      <div className="w-full max-w-[1440px] mx-auto px-gutter py-space-lg md:py-space-xl">
        {/* Header Section with Manifest Eyebrow & Interactive State Switcher */}
        <CartHeader
          itemCount={totalItems}
          activeView={activeView}
          onSwitchView={setActiveView}
        />

        {/* View Switching */}
        {showEmptyState ? (
          <CartEmptyState onAddRecommended={handleAddRecommended} />
        ) : (
          <div className="space-y-space-lg">
            {/* Free Delivery Milestone Progress Banner */}
            <FreeShippingBanner subtotal={subtotal} threshold={250} />

            {/* Main Layout Grid (7:5 Split) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              {/* Left Column: Curated Items (7 Cols) */}
              <div className="lg:col-span-7 space-y-space-lg">
                <CartItemList
                  items={items}
                  onUpdateQty={handleUpdateQty}
                  onRemove={handleRemove}
                  onClearBag={handleClearBag}
                />

                {/* Expandable Gift Packaging Accordion */}
                <GiftPackagingAccordion />
              </div>

              {/* Right Column: Sticky Order Summary Card (5 Cols) */}
              <div className="lg:col-span-5 sticky top-28 space-y-space-md">
                <CartOrderSummary
                  subtotal={subtotal}
                  onCheckout={handleCheckout}
                  onApplyDiscount={() => showToast("Patron Courtesy discount applied")}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Non-blocking feedback toast */}
      <CartToast message={toastMessage} />
    </div>
  );
};

export default CartPage;