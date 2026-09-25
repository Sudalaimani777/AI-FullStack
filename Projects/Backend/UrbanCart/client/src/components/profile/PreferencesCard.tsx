import React from 'react';
import { Mail, Tag, MessageCircle } from 'lucide-react';
import { ProfileSwitch } from './ProfileSwitch';

interface PreferencesCardProps {
  productUpdates: boolean;
  offersRewards: boolean;
  smsNotifications: boolean;
  onProductUpdatesChange: (v: boolean) => void;
  onOffersRewardsChange: (v: boolean) => void;
  onSmsNotificationsChange: (v: boolean) => void;
}

export const PreferencesCard: React.FC<PreferencesCardProps> = ({
  productUpdates,
  offersRewards,
  smsNotifications,
  onProductUpdatesChange,
  onOffersRewardsChange,
  onSmsNotificationsChange,
}) => {
  return (
    <div
      className="bg-white border border-[#e7e3dc] flex flex-col gap-[20px] p-[24px] rounded-[18px] shadow-[0px_8px_28px_0px_rgba(47,38,18,0.05)] w-full"
      data-node-id="53:841"
      data-name="Settings card"
    >
      <div
        className="flex flex-col gap-[6px] items-start w-full"
        data-node-id="53:842"
        data-name="Card heading"
      >
        <h3
          className="font-semibold text-[#24221f] text-[20px]"
          data-node-id="53:843"
        >
          Preferences
        </h3>
        <p
          className="hidden md:block text-[#77736c] text-[13px] leading-[1.45]"
          data-node-id="53:844"
        >
          Choose what you hear from us.
        </p>
      </div>

      {/* Item: Product updates */}
      <div
        className="flex gap-[12px] items-center w-full"
        data-node-id="53:845"
        data-name="Preference"
      >
        <div
          className="bg-[#fde9e2] flex items-center justify-center rounded-[12px] shrink-0 size-[40px] text-[#e85d3f]"
          data-node-id="53:846"
        >
          <Mail className="w-[18px] h-[18px]" />
        </div>
        <div className="flex flex-1 flex-col gap-[3px] items-start min-w-0" data-node-id="53:848">
          <span className="font-semibold text-[#24221f] text-[15px]" data-node-id="53:849">
            Product updates
          </span>
          <span className="text-[#77736c] text-[12px] leading-[1.4]" data-node-id="53:850">
            <span className="hidden md:inline">Tips, features, and occasional announcements.</span>
            <span className="inline md:hidden">Tips and new features.</span>
          </span>
        </div>
        <ProfileSwitch
          checked={productUpdates}
          onChange={onProductUpdatesChange}
          ariaLabel="Toggle product updates"
        />
      </div>

      {/* Item: Offers & rewards */}
      <div
        className="flex gap-[12px] items-center w-full"
        data-node-id="53:853"
        data-name="Preference"
      >
        <div
          className="bg-[#fde9e2] flex items-center justify-center rounded-[12px] shrink-0 size-[40px] text-[#e85d3f]"
          data-node-id="53:854"
        >
          <Tag className="w-[18px] h-[18px]" />
        </div>
        <div className="flex flex-1 flex-col gap-[3px] items-start min-w-0" data-node-id="53:856">
          <span className="font-semibold text-[#24221f] text-[15px]" data-node-id="53:857">
            Offers &amp; rewards
          </span>
          <span className="text-[#77736c] text-[12px] leading-[1.4]" data-node-id="53:858">
            <span className="hidden md:inline">Personalized offers and member benefits.</span>
            <span className="inline md:hidden">Member benefits and offers.</span>
          </span>
        </div>
        <ProfileSwitch
          checked={offersRewards}
          onChange={onOffersRewardsChange}
          ariaLabel="Toggle offers and rewards"
        />
      </div>

      {/* Item: SMS notifications */}
      <div
        className="flex gap-[12px] items-center w-full"
        data-node-id="53:861"
        data-name="Preference"
      >
        <div
          className="bg-[#fde9e2] flex items-center justify-center rounded-[12px] shrink-0 size-[40px] text-[#e85d3f]"
          data-node-id="53:862"
        >
          <MessageCircle className="w-[18px] h-[18px]" />
        </div>
        <div className="flex flex-1 flex-col gap-[3px] items-start min-w-0" data-node-id="53:864">
          <span className="font-semibold text-[#24221f] text-[15px]" data-node-id="53:865">
            SMS notifications
          </span>
          <span className="text-[#77736c] text-[12px] leading-[1.4]" data-node-id="53:866">
            <span className="hidden md:inline">Important updates sent to your phone.</span>
            <span className="inline md:hidden">Important account updates.</span>
          </span>
        </div>
        <ProfileSwitch
          checked={smsNotifications}
          onChange={onSmsNotificationsChange}
          ariaLabel="Toggle SMS notifications"
        />
      </div>
    </div>
  );
};

export default PreferencesCard;
