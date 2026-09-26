// client/src/pages/HomePage.tsx
import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";
import type { Product } from "../types";
import { useCartStore } from "../store/useCartStore";
import {
  MobileStorefrontView,
  STITCH_MOBILE_PRODUCTS,
} from "../components/mobile-storefront";

export const HomePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCartStore();

  const activeCategory = searchParams.get("category") || "All";
  const activeSearch = searchParams.get("search") || "";
  const [sortBy, setSortBy] = useState<string>("featured");

  // Fetch real database products with TanStack Query
  const { data: productsData, isLoading } = useQuery({
    queryKey: ["storefront-products", activeCategory, activeSearch],
    queryFn: async () => {
      try {
        const params: Record<string, string> = {};
        if (activeCategory && activeCategory !== "All") {
          params.category = activeCategory;
        }
        if (activeSearch) {
          params.search = activeSearch;
        }
        const res = await api.get("/products", { params });
        const fetched = res.data?.allProducts;
        if (Array.isArray(fetched) && fetched.length > 0) {
          return fetched as Product[];
        }
      } catch {
        // Fallback gracefully to Stitch mock products
      }
      return STITCH_MOBILE_PRODUCTS;
    },
    initialData: STITCH_MOBILE_PRODUCTS,
  });

  const rawProducts =
    productsData && productsData.length > 0 ? productsData : STITCH_MOBILE_PRODUCTS;

  // Filter and Sort in memory
  const processedProducts = useMemo(() => {
    let list = [...rawProducts];

    // Filter by Category
    if (activeCategory && activeCategory !== "All") {
      const filtered = list.filter((p) =>
        p.product_category?.toLowerCase().includes(activeCategory.toLowerCase())
      );
      if (filtered.length > 0) {
        list = filtered;
      } else {
        list = STITCH_MOBILE_PRODUCTS.filter((p) =>
          p.product_category?.toLowerCase().includes(activeCategory.toLowerCase())
        );
      }
    }

    // Filter by Search
    if (activeSearch) {
      const q = activeSearch.toLowerCase();
      list = list.filter(
        (p) =>
          p.product_name.toLowerCase().includes(q) ||
          p.product_description.toLowerCase().includes(q) ||
          p.product_category.toLowerCase().includes(q)
      );
    }

    // Client-side sort
    if (sortBy === "price-low") {
      list.sort((a, b) => Number(a.product_price) - Number(b.product_price));
    } else if (sortBy === "price-high") {
      list.sort((a, b) => Number(b.product_price) - Number(a.product_price));
    } else if (sortBy === "newest") {
      list.sort((a, b) => (b._id > a._id ? 1 : -1));
    }

    return list;
  }, [rawProducts, activeCategory, activeSearch, sortBy]);

  const handleCategorySelect = (categoryValue: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (categoryValue === "All") {
      newParams.delete("category");
    } else {
      newParams.set("category", categoryValue);
    }
    setSearchParams(newParams);
  };

  const handleSearchChange = (query: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (query.trim()) {
      newParams.set("search", query.trim());
    } else {
      newParams.delete("search");
    }
    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setSearchParams({});
    setSortBy("featured");
  };

  return (
    <MobileStorefrontView
      products={processedProducts}
      totalProductsCount={48}
      isLoading={isLoading}
      activeCategory={activeCategory}
      onSelectCategory={handleCategorySelect}
      searchQuery={activeSearch}
      onSearchChange={handleSearchChange}
      sortBy={sortBy}
      onSortChange={setSortBy}
      onAddToCart={(p) => addToCart(p, 1)}
      onResetFilters={handleResetFilters}
    />
  );
};

export default HomePage;