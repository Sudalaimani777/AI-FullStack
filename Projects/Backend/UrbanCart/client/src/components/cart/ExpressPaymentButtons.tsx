// client/src/components/cart/ExpressPaymentButtons.tsx
import React from "react";

interface ExpressPaymentButtonsProps {
  onExpressPay: (method: "apple" | "shop") => void;
}

export const ExpressPaymentButtons: React.FC<ExpressPaymentButtonsProps> = ({
  onExpressPay,
}) => {
  return (
    <div className="space-y-2 pt-1">
      <div className="relative flex py-1 items-center">
        <div className="flex-grow h-[1px] bg-surface-container-high" />
        <span className="flex-shrink mx-3 font-label-micro text-label-micro uppercase tracking-wider text-muted-sand">
          Express Payment Options
        </span>
        <div className="flex-grow h-[1px] bg-surface-container-high" />
      </div>

      <div className="grid grid-cols-2 gap-2">
        {/* Apple Pay Express */}
        <button
          type="button"
          onClick={() => onExpressPay("apple")}
          className="h-11 rounded-lg bg-[#000000] text-white flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity cursor-pointer"
        >
          <span className="font-label-input text-label-input font-bold tracking-tight">
            Apple Pay
          </span>
        </button>

        {/* Shop Pay Express */}
        <button
          type="button"
          onClick={() => onExpressPay("shop")}
          className="h-11 rounded-lg bg-[#5A31F4] text-white flex items-center justify-center gap-1.5 hover:opacity-90 transition-opacity cursor-pointer"
        >
          <span className="font-label-input text-label-input font-bold tracking-tight italic">
            shop Pay
          </span>
        </button>
      </div>
    </div>
  );
};

export default ExpressPaymentButtons;
