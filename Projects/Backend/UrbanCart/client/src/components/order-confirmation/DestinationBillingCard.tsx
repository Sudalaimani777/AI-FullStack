// client/src/components/order-confirmation/DestinationBillingCard.tsx
import React from "react";
import type { ShippingAddressState } from "../checkout";

interface DestinationBillingCardProps {
  shippingAddress?: Partial<ShippingAddressState>;
  paymentMethodText?: string;
}

export const DestinationBillingCard: React.FC<DestinationBillingCardProps> = ({
  shippingAddress,
  paymentMethodText = "Visa ending in 9284",
}) => {
  const name =
    shippingAddress?.firstName && shippingAddress?.lastName
      ? `${shippingAddress.firstName} ${shippingAddress.lastName}`
      : "Elena Vance";
  const street = shippingAddress?.address || "742 Evergreen Terrace, Loft 4B";
  const apt = shippingAddress?.apt || "4th Floor Atelier Entrance (Freight Elevator Code #890)";
  const cityStateZip =
    shippingAddress?.city && shippingAddress?.postalCode
      ? `${shippingAddress.city}, ${shippingAddress.state || "OR"} ${shippingAddress.postalCode}, ${shippingAddress.country || "United States"}`
      : "Portland, OR 97201, United States";
  const phone = shippingAddress?.phone || "+1 (503) 892-4100";

  return (
    <div className="bg-surface-card rounded-xl shadow-xs p-space-lg grid grid-cols-1 md:grid-cols-2 gap-space-lg border border-border-card/40">
      {/* Consignment Destination */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-[18px] text-mineral-gray">home_pin</span>
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray tracking-wider">
            Consignment Destination
          </span>
        </div>
        <p className="font-label-input text-label-input text-ink-charcoal font-semibold">{name}</p>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{street}</p>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{apt}</p>
        <p className="font-body-sm text-body-sm text-on-surface-variant">{cityStateZip}</p>
        <p className="font-body-sm text-body-sm text-mineral-gray mt-1">{phone}</p>
      </div>

      {/* Settlement & Billing */}
      <div className="flex flex-col gap-1.5 border-t md:border-t-0 md:border-l border-border-card/30 pt-4 md:pt-0 md:pl-space-lg">
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-[18px] text-mineral-gray">credit_card</span>
          <span className="font-label-eyebrow text-label-eyebrow uppercase text-mineral-gray tracking-wider">
            Settlement &amp; Billing
          </span>
        </div>
        <p className="font-label-input text-label-input text-ink-charcoal font-semibold">
          {paymentMethodText}
        </p>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Exp: 09/28 • Auth Code: #TX-990812
        </p>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Billing matches delivery address
        </p>
        <div className="mt-2 pt-2 flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-surface-container font-label-micro text-label-micro text-on-surface-variant uppercase tracking-wider font-medium">
            3D Secure 2.0
          </span>
          <span className="font-label-micro text-label-micro text-mineral-gray">
            Fully Insured Escrow
          </span>
        </div>
      </div>
    </div>
  );
};

export default DestinationBillingCard;
