import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-light" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  fullWidth = false,
  className,
  children,
  icon,
  iconPosition = "right",
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-4 py-2.5 gap-2",
    md: "text-sm px-6 py-3.5 gap-2.5",
    lg: "text-base px-8 py-4 gap-3",
    xl: "text-lg px-10 py-5 gap-3.5 tracking-widest",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#D8FF35] text-[#111111] hover:bg-[#cbf520] active:scale-[0.98] shadow-sm hover:shadow-md",
    secondary:
      "bg-[#111111] text-[#F4F2EC] hover:bg-neutral-800 active:scale-[0.98]",
    outline:
      "border-2 border-[#111111] text-[#111111] bg-transparent hover:bg-[#111111] hover:text-[#F4F2EC] active:scale-[0.98]",
    "outline-light":
      "border-2 border-white/60 text-white bg-transparent hover:bg-white hover:text-[#111111] hover:border-white active:scale-[0.98]",
    ghost:
      "bg-transparent text-current hover:opacity-75 active:scale-[0.98] underline underline-offset-4",
  }[variant];

  const combinedClasses = cn(
    baseStyles,
    sizeStyles,
    variantStyles,
    fullWidth ? "w-full" : "",
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
}

export default Button;
