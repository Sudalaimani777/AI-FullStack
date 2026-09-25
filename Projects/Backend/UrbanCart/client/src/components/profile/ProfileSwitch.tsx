import React from 'react';

interface ProfileSwitchProps {
  checked: boolean;
  onChange: (val: boolean) => void;
  ariaLabel?: string;
}

export const ProfileSwitch: React.FC<ProfileSwitchProps> = ({
  checked,
  onChange,
  ariaLabel,
}) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    aria-label={ariaLabel}
    onClick={() => onChange(!checked)}
    className={`w-[44px] h-[26px] flex items-center rounded-full p-1 cursor-pointer transition-colors duration-200 ease-in-out shrink-0 ${
      checked ? 'bg-[#e85d3f]' : 'bg-[#d8d1c7]'
    }`}
  >
    <div
      className={`bg-white w-[18px] h-[18px] rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
        checked ? 'translate-x-[18px]' : 'translate-x-0'
      }`}
    />
  </button>
);

export default ProfileSwitch;
