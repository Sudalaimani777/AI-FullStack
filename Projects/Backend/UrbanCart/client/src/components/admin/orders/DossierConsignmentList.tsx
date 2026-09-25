// client/src/components/admin/orders/DossierConsignmentList.tsx
import React from "react";
import type { Order } from "../../../types";

interface DossierConsignmentListProps {
  order: Order;
  totalItemUnits: number;
}

const DossierConsignmentList: React.FC<DossierConsignmentListProps> = ({
  order,
  totalItemUnits,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-title-card text-title-card text-ink-charcoal font-semibold">
            Itemized Consignment
          </span>
          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-mineral-gray font-label-micro text-label-micro font-semibold">
            {totalItemUnits} SKU Units
          </span>
        </div>
        <span className="font-label-micro text-label-micro uppercase text-mineral-gray font-mono">
          Standard Warehouse Bin A-14
        </span>
      </div>

      <div className="space-y-3">
        {order.ordered_items && order.ordered_items.length > 0 ? (
          order.ordered_items.map((item, idx) => {
            const itemProduct =
              typeof item.product === "object" ? item.product : null;
            const itemImage =
              itemProduct?.product_image ||
              "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=80";
            const itemCategory = itemProduct?.product_category || "Curated Homeware";
            const itemSku = `UC-${(itemProduct?.product_category || "OBJ")
              .slice(0, 3)
              .toUpperCase()}-${item._id?.slice(-4).toUpperCase() || (idx + 1).toString().padStart(4, "0")}`;

            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors flex items-center gap-4 border border-border-card/60"
              >
                <img
                  className="w-20 h-20 rounded-lg object-cover bg-surface flex-shrink-0 border border-border-card"
                  alt={item.name}
                  src={itemImage}
                />
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray font-semibold">
                    {itemCategory}
                  </span>
                  <h3 className="font-title-card text-title-card text-ink-charcoal truncate font-semibold">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-label-micro text-label-micro text-mineral-gray uppercase font-mono">
                      SKU: {itemSku}
                    </span>
                    <span className="text-mineral-gray">·</span>
                    <span className="font-label-micro text-label-micro text-status-peach-text bg-status-peach-bg px-2 py-0.5 rounded-full font-medium">
                      Fragile Atelier
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                  <span className="font-title-card text-title-card text-ink-charcoal font-semibold">
                    ${Number(item.price).toFixed(2)}
                  </span>
                  <span className="font-body-sm text-body-sm text-mineral-gray">
                    Qty: {item.quantity} (${Number(item.price).toFixed(2)}/ea)
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-6 rounded-xl bg-surface-container-low text-center text-mineral-gray">
            No consignment line items found in this order ledger.
          </div>
        )}
      </div>
    </div>
  );
};

export default DossierConsignmentList;
