import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarBrandProps {
  variant?: 'desktop' | 'mobile' | 'responsive';
  className?: string;
}

export const NavbarBrand: React.FC<NavbarBrandProps> = ({
  variant = 'responsive',
  className = '',
}) => {
  const isMobileOnly = variant === 'mobile';
  const isDesktopOnly = variant === 'desktop';

  // Mark sizing
  const markSize = isMobileOnly
    ? 'w-[30px] h-[30px]'
    : isDesktopOnly
    ? 'w-[32px] h-[32px]'
    : 'w-[30px] h-[30px] md:w-[32px] md:h-[32px]';

  const markFontSize = isMobileOnly
    ? 'text-[14px]'
    : isDesktopOnly
    ? 'text-[15px]'
    : 'text-[14px] md:text-[15px]';

  // Text sizing
  const textSize = isMobileOnly
    ? 'text-[18px]'
    : isDesktopOnly
    ? 'text-[20px]'
    : 'text-[18px] md:text-[20px]';

  const nodeId = isMobileOnly ? '18:1567' : '24:4';
  const markNodeId = isMobileOnly ? '18:1568' : '24:5';
  const textNodeId = isMobileOnly ? '18:1570' : '24:7';

  return (
    <Link
      to="/"
      className={`flex items-center gap-[8px] md:gap-[10px] shrink-0 group focus:outline-none ${className}`}
      data-node-id={nodeId}
      data-name="Brand"
      aria-label="UrbanCart Home"
    >
      <div
        className={`${markSize} rounded-[8px] bg-[#242320] flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105`}
        data-node-id={markNodeId}
        data-name="Brand mark"
      >
        <span
          className={`text-white ${markFontSize} font-normal leading-none select-none`}
          data-name="Monogram"
        >
          U
        </span>
      </div>

      <span
        className={`text-[#242320] ${textSize} font-normal tracking-[-0.01em] select-none`}
        data-node-id={textNodeId}
        data-name="Brand name"
      >
        UrbanCart
      </span>
    </Link>
  );
};

export default NavbarBrand;
