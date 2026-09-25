import React from 'react';
import { NavbarDesktop, NavbarMobile } from '../navbar';
import type { NavbarProps } from '../navbar';

/**
 * Responsive Navbar layout component
 * - Desktop View (md: >= 768px): Figma Node 24:41 ("Navbar / Desktop")
 * - Mobile View (< 768px): Figma Node 18:1566 ("Navbar / Mobile")
 */
export const Navbar: React.FC<NavbarProps> = ({
  className = '',
  onSearchClick,
  navLinks,
}) => {
  return (
    <header className={`sticky top-0 z-50 w-full ${className}`}>
      {/* Desktop Navigation (min-width: 768px) */}
      <div className="hidden md:block">
        <NavbarDesktop onSearchClick={onSearchClick} navLinks={navLinks} />
      </div>

      {/* Mobile Navigation (under 768px) */}
      <div className="block md:hidden">
        <NavbarMobile onSearchClick={onSearchClick} navLinks={navLinks} />
      </div>
    </header>
  );
};

export default Navbar;