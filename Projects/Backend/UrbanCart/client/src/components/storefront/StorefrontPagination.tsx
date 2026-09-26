// client/src/components/storefront/StorefrontPagination.tsx
import React from "react";

interface StorefrontPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const StorefrontPagination: React.FC<StorefrontPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="mt-space-xl flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-lg">
      <p className="font-body-sm text-body-sm text-mineral-gray">
        Displaying curated catalog selection • Dispatching from Tokyo, Copenhagen, and Brooklyn
      </p>

      {totalPages > 1 && (
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="h-10 px-4 rounded-xl bg-surface-container text-ink-charcoal font-label-input text-label-input hover:bg-surface-container-high transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
              const isCurrent = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => onPageChange(pageNum)}
                  className={`w-8 h-8 rounded-lg font-label-input text-label-input flex items-center justify-center transition-colors cursor-pointer ${
                    isCurrent
                      ? "bg-ink-charcoal text-on-primary font-semibold"
                      : "hover:bg-surface-container text-mineral-gray"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="h-10 px-4 rounded-xl bg-surface-container text-ink-charcoal font-label-input text-label-input hover:bg-surface-container-high transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default StorefrontPagination;
