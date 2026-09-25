import React, { useState } from 'react';

interface PersonalInfoCardProps {
  fullName: string;
  displayName: string;
  onFullNameChange: (v: string) => void;
  onDisplayNameChange: (v: string) => void;
}

export const PersonalInfoCard: React.FC<PersonalInfoCardProps> = ({
  fullName,
  displayName,
  onFullNameChange,
  onDisplayNameChange,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div
      className="bg-white border border-[#e7e3dc] flex flex-col gap-[20px] p-[24px] rounded-[18px] shadow-[0px_8px_28px_0px_rgba(47,38,18,0.05)] w-full"
      data-node-id="53:807"
      data-name="Settings card"
    >
      <div
        className="flex flex-col gap-[6px] items-start w-full"
        data-node-id="53:808"
        data-name="Card heading"
      >
        <h3
          className="font-semibold text-[#24221f] text-[20px]"
          data-node-id="53:809"
        >
          Personal information
        </h3>
        <p
          className="hidden md:block text-[#77736c] text-[13px] leading-[1.45]"
          data-node-id="53:810"
        >
          Keep your profile details up to date.
        </p>
      </div>

      {/* Full Name field */}
      <div className="flex flex-col gap-[8px] w-full" data-node-id="53:811">
        <label className="font-semibold text-[#24221f] text-[13px]" data-node-id="53:813">
          Full name
        </label>
        <input
          type="text"
          disabled={!isEditing}
          value={fullName}
          onChange={(e) => onFullNameChange(e.target.value)}
          placeholder="Enter your full name"
          className="bg-white border border-[#e7e3dc] disabled:bg-neutral-50/50 h-[46px] md:h-[50px] px-[14px] rounded-[12px] text-[#24221f] placeholder:text-[#a39d94] text-[15px] outline-none focus:border-[#24221f] transition-colors"
          data-node-id="53:814"
        />
      </div>

      {/* Display Name Field */}
      <div className="flex flex-col gap-[8px] w-full" data-node-id="53:820">
        <label className="font-semibold text-[#24221f] text-[13px]" data-node-id="53:821">
          Display name
        </label>
        <input
          type="text"
          disabled={!isEditing}
          value={displayName}
          onChange={(e) => onDisplayNameChange(e.target.value)}
          placeholder="Enter your display name"
          className="bg-white border border-[#e7e3dc] disabled:bg-neutral-50/50 h-[46px] md:h-[50px] px-[14px] rounded-[12px] text-[#24221f] placeholder:text-[#a39d94] text-[15px] outline-none focus:border-[#24221f] transition-colors"
          data-node-id="53:822"
        />
        <span
          className="hidden md:inline text-[#77736c] text-[12px] leading-[1.4]"
          data-node-id="53:824"
        >
          This is how your name appears to other people.
        </span>
      </div>

      {/* Action Button */}
      <div className="flex md:justify-end w-full" data-node-id="53:825">
        <button
          type="button"
          onClick={() => setIsEditing(!isEditing)}
          className="w-full md:w-auto bg-white border border-[#e7e3dc] hover:border-[#24221f] text-[#24221f] flex h-[46px] items-center justify-center px-[18px] rounded-[999px] font-semibold text-[15px] transition-colors cursor-pointer"
          data-node-id="53:826"
        >
          {isEditing ? (
            'Done editing'
          ) : (
            <>
              <span className="hidden md:inline">Edit information</span>
              <span className="inline md:hidden">Edit personal details</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default PersonalInfoCard;
