// client/src/components/cart/CartToast.tsx
import React from "react";

interface CartToastProps {
  message: string | null;
}

export const CartToast: React.FC<CartToastProps> = ({ message }) => {
  const isVisible = Boolean(message);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 bg-ink-charcoal text-on-primary px-5 py-3.5 rounded-xl shadow-xl flex items-center gap-3 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="material-symbols-outlined text-terracotta-accent text-[20px]">
        check_circle
      </span>
      <span className="font-label-input text-label-input">{message || ""}</span>
    </div>
  );
};

export default CartToast;
