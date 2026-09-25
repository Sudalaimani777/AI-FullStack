// client/src/components/admin/products/ProductDrawer.tsx
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DrawerHeader, DrawerFooter, ProductFormFields } from "../index";
import type { Product, ProductFormData } from "../../../types";

interface ProductDrawerProps {
  isOpen: boolean;
  productToEdit: Product | null;
  isLoading: boolean;
  onClose: () => void;
  onSubmit: (data: ProductFormData) => void;
  onDeleteRequest?: (product: Product) => void;
}

const CATEGORIES = [
  "Architectural Lighting",
  "Ceramics & Homeware",
  "Furniture & Seating",
  "Fine Textiles",
  "Audio & Tech",
  "Electronics",
  "Mobile",
  "Laptop",
  "Tablets",
];

const ProductDrawer: React.FC<ProductDrawerProps> = ({
  isOpen,
  productToEdit,
  isLoading,
  onClose,
  onSubmit,
  onDeleteRequest,
}) => {
  const [stockCount, setStockCount] = useState<number>(0);
  const [activeMode, setActiveMode] = useState<"edit" | "add">("edit");
  const [tags, setTags] = useState<string[]>(["Handcrafted", "Calibrated sRGB", "Artisanal"]);
  const [newTagInput, setNewTagInput] = useState<string>("");
  const [isAddingTag, setIsAddingTag] = useState<boolean>(false);
  const [isPublished, setIsPublished] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    defaultValues: {
      product_name: "",
      product_category: CATEGORIES[0],
      product_price: "",
      product_stock: "0",
      product_description: "",
      product_image: "",
    },
  });

  const selectedCategory = watch("product_category");

  // Sync mode and form values when drawer opens or productToEdit changes
  useEffect(() => {
    if (productToEdit) {
      setActiveMode("edit");
      const stock = Number(productToEdit.product_stock) || 0;
      setStockCount(stock);
      reset({
        product_name: productToEdit.product_name,
        product_category: productToEdit.product_category || CATEGORIES[0],
        product_price: productToEdit.product_price,
        product_stock: String(stock),
        product_description: productToEdit.product_description,
        product_image: productToEdit.product_image,
      });
    } else {
      setActiveMode("add");
      setStockCount(0);
      reset({
        product_name: "",
        product_category: CATEGORIES[0],
        product_price: "",
        product_stock: "0",
        product_description: "",
        product_image: "",
      });
    }
  }, [productToEdit, reset, isOpen]);

  if (!isOpen) return null;

  const handleStockAdjust = (delta: number) => {
    const nextVal = Math.max(0, stockCount + delta);
    setStockCount(nextVal);
    setValue("product_stock", String(nextVal));
  };

  const handleSwitchToAdd = () => {
    setActiveMode("add");
    setStockCount(0);
    reset({
      product_name: "",
      product_category: CATEGORIES[0],
      product_price: "",
      product_stock: "0",
      product_description: "",
      product_image: "",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-end overflow-hidden animate-in fade-in duration-200">
      {/* 1. Backdrop Scrim */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-ink-charcoal/40 backdrop-blur-[3px] transition-opacity duration-300"
      />

      {/* 2. Drawer Panel */}
      <aside
        className="relative w-full max-w-xl bg-surface-card shadow-2xl flex flex-col justify-between z-10 overflow-hidden border-l border-border-card"
        style={{ boxShadow: "-16px 0px 48px rgba(36, 35, 32, 0.16)" }}
      >
        {/* Drawer Header */}
        <DrawerHeader
          productToEdit={productToEdit}
          activeMode={activeMode}
          onClose={onClose}
          onSelectEdit={() => {
            if (productToEdit) setActiveMode("edit");
          }}
          onSelectAdd={handleSwitchToAdd}
        />

        {/* Drawer Body (Scrollable Form) */}
        <form
          id="product-drawer-form"
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 overflow-y-auto p-space-lg space-y-6"
        >
          <ProductFormFields
            register={register}
            control={control}
            errors={errors}
            setValue={setValue}
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            stockCount={stockCount}
            onStockAdjust={handleStockAdjust}
            tags={tags}
            onAddTag={(tag) => setTags([...tags, tag])}
            onRemoveTag={(idx) => setTags(tags.filter((_, i) => i !== idx))}
            isAddingTag={isAddingTag}
            setIsAddingTag={setIsAddingTag}
            newTagInput={newTagInput}
            setNewTagInput={setNewTagInput}
            isPublished={isPublished}
            setIsPublished={setIsPublished}
          />
        </form>

        {/* Drawer Footer Actions */}
        <DrawerFooter
          productToEdit={productToEdit}
          activeMode={activeMode}
          isLoading={isLoading}
          onClose={onClose}
          onDeleteRequest={onDeleteRequest}
        />
      </aside>
    </div>
  );
};

export default ProductDrawer;