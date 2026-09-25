// client/src/components/admin/products/ProductFilters.tsx
import React from "react";

interface ProductFiltersProps {
  searchTerm: string;
  onSearchChange: (val: string) => void;
  selectedCategory: string;
  onCategoryChange: (val: string) => void;
  categories: string[];
  selectedStockStatus: string;
  onStockStatusChange: (val: string) => void;
  sortOption: string;
  onSortOptionChange: (val: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  selectedStockStatus,
  onStockStatusChange,
  sortOption,
  onSortOptionChange,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md bg-surface-card p-4 rounded-xl border border-border-card shadow-[0px_4px_16px_0px_rgba(47,38,18,0.04)]">
      {/* Search Input */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search pieces by title, SKU, or atelier tag..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full h-11 pl-11 pr-4 rounded-lg bg-surface-container-low border border-border-card text-ink-charcoal placeholder:text-mineral-gray font-body-sm text-body-sm focus:outline-none focus:border-terracotta-accent transition-colors"
        />
        <svg
          className="w-4 h-4 text-mineral-gray absolute left-4 top-3.5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>

      {/* Select Controls */}
      <div className="flex flex-wrap items-center gap-2.5">
        {/* Category Dropdown */}
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="appearance-none h-11 pl-3.5 pr-8 rounded-lg bg-surface-container-low border border-border-card text-ink-charcoal font-label-input text-label-input focus:outline-none cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                Category: {cat}
              </option>
            ))}
          </select>
          <span className="material-symbols-outlined text-sm absolute right-2.5 top-3.5 text-mineral-gray pointer-events-none">
            expand_more
          </span>
        </div>

        {/* Stock Status Dropdown */}
        <div className="relative">
          <select
            value={selectedStockStatus}
            onChange={(e) => onStockStatusChange(e.target.value)}
            className="appearance-none h-11 pl-3.5 pr-8 rounded-lg bg-surface-container-low border border-border-card text-ink-charcoal font-label-input text-label-input focus:outline-none cursor-pointer"
          >
            <option value="All">Stock: All Statuses</option>
            <option value="In Stock">In Stock (&gt; 5)</option>
            <option value="Low Stock">Low Stock (1–5)</option>
            <option value="Out of Stock">Depleted (0)</option>
          </select>
          <span className="material-symbols-outlined text-sm absolute right-2.5 top-3.5 text-mineral-gray pointer-events-none">
            expand_more
          </span>
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortOption}
            onChange={(e) => onSortOptionChange(e.target.value)}
            className="appearance-none h-11 pl-3.5 pr-8 rounded-lg bg-surface-container-low border border-border-card text-ink-charcoal font-label-input text-label-input focus:outline-none cursor-pointer"
          >
            <option value="recent">Sort: Catalog Order</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="stock-asc">Stock: Low to High</option>
            <option value="stock-desc">Stock: High to Low</option>
          </select>
          <span className="material-symbols-outlined text-sm absolute right-2.5 top-3.5 text-mineral-gray pointer-events-none">
            expand_more
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
