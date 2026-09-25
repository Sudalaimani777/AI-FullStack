// client/src/components/admin/products/ProductTable.tsx
import React, { useState, useMemo } from "react";
import type { Product } from "../../../types";
import { ProductFilters, ProductRow, ProductEmptyState, RestockBentoGrid } from "../index";

interface ProductTableProps {
  products: Product[];
  isLoading: boolean;
  showAlternateStates?: boolean;
  onToggleAlternateStates?: () => void;
  onAddProduct: () => void;
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (product: Product) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({
  products,
  isLoading,
  showAlternateStates: _showAlternateStates = false,
  onAddProduct,
  onEditProduct,
  onDeleteProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStockStatus, setSelectedStockStatus] = useState("All");
  const [sortOption, setSortOption] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  // Real categories derived from DB products
  const categories = useMemo(() => {
    const fromProducts = Array.from(
      new Set(products.map((p) => p.product_category).filter(Boolean))
    );
    return ["All", ...fromProducts];
  }, [products]);

  // Real calculations from DB products
  const totalUnits = useMemo(() => {
    return products.reduce((acc, p) => acc + (Number(p.product_stock) || 0), 0);
  }, [products]);

  const totalValuation = useMemo(() => {
    return products.reduce(
      (acc, p) => acc + (Number(p.product_price) || 0) * (Number(p.product_stock) || 0),
      0
    );
  }, [products]);

  const lowStockProducts = useMemo(() => {
    return products.filter((p) => {
      const stock = Number(p.product_stock) || 0;
      return stock <= 5;
    });
  }, [products]);

  const estimatedRestockCost = useMemo(() => {
    return lowStockProducts.reduce((acc, p) => {
      const needed = Math.max(1, 10 - (Number(p.product_stock) || 0));
      return acc + (Number(p.product_price) || 0) * needed;
    }, 0);
  }, [lowStockProducts]);

  // Filtering & Sorting
  const filteredProducts = useMemo(() => {
    return products
      .filter((item) => {
        const matchesSearch =
          !searchTerm ||
          item.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.product_category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item._id.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
          selectedCategory === "All" ||
          selectedCategory === "All Categories" ||
          item.product_category.toLowerCase() === selectedCategory.toLowerCase();

        const stockNum = Number(item.product_stock) || 0;
        let matchesStock = true;
        if (selectedStockStatus === "In Stock") matchesStock = stockNum > 5;
        if (selectedStockStatus === "Low Stock") matchesStock = stockNum > 0 && stockNum <= 5;
        if (selectedStockStatus === "Out of Stock") matchesStock = stockNum <= 0;

        return matchesSearch && matchesCategory && matchesStock;
      })
      .sort((a, b) => {
        if (sortOption === "price-asc") return Number(a.product_price) - Number(b.product_price);
        if (sortOption === "price-desc") return Number(b.product_price) - Number(a.product_price);
        if (sortOption === "stock-asc") return Number(a.product_stock) - Number(b.product_stock);
        if (sortOption === "stock-desc") return Number(b.product_stock) - Number(a.product_stock);
        return 0;
      });
  }, [products, searchTerm, selectedCategory, selectedStockStatus, sortOption]);

  // Pagination Slice
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedStockStatus("All");
    setCurrentPage(1);
  };

  // Node distribution calculations
  const sohoUnits = Math.round(totalUnits * 0.62);
  const edisonUnits = Math.round(totalUnits * 0.29);
  const maraisUnits = Math.max(0, totalUnits - sohoUnits - edisonUnits);

  return (
    <div className="flex flex-col w-full gap-space-lg">
      {/* 1. Filters & Search Controls */}
      <ProductFilters
        searchTerm={searchTerm}
        onSearchChange={(val) => {
          setSearchTerm(val);
          setCurrentPage(1);
        }}
        selectedCategory={selectedCategory}
        onCategoryChange={(val) => {
          setSelectedCategory(val);
          setCurrentPage(1);
        }}
        categories={categories}
        selectedStockStatus={selectedStockStatus}
        onStockStatusChange={(val) => {
          setSelectedStockStatus(val);
          setCurrentPage(1);
        }}
        sortOption={sortOption}
        onSortOptionChange={setSortOption}
      />

      {/* 2. Products Table or Empty State */}
      {filteredProducts.length === 0 ? (
        <ProductEmptyState
          isSearching={!!searchTerm || selectedCategory !== "All" || selectedStockStatus !== "All"}
          onResetFilters={handleResetFilters}
          onAddProduct={onAddProduct}
        />
      ) : (
        <div className="bg-surface-card rounded-2xl border border-border-card shadow-[0px_8px_28px_0px_rgba(47,38,18,0.05)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border-card bg-surface-container-low text-mineral-gray font-label-micro text-label-micro uppercase tracking-wider">
                  <th className="py-3.5 pl-6 pr-4 font-semibold">Atelier Artifact</th>
                  <th className="py-3.5 px-4 font-semibold">Identifier</th>
                  <th className="py-3.5 px-4 font-semibold">Discipline</th>
                  <th className="py-3.5 px-4 font-semibold">Valuation</th>
                  <th className="py-3.5 px-4 font-semibold">Vault Units</th>
                  <th className="py-3.5 px-4 font-semibold">Syndication Status</th>
                  <th className="py-3.5 pl-4 pr-6 text-right font-semibold">Commands</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-card/60">
                {isLoading ? (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-mineral-gray">
                      Loading atelier catalog...
                    </td>
                  </tr>
                ) : (
                  paginatedProducts.map((product, idx) => (
                    <ProductRow
                      key={product._id}
                      product={product}
                      index={(currentPage - 1) * itemsPerPage + idx}
                      onEdit={onEditProduct}
                      onDelete={onDeleteProduct}
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
                  {Math.min(currentPage * itemsPerPage, filteredProducts.length)}
                </span>{" "}
                of <span className="font-semibold text-ink-charcoal">{filteredProducts.length}</span>{" "}
                catalog pieces
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

      {/* 3. Restock Velocity Mini-Dashboard Panel */}
      <RestockBentoGrid
        productsCount={products.length}
        totalUnits={totalUnits}
        totalValuation={totalValuation}
        sohoUnits={sohoUnits}
        edisonUnits={edisonUnits}
        maraisUnits={maraisUnits}
        lowStockCount={lowStockProducts.length}
        estimatedRestockCost={estimatedRestockCost}
      />
    </div>
  );
};

export default ProductTable;