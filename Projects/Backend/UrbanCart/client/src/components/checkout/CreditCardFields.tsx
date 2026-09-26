// client/src/components/checkout/CreditCardFields.tsx
import React, { useState } from "react";

export const CreditCardFields: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("4829 •••• •••• 9284");
  const [expiry, setExpiry] = useState("08 / 28");
  const [cvc, setCvc] = useState("•••");
  const [cardholder, setCardholder] = useState("ELENA VANCE");

  return (
    <div className="space-y-3 pt-2" onClick={(e) => e.stopPropagation()}>
      <div className="space-y-1.5">
        <label className="font-label-input text-label-input text-ink-charcoal">Card Number</label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-3.5 text-mineral-gray text-[18px]">
            credit_card
          </span>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full h-[48px] pl-11 pr-14 bg-surface-card rounded-lg font-body-sm text-body-sm text-ink-charcoal focus:outline-none shadow-xs border border-border-card/40"
          />
          <span className="absolute right-4 top-3.5 font-label-micro text-label-micro font-bold text-mineral-gray tracking-wider">
            VISA
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="font-label-input text-label-input text-ink-charcoal">Expiry Date</label>
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full h-[48px] px-4 bg-surface-card rounded-lg font-body-sm text-body-sm text-ink-charcoal focus:outline-none shadow-xs border border-border-card/40"
          />
        </div>
        <div className="space-y-1.5">
          <label className="font-label-input text-label-input text-ink-charcoal flex items-center justify-between">
            <span>Security CVC</span>
            <span
              className="material-symbols-outlined text-[16px] text-mineral-gray cursor-pointer"
              title="3-4 digits on back of card"
            >
              help
            </span>
          </label>
          <input
            type="password"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className="w-full h-[48px] px-4 bg-surface-card rounded-lg font-body-sm text-body-sm text-ink-charcoal focus:outline-none shadow-xs border border-border-card/40"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="font-label-input text-label-input text-ink-charcoal">Cardholder Legal Name</label>
        <input
          type="text"
          value={cardholder}
          onChange={(e) => setCardholder(e.target.value)}
          className="w-full h-[48px] px-4 bg-surface-card rounded-lg font-body-sm text-body-sm text-ink-charcoal uppercase focus:outline-none shadow-xs border border-border-card/40"
        />
      </div>
    </div>
  );
};

export default CreditCardFields;
