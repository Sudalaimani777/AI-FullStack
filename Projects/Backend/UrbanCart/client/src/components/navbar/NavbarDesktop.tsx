import React from 'react';
import { Link } from 'react-router-dom';
import { Search, UserRound, ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { useAuthStore } from '../../store/useAuthStore';
import { DEFAULT_NAV_LINKS, type NavbarProps } from './types';
import { NavbarBrand } from './NavbarBrand';

export const NavbarDesktop: React.FC<NavbarProps> = ({
  className = '',
  onSearchClick,
  navLinks = DEFAULT_NAV_LINKS,
}) => {
  const totalCartItems = useCartStore((state) => state.getTotalItems());
  const { user } = useAuthStore();

  return (
    <div
      className={`w-full bg-[#fbf9f5] border-b border-[#d8d1c7] ${className}`}
      data-node-id="24:41"
      data-name="Navbar / Desktop"
    >
      <div className="max-w-[1440px] mx-auto h-[84px] px-6 sm:px-10 lg:px-[64px] flex items-center justify-between">
        {/* Brand */}
        <NavbarBrand variant="desktop" />

        {/* Primary Desktop Navigation (Node 24:8) */}
        <nav
          className="flex items-center gap-[32px] shrink-0"
          data-node-id="24:8"
          data-name="Primary navigation"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`flex items-center gap-[6px] text-[14px] font-normal transition-colors duration-150 py-1 ${link.hasIndicator
                ? 'text-[#e45a2a] hover:text-[#c94b20]'
                : 'text-[#242320] hover:text-[#e45a2a]'
                }`}
              data-name="Navigation link"
            >
              <span>{link.label}</span>
              {link.hasIndicator && (
                <span
                  className="w-[5px] h-[5px] rounded-full bg-[#e45a2a] shrink-0"
                  data-node-id="24:11"
                  data-name="New indicator"
                  aria-hidden="true"
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Utilities (Node 24:20) */}
        <div
          className="flex items-center gap-4 sm:gap-[22px] shrink-0"
          data-node-id="24:20"
          data-name="Utilities"
        >
          {/* Search Trigger (Node 24:21) */}
          <button
            type="button"
            onClick={onSearchClick}
            className="flex items-center gap-[8px] text-[#242320] hover:text-[#e45a2a] transition-colors duration-150 cursor-pointer p-1"
            data-node-id="24:21"
            data-name="Search"
            aria-label="Search products"
          >
            <Search className="w-[17px] h-[17px] stroke-[1.8]" data-node-id="24:33" />
            <span
              className="hidden lg:inline text-[14px] font-normal leading-normal"
              data-node-id="24:23"
            >
              Search
            </span>
          </button>

          {/* Shopping Cart (Node 24:27) */}
          <Link
            to="/cart"
            className="flex items-center gap-[8px] text-[#242320] hover:text-[#e45a2a] transition-colors duration-150 p-1"
            data-node-id="24:27"
            data-name="Shopping cart"
            aria-label={`Shopping cart with ${totalCartItems} items`}
          >
            <ShoppingBag className="w-[18px] h-[18px] stroke-[1.8]" data-node-id="24:39" />
            <span
              className="hidden lg:inline text-[14px] font-normal leading-normal"
              data-node-id="24:29"
            >
              Cart
            </span>
            <div
              className="w-[22px] h-[22px] rounded-full bg-[#242320] flex items-center justify-center shrink-0 transition-transform duration-150 hover:scale-105"
              data-node-id="24:30"
              data-name="Item count"
            >
              <span
                className="text-white text-[11px] font-semibold leading-none"
                data-node-id="24:31"
              >
                {totalCartItems}
              </span>
            </div>
          </Link>

          {/* Account (Node 24:24) */}
          <Link
            to={user ? '/profile' : '/signin'}
            className="flex items-center gap-[8px] text-[#242320] hover:text-[#e45a2a] transition-colors duration-150 p-1"
            data-node-id="24:24"
            data-name="Account"
            aria-label="User Account"
          >
            <UserRound className="w-[17px] h-[17px] stroke-[1.8]" data-node-id="24:36" />
            <span
              className="hidden lg:inline text-[14px] font-normal leading-normal"
              data-node-id="24:26"
            >
              {user ? user.user_name || 'Account' : 'Account'}
            </span>
          </Link>
          {/* Admin Cockpit Quick Link for Admins */}
          {user?.is_admin && (
            <Link
              to="/admin"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#242320] text-white text-xs font-semibold hover:bg-[#e45a2a] transition-all"
            >
              <span>Admin</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarDesktop;
