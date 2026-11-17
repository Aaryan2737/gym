"use client";

import React from "react";
import type { MembershipPlan } from "@/types/site";
import { formatINR, cn } from "@/lib/utils";
import { getPlanWhatsAppMessage, openWhatsApp } from "@/lib/whatsapp";
import Button from "./Button";

export interface MembershipCardProps {
  plan: MembershipPlan;
  className?: string;
}

export function MembershipCard({ plan, className }: MembershipCardProps) {
  const isRecommended = plan.recommended;

  const handleWhatsAppEnquiry = () => {
    const formattedPrice = formatINR(plan.priceInr);
    const msg = getPlanWhatsAppMessage(plan.name, formattedPrice);
    openWhatsApp(undefined, msg);
  };

  return (
    <div
      className={cn(
        "relative flex flex-col justify-between p-6 sm:p-8 rounded-none transition-all duration-300",
        isRecommended
          ? "bg-[#111111] text-[#F4F2EC] ring-2 ring-[#D8FF35] shadow-2xl scale-[1.02] z-10"
          : "bg-white text-[#111111] border border-neutral-200 hover:border-neutral-400 shadow-sm",
        className
      )}
    >
      {/* Top Tag */}
      {plan.highlightTag && (
        <div className="absolute -top-3.5 left-8 bg-[#D8FF35] text-[#111111] text-xs font-black tracking-widest px-3 py-1 uppercase shadow-sm">
          {plan.highlightTag}
        </div>
      )}

      <div>
        {/* Header */}
        <div className="flex items-baseline justify-between gap-4 mb-4">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
            {plan.name}
          </h3>
          <span
            className={cn(
              "text-xs font-mono tracking-widest uppercase px-2.5 py-1",
              isRecommended
                ? "bg-neutral-800 text-[#D8FF35]"
                : "bg-neutral-100 text-neutral-600"
            )}
          >
            {plan.durationLabel}
          </span>
        </div>

        {/* Pricing */}
        <div className="mb-6 pb-6 border-b border-neutral-200/40">
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">
              {formatINR(plan.priceInr)}
            </span>
          </div>
          <div
            className={cn(
              "text-xs font-medium tracking-wide mt-1",
              isRecommended ? "text-[#A7A7A7]" : "text-[#777777]"
            )}
          >
            {plan.billingLabel}
          </div>
          {plan.joiningFeeInr !== undefined && (
            <div
              className={cn(
                "text-xs mt-1 font-semibold",
                plan.joiningFeeInr === 0 ? "text-[#D8FF35]" : isRecommended ? "text-neutral-400" : "text-neutral-500"
              )}
            >
              {plan.joiningFeeInr === 0
                ? "✓ No Joining Fee"
                : `+ ${formatINR(plan.joiningFeeInr)} One-time registration fee`}
            </div>
          )}
        </div>

        {/* Inclusions */}
        <div className="space-y-3 mb-8">
          <p
            className={cn(
              "text-xs uppercase tracking-widest font-bold mb-3",
              isRecommended ? "text-[#D8FF35]" : "text-[#111111]"
            )}
          >
            What is Included:
          </p>
          <ul className="space-y-2.5 text-sm">
            {plan.inclusions.map((inc, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span
                  className={cn(
                    "shrink-0 font-bold text-sm mt-0.5",
                    isRecommended ? "text-[#D8FF35]" : "text-[#16794A]"
                  )}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span
                  className={cn(
                    "leading-relaxed",
                    isRecommended ? "text-neutral-200" : "text-neutral-700"
                  )}
                >
                  {inc}
                </span>
              </li>
            ))}
          </ul>

          {/* Exclusions if any */}
          {plan.exclusions && plan.exclusions.length > 0 && (
            <ul className="space-y-1.5 text-xs pt-2 opacity-60">
              {plan.exclusions.map((exc, i) => (
                <li key={i} className="flex items-start gap-2 line-through">
                  <span className="shrink-0 text-neutral-400">✕</span>
                  <span>{exc}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-neutral-200/20">
        <Button
          variant={isRecommended ? "primary" : "secondary"}
          fullWidth
          size="md"
          href="#contact"
          className="mb-2"
        >
          {plan.enquiryLabel}
        </Button>

        <button
          type="button"
          onClick={handleWhatsAppEnquiry}
          className={cn(
            "w-full text-center text-xs tracking-wider uppercase font-semibold py-2 transition-colors cursor-pointer flex items-center justify-center gap-1.5",
            isRecommended
              ? "text-[#A7A7A7] hover:text-[#D8FF35]"
              : "text-[#555555] hover:text-[#111111]"
          )}
        >
          <span>Ask Questions on WhatsApp →</span>
        </button>

        {plan.taxNote && (
          <p
            className={cn(
              "text-[10px] text-center mt-2 font-mono",
              isRecommended ? "text-neutral-500" : "text-neutral-400"
            )}
          >
            {plan.taxNote}
          </p>
        )}
      </div>
    </div>
  );
}

export default MembershipCard;
