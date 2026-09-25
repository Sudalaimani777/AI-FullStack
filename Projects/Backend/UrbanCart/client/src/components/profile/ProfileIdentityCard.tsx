import React from 'react';
import { User } from 'lucide-react';

interface ProfileIdentityCardProps {
  name: string;
  email: string;
  avatarSrc?: string;
  memberSince?: string;
  onEditPhoto?: () => void;
}

export const ProfileIdentityCard: React.FC<ProfileIdentityCardProps> = ({
  name,
  email,
  avatarSrc,
  memberSince,
  onEditPhoto,
}) => {
  // Generate initials if no avatar
  const initials = name
    ? name
        .trim()
        .split(' ')
        .filter(Boolean)
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : '';

  return (
    <div
      className="bg-[#fff8f3] flex flex-col md:flex-row gap-[14px] md:gap-[24px] items-center p-[22px] md:p-[28px] rounded-[18px] md:rounded-[20px] w-full"
      data-node-id="53:796"
      data-name="Profile identity"
    >
      {/* Avatar */}
      <div
        className="border-4 border-solid border-white rounded-[999px] shrink-0 size-[104px] overflow-hidden shadow-sm relative flex items-center justify-center bg-[#ede8e0]"
        data-node-id="53:797"
        data-name="Avatar"
      >
        {avatarSrc ? (
          <img
            alt={name || 'User avatar'}
            className="object-cover size-full"
            src={avatarSrc}
          />
        ) : initials ? (
          <span className="text-[#24221f] font-bold text-[32px] select-none tracking-tight">
            {initials}
          </span>
        ) : (
          <User className="w-12 h-12 text-[#a39d94]" />
        )}
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
          {name || 'Account'}
        </h2>
        {(email || memberSince) && (
          <p className="text-[#77736c] text-[13px] md:text-[15px]" data-node-id="53:800">
            <span className="hidden md:inline">
              {email}
              {email && memberSince ? ` · Member since ${memberSince}` : memberSince ? `Member since ${memberSince}` : ''}
            </span>
            <span className="inline md:hidden">{email || (memberSince ? `Member since ${memberSince}` : '')}</span>
          </p>
        )}
        <div
          className="bg-[#fde9e2] px-[10px] py-[5px] rounded-[999px] mt-1 inline-flex items-center"
          data-node-id="53:801"
          data-name="Status"
        >
          <span
            className="font-semibold text-[#c94228] text-[12px]"
            data-node-id="53:802"
          >
            Active account
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
