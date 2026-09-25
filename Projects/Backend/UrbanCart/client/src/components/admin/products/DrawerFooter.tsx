// client/src/components/admin/products/DrawerFooter.tsx
import React from "react";
import type { Product } from "../../../types";

interface DrawerFooterProps {
  productToEdit: Product | null;
  activeMode: "edit" | "add";
  isLoading: boolean;
  onClose: () => void;
  onDeleteRequest?: (product: Product) => void;
}

const DrawerFooter: React.FC<DrawerFooterProps> = ({
  productToEdit,
  activeMode,
  isLoading,
  onClose,
  onDeleteRequest,
}) => {
  return (
    <div className="p-space-lg border-t border-border-card bg-surface-container-low flex items-center justify-between gap-3 sticky bottom-0 z-20">
      <div>
        {productToEdit && onDeleteRequest && (
          <button
            type="button"
            onClick={() => onDeleteRequest(productToEdit)}
            className="px-3.5 py-2.5 rounded-xl text-status-peach-text hover:bg-status-peach-bg font-label-input text-label-input font-medium transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-base">delete</span>
            <span>Purge Piece</span>
          </button>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onClose}
          disabled={isLoading}
          className="px-5 py-2.5 rounded-xl bg-surface-card hover:bg-surface-container text-ink-charcoal font-label-input text-label-input border border-border-card transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          form="product-drawer-form"
          disabled={isLoading}
          className="px-6 py-2.5 rounded-xl bg-ink-charcoal hover:bg-black text-on-primary font-label-input text-label-input font-semibold shadow-md transition-all active:scale-[0.98] disabled:opacity-50 flex items-center gap-2"
        >
          {isLoading && (
            <span className="material-symbols-outlined text-sm animate-spin">sync</span>
          )}
          <span>
            {activeMode === "edit" ? "Save Piece Record" : "Register Piece"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default DrawerFooter;
