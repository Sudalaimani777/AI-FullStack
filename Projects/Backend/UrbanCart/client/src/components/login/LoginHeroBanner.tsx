import React from 'react';
import { Link } from 'react-router-dom';

export const LoginHeroBanner: React.FC = () => {
  return (
    <div className="lg:hidden relative h-[224px] w-full shrink-0 overflow-hidden p-6 flex flex-col justify-between">
      <img
        src="/signin-editorial.png"
        alt="Urban lifestyle"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#161512]/20 via-[#161512]/40 to-[#161512]/85" />

      {/* Mobile Brand */}
      <Link to="/" className="relative z-10 inline-flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-[#242320] flex items-center justify-center text-white font-medium text-sm">
          U
        </div>
        <span className="text-lg font-bold text-white tracking-tight">UrbanCart</span>
      </Link>

      {/* Mobile Editorial Copy */}
      <div className="relative z-10 text-white space-y-1">
        <span className="text-[11px] uppercase tracking-wider text-white/90 font-medium">
          Curated for urban life
        </span>
        <p className="text-[26px] font-normal leading-[1.08] tracking-tight">
          Good things, worth coming back to.
        </p>
        <p className="text-[11px] text-white/80 leading-snug line-clamp-2">
          Independent labels, everyday essentials, and considered objects—delivered with less noise.
        </p>
      </div>
    </div>
  );
};
