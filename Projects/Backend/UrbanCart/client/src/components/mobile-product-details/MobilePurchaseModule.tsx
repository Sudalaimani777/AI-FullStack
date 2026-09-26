// client/src/components/mobile-product-details/MobilePurchaseModule.tsx
import React from "react";

interface MobilePurchaseModuleProps {
  quantity: number;
  onQuantityChange: (qty: number) => void;
  unitPrice: number;
  onAcquire: () => void;
  onInstantConsignment: () => void;
  isWaitlist?: boolean;
}

export const MobilePurchaseModule: React.FC<MobilePurchaseModuleProps> = ({
  quantity,
  onQuantityChange,
  unitPrice,
  onAcquire,
  onInstantConsignment,
  isWaitlist = false,
}) => {
  const totalPrice = (unitPrice * quantity).toFixed(2);

  return (
    <section className="px-margin-mobile pt-4 flex flex-col gap-2.5">
      {/* Stepper + Acquire Button */}
      <div className="flex items-center gap-2.5">
        {/* Quantity Stepper */}
        <div className="flex items-center justify-between h-12 w-28 px-3 rounded-xl bg-surface-container-low border border-border-card/60 text-ink-charcoal">
          <button
            type="button"
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
            className="w-7 h-7 flex items-center justify-center font-bold text-base disabled:opacity-30 hover:bg-surface-container rounded transition-colors"
          >
            -
          </button>
          <span className="font-semibold text-sm">{quantity}</span>
          <button
            type="button"
            onClick={() => onQuantityChange(quantity + 1)}
            aria-label="Increase quantity"
            className="w-7 h-7 flex items-center justify-center font-bold text-base hover:bg-surface-container rounded transition-colors"
          >
            +
          </button>
        </div>

        {/* Acquire / Consignment CTA Button */}
        <button
          type="button"
          onClick={onAcquire}
          className="flex-1 h-12 rounded-xl bg-ink-charcoal text-white hover:bg-black active:scale-[0.99] flex items-center justify-center gap-2 px-4 shadow-sm transition-all"
        >
          <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
          <span className="font-medium text-sm">
            {isWaitlist ? "Register for Edition" : `Acquire Piece — $${totalPrice}`}
          </span>
        </button>
      </div>

      {/* Dispatch Metadata Row */}
      <div className="flex items-center justify-between text-[10px] font-mono tracking-wider">
        <div className="flex items-center gap-1.5 text-mineral-gray">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta-accent" />
          <span className="uppercase">Ships within 48 hours</span>
        </div>

        <button
          type="button"
          onClick={onInstantConsignment}
          className="text-terracotta-accent font-semibold uppercase hover:underline"
        >
          Instant Consignment →
        </button>
      </div>
    </section>
  );
};

export default MobilePurchaseModule;
