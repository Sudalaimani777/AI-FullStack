import React, { useState } from 'react';

interface ShippingAddressCardProps {
  streetAddress: string;
  apt: string;
  city: string;
  stateProv: string;
  zipCode: string;
  country: string;
  onStreetAddressChange: (v: string) => void;
  onAptChange: (v: string) => void;
  onCityChange: (v: string) => void;
  onStateProvChange: (v: string) => void;
  onZipCodeChange: (v: string) => void;
  onCountryChange: (v: string) => void;
}

export const ShippingAddressCard: React.FC<ShippingAddressCardProps> = ({
  streetAddress,
  apt,
  city,
  stateProv,
  zipCode,
  country,
  onStreetAddressChange,
  onAptChange,
  onCityChange,
  onStateProvChange,
  onZipCodeChange,
  onCountryChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className="bg-white border border-[#e7e3dc] flex flex-col gap-[20px] p-[24px] rounded-[18px] shadow-[0px_8px_28px_0px_rgba(47,38,18,0.05)] w-full"
      data-node-id="53:1065"
      data-name="Settings card"
    >
      <div
        className="flex flex-col gap-[6px] items-start w-full"
        data-node-id="53:1066"
        data-name="Card heading"
      >
        <h3
          className="font-semibold text-[#24221f] text-[20px]"
          data-node-id="53:1067"
        >
          Shipping address
        </h3>
        <p
          className="hidden md:block text-[#77736c] text-[13px] leading-[1.45]"
          data-node-id="53:1068"
        >
          Use this address for orders, returns, and delivery updates.
        </p>
      </div>

      {/* Street Address */}
      <div className="flex flex-col gap-[8px] w-full" data-node-id="53:1069">
        <label className="font-semibold text-[#24221f] text-[13px]" data-node-id="53:1070">
          Street address
        </label>
        <input
          type="text"
          disabled={!isEditing}
          value={streetAddress}
          onChange={(e) => onStreetAddressChange(e.target.value)}
          placeholder="Street address or P.O. Box"
          className="bg-white border border-[#e7e3dc] disabled:bg-neutral-50/50 h-[46px] md:h-[50px] px-[14px] rounded-[12px] text-[#24221f] placeholder:text-[#a39d94] text-[15px] outline-none focus:border-[#24221f] transition-colors"
          data-node-id="53:1071"
        />
      </div>

      {/* Apt / Suite */}
      <div className="flex flex-col gap-[8px] w-full" data-node-id="53:1073">
        <label className="font-semibold text-[#24221f] text-[13px]" data-node-id="53:1074">
          <span className="hidden md:inline">Apartment, suite, or floor</span>
          <span className="inline md:hidden">Apartment, suite, or unit</span>
        </label>
        <input
          type="text"
          disabled={!isEditing}
          value={apt}
          onChange={(e) => onAptChange(e.target.value)}
          placeholder="Apartment, suite, unit, floor (optional)"
          className="bg-white border border-[#e7e3dc] disabled:bg-neutral-50/50 h-[46px] md:h-[50px] px-[14px] rounded-[12px] text-[#24221f] placeholder:text-[#a39d94] text-[15px] outline-none focus:border-[#24221f] transition-colors"
          data-node-id="53:1075"
        />
      </div>

      {/* City & State / Province */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] w-full" data-node-id="53:1077">
        <div className="flex flex-col gap-[8px]" data-node-id="53:1078">
          <label className="font-semibold text-[#24221f] text-[13px]" data-node-id="53:1079">
            City
          </label>
          <input
            type="text"
            disabled={!isEditing}
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            placeholder="City"
            className="bg-white border border-[#e7e3dc] disabled:bg-neutral-50/50 h-[46px] md:h-[50px] px-[14px] rounded-[12px] text-[#24221f] placeholder:text-[#a39d94] text-[15px] outline-none focus:border-[#24221f] transition-colors"
            data-node-id="53:1080"
          />
        </div>
        <div className="flex flex-col gap-[8px]" data-node-id="53:1082">
          <label className="font-semibold text-[#24221f] text-[13px]" data-node-id="53:1083">
            State / Province
          </label>
          <input
            type="text"
            disabled={!isEditing}
            value={stateProv}
            onChange={(e) => onStateProvChange(e.target.value)}
            placeholder="State / Province / Region"
            className="bg-white border border-[#e7e3dc] disabled:bg-neutral-50/50 h-[46px] md:h-[50px] px-[14px] rounded-[12px] text-[#24221f] placeholder:text-[#a39d94] text-[15px] outline-none focus:border-[#24221f] transition-colors"
            data-node-id="53:1084"
          />
        </div>
      </div>

      {/* ZIP & Country */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] w-full" data-node-id="53:1086">
        <div className="flex flex-col gap-[8px]" data-node-id="53:1087">
          <label className="font-semibold text-[#24221f] text-[13px]" data-node-id="53:1088">
            ZIP code
          </label>
          <input
            type="text"
            disabled={!isEditing}
            value={zipCode}
            onChange={(e) => onZipCodeChange(e.target.value)}
            placeholder="ZIP / Postal code"
            className="bg-white border border-[#e7e3dc] disabled:bg-neutral-50/50 h-[46px] md:h-[50px] px-[14px] rounded-[12px] text-[#24221f] placeholder:text-[#a39d94] text-[15px] outline-none focus:border-[#24221f] transition-colors"
            data-node-id="53:1089"
          />
        </div>
        <div className="flex flex-col gap-[8px]" data-node-id="53:1091">
          <label className="font-semibold text-[#24221f] text-[13px]" data-node-id="53:1092">
            Country
          </label>
          <input
            type="text"
            disabled={!isEditing}
            value={country}
            onChange={(e) => onCountryChange(e.target.value)}
            placeholder="Country / Region"
            className="bg-white border border-[#e7e3dc] disabled:bg-neutral-50/50 h-[46px] md:h-[50px] px-[14px] rounded-[12px] text-[#24221f] placeholder:text-[#a39d94] text-[15px] outline-none focus:border-[#24221f] transition-colors"
            data-node-id="53:1093"
          />
        </div>
      </div>

      {/* Edit Address Action */}
      <div className="flex md:justify-end w-full">
        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          className="w-full md:w-auto bg-white border border-[#e7e3dc] hover:border-[#24221f] text-[#24221f] flex h-[46px] items-center justify-center px-[18px] rounded-[999px] font-semibold text-[15px] transition-colors cursor-pointer"
          data-node-id="53:1062"
        >
          {isEditing ? (
            'Done editing'
          ) : (
            <>
              <span className="hidden md:inline">Edit address</span>
              <span className="inline md:hidden">Edit shipping address</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ShippingAddressCard;
