// client/src/components/admin/orders/TrackingTimeline.tsx
import React from "react";
import type { ShippingAddress } from "../../../types";

interface TrackingTimelineProps {
  milestoneIndex: number;
  formattedDate: string;
  formattedTime: string;
  address?: ShippingAddress;
}

const TrackingTimeline: React.FC<TrackingTimelineProps> = ({
  milestoneIndex,
  formattedDate,
  formattedTime,
  address,
}) => {
  return (
    <div className="mt-4 p-6 bg-surface-card rounded-2xl shadow-sm border border-border-card flex flex-col gap-6">
      <div className="relative flex items-center justify-between w-full">
        <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 bg-surface-container-high z-0" />
        <div
          className="absolute left-6 top-1/2 -translate-y-1/2 h-1 bg-terracotta-flame z-0 transition-all duration-500"
          style={{
            width:
              milestoneIndex === 0
                ? "10%"
                : milestoneIndex === 1
                ? "35%"
                : milestoneIndex === 2
                ? "68%"
                : "calc(100% - 48px)",
          }}
        />

        {/* Step 1: Placed */}
        <div className="relative z-10 flex flex-col items-center gap-2 bg-surface-card px-2">
          <div className="w-10 h-10 rounded-full bg-ink-charcoal text-white flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-lg">check</span>
          </div>
          <span className="font-label-input text-label-input text-ink-charcoal font-semibold">
            Order Placed
          </span>
          <span className="font-label-micro text-label-micro text-mineral-gray">
            {formattedDate}, {formattedTime}
          </span>
        </div>

        {/* Step 2: Preparing */}
        <div
          className={`relative z-10 flex flex-col items-center gap-2 bg-surface-card px-2 ${
            milestoneIndex < 1 ? "opacity-50" : ""
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
              milestoneIndex > 1
                ? "bg-ink-charcoal text-white"
                : "bg-terracotta-flame text-white ring-4 ring-status-peach-bg"
            }`}
          >
            <span
              className={`material-symbols-outlined text-lg ${
                milestoneIndex === 1 ? "animate-spin" : ""
              }`}
            >
              {milestoneIndex > 1 ? "check" : "cyclone"}
            </span>
          </div>
          <span className="font-label-input text-label-input text-terracotta-flame font-semibold">
            Atelier Packing
          </span>
          <span className="font-label-micro text-label-micro text-status-peach-text font-semibold">
            {milestoneIndex > 1 ? "Completed" : "In Progress"}
          </span>
        </div>

        {/* Step 3: Courier Handover */}
        <div
          className={`relative z-10 flex flex-col items-center gap-2 bg-surface-card px-2 ${
            milestoneIndex < 2 ? "opacity-60" : ""
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md ${
              milestoneIndex >= 2
                ? milestoneIndex > 2
                  ? "bg-ink-charcoal text-white"
                  : "bg-terracotta-flame text-white ring-4 ring-status-peach-bg"
                : "bg-surface-container text-mineral-gray"
            }`}
          >
            <span className="material-symbols-outlined text-lg">
              {milestoneIndex > 2 ? "check" : "flight_takeoff"}
            </span>
          </div>
          <span className="font-label-input text-label-input text-ink-charcoal font-semibold">
            In Air Transit
          </span>
          <span className="font-label-micro text-label-micro text-mineral-gray">
            {milestoneIndex >= 2 ? "Dispatched" : "Pending Air"}
          </span>
        </div>

        {/* Step 4: Final Delivery */}
        <div
          className={`relative z-10 flex flex-col items-center gap-2 bg-surface-card px-2 ${
            milestoneIndex < 3 ? "opacity-60" : ""
          }`}
        >
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md ${
              milestoneIndex === 3
                ? "bg-[#2E7D32] text-white ring-4 ring-[#E8F5E9]"
                : "bg-surface-container text-mineral-gray"
            }`}
          >
            <span className="material-symbols-outlined text-lg">home</span>
          </div>
          <span className="font-label-input text-label-input text-ink-charcoal font-semibold">
            Delivered
          </span>
          <span className="font-label-micro text-label-micro text-mineral-gray">
            {address?.city || "Copenhagen K"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrackingTimeline;
