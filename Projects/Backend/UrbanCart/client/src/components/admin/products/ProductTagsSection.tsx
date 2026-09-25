// client/src/components/admin/products/ProductTagsSection.tsx
import React from "react";

interface ProductTagsSectionProps {
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

const ProductTagsSection: React.FC<ProductTagsSectionProps> = ({
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
    <>
      {/* Curatorial Tags & Badges */}
      <div className="space-y-2 pt-2 border-t border-border-card">
        <label className="font-label-input text-label-input text-ink-charcoal font-semibold block">
          Curatorial Tags
        </label>
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-ink-charcoal font-label-micro text-label-micro"
            >
              <span>{tag}</span>
              <button
                type="button"
                onClick={() => onRemoveTag(idx)}
                className="text-mineral-gray hover:text-ink-charcoal"
              >
                <span className="material-symbols-outlined text-xs">close</span>
              </button>
            </span>
          ))}

          {isAddingTag ? (
            <div className="flex items-center gap-1">
              <input
                type="text"
                value={newTagInput}
                onChange={(e) => setNewTagInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    if (newTagInput.trim()) {
                      onAddTag(newTagInput.trim());
                      setNewTagInput("");
                      setIsAddingTag(false);
                    }
                  }
                }}
                placeholder="Tag name..."
                className="h-8 px-2.5 rounded-lg bg-surface-container-low border border-border-card font-label-micro text-label-micro text-ink-charcoal focus:outline-none"
                autoFocus
              />
              <button
                type="button"
                onClick={() => {
                  if (newTagInput.trim()) onAddTag(newTagInput.trim());
                  setNewTagInput("");
                  setIsAddingTag(false);
                }}
                className="h-8 px-2 rounded-lg bg-ink-charcoal text-white font-label-micro text-label-micro font-semibold"
              >
                Add
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsAddingTag(true)}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-dashed border-border-card text-mineral-gray hover:text-ink-charcoal font-label-micro text-label-micro"
            >
              <span className="material-symbols-outlined text-xs">add</span>
              <span>Add Tag</span>
            </button>
          )}
        </div>
      </div>

      {/* Publishing & Visibility Toggle */}
      <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between border border-border-card">
        <div className="flex flex-col">
          <span className="font-label-input text-label-input text-ink-charcoal font-semibold">
            Boutique Storefront Visibility
          </span>
          <span className="font-body-sm text-body-sm text-mineral-gray">
            Syndicate this piece immediately to live patron collections.
          </span>
        </div>
        <button
          type="button"
          onClick={() => setIsPublished(!isPublished)}
          className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
            isPublished ? "bg-terracotta-accent" : "bg-surface-container-high"
          }`}
        >
          <div
            className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform ${
              isPublished ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </>
  );
};

export default ProductTagsSection;
