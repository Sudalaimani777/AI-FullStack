// client/src/components/admin/orders/TrackingManifest.tsx
import React from "react";
import type { Order } from "../../../types";

interface TrackingManifestProps {
  order: Order;
  customerName: string;
  isCopied: boolean;
  onCopyTracking: () => void;
  onSwitchToAdmin: () => void;
}

const TrackingManifest: React.FC<TrackingManifestProps> = ({
  order,
  customerName,
  isCopied,
  onCopyTracking,
  onSwitchToAdmin,
}) => {
  const address = order.shipping_address;

  return (
    <div className="p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Package Contents */}
      <div className="flex flex-col gap-4">
        <span className="font-title-card text-title-card text-ink-charcoal font-semibold">
          Package Contents
        </span>
        <div className="space-y-3">
          {order.ordered_items && order.ordered_items.length > 0 ? (
            order.ordered_items.map((item, idx) => {
              const itemProduct =
                typeof item.product === "object" ? item.product : null;
              const itemImage =
                itemProduct?.product_image ||
                "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=80";

              return (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between border border-border-card/60"
                >
                  <div className="flex items-center gap-3">
                    <img
                      className="w-14 h-14 rounded-lg object-cover bg-surface border border-border-card"
                      alt={item.name}
                      src={itemImage}
                    />
                    <div className="flex flex-col">
                      <span className="font-body-md text-body-md font-medium text-ink-charcoal">
                        {item.name}
                      </span>
                      <span className="font-label-micro text-label-micro text-mineral-gray font-mono">
                        Qty: {item.quantity} · SKU: UC-{(itemProduct?.product_category || "OBJ")
                          .slice(0, 3)
                          .toUpperCase()}-{item._id?.slice(-4).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <span className="font-label-input text-label-input text-ink-charcoal font-semibold">
                    ${Number(item.price).toFixed(2)}
                  </span>
                </div>
              );
            })
          ) : (
            <div className="p-4 rounded-xl bg-surface-container-low text-mineral-gray font-body-sm">
              No items listed.
            </div>
          )}
        </div>
      </div>

      {/* Shipping Summary Card */}
      <div className="p-6 rounded-2xl bg-surface-tinted flex flex-col justify-between border border-border-card/60">
        <div className="flex flex-col gap-3">
          <span className="font-title-card text-title-card text-ink-charcoal font-semibold">
            Dispatch Origin &amp; Destination
          </span>
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-terracotta-accent mt-0.5">
              location_on
            </span>
            <div className="flex flex-col text-body-sm text-body-sm text-ink-charcoal">
              <strong className="font-semibold">{customerName}</strong>
              <span className="text-mineral-gray">
                {address?.address || "Kronprinsensgade 14, 2. sal"},{" "}
                {address?.city || "Copenhagen K"}, {address?.country || "Denmark"}
              </span>
            </div>
          </div>
          <p className="font-body-sm text-body-sm text-mineral-gray pt-2 leading-relaxed">
            Hand-packed with sustainable shredded kraft paper and unbleached cotton ribbon from our SoHo Flagship atelier.
          </p>
        </div>

        <div className="pt-6 flex items-center justify-between border-t border-border-card/60">
          <button
            type="button"
            onClick={onCopyTracking}
            className="font-label-input text-label-input text-terracotta-flame hover:underline flex items-center gap-1 font-semibold"
          >
            <span>{isCopied ? "Tracking Copied!" : "View Courier Tracking Link"}</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </button>
          <button
            type="button"
            onClick={onSwitchToAdmin}
            className="px-4 py-2 rounded-xl bg-ink-charcoal text-white font-label-input text-label-input hover:bg-primary transition-colors font-medium"
          >
            Back to Admin Dossier
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackingManifest;
