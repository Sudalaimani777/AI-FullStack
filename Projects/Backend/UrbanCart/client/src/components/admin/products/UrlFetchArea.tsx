// client/src/components/admin/products/UrlFetchArea.tsx
import React from "react";

interface UrlFetchAreaProps {
  inputUrl: string;
  onInputChange: (val: string) => void;
  onApply: () => void;
  value: string;
  fileName: string;
  onRemove: () => void;
}

const UrlFetchArea: React.FC<UrlFetchAreaProps> = ({
  inputUrl,
  onInputChange,
  onApply,
  value,
  fileName,
  onRemove,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="url"
            value={inputUrl}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onApply();
              }
            }}
            placeholder="Paste public image URL (e.g. Unsplash, Cloudinary)..."
            className="w-full h-11 pl-10 pr-4 rounded-xl bg-surface-container-low border border-border-card text-ink-charcoal font-body-sm text-body-sm placeholder:text-mineral-gray focus:outline-none focus:border-terracotta-accent transition-colors"
          />
          <span className="material-symbols-outlined text-mineral-gray absolute left-3 top-3 text-lg pointer-events-none">
            link
          </span>
        </div>
        <button
          type="button"
          onClick={onApply}
          disabled={!inputUrl.trim()}
          className="h-11 px-5 rounded-xl bg-ink-charcoal hover:bg-black text-white font-label-input text-label-input font-semibold shadow-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap"
        >
          Fetch &amp; Load
        </button>
      </div>

      {value && (
        <div className="p-3.5 rounded-xl bg-surface-card shadow-sm flex items-center justify-between border border-border-card">
          <div className="flex items-center gap-3.5">
            <div className="w-16 h-16 rounded-lg bg-surface-container-high overflow-hidden relative flex-shrink-0 border border-border-subtle">
              <img
                alt="Product URL thumbnail preview"
                className="w-full h-full object-cover"
                src={value}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=300";
                }}
              />
              <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-ink-charcoal/80 text-white font-label-micro text-[9px] tracking-tight uppercase">
                Remote CDN
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-input text-label-input text-ink-charcoal truncate max-w-[210px] font-semibold">
                {fileName || "cdn_asset.jpg"}
              </span>
              <span className="font-label-micro text-label-micro text-mineral-gray mt-0.5">
                Direct URL • Auto Optimized
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-status-peach-text" />
                <span className="font-label-micro text-label-micro text-terracotta-accent font-semibold">
                  Calibrated sRGB
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={onRemove}
            className="w-9 h-9 rounded-lg bg-surface-container-low hover:bg-error-container text-mineral-gray hover:text-error flex items-center justify-center transition-all"
            title="Remove asset"
            type="button"
          >
            <span className="material-symbols-outlined text-sm">delete</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default UrlFetchArea;
