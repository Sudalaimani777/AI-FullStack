// client/src/components/checkout/CheckoutShippingForm.tsx
import React from "react";
import DeliveryTierSelector from "./DeliveryTierSelector";

export interface ShippingAddressState {
  firstName: string;
  lastName: string;
  address: string;
  apt: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
}

interface CheckoutShippingFormProps {
  shippingData: ShippingAddressState;
  onChangeField: (field: keyof ShippingAddressState, value: string) => void;
  deliveryTier: "standard" | "priority";
  onSelectTier: (tier: "standard" | "priority") => void;
  billingMatches: boolean;
  onToggleBillingMatches: () => void;
}

export const CheckoutShippingForm: React.FC<CheckoutShippingFormProps> = ({
  shippingData,
  onChangeField,
  deliveryTier,
  onSelectTier,
  billingMatches,
  onToggleBillingMatches,
}) => {
  return (
    <div className="bg-surface-card p-space-lg rounded-xl shadow-xs space-y-space-md border border-border-card/40">
      <div className="flex items-baseline justify-between">
        <div className="flex items-center gap-2">
          <span className="font-headline-sm text-headline-sm text-ink-charcoal font-semibold">
            1. Delivery Destination
          </span>
          <span className="px-2 py-0.5 rounded-full bg-status-peach-bg text-status-peach-text font-label-micro text-label-micro font-semibold uppercase">
            White-Glove
          </span>
        </div>
        <span className="font-label-micro text-label-micro text-mineral-gray uppercase tracking-wider">
          Insured Transit
        </span>
      </div>

      <p className="font-body-sm text-body-sm text-on-surface-variant">
        Every package is cradled in archival, acid-free timber containers and delivered directly inside your residence.
      </p>

      <div className="space-y-4 pt-2">
        {/* Name Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-label-input text-label-input text-ink-charcoal">First Name</label>
            <input
              type="text"
              value={shippingData.firstName}
              onChange={(e) => onChangeField("firstName", e.target.value)}
              className="w-full h-[48px] px-4 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-ink-charcoal focus:outline-none focus:bg-surface-card border border-border-card/40 transition-all"
            />
          </div>
          <div className="space-y-1.5">
            <label className="font-label-input text-label-input text-ink-charcoal">Last / Family Name</label>
            <input
              type="text"
              value={shippingData.lastName}
              onChange={(e) => onChangeField("lastName", e.target.value)}
              className="w-full h-[48px] px-4 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-ink-charcoal focus:outline-none focus:bg-surface-card border border-border-card/40 transition-all"
            />
          </div>
        </div>

        {/* Street Address */}
        <div className="space-y-1.5">
          <label className="font-label-input text-label-input text-ink-charcoal">Street Address</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-3.5 text-mineral-gray text-[18px]">
              location_on
            </span>
            <input
              type="text"
              placeholder="House number and street"
              value={shippingData.address}
              onChange={(e) => onChangeField("address", e.target.value)}
              className="w-full h-[48px] pl-11 pr-4 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-ink-charcoal focus:outline-none focus:bg-surface-card border border-border-card/40 transition-all"
            />
          </div>
        </div>

        {/* Apt / Suite / Unit */}
        <div className="space-y-1.5">
          <label className="font-label-input text-label-input text-ink-charcoal flex items-center justify-between">
            <span>Apartment, Suite, Unit or Floor</span>
            <span className="font-label-micro text-label-micro text-mineral-gray font-normal">Optional</span>
          </label>
          <input
            type="text"
            value={shippingData.apt}
            onChange={(e) => onChangeField("apt", e.target.value)}
            className="w-full h-[48px] px-4 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-ink-charcoal focus:outline-none focus:bg-surface-card border border-border-card/40 transition-all"
          />
        </div>

        {/* City, State, Zip Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-1.5 sm:col-span-1">
            <label className="font-label-input text-label-input text-ink-charcoal">City / Municipality</label>
            <input
              type="text"
              value={shippingData.city}
              onChange={(e) => onChangeField("city", e.target.value)}
              className="w-full h-[48px] px-4 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-ink-charcoal focus:outline-none focus:bg-surface-card border border-border-card/40 transition-all"
            />
          </div>
          <div className="space-y-1.5 sm:col-span-1">
            <label className="font-label-input text-label-input text-ink-charcoal">State / Region</label>
            <div className="relative">
              <select
                value={shippingData.state}
                onChange={(e) => onChangeField("state", e.target.value)}
                className="w-full h-[48px] px-4 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-ink-charcoal appearance-none focus:outline-none focus:bg-surface-card border border-border-card/40 transition-all pr-8 cursor-pointer"
              >
                <option value="Oregon (OR)">Oregon (OR)</option>
                <option value="California (CA)">California (CA)</option>
                <option value="New York (NY)">New York (NY)</option>
                <option value="Washington (WA)">Washington (WA)</option>
                <option value="Illinois (IL)">Illinois (IL)</option>
                <option value="Texas (TX)">Texas (TX)</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3.5 text-mineral-gray text-[18px] pointer-events-none">
                expand_more
              </span>
            </div>
          </div>
          <div className="space-y-1.5 sm:col-span-1">
            <label className="font-label-input text-label-input text-ink-charcoal">Postal / ZIP Code</label>
            <input
              type="text"
              value={shippingData.postalCode}
              onChange={(e) => onChangeField("postalCode", e.target.value)}
              className="w-full h-[48px] px-4 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-ink-charcoal focus:outline-none focus:bg-surface-card border border-border-card/40 transition-all"
            />
          </div>
        </div>

        {/* Country & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="font-label-input text-label-input text-ink-charcoal">Country / Territory</label>
            <div className="relative">
              <select
                value={shippingData.country}
                onChange={(e) => onChangeField("country", e.target.value)}
                className="w-full h-[48px] px-4 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-ink-charcoal appearance-none focus:outline-none focus:bg-surface-card border border-border-card/40 transition-all pr-8 cursor-pointer"
              >
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Japan">Japan</option>
                <option value="Denmark">Denmark</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3.5 text-mineral-gray text-[18px] pointer-events-none">
                expand_more
              </span>
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="font-label-input text-label-input text-ink-charcoal flex items-center justify-between">
              <span>Courier Telephone</span>
              <span className="font-label-micro text-label-micro text-mineral-gray font-normal">SMS ETA Updates</span>
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-3.5 text-mineral-gray text-[18px]">
                phone
              </span>
              <input
                type="tel"
                value={shippingData.phone}
                onChange={(e) => onChangeField("phone", e.target.value)}
                className="w-full h-[48px] pl-11 pr-4 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-ink-charcoal focus:outline-none focus:bg-surface-card border border-border-card/40 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Options Radio Cards */}
      <DeliveryTierSelector deliveryTier={deliveryTier} onSelectTier={onSelectTier} />

      {/* Billing matches Shipping Toggle */}
      <label className="flex items-center gap-3 pt-2 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={billingMatches}
          onChange={onToggleBillingMatches}
          className="w-4 h-4 rounded text-terracotta-flame accent-terracotta-flame bg-surface-container-low"
        />
        <span className="font-body-sm text-body-sm text-ink-charcoal font-medium">
          Billing address matches consignment destination
        </span>
      </label>
    </div>
  );
};

export default CheckoutShippingForm;
