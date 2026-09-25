import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api/axios";
import { useAuthStore } from "../store/useAuthStore";
import { type AdminTab } from "../components/admin/layout/AdminSidebar";
import { AdminHeader, AdminSidebar, AdminInventoryHeader, AdminMetrics, AdminTabs, ProductTable, ProductDrawer, DeleteConfirmModal, OrderTable, OrderDetailsModal } from "../components/admin/index";

import type { Product, Order, ProductFormData, OrderStatus } from "../types";

export const AdminDashboardPage: React.FC = () => {
  const queryClient = useQueryClient();
  const user = useAuthStore((state) => state.user);

  // Active view: 'overview' | 'products' | 'orders' | 'customers' | 'forecasts'
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");

  // Drawer & Modal States
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showAlternateStates, setShowAlternateStates] = useState(false);

  // 1. Fetch Products
  const { data: productsData, isLoading: isLoadingProducts } = useQuery({
    queryKey: ["admin-products"],
    queryFn: async () => {
      const res = await api.get("/products");
      return res.data?.allProducts || [];
    },
  });
  const products: Product[] = productsData || [];

  // 2. Fetch Orders
  const { data: ordersData, isLoading: isLoadingOrders } = useQuery({
    queryKey: ["admin-orders"],
    queryFn: async () => {
      const res = await api.get("/orders/allorders");
      return res.data?.orders || [];
    },
  });
  const orders: Order[] = ordersData || [];

  // 3. Create Product Mutation
  const createProductMutation = useMutation({
    mutationFn: async (formData: ProductFormData) => {
      return await api.post("/products", formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      setIsDrawerOpen(false);
    },
  });

  // 4. Update Product Mutation
  const updateProductMutation = useMutation({
    mutationFn: async ({ id, data }: { id: string; data: ProductFormData }) => {
      return await api.put(`/product/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      setIsDrawerOpen(false);
      setProductToEdit(null);
    },
  });

  // 5. Delete Product Mutation
  const deleteProductMutation = useMutation({
    mutationFn: async (id: string) => {
      return await api.delete(`/product/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      setProductToDelete(null);
      setIsDrawerOpen(false);
    },
  });

  // 6. Update Order Status Mutation
  const updateOrderStatusMutation = useMutation({
    mutationFn: async ({ orderId, status }: { orderId: string; status: OrderStatus }) => {
      return await api.patch(`/orders/${orderId}/status`, { order_status: status });
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["admin-orders"] });
      if (selectedOrder && selectedOrder._id === variables.orderId) {
        setSelectedOrder((prev) => (prev ? { ...prev, order_status: variables.status } : null));
      }
    },
  });

  const handleSaveProduct = (formData: ProductFormData) => {
    if (productToEdit) {
      updateProductMutation.mutate({ id: productToEdit._id, data: formData });
    } else {
      createProductMutation.mutate(formData);
    }
  };

  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface min-h-screen">
      {/* 1. TOP BAR (84px Height) */}
      <AdminHeader user={user} />

      {/* 2. SIDEBAR COMMAND MODULES (w-64) */}
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 3. MAIN DASHBOARD CONTENT */}
      <div className="pl-64">
        <main className="w-full pt-[84px] min-h-screen bg-surface px-space-lg pb-margin">
          <div className="flex flex-col w-full pt-6">
            {/* Top Header & Metrics: Products Overview */}
            {(activeTab === "products" || activeTab === "overview") && (
              <>
                <AdminInventoryHeader
                  onAddProduct={() => {
                    setProductToEdit(null);
                    setIsDrawerOpen(true);
                  }}
                />
                <AdminMetrics products={products} orders={orders} />
              </>
            )}

            {/* Segmented Tab Navigation */}
            <AdminTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
              productCount={products.length}
              orderCount={orders.length}
              showAlternateStates={showAlternateStates}
              onToggleAlternateStates={() => setShowAlternateStates(!showAlternateStates)}
            />

            {/* Tab 1: Products Table */}
            {(activeTab === "products" || activeTab === "overview") && (
              <ProductTable
                products={products}
                isLoading={isLoadingProducts}
                showAlternateStates={showAlternateStates}
                onToggleAlternateStates={() => setShowAlternateStates(!showAlternateStates)}
                onAddProduct={() => {
                  setProductToEdit(null);
                  setIsDrawerOpen(true);
                }}
                onEditProduct={(p) => {
                  setProductToEdit(p);
                  setIsDrawerOpen(true);
                }}
                onDeleteProduct={(p) => setProductToDelete(p)}
              />
            )}

            {/* Tab 2: Orders Fulfillment */}
            {activeTab === "orders" && (
              <OrderTable
                orders={orders}
                isLoading={isLoadingOrders}
                onViewOrder={(order) => setSelectedOrder(order)}
                onUpdateStatus={(orderId, status) =>
                  updateOrderStatusMutation.mutate({ orderId, status })
                }
              />
            )}

            {/* Tab 3: Restock Forecasts */}
            {activeTab === "forecasts" && (
              <div className="p-12 rounded-xl bg-surface-card border border-border-card text-center space-y-4 shadow-[0px_8px_28px_0px_rgba(47,38,18,0.05)]">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-terracotta-accent mx-auto">
                  <span className="material-symbols-outlined text-2xl">query_stats</span>
                </div>
                <h3 className="font-title-card text-title-card font-semibold text-ink-charcoal">
                  Predictive Restock Engine Active
                </h3>
                <p className="font-body-sm text-body-sm text-mineral-gray max-w-md mx-auto">
                  Sales velocities from SoHo Flagship and Marais Atelier are being aggregated. Automated purchase orders will populate on your next weekly replenishment cycle.
                </p>
              </div>
            )}

            {/* Tab 4: Clients & Patrons */}
            {activeTab === "customers" && (
              <div className="p-12 rounded-xl bg-surface-card border border-border-card text-center space-y-4 shadow-[0px_8px_28px_0px_rgba(47,38,18,0.05)]">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-terracotta-accent mx-auto">
                  <span className="material-symbols-outlined text-2xl">group</span>
                </div>
                <h3 className="font-title-card text-title-card font-semibold text-ink-charcoal">
                  Client &amp; Patron Directory
                </h3>
                <p className="font-body-sm text-body-sm text-mineral-gray max-w-md mx-auto">
                  VIP Patrons, loyalty tiers, and customer service dossiers will be synchronized with retail atelier accounts.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Slide-Over Drawer for Adding/Editing Products */}
      <ProductDrawer
        isOpen={isDrawerOpen}
        productToEdit={productToEdit}
        isLoading={createProductMutation.isPending || updateProductMutation.isPending}
        onClose={() => {
          setIsDrawerOpen(false);
          setProductToEdit(null);
        }}
        onSubmit={handleSaveProduct}
        onDeleteRequest={(prod) => {
          setProductToDelete(prod);
        }}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={!!productToDelete}
        product={productToDelete}
        title={productToDelete ? `Delete "${productToDelete.product_name}"?` : "Delete Product"}
        message="Are you sure you want to permanently remove this product from the inventory catalog?"
        itemName={productToDelete?.product_name}
        isLoading={deleteProductMutation.isPending}
        onConfirm={() => {
          if (productToDelete) {
            deleteProductMutation.mutate(productToDelete._id);
          }
        }}
        onClose={() => setProductToDelete(null)}
      />

      {/* Order Details Flyout Modal */}
      <OrderDetailsModal
        order={selectedOrder}
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
        onStatusChange={(orderId: string, status: OrderStatus) =>
          updateOrderStatusMutation.mutate({ orderId, status })
        }
      />
    </div>
  );
};

export default AdminDashboardPage;