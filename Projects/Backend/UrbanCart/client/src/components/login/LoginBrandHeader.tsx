import React from 'react';
import { Link } from 'react-router-dom';

export const LoginBrandHeader: React.FC = () => {
  return (
    <div className="hidden lg:block pt-10 px-12 xl:px-24">
      <Link to="/" className="inline-flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-lg bg-[#242320] flex items-center justify-center text-white font-medium text-sm">
          U
        </div>
        <span className="text-xl font-bold text-[#242320] tracking-tight">UrbanCart</span>
      </Link>
    </div>
  );
};
