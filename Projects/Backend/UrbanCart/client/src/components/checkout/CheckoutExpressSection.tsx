// client/src/components/checkout/CheckoutExpressSection.tsx
import React from "react";

interface CheckoutExpressSectionProps {
  email: string;
  onChangeEmail: (email: string) => void;
  onExpressPay: (method: "apple" | "google" | "shop") => void;
}

export const CheckoutExpressSection: React.FC<CheckoutExpressSectionProps> = ({
  email,
  onChangeEmail,
  onExpressPay,
}) => {
  return (
    <div className="bg-surface-card p-space-lg rounded-xl shadow-xs border border-border-card/40">
      <div className="flex items-center justify-between mb-space-sm">
        <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray">
          Instant Atelier Checkout
        </span>
        <span className="font-label-micro text-label-micro text-mineral-gray flex items-center gap-1">
          <span className="material-symbols-outlined text-[13px] text-ink-charcoal">lock</span>
          256-Bit Cryptographic SSL
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Apple Pay */}
        <button
          type="button"
          onClick={() => onExpressPay("apple")}
          className="h-[48px] bg-ink-charcoal text-on-primary rounded-lg font-label-input text-label-input flex items-center justify-center gap-2 hover:opacity-95 transition-opacity cursor-pointer"
        >
          <svg className="h-5 w-auto fill-current" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.66-7.84-11.91-14.41-5.78-8.91-10.37-19.14-13.78-30.71-3.41-11.57-5.11-22.38-5.11-32.44 0-14.19 3.65-26.06 10.96-35.61 7.31-9.56 16.53-14.45 27.67-14.69 4.93 0 10.33 1.34 16.2 4.02 5.87 2.68 9.69 4.08 11.45 4.21 2.39-.27 6.44-1.74 12.14-4.42 5.7-2.67 10.74-3.87 15.11-3.58 11.23.82 20.31 4.96 27.24 12.44-9.82 5.92-14.61 14.28-14.37 25.07.24 8.75 3.71 16.03 10.41 21.84 6.7 5.81 14.53 9.07 23.49 9.77-2.22 6.64-4.91 13.25-8.08 19.85zM119.22 33.15c0-6.9 2.52-13.37 7.56-19.42 5.04-6.04 11.16-9.85 18.36-11.43.34 1.33.51 2.45.51 3.36 0 6.83-2.64 13.51-7.92 20.03-5.28 6.52-11.53 10.37-18.75 11.56-.11-1.33-.17-2.45-.17-3.36z" />
          </svg>
          <span>Pay</span>
        </button>

        {/* Google Pay */}
        <button
          type="button"
          onClick={() => onExpressPay("google")}
          className="h-[48px] bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-input text-label-input flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-border-card/40"
        >
          <svg className="h-4 w-auto" viewBox="0 0 652 264">
            <path d="M110.4 129.9c0-8.8-.7-17.2-2.1-25.3H56.3v48h30.4c-1.3 7.1-5.3 13.1-11.3 17.1v14.1h18.2c10.7-9.8 16.8-24.3 16.8-41.9z" fill="#4285F4" />
            <path d="M56.3 185.1c15.2 0 28-5 37.4-13.6l-18.2-14.1c-5.1 3.4-11.6 5.4-19.2 5.4-14.7 0-27.1-9.9-31.5-23.3H6.1v14.6c9.3 18.5 28.5 31 50.2 31z" fill="#34A853" />
            <path d="M24.8 139.5c-2.3-6.8-2.3-14.2 0-21V103.9H6.1c-8.2 16.3-8.2 35.3 0 51.6l18.7-16z" fill="#FBBC05" />
            <path d="M56.3 84.1c8.1 0 15.5 2.8 21.2 8.3l15.9-15.9C83.5 67.2 70.4 62 56.3 62 34.6 62 15.4 74.5 6.1 93l18.7 14.6c4.4-13.4 16.8-23.5 31.5-23.5z" fill="#EA4335" />
          </svg>
          <span className="font-semibold text-ink-charcoal">Pay</span>
        </button>

        {/* Shop Pay */}
        <button
          type="button"
          onClick={() => onExpressPay("shop")}
          className="h-[48px] bg-secondary-container hover:bg-surface-container-high text-ink-charcoal rounded-lg font-label-input text-label-input flex items-center justify-center gap-1 transition-colors cursor-pointer border border-border-card/40"
        >
          <span className="font-semibold tracking-tight">Shop</span>
          <span className="px-1 py-0.5 rounded bg-terracotta-flame text-on-primary font-label-micro text-label-micro font-bold">
            Pay
          </span>
        </button>
      </div>

      {/* Elegant Divider */}
      <div className="relative flex py-space-md items-center">
        <div className="flex-grow h-[1px] bg-surface-container-highest" />
        <span className="flex-shrink mx-4 font-label-eyebrow text-label-eyebrow text-mineral-gray uppercase tracking-widest">
          Or enter delivery details
        </span>
        <div className="flex-grow h-[1px] bg-surface-container-highest" />
      </div>

      {/* Email Notification Input */}
      <div className="space-y-2">
        <label className="block font-label-input text-label-input text-ink-charcoal">
          Patron Contact &amp; Dispatch Ledger
        </label>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-3.5 text-mineral-gray text-[18px]">
            alternate_email
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => onChangeEmail(e.target.value)}
            placeholder="Enter courier correspondence email"
            className="w-full h-[48px] pl-11 pr-4 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-ink-charcoal focus:outline-none focus:bg-surface-card border border-border-card/40 transition-all"
          />
        </div>
        <label className="flex items-start gap-2.5 pt-1 cursor-pointer select-none">
          <input
            type="checkbox"
            defaultChecked
            className="mt-1 w-4 h-4 rounded text-terracotta-flame accent-terracotta-flame bg-surface-container-low"
          />
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Receive curated atelier monographs, private view invites, and milestone courier dispatch telemetry via SMS/Email.
          </span>
        </label>
      </div>
    </div>
  );
};

export default CheckoutExpressSection;
