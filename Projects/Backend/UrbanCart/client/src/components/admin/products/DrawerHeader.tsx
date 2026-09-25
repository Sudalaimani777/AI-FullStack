// client/src/components/admin/products/DrawerHeader.tsx
import React from "react";
import type { Product } from "../../../types";

interface DrawerHeaderProps {
  productToEdit: Product | null;
  activeMode: "edit" | "add";
  onClose: () => void;
  onSelectEdit: () => void;
  onSelectAdd: () => void;
}

const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  productToEdit,
  activeMode,
  onClose,
  onSelectEdit,
  onSelectAdd,
}) => {
  return (
    <div className="p-space-lg border-b border-surface-container-high bg-surface-container-low flex flex-col gap-4 sticky top-0 z-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-terracotta-flame tracking-wider font-semibold">
            Vault Curator Engine
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-status-peach-text" />
          <span className="font-label-micro text-label-micro uppercase text-mineral-gray">
            Node #01
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-surface-card hover:bg-surface-container text-mineral-gray hover:text-ink-charcoal flex items-center justify-center transition-colors"
          type="button"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onSelectEdit}
            className={`px-3.5 py-1.5 rounded-full font-label-input text-label-input transition-all ${
              activeMode === "edit"
                ? "bg-primary-container text-on-primary font-semibold shadow-sm"
                : "text-mineral-gray hover:text-ink-charcoal"
            }`}
          >
            Edit Piece Dossier
          </button>
          <button
            type="button"
            onClick={onSelectAdd}
            className={`px-3.5 py-1.5 rounded-full font-label-input text-label-input transition-all ${
              activeMode === "add"
                ? "bg-primary-container text-on-primary font-semibold shadow-sm"
                : "text-mineral-gray hover:text-ink-charcoal"
            }`}
          >
            Draft New SKU
          </button>
        </div>
        {productToEdit && (
          <span className="font-label-micro text-label-micro font-mono text-mineral-gray">
            ID: #{productToEdit._id.slice(-4).toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
};

export default DrawerHeader;
