// client/src/components/admin/AdminMetrics.tsx
import React from "react";
import type { Product, Order } from "../../types";
import { MetricCard } from "./index"

interface AdminMetricsProps {
  products: Product[];
  orders: Order[];
}

const AdminMetrics: React.FC<AdminMetricsProps> = ({ products, orders }) => {
  const totalProducts = products.length;
  const lowStockCount = products.filter((p) => {
    const stock = Number(p.product_stock) || 0;
    return stock > 0 && stock <= 5;
  }).length;

  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.order_status === "Pending").length;
  const deliveredOrders = orders.filter((o) => o.order_status === "Delivered").length;
  const uniqueCategories = new Set(
    products.map((p) => p.product_category).filter(Boolean)
  ).size;

  const fulfillmentRate =
    totalOrders > 0
      ? Math.round((deliveredOrders / totalOrders) * 100)
      : 100;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-lg mb-space-xl">
      {/* Card 1: Total Products */}
      <MetricCard
        label="Total Products"
        value={`${totalProducts} ${totalProducts === 1 ? "item" : "items"}`}
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" x2="12" y1="22.08" y2="12"></line>
          </svg>
        }
        bottomContent={
          totalProducts > 0 ? (
            <>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#EBF5EE] text-[#1B6336] font-label-micro text-label-micro font-semibold">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
                Active
              </span>
              <span className="font-body-sm text-body-sm text-muted-sand">
                across {uniqueCategories} {uniqueCategories === 1 ? "category" : "categories"}
              </span>
            </>
          ) : (
            <span className="font-body-sm text-body-sm text-muted-sand">No products registered in database</span>
          )
        }
      />

      {/* Card 2: Low Stock Alert */}
      <MetricCard
        label="Low Stock Alert"
        value={`${lowStockCount} ${lowStockCount === 1 ? "item" : "items"}`}
        highlightCorner={lowStockCount > 0}
        iconClass={lowStockCount > 0 ? "bg-status-peach-bg text-status-peach-text" : "bg-surface-container text-mineral-gray"}
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
            <line x1="12" x2="12" y1="9" y2="13"></line>
            <line x1="12" x2="12.01" y1="17" y2="17"></line>
          </svg>
        }
        bottomContent={
          lowStockCount > 0 ? (
            <div className="flex items-center justify-between w-full">
              <span className="font-body-sm text-body-sm text-mineral-gray">&lt; 5 units left</span>
              <span className="px-2 py-0.5 rounded-full bg-status-peach-bg text-status-peach-text font-label-micro text-label-micro font-semibold uppercase">
                Requires restock
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-between w-full">
              <span className="font-body-sm text-body-sm text-mineral-gray">All units sufficient</span>
              <span className="px-2 py-0.5 rounded-full bg-[#EBF5EE] text-[#1B6336] font-label-micro text-label-micro font-semibold uppercase">
                Optimal
              </span>
            </div>
          )
        }
      />

      {/* Card 3: Total Orders */}
      <MetricCard
        label="Total Orders"
        value={`${totalOrders} ${totalOrders === 1 ? "order" : "orders"}`}
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        }
        bottomContent={
          totalOrders > 0 ? (
            <>
              <svg className="w-3.5 h-3.5 text-mineral-gray" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="font-body-sm text-body-sm text-mineral-gray">{fulfillmentRate}% fulfillment rate</span>
            </>
          ) : (
            <span className="font-body-sm text-body-sm text-muted-sand">No customer orders received yet</span>
          )
        }
      />

      {/* Card 4: Pending Fulfillment */}
      <MetricCard
        label="Pending Fulfillment"
        value={`${pendingOrders} ${pendingOrders === 1 ? "order" : "orders"}`}
        icon={
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24">
            <rect height="13" width="15" x="1" y="3"></rect>
            <polygon points="16 8 20 8 23 11 23 16 16 16 8"></polygon>
            <circle cx="5.5" cy="18.5" r="2.5"></circle>
            <circle cx="18.5" cy="18.5" r="2.5"></circle>
          </svg>
        }
        bottomContent={
          pendingOrders > 0 ? (
            <>
              <span className="w-2 h-2 rounded-full bg-terracotta-accent animate-pulse"></span>
              <span className="font-body-sm text-body-sm text-ink-charcoal font-medium">
                {pendingOrders} awaiting courier dispatch
              </span>
            </>
          ) : (
            <span className="font-body-sm text-body-sm text-muted-sand">All orders dispatched &amp; up-to-date</span>
          )
        }
      />
    </section>
  );
};

export default AdminMetrics;