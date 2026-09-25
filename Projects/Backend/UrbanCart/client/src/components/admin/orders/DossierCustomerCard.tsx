// client/src/components/admin/orders/DossierCustomerCard.tsx
import React from "react";
import type { ShippingAddress } from "../../../types";

interface DossierCustomerCardProps {
  customerName: string;
  customerEmail: string;
  address?: ShippingAddress;
}

const DossierCustomerCard: React.FC<DossierCustomerCardProps> = ({
  customerName,
  customerEmail,
  address,
}) => {
  return (
    <div className="p-5 rounded-xl bg-surface-container-low flex flex-col gap-4 border border-border-card/60">
      <div className="flex items-center justify-between">
        <span className="font-title-card text-title-card text-ink-charcoal font-semibold">
          Customer &amp; Destination
        </span>
        <span className="material-symbols-outlined text-mineral-gray text-base">person</span>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="font-body-lg text-body-lg font-semibold text-ink-charcoal">
            {customerName}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-canvas-secondary text-ink-charcoal font-label-micro text-label-micro uppercase font-semibold">
            Patron Tier IV
          </span>
        </div>
        <span className="font-body-sm text-body-sm text-mineral-gray truncate">
          {customerEmail}
        </span>
        <span className="font-body-sm text-body-sm text-mineral-gray font-mono">
          +1 (212) 555-0198
        </span>
      </div>

      <div className="p-3.5 rounded-lg bg-surface-card flex flex-col gap-1 shadow-sm border border-border-card">
        <div className="flex items-center justify-between mb-1">
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray font-semibold">
            Delivery Address (Tax Exempt Studio)
          </span>
          <span className="material-symbols-outlined text-sm text-mineral-gray">
            local_shipping
          </span>
        </div>
        <p className="font-body-sm text-body-sm text-ink-charcoal leading-relaxed">
          {address?.address || "Kronprinsensgade 14, 2. sal"}
          <br />
          {address?.city || "Copenhagen K"}, {address?.postal_code || "1114"}
          <br />
          {address?.country || "Denmark"}
        </p>
        <div className="mt-2 pt-2 border-t border-border-card/60 flex items-center justify-between text-mineral-gray font-label-micro text-label-micro">
          <span>Routing Code: CPH-01-AIR</span>
          <span className="text-terracotta-flame font-semibold">DHL Express Int’l</span>
        </div>
      </div>

      <div className="flex items-center justify-between px-1">
        <span className="font-body-sm text-body-sm text-mineral-gray">Payment Method</span>
        <span className="font-label-input text-label-input text-ink-charcoal flex items-center gap-1.5 font-medium">
          <span className="material-symbols-outlined text-sm text-mineral-gray">credit_card</span>
          <span>Stripe ···· 4242 (3DS Validated)</span>
        </span>
      </div>
    </div>
  );
};

export default DossierCustomerCard;
