import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search,
  ShoppingBag,
  Menu,
  Heart,
  HelpCircle,
  UserRound,
} from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { useAuthStore } from '../../store/useAuthStore';
import type { NavbarMobileProps } from './types';

// ============================================================================
// Exact Figma Component: ❖ Navbar / Mobile / Menu Open (Symbol ID: 35:280)
// ============================================================================
export interface NavbarMobileMenuOpenProps {
  className?: string;
  onClose?: () => void;
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
  onSearchSubmit?: (e: React.FormEvent) => void;
}

export const NavbarMobileMenuOpen: React.FC<NavbarMobileMenuOpenProps> = ({
  className = '',
  onClose,
  searchQuery = '',
  onSearchChange,
  onSearchSubmit,
}) => {
  const [internalQuery, setInternalQuery] = useState(searchQuery);
  const navigate = useNavigate();
  const totalCartItems = useCartStore((state) => state.getTotalItems());
  const { user } = useAuthStore();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(e);
    } else if (internalQuery.trim()) {
      onClose?.();
      navigate(`/#search?q=${encodeURIComponent(internalQuery.trim())}`);
    }
  };

  return (
    <div
      className={`bg-[#fbf9f5] flex flex-col w-full max-w-[390px] mx-auto min-h-screen relative shadow-[0px_10px_28px_0px_rgba(36,35,32,0.08)] ${className}`}
      data-node-id="35:280"
      data-name="Navbar / Mobile / Menu Open"
    >
      {/* ------------------------------------------------------------- */}
      {/* Top Mobile Navbar (Node 31:4)                                 */}
      {/* ------------------------------------------------------------- */}
      <div
        className="bg-[#fbf9f5] flex flex-col items-start shrink-0 w-full"
        data-node-id="31:4"
        data-name="Mobile navbar"
      >
        {/* Navigation Bar (Node 31:5 - 68px height) */}
        <div
          className="border-[#d8d1c7] border-b border-solid flex h-[68px] items-center justify-between px-[20px] shrink-0 w-full"
          data-node-id="31:5"
          data-name="Navigation bar"
        >
          {/* Brand (Node 31:6) */}
          <Link
            to="/"
            onClick={onClose}
            className="flex gap-[8px] items-center shrink-0 focus:outline-none"
            data-node-id="31:6"
            data-name="Brand"
          >
            {/* Brand mark (Node 31:7 - 30x30px rounded-8px) */}
            <div
              className="bg-[#242320] flex flex-col items-center justify-center rounded-[8px] shrink-0 size-[30px]"
              data-node-id="31:7"
              data-name="Brand mark"
            >
              <span
                className="font-normal text-[14px] text-white leading-none select-none"
                data-node-id="31:8"
              >
                U
              </span>
            </div>
            {/* Brand name (Node 31:9) */}
            <span
              className="font-normal text-[#242320] text-[18px] tracking-tight select-none"
              data-node-id="31:9"
            >
              UrbanCart
            </span>
          </Link>

          {/* Utilities (Node 31:10) */}
          <div
            className="flex gap-[16px] items-center shrink-0"
            data-node-id="31:10"
            data-name="Utilities"
          >
            {/* Search (Node 31:11) */}
            <button
              type="button"
              className="shrink-0 size-[20px] text-[#242320] hover:text-[#e45a2a] transition-colors p-0"
              data-node-id="31:11"
              data-name="Search"
              aria-label="Search"
            >
              <Search className="w-[20px] h-[20px] stroke-[1.8]" />
            </button>

            {/* Shopping bag (Node 31:13) */}
            <Link
              to="/cart"
              onClick={onClose}
              className="relative shrink-0 text-[#242320] hover:text-[#e45a2a] transition-colors"
              data-node-id="31:13"
              data-name="Shopping bag"
              aria-label={`Cart with ${totalCartItems} items`}
            >
              <ShoppingBag className="w-[24px] h-[24px] stroke-[1.8]" />
              {/* Shopping bag orange dot tag at top right as in Figma */}
              <span className="absolute -top-0.5 -right-0.5 w-[6px] h-[6px] rounded-full bg-[#e45a2a]" />
            </Link>

            {/* Menu icon (Node 31:16) */}
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 size-[22px] text-[#242320] hover:text-[#e45a2a] transition-colors p-0"
              data-node-id="31:16"
              data-name="Menu"
              aria-label="Menu"
            >
              <Menu className="w-[22px] h-[22px] stroke-[1.8]" />
            </button>
          </div>
        </div>

        {/* Search Region (Node 31:18 - 46px input) */}
        <div
          className="flex flex-col items-start px-[20px] py-[14px] shrink-0 w-full"
          data-node-id="31:18"
          data-name="Search region"
        >
          <form
            onSubmit={handleSearchSubmit}
            className="bg-white border border-[#d8d1c7] flex gap-[10px] h-[46px] items-center px-[14px] rounded-[12px] shrink-0 w-full focus-within:border-[#242320] transition-colors"
            data-node-id="31:19"
            data-name="Search input"
          >
            <div
              className="shrink-0 size-[18px] text-[#a39d94]"
              data-node-id="31:20"
              data-name="Search"
            >
              <Search className="w-[18px] h-[18px] stroke-[1.8]" />
            </div>
            <input
              type="text"
              value={internalQuery}
              onChange={(e) => {
                setInternalQuery(e.target.value);
                onSearchChange?.(e.target.value);
              }}
              placeholder="Search brands, products, and categories"
              className="flex-1 min-w-0 bg-transparent text-[#242320] placeholder:text-[#a39d94] text-[13px] font-normal outline-none"
              data-node-id="31:22"
            />
          </form>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* Menu Panel (Node 35:231)                                      */}
      {/* ------------------------------------------------------------- */}
      <div
        className="bg-[#fbf9f5] flex flex-1 flex-col gap-[20px] items-start px-[20px] py-[24px] w-full"
        data-node-id="35:231"
        data-name="Menu panel"
      >
        {/* Menu Header (Node 36:23) */}
        <div
          className="flex items-center justify-between shrink-0 w-full"
          data-node-id="36:23"
          data-name="Menu header"
        >
          {/* Menu Title (Node 36:24) */}
          <h2
            className="font-semibold text-[#242320] text-[24px] leading-normal"
            data-node-id="36:24"
          >
            Menu
          </h2>

          {/* Close button (Node 36:25 - 40x40px rounded-12px white square) */}
          <button
            type="button"
            onClick={onClose}
            className="bg-white border border-[#d8d1c7] flex items-center justify-center rounded-[12px] shrink-0 size-[40px] text-[#242320] hover:bg-neutral-100 transition-colors"
            data-node-id="36:25"
            data-name="Close button"
            aria-label="Close menu"
          >
            <span
              className="font-light text-[24px] leading-none select-none"
              data-node-id="36:26"
            >
              ×
            </span>
          </button>
        </div>

        {/* Primary Navigation (Node 36:27) */}
        <div
          className="flex flex-col gap-[8px] items-start shrink-0 w-full"
          data-node-id="36:27"
          data-name="Primary navigation"
        >
          {/* Section label (Node 36:28) */}
          <div
            className="flex items-start pb-[8px] shrink-0 w-full"
            data-node-id="36:28"
            data-name="Section label"
          >
            <span
              className="font-semibold text-[#a39d94] text-[11px] uppercase tracking-wider"
              data-node-id="36:29"
            >
              Shop by category
            </span>
          </div>

          {/* Card 1: New in - Active (Node 36:30) */}
          <Link
            to="/#new-in"
            onClick={onClose}
            className="bg-white border border-[#d8d1c7] flex items-center justify-between px-[16px] py-[14px] rounded-[14px] shrink-0 w-full hover:border-[#e45a2a] transition-colors group"
            data-node-id="36:30"
            data-name="Navigation item - Active"
          >
            <div
              className="flex gap-[10px] items-center shrink-0"
              data-node-id="36:31"
              data-name="Label group"
            >
              <span
                className="font-semibold text-[#e45a2a] text-[18px]"
                data-node-id="36:33"
              >
                New in
              </span>
              <span
                className="size-[8px] rounded-full bg-[#e45a2a] shrink-0 inline-block"
                data-node-id="36:32"
                data-name="Active indicator"
              />
            </div>
            <div
              className="flex gap-[8px] items-center shrink-0"
              data-node-id="36:34"
              data-name="Item action"
            >
              <span
                className="font-semibold text-[#a39d94] text-[10px] uppercase tracking-wider"
                data-node-id="36:35"
              >
                Just landed
              </span>
              <span
                className="font-normal text-[#242320] text-[18px] group-hover:translate-x-0.5 transition-transform"
                data-node-id="36:36"
              >
                →
              </span>
            </div>
          </Link>

          {/* Card 2: Women (Node 36:37) */}
          <Link
            to="/#women"
            onClick={onClose}
            className="bg-white border border-[#d8d1c7] flex items-center justify-between px-[16px] py-[14px] rounded-[14px] shrink-0 w-full hover:border-[#242320] transition-colors group"
            data-node-id="36:37"
            data-name="Navigation item"
          >
            <span
              className="font-medium text-[#242320] text-[18px]"
              data-node-id="36:38"
            >
              Women
            </span>
            <span
              className="font-normal text-[#242320] text-[18px] group-hover:translate-x-0.5 transition-transform"
              data-node-id="36:39"
            >
              →
            </span>
          </Link>

          {/* Card 3: Men (Node 36:40) */}
          <Link
            to="/#men"
            onClick={onClose}
            className="bg-white border border-[#d8d1c7] flex items-center justify-between px-[16px] py-[14px] rounded-[14px] shrink-0 w-full hover:border-[#242320] transition-colors group"
            data-node-id="36:40"
            data-name="Navigation item"
          >
            <span
              className="font-medium text-[#242320] text-[18px]"
              data-node-id="36:41"
            >
              Men
            </span>
            <span
              className="font-normal text-[#242320] text-[18px] group-hover:translate-x-0.5 transition-transform"
              data-node-id="36:42"
            >
              →
            </span>
          </Link>

          {/* Card 4: Home (Node 36:43) */}
          <Link
            to="/#home"
            onClick={onClose}
            className="bg-white border border-[#d8d1c7] flex items-center justify-between px-[16px] py-[14px] rounded-[14px] shrink-0 w-full hover:border-[#242320] transition-colors group"
            data-node-id="36:43"
            data-name="Navigation item"
          >
            <span
              className="font-medium text-[#242320] text-[18px]"
              data-node-id="36:44"
            >
              Home
            </span>
            <span
              className="font-normal text-[#242320] text-[18px] group-hover:translate-x-0.5 transition-transform"
              data-node-id="36:45"
            >
              →
            </span>
          </Link>

          {/* Card 5: Beauty (Node 36:46) */}
          <Link
            to="/#beauty"
            onClick={onClose}
            className="bg-white border border-[#d8d1c7] flex items-center justify-between px-[16px] py-[14px] rounded-[14px] shrink-0 w-full hover:border-[#242320] transition-colors group"
            data-node-id="36:46"
            data-name="Navigation item"
          >
            <span
              className="font-medium text-[#242320] text-[18px]"
              data-node-id="36:47"
            >
              Beauty
            </span>
            <span
              className="font-normal text-[#242320] text-[18px] group-hover:translate-x-0.5 transition-transform"
              data-node-id="36:48"
            >
              →
            </span>
          </Link>
        </div>

        {/* Featured Link (Node 36:49 - Beige card #ede8e0) */}
        <Link
          to="/#deals"
          onClick={onClose}
          className="bg-[#ede8e0] flex items-center justify-between px-[18px] py-[16px] rounded-[14px] shrink-0 w-full hover:bg-[#e4dec2] transition-colors group"
          data-node-id="36:49"
          data-name="Featured link"
        >
          <div
            className="flex flex-col gap-[4px] items-start shrink-0 font-semibold"
            data-node-id="36:50"
            data-name="Featured copy"
          >
            <span
              className="text-[#e45a2a] text-[10px] uppercase tracking-wider"
              data-node-id="36:51"
            >
              Today's edit
            </span>
            <span
              className="text-[#242320] text-[16px]"
              data-node-id="36:52"
            >
              Deals worth a look
            </span>
          </div>
          <span
            className="font-normal text-[#242320] text-[20px] group-hover:translate-x-0.5 transition-transform"
            data-node-id="36:53"
          >
            →
          </span>
        </Link>

        {/* Account / Quick Links (Node 36:54 - 3-column cards) */}
        <div
          className="grid grid-cols-3 gap-[10px] shrink-0 w-full text-[#242320]"
          data-node-id="36:54"
          data-name="Account links"
        >
          {/* Card 1: Sign in / Account (Node 36:55) */}
          <Link
            to={user ? '/profile' : '/signin'}
            onClick={onClose}
            className="bg-white border border-[#d8d1c7] flex flex-col justify-between h-[90px] p-[14px] rounded-[14px] hover:border-[#242320] transition-colors"
            data-node-id="36:55"
            data-name="Quick link - Account"
          >
            <div className="flex justify-center w-full">
              <UserRound className="w-[20px] h-[20px] text-[#242320] stroke-[1.6]" />
            </div>
            <span
              className="font-medium text-[13px] leading-tight text-center w-full"
              data-node-id="36:57"
            >
              {user ? user.user_name || 'Account' : 'Sign in / Account'}
            </span>
          </Link>

          {/* Card 2: Saved items (Node 36:58) */}
          <Link
            to="/#saved"
            onClick={onClose}
            className="bg-white border border-[#d8d1c7] flex flex-col justify-between h-[90px] p-[14px] rounded-[14px] hover:border-[#242320] transition-colors"
            data-node-id="36:58"
            data-name="Quick link - Saved"
          >
            <div className="flex justify-center w-full">
              <Heart className="w-[20px] h-[20px] text-[#242320] stroke-[1.6]" />
            </div>
            <span
              className="font-medium text-[13px] leading-tight text-center w-full"
              data-node-id="36:60"
            >
              Saved items
            </span>
          </Link>

          {/* Card 3: Help & delivery (Node 36:61) */}
          <Link
            to="/#help"
            onClick={onClose}
            className="bg-white border border-[#d8d1c7] flex flex-col justify-between h-[90px] p-[14px] rounded-[14px] hover:border-[#242320] transition-colors"
            data-node-id="36:61"
            data-name="Quick link - Help"
          >
            <div className="flex justify-center w-full">
              <HelpCircle className="w-[20px] h-[20px] text-[#242320] stroke-[1.6]" />
            </div>
            <span
              className="font-medium text-[13px] leading-tight text-center w-full"
              data-node-id="36:63"
            >
              Help & delivery
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Interactive NavbarMobile (Switches to MenuOpen when hamburger is tapped)
// ============================================================================
export const NavbarMobile: React.FC<NavbarMobileProps> = ({
  className = '',
  showSearchField = false,
  onSearchClick,
  searchQuery = '',
  onSearchChange,
  onSearchSubmit,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const totalCartItems = useCartStore((state) => state.getTotalItems());

  // Prevent background scroll when menu is active
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // If menu is open, render the exact Figma "Navbar / Mobile / Menu Open" overlay
  if (menuOpen) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#fbf9f5] animate-in fade-in duration-150">
        <NavbarMobileMenuOpen
          onClose={() => setMenuOpen(false)}
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          onSearchSubmit={onSearchSubmit}
        />
      </div>
    );
  }

  // Normal closed state: Top mobile navbar (68px) + optional search field
  return (
    <div
      className={`w-full bg-[#fbf9f5] ${className}`}
      data-node-id="31:23"
      data-name="Navbar / Mobile"
    >
      {/* 68px Navigation Bar */}
      <header className="h-[68px] border-b border-[#d8d1c7] px-[20px] flex items-center justify-between relative bg-[#fbf9f5]">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-[8px] shrink-0 focus:outline-none"
          data-node-id="31:6"
          data-name="Brand"
        >
          <div
            className="w-[30px] h-[30px] rounded-[8px] bg-[#242320] flex items-center justify-center shrink-0"
            data-node-id="31:7"
            data-name="Brand mark"
          >
            <span
              className="text-white text-[14px] font-normal leading-none select-none"
              data-node-id="31:8"
            >
              U
            </span>
          </div>
          <span
            className="text-[#242320] text-[18px] font-normal tracking-tight select-none"
            data-node-id="31:9"
          >
            UrbanCart
          </span>
        </Link>

        {/* Utilities */}
        <div
          className="flex items-center gap-[16px] shrink-0"
          data-node-id="31:10"
          data-name="Utilities"
        >
          {/* Search Trigger */}
          <button
            type="button"
            onClick={onSearchClick || (() => setMenuOpen(true))}
            className="text-[#242320] hover:text-[#e45a2a] transition-colors p-1"
            data-node-id="31:11"
            data-name="Search"
            aria-label="Search"
          >
            <Search className="w-[20px] h-[20px] stroke-[1.8]" />
          </button>

          {/* Shopping Bag / Cart */}
          <Link
            to="/cart"
            className="relative text-[#242320] hover:text-[#e45a2a] transition-colors p-1"
            data-node-id="31:13"
            data-name="Shopping bag"
            aria-label={`Shopping cart with ${totalCartItems} items`}
          >
            <ShoppingBag className="w-[24px] h-[24px] stroke-[1.8]" />
            <span className="absolute top-0 right-0 w-[6px] h-[6px] rounded-full bg-[#e45a2a]" />
          </Link>

          {/* Hamburger Menu Toggle (Opens Navbar / Mobile / Menu Open) */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="text-[#242320] hover:text-[#e45a2a] transition-colors p-1"
            data-node-id="31:16"
            data-name="Menu"
            aria-label="Open menu"
            aria-expanded={false}
          >
            <Menu className="w-[22px] h-[22px] stroke-[1.8]" />
          </button>
        </div>
      </header>

      {/* Optional Search Region */}
      {showSearchField && (
        <div
          className="px-[20px] py-[14px] bg-[#fbf9f5]"
          data-node-id="31:18"
          data-name="Search region"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearchSubmit?.(e);
            }}
            className="bg-white border border-[#d8d1c7] flex items-center gap-[10px] h-[46px] px-[14px] rounded-[12px] w-full focus-within:border-[#242320] transition-colors"
            data-node-id="31:19"
            data-name="Search input"
          >
            <Search className="w-[18px] h-[18px] text-[#a39d94] shrink-0" data-node-id="31:20" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Search brands, products, and categories"
              className="w-full bg-transparent text-[13px] text-[#242320] placeholder:text-[#a39d94] outline-none"
              data-node-id="31:22"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default NavbarMobile;
