// client/src/components/admin/layout/AdminSidebar.tsx
import React from "react";

export type AdminTab = "overview" | "products" | "orders" | "customers" | "forecasts";

interface AdminSidebarProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
}

interface NavItem {
  key: AdminTab;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { key: "overview", label: "Overview", icon: "dashboard" },
  { key: "products", label: "Catalog & Inventory", icon: "inventory_2" },
  { key: "orders", label: "Orders & Logistics", icon: "local_shipping" },
  { key: "customers", label: "Clients & Patrons", icon: "group" },
  { key: "forecasts", label: "Financial Ledger", icon: "query_stats" },
];

const AdminSidebar: React.FC<AdminSidebarProps> = ({ activeTab, onTabChange }) => {
  return (
    <aside className="fixed left-0 top-[84px] bottom-0 w-64 bg-surface border-r border-border-subtle z-40 flex flex-col justify-between py-space-lg">
      <div className="flex flex-col gap-space-md">
        <nav className="flex flex-col gap-1 px-space-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => onTabChange(item.key)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all font-body-sm text-body-sm w-full text-left ${
                  isActive
                    ? "bg-primary-container text-on-primary font-label-input text-label-input"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                }`}
                type="button"
              >
                <span className="material-symbols-outlined text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="px-space-md flex flex-col gap-space-sm border-t border-border-subtle pt-space-md">
        <button
          type="button"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-mineral-gray hover:bg-surface-container hover:text-ink-charcoal transition-all font-body-sm text-body-sm w-full text-left"
        >
          <span className="material-symbols-outlined text-lg">tune</span>
          <span>Cockpit Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
