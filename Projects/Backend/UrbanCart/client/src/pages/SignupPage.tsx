import React from 'react';
import {
  RegisterHeroBanner,
  RegisterBrandHeader,
  RegisterForm,
  RegisterFooter,
  RegisterEditorialPanel,
} from '../components/register';

const SignupPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#ede8e0] lg:flex items-stretch font-sans">
      {/* Container for mobile card or desktop full screen */}
      <div className="max-w-[420px] lg:max-w-none mx-auto lg:mx-0 w-full lg:w-1/2 bg-[#fbf9f5] flex flex-col justify-between overflow-hidden shadow-xl lg:shadow-none min-h-screen">
        {/* MOBILE ONLY: Top Editorial Hero Banner (Figma 11:340) */}
        <RegisterHeroBanner />

        {/* DESKTOP ONLY: Brand Header (Figma 3:281) */}
        <RegisterBrandHeader />

        {/* Auth Form Content (Mobile 11:340 & Desktop 3:281) */}
        <RegisterForm />

        {/* Sub-footer */}
        <RegisterFooter />
      </div>

      {/* DESKTOP ONLY: Right Column Editorial Panel (Figma 3:281) */}
      <RegisterEditorialPanel />
    </div>
  );
};

export default SignupPage;