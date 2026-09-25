// client/src/components/admin/MetricCard.tsx
import React, { type ReactNode } from "react";

interface MetricCardProps {
  label: string;
  value: string;
  icon: ReactNode;
  iconClass?: string;
  bottomContent: ReactNode;
  highlightCorner?: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  icon,
  iconClass = "bg-surface-container text-mineral-gray",
  bottomContent,
  highlightCorner,
}) => {
  return (
    <div className="p-6 rounded-xl bg-surface-card border border-border-card shadow-[0px_8px_28px_0px_rgba(47,38,18,0.05)] flex flex-col justify-between hover:border-border-subtle transition-all relative overflow-hidden">
      {highlightCorner && (
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-status-peach-bg/50 to-transparent pointer-events-none rounded-tr-xl" />
      )}

      <div className="flex items-center justify-between">
        <span className="font-label-micro text-label-micro uppercase font-semibold text-mineral-gray tracking-[1px]">
          {label}
        </span>
        <span className={`p-1.5 rounded-lg ${iconClass}`}>{icon}</span>
      </div>

      <div className="my-4">
        <div className="text-[32px] leading-tight font-semibold text-ink-charcoal tracking-tight">
          {value}
        </div>
      </div>

      <div className="flex items-center gap-2">{bottomContent}</div>
    </div>
  );
};

export default MetricCard;
