import React from 'react';
import { Check } from 'lucide-react';

interface ProfileHeaderProps {
  onSave: () => void;
  saveSuccess?: boolean;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ onSave, saveSuccess }) => {
  return (
    <div
      className="flex items-end justify-between w-full"
      data-node-id="53:789"
      data-name="Page heading"
    >
      <div
        className="flex flex-col gap-[6px] md:gap-[10px] items-start max-w-[720px]"
        data-node-id="53:790"
        data-name="Heading copy"
      >
        <span
          className="hidden md:inline font-semibold text-[#e85d3f] text-[13px] tracking-[1.04px] uppercase"
          data-node-id="53:791"
        >
          Your account
        </span>
        <h1
          className="font-bold text-[#24221f] text-[32px] md:text-[44px] tracking-[-0.64px] md:tracking-[-0.88px] leading-tight"
          data-node-id="53:792"
        >
          <span className="hidden md:inline">Profile &amp; settings</span>
          <span className="inline md:hidden">Your profile</span>
        </h1>
        <p
          className="text-[#77736c] text-[13px] md:text-[15px] leading-[1.5]"
          data-node-id="53:793"
        >
          <span className="hidden md:inline">
            Manage your personal details, preferences, and account security.
          </span>
          <span className="inline md:hidden">Account and preferences</span>
        </p>
      </div>

      {/* Save Button */}
      <button
        type="button"
        onClick={onSave}
        className="bg-[#e85d3f] hover:bg-[#d44e32] text-white flex h-[46px] items-center justify-center px-[20px] md:px-[24px] rounded-[999px] font-semibold text-[15px] shadow-sm transition-all duration-150 cursor-pointer shrink-0"
        data-node-id="53:794"
        data-name="Button"
      >
        {saveSuccess ? (
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4" />
            <span className="hidden md:inline">Saved</span>
          </span>
        ) : (
          <>
            <span className="hidden md:inline">Save changes</span>
            <span className="inline md:hidden">Save</span>
          </>
        )}
      </button>
    </div>
  );
};

export default ProfileHeader;
