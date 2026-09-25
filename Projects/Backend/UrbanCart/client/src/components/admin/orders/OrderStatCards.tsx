// client/src/components/admin/orders/OrderStatCards.tsx
import React from "react";

interface OrderStatCardsProps {
  pendingCount: number;
  processingCount: number;
  shippedCount: number;
  deliveredTodayCount: number;
  settledTodayVolume: number;
  onSelectStatus: (status: string) => void;
}

const OrderStatCards: React.FC<OrderStatCardsProps> = ({
  pendingCount,
  processingCount,
  shippedCount,
  deliveredTodayCount,
  settledTodayVolume,
  onSelectStatus,
}) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
      {/* 1. Pending Dispatch */}
      <div
        onClick={() => onSelectStatus("Pending")}
        className="bg-surface-card rounded-xl p-space-md border border-border-card shadow-[0px_4px_16px_0px_rgba(47,38,18,0.04)] flex flex-col justify-between hover:border-terracotta-accent transition-all cursor-pointer group"
      >
        <div className="flex items-center justify-between">
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray font-semibold">
            Pending Dispatch
          </span>
          <span className="w-8 h-8 rounded-lg bg-status-peach-bg text-status-peach-text flex items-center justify-center">
            <span className="material-symbols-outlined text-lg">schedule</span>
          </span>
        </div>
        <div className="mt-4 flex flex-col">
          <span className="font-headline-md text-headline-md font-semibold text-ink-charcoal tracking-tight">
            {pendingCount} {pendingCount === 1 ? "order" : "orders"}
          </span>
          <span className="font-body-sm text-body-sm text-status-peach-text flex items-center gap-1.5 mt-1 font-medium">
            <span className="w-2 h-2 rounded-full bg-terracotta-flame animate-pulse" />
            {pendingCount === 0 ? "All clear · 0 backlog" : "Action required · Staging"}
          </span>
        </div>
      </div>

      {/* 2. Processing & Packed */}
      <div
        onClick={() => onSelectStatus("Processing")}
        className="bg-surface-card rounded-xl p-space-md border border-border-card shadow-[0px_4px_16px_0px_rgba(47,38,18,0.04)] flex flex-col justify-between hover:border-secondary transition-all cursor-pointer group"
      >
        <div className="flex items-center justify-between">
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray font-semibold">
            Processing &amp; Packed
          </span>
          <span className="w-8 h-8 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-lg">inventory_2</span>
          </span>
        </div>
        <div className="mt-4 flex flex-col">
          <span className="font-headline-md text-headline-md font-semibold text-ink-charcoal tracking-tight">
            {processingCount} {processingCount === 1 ? "order" : "orders"}
          </span>
          <span className="font-body-sm text-body-sm text-mineral-gray flex items-center gap-1.5 mt-1">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            {processingCount === 0 ? "Depot idle" : "Bay 4 Packaging Bench"}
          </span>
        </div>
      </div>

      {/* 3. In Transit */}
      <div
        onClick={() => onSelectStatus("Shipped")}
        className="bg-surface-card rounded-xl p-space-md border border-border-card shadow-[0px_4px_16px_0px_rgba(47,38,18,0.04)] flex flex-col justify-between hover:border-ink-charcoal transition-all cursor-pointer group"
      >
        <div className="flex items-center justify-between">
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray font-semibold">
            In Transit (Air/Ground)
          </span>
          <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-ink-charcoal">
            <span className="material-symbols-outlined text-lg">flight_takeoff</span>
          </span>
        </div>
        <div className="mt-4 flex flex-col">
          <span className="font-headline-md text-headline-md font-semibold text-ink-charcoal tracking-tight">
            {shippedCount} {shippedCount === 1 ? "parcel" : "parcels"}
          </span>
          <span className="font-body-sm text-body-sm text-mineral-gray flex items-center gap-1.5 mt-1">
            <span className="w-2 h-2 rounded-full bg-ink-charcoal" />
            {shippedCount === 0 ? "No parcels in flight" : "DHL Global Priority"}
          </span>
        </div>
      </div>

      {/* 4. Completed Today */}
      <div
        onClick={() => onSelectStatus("Delivered")}
        className="bg-surface-card rounded-xl p-space-md border border-border-card shadow-[0px_4px_16px_0px_rgba(47,38,18,0.04)] flex flex-col justify-between hover:border-[#2E7D32] transition-all cursor-pointer group"
      >
        <div className="flex items-center justify-between">
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray font-semibold">
            Delivered Today
          </span>
          <span className="w-8 h-8 rounded-lg bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center">
            <span className="material-symbols-outlined text-lg">verified</span>
          </span>
        </div>
        <div className="mt-4 flex flex-col">
          <span className="font-headline-md text-headline-md font-semibold text-ink-charcoal tracking-tight">
            {deliveredTodayCount} {deliveredTodayCount === 1 ? "delivery" : "deliveries"}
          </span>
          <span className="font-body-sm text-body-sm text-[#2E7D32] flex items-center gap-1.5 mt-1 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
            ${settledTodayVolume.toFixed(2)} settled
          </span>
        </div>
      </div>
    </section>
  );
};

export default OrderStatCards;
