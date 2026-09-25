import React from 'react';
import {
  LoginHeroBanner,
  LoginBrandHeader,
  LoginForm,
  LoginFooter,
  LoginEditorialPanel,
} from '../components/login';

const SigninPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#ede8e0] lg:flex items-stretch font-sans">
      {/* Container for mobile card or desktop full screen */}
      <div className="max-w-[420px] lg:max-w-none mx-auto lg:mx-0 w-full lg:w-1/2 bg-[#fbf9f5] flex flex-col justify-between overflow-hidden shadow-xl lg:shadow-none min-h-screen">
        {/* MOBILE ONLY: Top Editorial Hero Banner (Figma 11:295) */}
        <LoginHeroBanner />

        {/* DESKTOP ONLY: Brand Header (Figma 3:234) */}
        <LoginBrandHeader />

        {/* Auth Form Content (Mobile 11:295 & Desktop 3:234) */}
        <LoginForm />

        {/* Sub-footer */}
        <LoginFooter />
      </div>

      {/* DESKTOP ONLY: Right Column Editorial Panel (Figma 3:234) */}
      <LoginEditorialPanel />
    </div>
  );
};

export default SigninPage;