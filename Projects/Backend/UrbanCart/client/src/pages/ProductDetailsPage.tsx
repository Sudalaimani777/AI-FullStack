// client/src/pages/ProductDetailsPage.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../api/axios";
import type { Product } from "../types";
import { useCartStore } from "../store/useCartStore";
import { MobileProductDetailsView } from "../components/mobile-product-details";
import { DEFAULT_AKARI } from "../components/product-details/presets";

export const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCartStore();

  // Fetch product from backend if available
  const { data: dbProduct } = useQuery({
    queryKey: ["product-detail", id],
    queryFn: async () => {
      if (
        !id ||
        id === "sample" ||
        id === "akari-ovoid-washi" ||
        id === "ad20bcf24a7e4cc092d47d32c6daa164"
      ) {
        return null;
      }
      try {
        const res = await api.get(`/product/${id}`);
        return (res.data?.product || null) as Product | null;
      } catch {
        return null;
      }
    },
    enabled: Boolean(id),
  });

  const effectiveProduct: Product = dbProduct || DEFAULT_AKARI;

  const handleAddToCart = (product: Product, quantity: number) => {
    addToCart(product, quantity);
  };

  const handleDirectCheckout = (product: Product, quantity: number) => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  return (
    <MobileProductDetailsView
      product={effectiveProduct}
      onAddToCart={handleAddToCart}
      onDirectCheckout={handleDirectCheckout}
    />
  );
};

export default ProductDetailsPage;
