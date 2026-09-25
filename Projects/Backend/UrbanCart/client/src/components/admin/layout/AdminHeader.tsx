// client/src/components/admin/layout/AdminHeader.tsx
import React from "react";
import { Link } from "react-router-dom";
import type { User } from "../../../types";

interface AdminHeaderProps {
  user: User | null;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ user }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[84px] z-50 bg-surface border-b border-border-subtle">
      <div className="h-[84px] w-full px-space-lg flex items-center justify-between">
        {/* Logo & Operational Pill */}
        <div className="flex items-center gap-space-md">
          <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-8 h-8 rounded-[8px] bg-ink-charcoal flex items-center justify-center text-white text-[15px] font-medium leading-none select-none shadow-sm transition-transform duration-200 group-hover:scale-105 shrink-0">
              U
            </div>
            <span className="font-title-card text-title-card text-ink-charcoal tracking-tight font-semibold">
              UrbanCart
            </span>
          </Link>

          <span className="h-4 w-px bg-border-subtle" />
          <span className="font-label-eyebrow text-label-eyebrow uppercase px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
            ADMIN
          </span>
        </div>

        {/* Right Header Navigation & Profile */}
        <div className="flex items-center gap-space-lg">
          <Link
            to="/"
            className="hidden md:flex items-center gap-1.5 font-label-input text-label-input text-mineral-gray hover:text-ink-charcoal transition-colors"
          >
            <span className="font-label-input text-label-input">View Live Boutique</span>
            <span className="material-symbols-outlined text-sm text-terracotta-flame">
              arrow_outward
            </span>
          </Link>

          <div className="h-5 w-px bg-border-subtle hidden md:block" />

          <div className="flex items-center gap-space-md">
            <button
              type="button"
              className="relative p-2 text-mineral-gray hover:text-ink-charcoal transition-colors"
              title="System Notifications"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-terracotta-accent" />
            </button>

            <div className="flex items-center gap-space-sm pl-2 border-l border-border-subtle">
              <img
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-1 ring-border-subtle"
                src={
                  user?.avatar ||
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCWdRpKeN60lhrHGLz1T26vJP3uTVQBWYmxdy-GKUyCHCuSTHmnDceqAGTkcT_FkTOMgjfV0OTvT5wbX-01Xl6vCthJufCYDMgm6cnBgF1k94GcjsyEhpNx42PHNyU0GxfbbHhC9tJpnD9kOnnGBX-iHFwBUDxupeJ6NoRGcIoBAm7fXmtOXld6U63Sy9l-PmslUUchGR-Bx9QKlLedJnfhIdNimrvqvDrlOb2lgfKI5IOx175Ke2Hn"
                }
              />
              <div className="hidden lg:flex flex-col text-left">
                <span className="font-label-input text-label-input text-ink-charcoal leading-none">
                  {user?.user_name || "Elena Vance"}
                </span>
                <span className="font-label-micro text-label-micro text-mineral-gray mt-0.5">
                  Store Director
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;