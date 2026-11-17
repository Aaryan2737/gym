import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCenter ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-3 text-xs md:text-sm font-black uppercase tracking-[0.2em]",
            dark ? "text-[#D8FF35]" : "text-[#111111]"
          )}
        >
          <span className="w-2 h-2 bg-[#D8FF35] rounded-full inline-block" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={cn(
          "text-h2 font-black leading-[0.98] tracking-tight mb-4 uppercase",
          dark ? "text-white" : "text-[#111111]"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base md:text-lg leading-relaxed font-normal",
            dark ? "text-[#A7A7A7]" : "text-[#555555]",
            isCenter ? "mx-auto" : ""
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
