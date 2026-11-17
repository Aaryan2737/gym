"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps {
  words?: string[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  dark?: boolean;
  className?: string;
}

const defaultWords = [
  "FORGE YOUR STRENGTH",
  "OLYMPIC IRON",
  "HIGH PERFORMANCE",
  "ELITE COACHING",
  "KOREGAON PARK • PUNE",
  "DISCIPLINE EQUALS FREEDOM",
  "RECOVERY & MOBILITY",
];

export function Marquee({
  words = defaultWords,
  dark = true,
  className,
}: MarqueeProps) {
  const content = words.join("  ✦  ") + "  ✦  ";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "overflow-hidden py-3 sm:py-4 select-none border-y",
        dark
          ? "bg-[#111111] text-[#D8FF35] border-neutral-800"
          : "bg-[#D8FF35] text-[#111111] border-[#c0ea24]",
        className
      )}
    >
      <div className="animate-marquee whitespace-nowrap font-black font-mono tracking-widest text-xs sm:text-sm uppercase flex gap-4">
        <span>{content}</span>
        <span>{content}</span>
        <span>{content}</span>
        <span>{content}</span>
      </div>
    </div>
  );
}

export default Marquee;
