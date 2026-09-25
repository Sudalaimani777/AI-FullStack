import type { FormEvent } from 'react';

export interface NavLinkItem {
  label: string;
  href: string;
  hasIndicator?: boolean;
}

export const DEFAULT_NAV_LINKS: NavLinkItem[] = [
  { label: 'New in', href: '/#new-in', hasIndicator: true },
  { label: 'Women', href: '/#women', hasIndicator: false },
  { label: 'Men', href: '/#men', hasIndicator: false },
  { label: 'Home', href: '/#home', hasIndicator: false },
  { label: 'Deals', href: '/#deals', hasIndicator: false },
];

export interface NavbarProps {
  className?: string;
  onSearchClick?: () => void;
  navLinks?: NavLinkItem[];
}

export interface NavbarMobileProps extends NavbarProps {
  showSearchField?: boolean;
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
  onSearchSubmit?: (e: FormEvent) => void;
}
