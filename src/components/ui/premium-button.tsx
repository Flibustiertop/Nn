"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
  {
    variants: {
      variant: {
        primary:
          "bg-[linear-gradient(135deg,#ff9a68_0%,#ffb36a_45%,#ffd870_100%)] text-[color:var(--chocolate-900)] shadow-[0_18px_45px_rgba(255,140,90,0.28)]",
        secondary:
          "border border-[color:var(--border)] bg-white/60 text-[color:var(--chocolate-900)] backdrop-blur-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type PremiumButtonProps = VariantProps<typeof buttonVariants> & {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function PremiumButton({
  href,
  children,
  variant,
  className,
  external,
}: PremiumButtonProps) {
  const reduceMotion = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const rel = external ? "noreferrer noopener" : undefined;
  const target = external ? "_blank" : undefined;

  return (
    <motion.div
      animate={reduceMotion ? { x: 0, y: 0 } : { x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 280, damping: 18, mass: 0.8 }}
      onPointerMove={(event) => {
        if (reduceMotion) return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) / 10;
        const y = (event.clientY - rect.top - rect.height / 2) / 12;
        setOffset({ x, y });
      }}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
      className="w-fit"
    >
      <Link
        href={href}
        rel={rel}
        target={target}
        className={cn(buttonVariants({ variant }), className)}
      >
        {children}
      </Link>
    </motion.div>
  );
}
