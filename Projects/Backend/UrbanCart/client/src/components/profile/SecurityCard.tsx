import React from 'react';
import { LockKeyhole, ShieldCheck } from 'lucide-react';
import { ProfileSwitch } from './ProfileSwitch';

interface SecurityCardProps {
  twoStepVerification: boolean;
  onTwoStepVerificationChange: (v: boolean) => void;
  onPasswordChange?: () => void;
  onSignOutAll?: () => void;
}

export const SecurityCard: React.FC<SecurityCardProps> = ({
  twoStepVerification,
  onTwoStepVerificationChange,
  onPasswordChange,
  onSignOutAll,
}) => {
  return (
    <div
      className="bg-white border border-[#e7e3dc] flex flex-col gap-[20px] p-[24px] rounded-[18px] shadow-[0px_8px_28px_0px_rgba(47,38,18,0.05)] w-full"
      data-node-id="53:869"
      data-name="Settings card"
    >
      <div
        className="flex flex-col gap-[6px] items-start w-full"
        data-node-id="53:870"
        data-name="Card heading"
      >
        <h3
          className="font-semibold text-[#24221f] text-[20px]"
          data-node-id="53:871"
        >
          Security
        </h3>
        <p
          className="hidden md:block text-[#77736c] text-[13px] leading-[1.45]"
          data-node-id="53:872"
        >
          Protect your account and sign-in activity.
        </p>
      </div>

      {/* Password Row */}
      <div
        className="flex gap-[10px] md:gap-[12px] items-center w-full"
        data-node-id="53:873"
        data-name="Security item"
      >
        <div
          className="shrink-0 size-[18px] md:size-[20px] text-[#24221f]"
          data-node-id="53:1010"
        >
          <LockKeyhole className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
        </div>
        <div className="flex flex-1 flex-col gap-[2px] md:gap-[3px] items-start min-w-0" data-node-id="53:875">
          <span className="font-semibold text-[#24221f] text-[15px]" data-node-id="53:876">
            Password
          </span>
          <span className="text-[#77736c] text-[12px]" data-node-id="53:877">
            <span className="hidden md:inline">Manage your account password</span>
            <span className="inline md:hidden">Manage password</span>
          </span>
        </div>
        <button
          type="button"
          onClick={onPasswordChange}
          className="hidden md:flex bg-white border border-[#e7e3dc] hover:border-[#24221f] text-[#24221f] h-[46px] items-center justify-center px-[18px] rounded-[999px] font-semibold text-[15px] transition-colors cursor-pointer"
          data-node-id="53:878"
        >
          Change
        </button>
        <button
          type="button"
          onClick={onPasswordChange}
          className="flex md:hidden font-semibold text-[#e85d3f] text-[13px] hover:underline"
          data-node-id="53:989"
        >
          Change
        </button>
      </div>

      {/* Two-step verification */}
      <div
        className="flex gap-[12px] items-center w-full"
        data-node-id="53:880"
        data-name="Preference"
      >
        <div
          className="bg-[#fde9e2] flex items-center justify-center rounded-[12px] shrink-0 size-[40px] text-[#e85d3f]"
          data-node-id="53:881"
        >
          <ShieldCheck className="w-[18px] h-[18px]" />
        </div>
        <div className="flex flex-1 flex-col gap-[3px] items-start min-w-0" data-node-id="53:883">
          <span className="font-semibold text-[#24221f] text-[15px]" data-node-id="53:884">
            Two-step verification
          </span>
          <span className="text-[#77736c] text-[12px] leading-[1.4]" data-node-id="53:885">
            <span className="hidden md:inline">Add extra protection when you sign in.</span>
            <span className="inline md:hidden">Extra protection at sign in.</span>
          </span>
        </div>
        <ProfileSwitch
          checked={twoStepVerification}
          onChange={onTwoStepVerificationChange}
          ariaLabel="Toggle two-step verification"
        />
      </div>

      {/* Sign out Action */}
      <div
        className="flex items-start w-full pt-1 md:pt-2"
        data-node-id="53:888"
        data-name="Sign out action"
      >
        <button
          type="button"
          onClick={onSignOutAll}
          className="w-full md:w-auto bg-white border border-[#b53c32] hover:bg-rose-50 text-[#b53c32] flex h-[46px] items-center justify-center px-[18px] rounded-[999px] font-semibold text-[15px] transition-colors cursor-pointer"
          data-node-id="53:889"
        >
          Sign out of all devices
        </button>
      </div>
    </div>
  );
};

export default SecurityCard;
