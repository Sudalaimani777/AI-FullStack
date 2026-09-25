// client/src/components/admin/orders/OrderDetailsModal.tsx
import React, { useState, useEffect } from "react";
import type { Order, OrderStatus } from "../../../types";
import { AdminOrderDossier, PatronTrackingView } from "../index";

interface OrderDetailsModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
  onStatusChange: (orderId: string, newStatus: OrderStatus) => void;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({
  order,
  isOpen,
  onClose,
  onStatusChange,
}) => {
  const [modalView, setModalView] = useState<"admin" | "patron">("admin");
  const [selectedStatus, setSelectedStatus] = useState<OrderStatus>("Pending");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    if (order) {
      setSelectedStatus(order.order_status);
    }
  }, [order]);

  if (!isOpen || !order) return null;

  // Handle populated user vs raw user ID
  const customerName =
    typeof order.user === "object"
      ? order.user?.user_name || "Soren Lindqvist"
      : "Soren Lindqvist";
  const customerEmail =
    typeof order.user === "object"
      ? order.user?.user_email || "soren.l@studio-nord.dk"
      : "soren.l@studio-nord.dk";

  const orderShortId = `#ORD-${order._id.slice(-4).toUpperCase()}`;
  const orderDate = new Date(order.createdAt || Date.now());
  const formattedDate = orderDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = orderDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Calculate items and financials
  const totalItemUnits =
    order.ordered_items?.reduce((acc, itm) => acc + (itm.quantity || 1), 0) || 1;
  const itemsSubtotal =
    order.ordered_items?.reduce((sum, itm) => sum + itm.price * (itm.quantity || 1), 0) ||
    order.total_price;
  const shippingCost = 35.0;
  const customsVat = 42.5;
  const courtesyDiscount = Math.max(
    0,
    itemsSubtotal + shippingCost + customsVat - Number(order.total_price)
  );
  const trackingId = `DHL-${order._id.slice(-6).toUpperCase()}-PRIO`;

  // Milestone progression index (0: Placed, 1: Packing, 2: In Air Transit, 3: Delivered)
  const milestoneIndex =
    order.order_status === "Pending"
      ? 0
      : order.order_status === "Processing"
        ? 1
        : order.order_status === "Shipped"
          ? 2
          : 3;

  const handleSaveStatus = () => {
    onStatusChange(order._id, selectedStatus);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyTracking = () => {
    navigator.clipboard?.writeText(trackingId);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-start justify-center p-4 sm:p-6 md:p-10 pointer-events-auto">
      {/* 1. Interactive View Switcher Pill (Fixed Top Center) */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center bg-ink-charcoal/90 backdrop-blur-md p-1.5 rounded-full shadow-2xl transition-all border border-ink-charcoal/20">
        <button
          type="button"
          onClick={() => setModalView("admin")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-label-input text-label-input transition-all ${modalView === "admin"
              ? "bg-surface-card text-ink-charcoal shadow-sm font-semibold"
              : "text-canvas-secondary hover:text-white"
            }`}
        >
          <span className="material-symbols-outlined text-base text-terracotta-flame">tune</span>
          <span>Admin Inspection Dossier</span>
        </button>
        <button
          type="button"
          onClick={() => setModalView("patron")}
          className={`flex items-center gap-2 px-4 py-2 rounded-full font-label-input text-label-input transition-all ${modalView === "patron"
              ? "bg-surface-card text-ink-charcoal shadow-sm font-semibold"
              : "text-canvas-secondary hover:text-white"
            }`}
        >
          <span className="material-symbols-outlined text-base">local_shipping</span>
          <span>Patron Tracking View</span>
        </button>
      </div>

      {/* 2. Warm Frosted Scrim Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink-charcoal/35 backdrop-blur-[6px] z-30 transition-opacity"
      />

      {/* 3. Deep-Dive Inspection Modal Container */}
      <div className="relative z-40 w-full max-w-5xl bg-surface-card rounded-2xl shadow-[0px_20px_60px_0px_rgba(59,48,36,0.18)] flex flex-col overflow-hidden my-auto mt-20 md:mt-24 border border-border-card animate-in fade-in zoom-in-95 duration-200">
        {modalView === "admin" ? (
          <AdminOrderDossier
            order={order}
            selectedStatus={selectedStatus}
            onStatusSelect={setSelectedStatus}
            onSaveStatus={handleSaveStatus}
            onClose={onClose}
            totalItemUnits={totalItemUnits}
            itemsSubtotal={itemsSubtotal}
            shippingCost={shippingCost}
            customsVat={customsVat}
            courtesyDiscount={courtesyDiscount}
            formattedDate={formattedDate}
            formattedTime={formattedTime}
            customerName={customerName}
            customerEmail={customerEmail}
            orderShortId={orderShortId}
            isCopied={isCopied}
            onCopyTracking={handleCopyTracking}
            onPrint={handlePrint}
          />
        ) : (
          <PatronTrackingView
            order={order}
            customerName={customerName}
            trackingId={trackingId}
            formattedDate={formattedDate}
            formattedTime={formattedTime}
            milestoneIndex={milestoneIndex}
            isCopied={isCopied}
            onCopyTracking={handleCopyTracking}
            onClose={onClose}
            onSwitchToAdmin={() => setModalView("admin")}
          />
        )}
      </div>
    </div>
  );
};

export default OrderDetailsModal;