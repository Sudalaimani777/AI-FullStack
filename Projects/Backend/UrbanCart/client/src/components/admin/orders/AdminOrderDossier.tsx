// client/src/components/admin/orders/AdminOrderDossier.tsx
import React from "react";
import type { Order, OrderStatus } from "../../../types";
import {DossierWorkflowStrip, DossierConsignmentList, DossierQcChecklist, DossierCustomerCard, DossierFinancialLedger} from "../index";

interface AdminOrderDossierProps {
  order: Order;
  selectedStatus: OrderStatus;
  onStatusSelect: (status: OrderStatus) => void;
  onSaveStatus: () => void;
  onClose: () => void;
  totalItemUnits: number;
  itemsSubtotal: number;
  shippingCost: number;
  customsVat: number;
  courtesyDiscount: number;
  formattedDate: string;
  formattedTime: string;
  customerName: string;
  customerEmail: string;
  orderShortId: string;
  isCopied: boolean;
  onCopyTracking: () => void;
  onPrint: () => void;
}

const AdminOrderDossier: React.FC<AdminOrderDossierProps> = ({
  order,
  selectedStatus,
  onStatusSelect,
  onSaveStatus,
  onClose,
  totalItemUnits,
  itemsSubtotal,
  shippingCost,
  customsVat,
  courtesyDiscount,
  formattedDate,
  formattedTime,
  customerName,
  customerEmail,
  orderShortId,
  isCopied,
  onCopyTracking,
  onPrint,
}) => {
  return (
    <div className="flex flex-col w-full" id="adminViewContainer">
      {/* 1. Top Bar / Dossier Header */}
      <div className="p-6 md:p-8 bg-surface-bright flex flex-col gap-5 border-b border-border-card">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="font-label-eyebrow text-label-eyebrow uppercase text-terracotta-flame tracking-wider font-semibold">
                Order Fulfillment // Inspection Dossier
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-status-peach-text" />
              <span className="font-label-micro text-label-micro uppercase text-mineral-gray">
                Node 01 Verified
              </span>
            </div>
            <div className="flex flex-wrap items-baseline gap-3">
              <h2 className="font-headline-md text-headline-md text-ink-charcoal tracking-tight font-semibold">
                Order {orderShortId}
              </h2>
              <span className="font-body-sm text-body-sm text-mineral-gray">
                Placed {formattedDate} at {formattedTime} · via Stripe Express
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${
                order.order_status === "Pending"
                  ? "bg-status-peach-bg text-status-peach-text"
                  : order.order_status === "Processing"
                  ? "bg-secondary-container text-on-secondary-container"
                  : order.order_status === "Shipped"
                  ? "bg-surface-container-high text-on-surface"
                  : "bg-[#E8F5E9] text-[#2E7D32]"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  order.order_status === "Pending"
                    ? "bg-terracotta-flame animate-pulse"
                    : order.order_status === "Processing"
                    ? "bg-secondary"
                    : order.order_status === "Shipped"
                    ? "bg-terracotta-accent"
                    : "bg-[#2E7D32]"
                }`}
              />
              <span className="font-label-input text-label-input font-medium">
                {order.order_status === "Pending"
                  ? "Pending • Needs Packing"
                  : order.order_status === "Processing"
                  ? "Processing • Being Packed"
                  : order.order_status === "Shipped"
                  ? "Shipped • In Transit"
                  : "Delivered • Signed"}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-variant flex items-center justify-center text-ink-charcoal transition-colors"
              title="Close Inspection"
              type="button"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
        </div>

        {/* Quick Action Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrint}
              className="h-9 px-3.5 rounded-lg bg-surface-card hover:bg-surface-container-low text-ink-charcoal font-label-input text-label-input flex items-center gap-2 shadow-sm border border-border-card transition-all active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-base text-mineral-gray">print</span>
              <span>Print Packing Slip</span>
            </button>
            <button
              type="button"
              onClick={onPrint}
              className="h-9 px-3.5 rounded-lg bg-surface-card hover:bg-surface-container-low text-ink-charcoal font-label-input text-label-input flex items-center gap-2 shadow-sm border border-border-card transition-all active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-base text-mineral-gray">download</span>
              <span>Download Invoice (PDF)</span>
            </button>
            <button
              type="button"
              onClick={onCopyTracking}
              className="h-9 px-3.5 rounded-lg bg-surface-card hover:bg-surface-container-low text-ink-charcoal font-label-input text-label-input flex items-center gap-2 shadow-sm border border-border-card transition-all active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-base text-mineral-gray">mark_email_read</span>
              <span>{isCopied ? "Tracking Copied!" : "Resend Patron Receipt"}</span>
            </button>
          </div>
          <div className="flex items-center gap-2 text-mineral-gray font-label-micro text-label-micro uppercase">
            <span className="material-symbols-outlined text-sm">lock</span>
            <span>Encrypted 256-bit TLS Session</span>
          </div>
        </div>
      </div>

      {/* 2. Admin Workflow Controller Strip */}
      <DossierWorkflowStrip
        order={order}
        selectedStatus={selectedStatus}
        onStatusSelect={onStatusSelect}
        onSaveStatus={onSaveStatus}
      />

      {/* 3. Main Body: 60/40 Asymmetric Architectural Grid */}
      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column (60%): Consignment & Packing Notes */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <DossierConsignmentList order={order} totalItemUnits={totalItemUnits} />
          <DossierQcChecklist totalItemUnits={totalItemUnits} />
        </div>

        {/* Right Column (40%): Customer & Ledger */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <DossierCustomerCard
            customerName={customerName}
            customerEmail={customerEmail}
            address={order.shipping_address}
          />
          <DossierFinancialLedger
            order={order}
            totalItemUnits={totalItemUnits}
            itemsSubtotal={itemsSubtotal}
            shippingCost={shippingCost}
            customsVat={customsVat}
            courtesyDiscount={courtesyDiscount}
          />
        </div>
      </div>

      {/* 4. Footer Audit & Actions */}
      <div className="p-6 md:px-8 bg-surface-bright flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border-card">
        <div className="flex items-center gap-2 text-mineral-gray font-label-micro text-label-micro">
          <span className="material-symbols-outlined text-sm text-terracotta-accent">history</span>
          <span>
            Audit: Order created {formattedTime} · Payment captured · Inventory reserved in Node #01
          </span>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={onClose}
            className="h-12 px-6 rounded-xl bg-surface-card hover:bg-surface-container-high text-ink-charcoal font-label-input text-label-input border border-border-card transition-all active:scale-[0.98]"
          >
            Close Window
          </button>
          <button
            type="button"
            onClick={onSaveStatus}
            className="h-12 px-7 rounded-xl bg-ink-charcoal hover:bg-primary text-on-primary font-label-input text-label-input shadow-md transition-all active:translate-y-0.5 flex items-center gap-2 font-medium"
          >
            <span className="material-symbols-outlined text-base">save</span>
            <span>Save Status Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDossier;
