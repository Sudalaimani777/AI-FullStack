import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ContactDetailsCardProps {
  email: string;
  phone: string;
  onEmailChange: (v: string) => void;
  onPhoneChange: (v: string) => void;
}

export const ContactDetailsCard: React.FC<ContactDetailsCardProps> = ({
  email,
  phone,
  onEmailChange,
  onPhoneChange,
}) => {
  return (
    <div
      className="bg-white border border-[#e7e3dc] flex flex-col gap-[20px] p-[24px] rounded-[18px] shadow-[0px_8px_28px_0px_rgba(47,38,18,0.05)] w-full"
      data-node-id="53:828"
      data-name="Settings card"
    >
      <div
        className="flex flex-col gap-[6px] items-start w-full"
        data-node-id="53:829"
        data-name="Card heading"
      >
        <h3
          className="font-semibold text-[#24221f] text-[20px]"
          data-node-id="53:830"
        >
          <span className="hidden md:inline">Contact details</span>
          <span className="inline md:hidden">Account &amp; contact</span>
        </h3>
        <p
          className="hidden md:block text-[#77736c] text-[13px] leading-[1.45]"
          data-node-id="53:831"
        >
          We’ll only use these details for account updates.
        </p>
      </div>

      <div className="flex flex-col gap-[8px] w-full" data-node-id="53:832">
        <label className="font-semibold text-[#24221f] text-[13px]" data-node-id="53:833">
          Email address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="Enter your email address"
          className="bg-white border border-[#e7e3dc] h-[46px] md:h-[50px] px-[14px] rounded-[12px] text-[#24221f] placeholder:text-[#a39d94] text-[15px] outline-none focus:border-[#24221f] transition-colors"
          data-node-id="53:834"
        />
      </div>

      <div className="flex flex-col gap-[8px] w-full" data-node-id="53:836">
        <label className="font-semibold text-[#24221f] text-[13px]" data-node-id="53:837">
          Phone number
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          placeholder="+1 (555) 000-0000"
          className="bg-white border border-[#e7e3dc] h-[46px] md:h-[50px] px-[14px] rounded-[12px] text-[#24221f] placeholder:text-[#a39d94] text-[15px] outline-none focus:border-[#24221f] transition-colors"
          data-node-id="53:838"
        />
      </div>

      {/* Verification status pill on mobile (Node 53:951) */}
      {email && (
        <div
          className="flex md:hidden gap-[8px] items-center w-full"
          data-node-id="53:951"
          data-name="Verification"
        >
          <CheckCircle2 className="w-[16px] h-[16px] text-[#247a57]" />
          <span
            className="font-semibold text-[#247a57] text-[12px]"
            data-node-id="53:953"
          >
            Email verified
          </span>
        </div>
      )}
    </div>
  );
};

export default ContactDetailsCard;
