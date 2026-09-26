// client/src/components/order-confirmation/ConfirmationToast.tsx
import React from "react";

interface ConfirmationToastProps {
  message: string | null;
  onDismiss: () => void;
}

export const ConfirmationToast: React.FC<ConfirmationToastProps> = ({
  message,
  onDismiss,
}) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-stone-900 text-stone-100 text-xs px-4 py-3 rounded shadow-xl border border-stone-800 animate-in fade-in slide-in-from-bottom-2 duration-300">
      <span className="material-symbols-outlined text-[16px] text-stone-300">
        check_circle
      </span>
      <span className="font-light tracking-wide">{message}</span>
      <button
        type="button"
        onClick={onDismiss}
        className="ml-2 text-stone-400 hover:text-stone-200 transition-colors"
        aria-label="Dismiss notification"
      >
        <span className="material-symbols-outlined text-[14px]">close</span>
      </button>
    </div>
  );
};
