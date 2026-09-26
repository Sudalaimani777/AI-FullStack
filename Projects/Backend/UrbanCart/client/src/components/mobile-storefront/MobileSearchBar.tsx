// client/src/components/mobile-storefront/MobileSearchBar.tsx
import React, { useRef } from "react";

interface MobileSearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onToggleFilter?: () => void;
}

export const MobileSearchBar: React.FC<MobileSearchBarProps> = ({
  searchQuery,
  onSearchChange,
  onToggleFilter,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  return (
    <div className="px-margin-mobile pt-3 pb-2">
      <form onSubmit={handleSubmit} className="relative flex items-center w-full">
        <span className="material-symbols-outlined absolute left-3.5 text-[20px] text-mineral-gray pointer-events-none">
          search
        </span>
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full h-[46px] pl-10 pr-10 bg-surface-container-lowest rounded-xl font-body-sm text-body-sm text-ink-charcoal placeholder:text-muted-sand focus:outline-none shadow-[0_2px_10px_rgba(47,38,18,0.04)]"
          placeholder="Search curated objects, lighting, ceramics..."
        />
        <button
          type="button"
          onClick={onToggleFilter}
          aria-label="Filter"
          className="absolute right-2 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg text-mineral-gray active:scale-95 transition-transform"
        >
          <span className="material-symbols-outlined text-[19px]">tune</span>
        </button>
      </form>
    </div>
  );
};

export default MobileSearchBar;
