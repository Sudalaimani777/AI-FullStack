// client/src/components/admin/products/FileDropArea.tsx
import React, { useRef } from "react";

interface FileDropAreaProps {
  value: string;
  isDragging: boolean;
  uploadProgress: number | null;
  fileName: string;
  fileSize: string;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent) => void;
  onFileSelect: (file: File) => void;
  onRemove: () => void;
  onCancelUpload: () => void;
}

const FileDropArea: React.FC<FileDropAreaProps> = ({
  value,
  isDragging,
  uploadProgress,
  fileName,
  fileSize,
  onDragOver,
  onDragLeave,
  onDrop,
  onFileSelect,
  onRemove,
  onCancelUpload,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="space-y-4">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            onFileSelect(e.target.files[0]);
          }
        }}
      />

      {/* Drag & Drop Box */}
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`w-full p-6 rounded-2xl bg-surface-tinted hover:bg-surface-container-low transition-all cursor-pointer flex flex-col items-center justify-center text-center gap-2.5 relative group border-2 border-dashed ${
          isDragging ? "border-terracotta-accent bg-surface-container-low" : "border-border-subtle"
        }`}
      >
        <div className="w-12 h-12 rounded-full bg-surface-card shadow-sm flex items-center justify-center text-terracotta-flame group-hover:scale-105 transition-transform">
          <span className="material-symbols-outlined text-2xl">upload_file</span>
        </div>
        <div className="space-y-0.5">
          <p className="font-label-input text-label-input text-ink-charcoal">
            Drag &amp; drop high-resolution asset here, or{" "}
            <span className="text-terracotta-accent underline cursor-pointer">browse files</span>
          </p>
          <p className="font-label-micro text-label-micro text-muted-sand">
            PNG, JPG, WebP up to 5MB (minimum 1200×1200px recommended)
          </p>
        </div>
      </div>

      {/* Uploading State Progress Bar */}
      {uploadProgress !== null && (
        <div className="p-4 rounded-xl bg-surface-card shadow-sm flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-terracotta-flame text-lg animate-spin">
                sync
              </span>
              <span className="font-label-input text-label-input text-ink-charcoal truncate max-w-[280px]">
                {fileName}
              </span>
              <span className="font-label-micro text-label-micro text-mineral-gray">({fileSize})</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-input text-label-input text-terracotta-accent font-semibold">
                {uploadProgress}%
              </span>
              <button
                onClick={onCancelUpload}
                className="w-6 h-6 rounded-full hover:bg-surface-container flex items-center justify-center text-mineral-gray hover:text-ink-charcoal"
                type="button"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
          </div>
          <div className="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
            <div
              className="h-full bg-terracotta-flame rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Uploaded Media Preview Thumbnail Card */}
      {value && (
        <div className="p-3.5 rounded-xl bg-surface-card shadow-sm flex items-center justify-between border border-border-card">
          <div className="flex items-center gap-3.5">
            <div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden relative flex-shrink-0 border border-border-subtle">
              <img
                alt="Product thumbnail preview"
                className="w-full h-full object-cover"
                src={value}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=300";
                }}
              />
              <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-ink-charcoal/80 text-white font-label-micro text-[9px] tracking-tight uppercase">
                Primary
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-input text-label-input text-ink-charcoal truncate max-w-[210px] font-semibold">
                {fileName || "product_asset.jpg"}
              </span>
              <span className="font-label-micro text-label-micro text-mineral-gray mt-0.5">
                Asset Synced • High Resolution
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-status-peach-text" />
                <span className="font-label-micro text-label-micro text-terracotta-accent font-semibold">
                  Calibrated sRGB
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="h-9 px-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-ink-charcoal font-label-input text-label-input flex items-center gap-1 transition-all"
              title="Replace image"
              type="button"
            >
              <span className="material-symbols-outlined text-sm">cached</span>
              <span>Replace</span>
            </button>
            <button
              onClick={onRemove}
              className="w-9 h-9 rounded-lg bg-surface-container-low hover:bg-error-container text-mineral-gray hover:text-error flex items-center justify-center transition-all"
              title="Remove asset"
              type="button"
            >
              <span className="material-symbols-outlined text-sm">delete</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileDropArea;
