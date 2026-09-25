import React from "react";
import {
  Controller,
  type Control,
  type FieldErrors,
  type UseFormRegister,
  type UseFormSetValue,
} from "react-hook-form";
import { ImageDropzone, ProductPricingStockFields, ProductTagsSection } from "../index";
import type { ProductFormData } from "../../../types";

interface ProductFormFieldsProps {
  register: UseFormRegister<ProductFormData>;
  control: Control<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
  setValue: UseFormSetValue<ProductFormData>;
  categories: string[];
  selectedCategory: string;
  stockCount: number;
  onStockAdjust: (delta: number) => void;
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (idx: number) => void;
  isAddingTag: boolean;
  setIsAddingTag: (val: boolean) => void;
  newTagInput: string;
  setNewTagInput: (val: string) => void;
  isPublished: boolean;
  setIsPublished: (val: boolean) => void;
}

const ProductFormFields: React.FC<ProductFormFieldsProps> = ({
  register,
  control,
  errors,
  setValue,
  categories,
  selectedCategory,
  stockCount,
  onStockAdjust,
  tags,
  onAddTag,
  onRemoveTag,
  isAddingTag,
  setIsAddingTag,
  newTagInput,
  setNewTagInput,
  isPublished,
  setIsPublished,
}) => {
  return (
    <div className="space-y-6">
      {/* 1. Title / Name */}
      <div className="space-y-2">
        <label className="font-label-input text-label-input text-ink-charcoal font-semibold flex items-center justify-between">
          <span>Piece Designation / Title *</span>
          <span className="font-label-micro text-label-micro uppercase text-mineral-gray">
            Primary SKU Display
          </span>
        </label>
        <input
          {...register("product_name", { required: "Piece designation is required" })}
          placeholder="e.g. Akari Ovoid Washi Pendant"
          className="w-full h-12 px-4 rounded-xl bg-surface-container-low border border-border-card text-ink-charcoal font-body-sm text-body-sm placeholder:text-mineral-gray focus:outline-none focus:border-terracotta-accent transition-colors"
        />
        {errors.product_name && (
          <p className="font-label-micro text-label-micro text-status-peach-text">
            {errors.product_name.message}
          </p>
        )}
      </div>

      {/* 2. Discipline / Category Pills */}
      <div className="space-y-2">
        <label className="font-label-input text-label-input text-ink-charcoal font-semibold block">
          Discipline &amp; Curation Category *
        </label>
        <div className="flex flex-wrap gap-2 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setValue("product_category", cat)}
              className={`px-3 py-1.5 rounded-full font-label-input text-label-input transition-all ${selectedCategory === cat
                  ? "bg-primary-container text-on-primary font-semibold shadow-sm"
                  : "bg-surface-container-low text-mineral-gray hover:text-ink-charcoal hover:bg-surface-container border border-border-card"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Valuation & Stock Allocation Grid */}
      <ProductPricingStockFields
        register={register}
        errors={errors}
        stockCount={stockCount}
        onStockAdjust={onStockAdjust}
      />

      {/* 4. Atelier Narrative / Description */}
      <div className="space-y-2">
        <label className="font-label-input text-label-input text-ink-charcoal font-semibold flex items-center justify-between">
          <span>Atelier Narrative &amp; Materiality *</span>
          <span className="font-label-micro text-label-micro text-mineral-gray uppercase">
            Curator Notes
          </span>
        </label>
        <textarea
          rows={3}
          {...register("product_description", { required: "Description is required" })}
          placeholder="Describe provenance, tactile finishes, and architectural context..."
          className="w-full p-3.5 rounded-xl bg-surface-container-low border border-border-card text-ink-charcoal font-body-sm text-body-sm placeholder:text-mineral-gray focus:outline-none focus:border-terracotta-accent transition-colors resize-none"
        />
        {errors.product_description && (
          <p className="font-label-micro text-label-micro text-status-peach-text">
            {errors.product_description.message}
          </p>
        )}
      </div>

      {/* 5. Visual Asset Upload Engine */}
      <div className="space-y-2">
        <label className="font-label-input text-label-input text-ink-charcoal font-semibold block">
          Visual Artifact Imagery *
        </label>
        <Controller
          name="product_image"
          control={control}
          rules={{ required: "Product image is required" }}
          render={({ field }) => (
            <ImageDropzone
              value={field.value}
              onChange={field.onChange}
              error={errors.product_image?.message}
            />
          )}
        />
      </div>

      {/* 6. Curatorial Tags & 7. Publishing Toggle */}
      <ProductTagsSection
        tags={tags}
        onAddTag={onAddTag}
        onRemoveTag={onRemoveTag}
        isAddingTag={isAddingTag}
        setIsAddingTag={setIsAddingTag}
        newTagInput={newTagInput}
        setNewTagInput={setNewTagInput}
        isPublished={isPublished}
        setIsPublished={setIsPublished}
      />
    </div>
  );
};

export default ProductFormFields;
