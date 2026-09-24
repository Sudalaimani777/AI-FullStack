import React from 'react';

export const RegisterEditorialPanel: React.FC = () => {
  return (
    <div className="hidden lg:block lg:w-1/2 relative bg-[#242320] overflow-hidden">
      <img
        src="/signup-editorial.png"
        alt="Urban lifestyle"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#161512]/10 via-[#161512]/30 to-[#161512]/80" />

      <div className="absolute bottom-16 left-12 right-12 max-w-lg text-white space-y-3 z-10">
        <span className="text-xs uppercase tracking-widest text-white/90 font-medium">
          Curated for urban life
        </span>
        <h2 className="text-4xl xl:text-5xl font-normal leading-[1.05] tracking-tight">
          Your city. Your style. One cart.
        </h2>
        <p className="text-sm text-white/80 leading-relaxed pt-1">
          Independent labels, everyday essentials, and considered objects—delivered with less
          noise.
        </p>
      </div>
    </div>
  );
};
