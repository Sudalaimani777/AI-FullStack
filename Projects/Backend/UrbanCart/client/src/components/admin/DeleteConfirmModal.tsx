// client/src/components/admin/DeleteConfirmModal.tsx
import React, { useState, useEffect } from "react";
import type { Product } from "../../types";
import { ConsequenceLedger } from "./index";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  product?: Product | null;
  itemName?: string;
  title?: string;
  message?: string;
  isLoading?: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isOpen,
  product,
  itemName,
  title,
  isLoading = false,
  onConfirm,
  onClose,
}) => {
  const [isAcknowledged, setIsAcknowledged] = useState(false);

  // Reset acknowledgment checkbox when modal opens or closes
  useEffect(() => {
    if (!isOpen) {
      setIsAcknowledged(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const targetName = product?.product_name || itemName || "Selected Product";
  const targetSku = product
    ? `UC-${(product.product_category || "SKU").slice(0, 3).toUpperCase()}-${product._id.slice(-4).toUpperCase()}`
    : "UC-GEN-0001";
  const targetCategory = product?.product_category || "Curated Homeware";
  const targetStock = product?.product_stock || "0";
  const targetPrice = product?.product_price
    ? `$${Number(product.product_price).toFixed(2)} ea`
    : "$0.00 ea";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink-charcoal/45 backdrop-blur-[7px] transition-opacity duration-300 animate-in fade-in"
      id="modal-scrim"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[540px] bg-surface-card rounded-[16px] shadow-2xl p-6 sm:p-8 flex flex-col gap-6 relative transform transition-all duration-300 translate-y-0 opacity-100 border border-border-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-status-peach-bg flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-status-peach-text" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-label-eyebrow text-label-eyebrow uppercase text-terracotta-flame tracking-widest font-semibold">
                Catalog Integrity // Irreversible Action
              </span>
              <span className="font-label-micro text-label-micro text-mineral-gray tracking-wider uppercase mt-0.5">
                Admin Level 4 Protocol Override
              </span>
            </div>
          </div>

          <button
            aria-label="Dismiss Modal"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-surface-container-low hover:bg-surface-container text-mineral-gray hover:text-ink-charcoal transition-colors"
            type="button"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Modal Title & Description */}
        <div className="flex flex-col gap-2">
          <h3 className="font-headline-sm text-headline-sm text-ink-charcoal font-semibold leading-snug">
            {title || `Delete "${targetName}"?`}
          </h3>
          <p className="font-body-md text-body-md text-mineral-gray">
            Are you sure you want to delete{" "}
            <span className="font-semibold text-ink-charcoal">&ldquo;{targetName}&rdquo;</span>? This action cannot be undone.
          </p>
        </div>

        {/* Target Details Strip & Consequence Ledger */}
        <ConsequenceLedger
          targetSku={targetSku}
          targetCategory={targetCategory}
          targetStock={targetStock}
          targetPrice={targetPrice}
        />

        {/* Permanent Action Acknowledgment Checkbox */}
        <label className="flex items-start gap-3 cursor-pointer select-none py-1">
          <input
            checked={isAcknowledged}
            onChange={(e) => setIsAcknowledged(e.target.checked)}
            className="mt-1 w-4 h-4 rounded text-status-peach-text accent-status-peach-text cursor-pointer focus:ring-0"
            type="checkbox"
          />
          <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            I acknowledge that this action is permanent and understand this piece cannot be retrieved once purged from the catalog.
          </span>
        </label>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="h-12 px-6 rounded-xl bg-surface-card hover:bg-surface-container text-ink-charcoal font-label-input text-label-input shadow-sm border border-border-card transition-all duration-150"
            type="button"
          >
            Cancel &amp; Retain
          </button>
          <button
            onClick={onConfirm}
            disabled={!isAcknowledged || isLoading}
            className="h-12 px-6 rounded-xl bg-status-peach-text hover:bg-[#A8321B] disabled:opacity-40 disabled:hover:bg-status-peach-text text-white font-label-input text-label-input flex items-center justify-center gap-2 shadow-sm transition-all duration-150 cursor-pointer disabled:cursor-not-allowed font-semibold"
            type="button"
          >
            <svg
              className={`w-4 h-4 text-white ${isLoading ? "animate-spin" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isLoading ? (
                <path d="M4 12a8 8 0 018-8v8H4z" fill="currentColor" stroke="none" />
              ) : (
                <path
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
            <span>{isLoading ? "Purging Registry..." : "Purge Product Listing"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;