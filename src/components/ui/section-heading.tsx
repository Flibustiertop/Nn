import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={cn("flex flex-col gap-4", centered && "items-center text-center")}>
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/60 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--chocolate-700)]">
        <span className="size-2 rounded-full bg-[color:var(--accent)]" />
        {eyebrow}
      </div>
      <div className={cn("flex flex-col gap-3", centered && "items-center")}>
        <h2 className="max-w-3xl font-display text-4xl leading-none tracking-[-0.04em] text-[color:var(--chocolate-900)] md:text-6xl">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-[color:var(--muted)] md:text-base">
          {description}
        </p>
      </div>
      {action}
    </div>
  );
}
