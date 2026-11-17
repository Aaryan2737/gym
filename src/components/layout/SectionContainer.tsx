import React from "react";
import { cn } from "@/lib/utils";

export interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article" | "aside" | "header" | "footer";
  dark?: boolean;
  padding?: boolean;
}

export function SectionContainer({
  children,
  className,
  id,
  as: Component = "section",
  dark = false,
  padding = true,
}: SectionContainerProps) {
  return (
    <Component
      id={id}
      className={cn(
        "w-full transition-colors duration-200 relative",
        dark ? "bg-[#111111] text-[#F4F2EC]" : "bg-[#F4F2EC] text-[#111111]",
        padding ? "py-16 sm:py-20 md:py-28" : "",
        className
      )}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        {children}
      </div>
    </Component>
  );
}

export default SectionContainer;
