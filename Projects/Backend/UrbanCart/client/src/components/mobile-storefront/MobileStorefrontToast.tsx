// client/src/components/mobile-storefront/MobileStorefrontToast.tsx
import React from "react";

interface MobileStorefrontToastProps {
  message: string | null;
}

export const MobileStorefrontToast: React.FC<MobileStorefrontToastProps> = ({
  message,
}) => {
  if (!message) return null;

  return (
    <div
      className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 px-4 py-2.5 rounded-full bg-ink-charcoal text-on-primary shadow-[0_12px_32px_rgba(0,0,0,0.25)] flex items-center gap-2 transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
      role="status"
    >
      <span className="material-symbols-outlined text-terracotta-flame text-[18px]">
        check_circle
      </span>
      <span className="font-label-input text-label-input">{message}</span>
    </div>
  );
};

export default MobileStorefrontToast;
