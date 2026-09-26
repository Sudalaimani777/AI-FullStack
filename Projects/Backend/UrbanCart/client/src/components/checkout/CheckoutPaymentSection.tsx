// client/src/components/checkout/CheckoutPaymentSection.tsx
import React from "react";
import CreditCardFields from "./CreditCardFields";

export type PaymentMethodType = "card" | "google_pay" | "cod";

interface CheckoutPaymentSectionProps {
  paymentMethod: PaymentMethodType;
  onSelectPaymentMethod: (method: PaymentMethodType) => void;
}

export const CheckoutPaymentSection: React.FC<CheckoutPaymentSectionProps> = ({
  paymentMethod,
  onSelectPaymentMethod,
}) => {
  return (
    <div className="bg-surface-card p-space-lg rounded-xl shadow-xs space-y-space-md border border-border-card/40">
      <div className="flex items-baseline justify-between">
        <div className="flex items-center gap-2">
          <span className="font-headline-sm text-headline-sm text-ink-charcoal font-semibold">
            2. Settlement Method
          </span>
          <span className="px-2 py-0.5 rounded-full bg-surface-container text-mineral-gray font-label-micro text-label-micro uppercase font-medium">
            Secure Protocol
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-surface-container-low text-mineral-gray font-label-micro text-label-micro uppercase">
            Visa
          </span>
          <span className="px-2 py-0.5 rounded bg-surface-container-low text-mineral-gray font-label-micro text-label-micro uppercase">
            MC
          </span>
          <span className="px-2 py-0.5 rounded bg-surface-container-low text-mineral-gray font-label-micro text-label-micro uppercase">
            Amex
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {/* Method 1: Credit / Debit Card (Selected & Expanded) */}
        <div
          onClick={() => onSelectPaymentMethod("card")}
          className={`rounded-xl p-4 space-y-4 transition-all border cursor-pointer ${
            paymentMethod === "card"
              ? "bg-surface-container-low border-ink-charcoal"
              : "bg-surface-card border-border-card/40 hover:bg-surface-container-low"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                  paymentMethod === "card" ? "bg-ink-charcoal border-ink-charcoal" : "border-border-card"
                }`}
              >
                {paymentMethod === "card" && <div className="w-2 h-2 rounded-full bg-on-primary" />}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-body-md text-body-md text-ink-charcoal font-semibold">
                  Credit or Archival Charge Card
                </span>
                <span className="material-symbols-outlined text-[18px] text-terracotta-flame">lock</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-terracotta-flame" />
              <span className="font-label-micro text-label-micro text-terracotta-flame uppercase tracking-wider font-semibold">
                Instant Clearance
              </span>
            </div>
          </div>

          {/* Expanded Card Inputs */}
          {paymentMethod === "card" && <CreditCardFields />}
        </div>

        {/* Method 2: Google Pay Card Option */}
        <div
          onClick={() => onSelectPaymentMethod("google_pay")}
          className={`rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all border ${
            paymentMethod === "google_pay"
              ? "bg-surface-container-low border-ink-charcoal"
              : "bg-surface-card border-border-card/40 hover:bg-surface-container-low"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                paymentMethod === "google_pay" ? "bg-ink-charcoal border-ink-charcoal" : "border-border-card"
              }`}
            >
              {paymentMethod === "google_pay" && <div className="w-2 h-2 rounded-full bg-on-primary" />}
            </div>
            <span className="font-body-md text-body-md text-on-surface">Google Pay Digital Account</span>
          </div>
          <span className="font-label-micro text-label-micro text-mineral-gray uppercase tracking-wider">
            One-Touch Secure
          </span>
        </div>

        {/* Method 3: COD / Consignment on Delivery */}
        <div
          onClick={() => onSelectPaymentMethod("cod")}
          className={`rounded-xl p-4 flex items-center justify-between cursor-pointer transition-all border ${
            paymentMethod === "cod"
              ? "bg-surface-container-low border-ink-charcoal"
              : "bg-surface-card border-border-card/40 hover:bg-surface-container-low"
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                paymentMethod === "cod" ? "bg-ink-charcoal border-ink-charcoal" : "border-border-card"
              }`}
            >
              {paymentMethod === "cod" && <div className="w-2 h-2 rounded-full bg-on-primary" />}
            </div>
            <div>
              <span className="font-body-md text-body-md text-on-surface">Consignment on Delivery (COD)</span>
              <p className="font-body-sm text-body-sm text-mineral-gray">
                Settled upon white-glove uncrating and physical inspection at residence
              </p>
            </div>
          </div>
          <span className="font-label-micro text-label-micro text-mineral-gray uppercase tracking-wider">
            Post-Inspection
          </span>
        </div>
      </div>

      {/* Vault Protocol Banner */}
      <div className="p-3 bg-surface-container-low rounded-lg flex items-center gap-3 border border-border-card/30">
        <span className="material-symbols-outlined text-[20px] text-terracotta-flame shrink-0">
          verified_user
        </span>
        <p className="font-label-micro text-label-micro text-on-surface-variant leading-relaxed">
          Atelier Vault Protection: Transactions are secured via multi-signature tokenization. We do not store unencrypted financial coordinates.
        </p>
      </div>
    </div>
  );
};

export default CheckoutPaymentSection;
