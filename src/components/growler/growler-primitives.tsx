import type { ReactNode } from "react";

import { cn } from "../../lib/utils";

export function GrowlerSectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="space-y-4">
      <p className="console-kicker">{eyebrow}</p>
      <div className="space-y-3">
        <h2 className="console-title max-w-4xl text-balance">{title}</h2>
        {description ? <p className="console-copy text-sm sm:text-base">{description}</p> : null}
      </div>
    </header>
  );
}

export function GrowlerPanel({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <article className={cn("console-panel rounded-lg p-5 sm:p-6", className)}>{children}</article>;
}

export function GrowlerMetric({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="space-y-2 rounded-md border border-border bg-surface/70 p-4 transition-transform duration-200 hover:-translate-y-0.5">
      <p className="console-label">{label}</p>
      <p className="console-value">{value}</p>
      <p className="text-sm text-muted-foreground">{detail}</p>
    </div>
  );
}

export function GrowlerThreatMeter({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between gap-3 text-xs font-medium text-muted-foreground">
        <span className="font-mono uppercase">Risk Percentile</span>
        <span className="font-mono text-primary">{value}%</span>
      </div>
      <div className="threat-meter">
        <span style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export function GrowlerStatusChip({
  label,
  tone = "signal",
}: {
  label: string;
  tone?: "signal" | "danger" | "success";
}) {
  const toneClass = {
    signal: "status-dot",
    danger: "status-dot status-dot--danger",
    success: "status-dot status-dot--success",
  }[tone];

  return (
    <span className="signal-chip">
      <span className={toneClass} />
      {label}
    </span>
  );
}