// client/src/components/admin/orders/PatronTrackingView.tsx
import React from "react";
import type { Order } from "../../../types";
import { TrackingTimeline, TrackingManifest } from "../index";

interface PatronTrackingViewProps {
  order: Order;
  customerName: string;
  trackingId: string;
  formattedDate: string;
  formattedTime: string;
  milestoneIndex: number;
  isCopied: boolean;
  onCopyTracking: () => void;
  onClose: () => void;
  onSwitchToAdmin: () => void;
}

const PatronTrackingView: React.FC<PatronTrackingViewProps> = ({
  order,
  customerName,
  trackingId,
  formattedDate,
  formattedTime,
  milestoneIndex,
  isCopied,
  onCopyTracking,
  onClose,
  onSwitchToAdmin,
}) => {
  const address = order.shipping_address;

  return (
    <div className="flex flex-col w-full" id="patronViewContainer">
      {/* 1. Patron Header */}
      <div className="p-8 md:p-10 bg-surface-bright flex flex-col gap-6 border-b border-border-card">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-label-eyebrow text-label-eyebrow uppercase text-terracotta-flame tracking-wider font-semibold">
              Patron Delivery Timeline
            </span>
            <span className="h-3 w-px bg-border-subtle" />
            <span className="font-label-micro text-label-micro text-mineral-gray font-mono">
              DHL Tracking #{trackingId}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-variant flex items-center justify-center text-ink-charcoal transition-colors"
            type="button"
            title="Close Window"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="font-headline-md text-headline-md text-ink-charcoal font-semibold">
              {order.order_status === "Pending"
                ? "Your atelier consignment has been placed."
                : order.order_status === "Processing"
                  ? "Your atelier consignment is being prepared."
                  : order.order_status === "Shipped"
                    ? "Your atelier consignment is en route with air transit."
                    : "Your atelier consignment has been delivered."}
            </h2>
            <p className="font-body-md text-body-md text-mineral-gray">
              Estimated arrival in {address?.city || "Copenhagen K"}:{" "}
              <strong className="font-semibold text-ink-charcoal">
                Monday, October 28 by 18:00
              </strong>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onCopyTracking}
              className="h-10 px-4 rounded-xl bg-surface-card hover:bg-surface-container font-label-input text-label-input text-ink-charcoal shadow-sm border border-border-card flex items-center gap-2 font-medium"
            >
              <span className="material-symbols-outlined text-base">notifications_active</span>
              <span>{isCopied ? "Tracking Copied!" : "Subscribe to SMS Updates"}</span>
            </button>
          </div>
        </div>

        {/* 2. Visual Step-by-Step Timeline Indicator */}
        <TrackingTimeline
          milestoneIndex={milestoneIndex}
          formattedDate={formattedDate}
          formattedTime={formattedTime}
          address={address}
        />
      </div>

      {/* 3. Patron Content Grid */}
      <TrackingManifest
        order={order}
        customerName={customerName}
        isCopied={isCopied}
        onCopyTracking={onCopyTracking}
        onSwitchToAdmin={onSwitchToAdmin}
      />
    </div>
  );
};

export default PatronTrackingView;
