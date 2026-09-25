// client/src/components/admin/orders/DossierWorkflowStrip.tsx
import React from "react";
import type { Order, OrderStatus } from "../../../types";

interface DossierWorkflowStripProps {
  order: Order;
  selectedStatus: OrderStatus;
  onStatusSelect: (status: OrderStatus) => void;
  onSaveStatus: () => void;
}

const DossierWorkflowStrip: React.FC<DossierWorkflowStripProps> = ({
  order,
  selectedStatus,
  onStatusSelect,
  onSaveStatus,
}) => {
  return (
    <div className="bg-surface-tinted p-5 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-card">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray font-semibold">
            Fulfillment Status Workflow
          </span>
          <span className="px-2 py-0.5 rounded-full bg-canvas-secondary font-label-micro text-label-micro text-ink-charcoal font-semibold">
            SoHo Flagship Atelier (Node #01)
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-ink-charcoal">
          Assigned Courier: <strong className="font-semibold">DHL Express Global Priority</strong> · Next pickup cut-off: 17:30 EDT
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative inline-block">
          <select
            value={selectedStatus}
            onChange={(e) => onStatusSelect(e.target.value as OrderStatus)}
            className="appearance-none h-11 pl-4 pr-10 rounded-xl bg-surface-card text-ink-charcoal font-label-input text-label-input shadow-sm border border-border-card cursor-pointer hover:bg-surface-container-low focus:outline-none"
          >
            <option value="Pending">Pending (Needs Packing)</option>
            <option value="Processing">Processing (Being Packed)</option>
            <option value="Shipped">Shipped (In Transit)</option>
            <option value="Delivered">Delivered (Completed)</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-3 text-mineral-gray pointer-events-none text-base">
            expand_more
          </span>
        </div>

        <button
          type="button"
          onClick={onSaveStatus}
          className="h-11 px-5 rounded-xl bg-terracotta-accent hover:bg-terracotta-flame text-on-tertiary font-label-input text-label-input shadow-sm transition-all active:translate-y-0.5 flex items-center gap-2 whitespace-nowrap font-medium"
        >
          <span className="material-symbols-outlined text-base">qr_code_scanner</span>
          <span>
            {order.order_status === "Pending"
              ? "Mark Packed & Generate AWB"
              : order.order_status === "Processing"
              ? "Dispatch with DHL Flight"
              : order.order_status === "Shipped"
              ? "Confirm Handover & Deliver"
              : "Regenerate Manifest AWB"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default DossierWorkflowStrip;
