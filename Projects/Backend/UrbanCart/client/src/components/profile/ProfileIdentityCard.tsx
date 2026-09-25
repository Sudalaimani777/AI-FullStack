import React from 'react';

interface ProfileIdentityCardProps {
  name: string;
  email: string;
  avatarSrc: string;
  memberSince?: string;
  onEditPhoto?: () => void;
}

export const ProfileIdentityCard: React.FC<ProfileIdentityCardProps> = ({
  name,
  email,
  avatarSrc,
  memberSince = '2023',
  onEditPhoto,
}) => {
  return (
    <div
      className="bg-[#fff8f3] flex flex-col md:flex-row gap-[14px] md:gap-[24px] items-center p-[22px] md:p-[28px] rounded-[18px] md:rounded-[20px] w-full"
      data-node-id="53:796"
      data-name="Profile identity"
    >
      {/* Avatar (Node 53:797) */}
      <div
        className="border-4 border-solid border-white rounded-[999px] shrink-0 size-[104px] overflow-hidden shadow-sm relative"
        data-node-id="53:797"
        data-name="Avatar"
      >
        <img
          alt={name}
          className="object-cover size-full"
          src={avatarSrc}
        />
      </div>

      {/* Identity Details */}
      <div
        className="flex flex-1 flex-col gap-[4px] md:gap-[6px] items-center md:items-start text-center md:text-left min-w-0"
        data-node-id="53:798"
        data-name="Identity copy"
      >
        <h2
          className="font-bold text-[#24221f] text-[24px] md:text-[28px] leading-snug"
          data-node-id="53:799"
        >
          {name}
        </h2>
        <p className="text-[#77736c] text-[13px] md:text-[15px]" data-node-id="53:800">
          <span className="hidden md:inline">{email} · Member since {memberSince}</span>
          <span className="inline md:hidden">{email}</span>
        </p>
        <div
          className="bg-[#fde9e2] px-[10px] py-[5px] rounded-[999px] mt-1 inline-flex items-center"
          data-node-id="53:801"
          data-name="Status"
        >
          <span
            className="font-semibold text-[#c94228] text-[12px]"
            data-node-id="53:802"
          >
            Verified account
          </span>
        </div>
      </div>

      {/* Change Photo Action */}
      <button
        type="button"
        onClick={onEditPhoto}
        className="bg-white border border-[#e7e3dc] hover:border-[#24221f] text-[#24221f] flex h-[46px] items-center justify-center px-[18px] rounded-[999px] font-semibold text-[15px] transition-colors cursor-pointer shrink-0 mt-1 md:mt-0"
        data-node-id="53:803"
        data-name="Button"
      >
        <span className="hidden md:inline">Change photo</span>
        <span className="inline md:hidden">Edit photo</span>
      </button>
    </div>
  );
};

export default ProfileIdentityCard;
