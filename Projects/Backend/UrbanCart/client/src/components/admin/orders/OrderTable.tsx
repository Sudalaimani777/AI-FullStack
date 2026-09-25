// client/src/components/admin/orders/OrderTable.tsx
import React, { useState, useMemo } from "react";
import type { Order, OrderStatus } from "../../../types";
import {OrderStatCards, OrderTableToolbar, OrderRow, OrderEmptyState} from "../index";

interface OrderTableProps {
  orders: Order[];
  isLoading: boolean;
  onViewOrder: (order: Order) => void;
  onUpdateStatus: (orderId: string, status: OrderStatus) => void;
}

const OrderTable: React.FC<OrderTableProps> = ({
  orders,
  isLoading,
  onViewOrder,
  onUpdateStatus,
}) => {
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedNode, setSelectedNode] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [previewEmpty, setPreviewEmpty] = useState<boolean>(false);
  const itemsPerPage = 7;

  // Real Metric Calculations directly from database orders
  const pendingOrders = useMemo(
    () => orders.filter((o) => o.order_status === "Pending"),
    [orders]
  );
  const processingOrders = useMemo(
    () => orders.filter((o) => o.order_status === "Processing"),
    [orders]
  );
  const shippedOrders = useMemo(
    () => orders.filter((o) => o.order_status === "Shipped"),
    [orders]
  );
  const deliveredTodayOrders = useMemo(
    () => orders.filter((o) => o.order_status === "Delivered"),
    [orders]
  );
  const settledTodayVolume = useMemo(() => {
    return deliveredTodayOrders.reduce((acc, o) => acc + (Number(o.total_price) || 0), 0);
  }, [deliveredTodayOrders]);

  // Filtered orders pipeline
  const filteredOrders = useMemo(() => {
    if (previewEmpty) return [];

    return orders.filter((order) => {
      // 1. Status Filter
      if (statusFilter !== "All" && order.order_status !== statusFilter) {
        return false;
      }

      // 2. Search Term Filter
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        const customerName =
          typeof order.user === "object" ? order.user?.user_name?.toLowerCase() || "" : "";
        const idMatches = order._id.toLowerCase().includes(term);
        const nameMatches = customerName.includes(term);
        const cityMatches =
          order.shipping_address?.city?.toLowerCase()?.includes(term) || false;
        const itemMatches =
          order.ordered_items?.some((i) => i.name.toLowerCase().includes(term)) || false;

        if (!idMatches && !nameMatches && !cityMatches && !itemMatches) {
          return false;
        }
      }

      // 3. Node Filter
      if (selectedNode !== "All") {
        const city = order.shipping_address?.city || "";
        if (selectedNode === "SoHo" && !city.includes("New York")) return false;
        if (selectedNode === "Marais" && !city.includes("Paris") && !city.includes("Copenhagen"))
          return false;
        if (selectedNode === "Edison" && city.includes("Paris")) return false;
      }

      return true;
    });
  }, [orders, statusFilter, searchTerm, selectedNode, previewEmpty]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage) || 1;
  const paginatedOrders = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredOrders.slice(start, start + itemsPerPage);
  }, [filteredOrders, currentPage, itemsPerPage]);

  const handleResetFilters = () => {
    setStatusFilter("All");
    setSearchTerm("");
    setSelectedNode("All");
    setPreviewEmpty(false);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col w-full gap-space-lg">
      {/* 1. Metric Stat Cards */}
      <OrderStatCards
        pendingCount={pendingOrders.length}
        processingCount={processingOrders.length}
        shippedCount={shippedOrders.length}
        deliveredTodayCount={deliveredTodayOrders.length}
        settledTodayVolume={settledTodayVolume}
        onSelectStatus={(status) => {
          setStatusFilter(status);
          setCurrentPage(1);
        }}
      />

      {/* 2. Controls Toolbar */}
      <OrderTableToolbar
        statusFilter={statusFilter}
        onStatusFilterChange={(status) => {
          setStatusFilter(status);
          setCurrentPage(1);
        }}
        searchTerm={searchTerm}
        onSearchChange={(term) => {
          setSearchTerm(term);
          setCurrentPage(1);
        }}
        selectedNode={selectedNode}
        onNodeChange={(node) => {
          setSelectedNode(node);
          setCurrentPage(1);
        }}
        totalOrdersCount={orders.length}
        pendingCount={pendingOrders.length}
        processingCount={processingOrders.length}
        shippedCount={shippedOrders.length}
        deliveredCount={deliveredTodayOrders.length}
        previewEmpty={previewEmpty}
        onTogglePreviewEmpty={() => setPreviewEmpty((prev) => !prev)}
      />

      {/* 3. Empty State or Table */}
      {filteredOrders.length === 0 ? (
        <OrderEmptyState onResetFilters={handleResetFilters} />
      ) : (
        <div className="bg-surface-card rounded-2xl border border-border-card shadow-[0px_8px_28px_0px_rgba(47,38,18,0.05)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-card bg-surface-container-low text-mineral-gray font-label-micro text-label-micro uppercase tracking-wider">
                  <th className="py-3.5 pl-6 pr-3 font-semibold">Order ID</th>
                  <th className="py-3.5 px-4 font-semibold">Recipient &amp; Destination</th>
                  <th className="py-3.5 px-4 font-semibold">Placed Date</th>
                  <th className="py-3.5 px-4 font-semibold">Consignment Lineage</th>
                  <th className="py-3.5 px-4 font-semibold">Settled Value</th>
                  <th className="py-3.5 px-4 font-semibold">Fulfillment Stage</th>
                  <th className="py-3.5 pl-4 pr-6 text-right font-semibold">Inspection Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-card/60">
                {isLoading ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-mineral-gray">
                      Loading fulfillment ledger records...
                    </td>
                  </tr>
                ) : (
                  paginatedOrders.map((order) => (
                    <OrderRow
                      key={order._id}
                      order={order}
                      onViewOrder={onViewOrder}
                      onUpdateStatus={onUpdateStatus}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Table Summary & Pagination Footer */}
          <div className="px-6 py-4 bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-border-card">
            <div className="flex items-center gap-space-md">
              <span className="font-body-sm text-body-sm text-mineral-gray">
                Showing{" "}
                <span className="font-semibold text-ink-charcoal">
                  {(currentPage - 1) * itemsPerPage + 1}–
                  {Math.min(currentPage * itemsPerPage, filteredOrders.length)}
                </span>{" "}
                of <span className="font-semibold text-ink-charcoal">{filteredOrders.length}</span>{" "}
                orders across nodes
              </span>
              <div className="h-4 w-px bg-surface-variant hidden sm:block" />
              <span className="font-label-micro text-label-micro text-muted-sand uppercase tracking-wider hidden sm:inline">
                SORT: RECENT FIRST
              </span>
            </div>

            {totalPages > 1 && (
              <div className="flex items-center gap-1">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="px-3 py-1.5 rounded-lg border border-border-card bg-surface-card hover:bg-surface-container text-ink-charcoal font-label-input text-label-input disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  type="button"
                >
                  Prev
                </button>
                <div className="px-3 font-label-input text-label-input text-ink-charcoal font-semibold">
                  Page {currentPage} of {totalPages}
                </div>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="px-3 py-1.5 rounded-lg border border-border-card bg-surface-card hover:bg-surface-container text-ink-charcoal font-label-input text-label-input disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  type="button"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTable;