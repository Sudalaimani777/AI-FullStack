// client/src/components/admin/orders/OrderRow.tsx
import React from "react";
import type { Order, OrderStatus } from "../../../types";

interface OrderRowProps {
  order: Order;
  onViewOrder: (order: Order) => void;
  onUpdateStatus: (orderId: string, nextStatus: OrderStatus) => void;
}

const OrderRow: React.FC<OrderRowProps> = ({
  order,
  onViewOrder,
  onUpdateStatus,
}) => {
  const customerName =
    typeof order.user === "object"
      ? order.user?.user_name || "Boutique Patron"
      : "Boutique Patron";
  const customerEmail =
    typeof order.user === "object"
      ? order.user?.user_email || "patron@urbancart.studio"
      : "patron@urbancart.studio";

  const orderDate = new Date(order.createdAt || Date.now());
  const dateStr = orderDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const timeStr = orderDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const city = order.shipping_address?.city || "New York";
  const country = order.shipping_address?.country || "US";
  const totalItems =
    order.ordered_items?.reduce((acc, i) => acc + (i.quantity || 1), 0) || 1;

  const isPending = order.order_status === "Pending";
  const isProcessing = order.order_status === "Processing";
  const isShipped = order.order_status === "Shipped";
  const isDelivered = order.order_status === "Delivered";

  const getNextStatus = (): OrderStatus => {
    if (order.order_status === "Pending") return "Processing";
    if (order.order_status === "Processing") return "Shipped";
    return "Delivered";
  };

  return (
    <tr
      onClick={() => onViewOrder(order)}
      className="hover:bg-surface-container-low/70 transition-colors group cursor-pointer border-b border-border-card/60"
    >
      {/* Order ID */}
      <td className="py-4 pl-6 pr-3 whitespace-nowrap">
        <div className="flex items-center gap-2">
          {isPending && (
            <span className="w-2 h-2 rounded-full bg-terracotta-flame animate-ping" />
          )}
          <span className="font-title-card text-title-card text-ink-charcoal tracking-tight font-semibold">
            #ORD-{order._id.slice(-4).toUpperCase()}
          </span>
        </div>
      </td>

      {/* Recipient & Node */}
      <td className="py-4 px-4">
        <div className="flex flex-col">
          <span className="font-body-md text-body-md font-semibold text-ink-charcoal">
            {customerName}
          </span>
          <span className="font-body-sm text-body-sm text-mineral-gray truncate max-w-[200px]">
            {customerEmail} · {city}, {country}
          </span>
        </div>
      </td>

      {/* Timestamp */}
      <td className="py-4 px-4 whitespace-nowrap">
        <div className="flex flex-col">
          <span className="font-body-sm text-body-sm text-ink-charcoal font-medium">
            {dateStr}
          </span>
          <span className="font-label-micro text-label-micro text-mineral-gray">
            {timeStr}
          </span>
        </div>
      </td>

      {/* Items Preview */}
      <td className="py-4 px-4">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2 overflow-hidden">
            {order.ordered_items?.slice(0, 3).map((item, idx) => (
              <div
                key={idx}
                className="inline-block h-8 w-8 rounded-lg object-cover ring-2 ring-surface-card bg-surface-container flex items-center justify-center overflow-hidden border border-border-card"
              >
                {typeof item.product === "object" && item.product?.product_image ? (
                  <img
                    src={item.product.product_image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-label-micro text-mineral-gray font-bold text-[9px]">
                    ITM
                  </span>
                )}
              </div>
            ))}
          </div>
          <span className="font-label-input text-label-input text-mineral-gray">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </span>
        </div>
      </td>

      {/* Total Settled */}
      <td className="py-4 px-4 whitespace-nowrap">
        <div className="flex flex-col">
          <span className="font-title-card text-title-card font-semibold text-ink-charcoal">
            ${Number(order.total_price).toFixed(2)}
          </span>
          <span className="font-label-micro text-label-micro text-mineral-gray flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
            Stripe • Paid
          </span>
        </div>
      </td>

      {/* Fulfillment Status */}
      <td className="py-4 px-4 whitespace-nowrap">
        {isPending ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-status-peach-bg text-status-peach-text font-label-micro text-label-micro font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-terracotta-flame" />
            Pending • Needs Packing
          </span>
        ) : isProcessing ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-micro text-label-micro font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Processing • Staged
          </span>
        ) : isShipped ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-micro text-label-micro font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-terracotta-accent" />
            Shipped • In Transit
          </span>
        ) : isDelivered ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] font-label-micro text-label-micro font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
            Delivered • Signed
          </span>
        ) : (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-mineral-gray font-label-micro text-label-micro font-semibold uppercase tracking-wider">
            {order.order_status}
          </span>
        )}
      </td>

      {/* Actions */}
      <td
        className="py-4 pl-4 pr-6 text-right whitespace-nowrap"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-end gap-1.5">
          {order.order_status !== "Delivered" && (
            <button
              onClick={() => onUpdateStatus(order._id, getNextStatus())}
              className="h-9 px-2.5 rounded-lg border border-border-card bg-surface hover:bg-surface-container-low text-ink-charcoal font-label-micro text-label-micro transition-colors flex items-center gap-1 font-medium"
              title="Advance status"
              type="button"
            >
              <span className="material-symbols-outlined text-sm text-terracotta-accent">
                fast_forward
              </span>
              <span>
                {order.order_status === "Pending"
                  ? "Pack"
                  : order.order_status === "Processing"
                  ? "Ship"
                  : "Deliver"}
              </span>
            </button>
          )}
          <button
            onClick={() => onViewOrder(order)}
            className="h-9 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-ink-charcoal font-label-input text-label-input transition-colors flex items-center gap-1.5 font-semibold"
            type="button"
          >
            <span className="material-symbols-outlined text-base">visibility</span>
            <span>Inspect</span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default OrderRow;
