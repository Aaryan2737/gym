"use client";

import React, { useState } from "react";
import type { FAQItem } from "@/types/site";
import { cn } from "@/lib/utils";

export interface AccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
  dark?: boolean;
}

export function Accordion({
  items,
  allowMultiple = false,
  className,
  dark = false,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || ""]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("divide-y divide-neutral-200 dark:divide-neutral-800", className)}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const controlId = `faq-control-${item.id}`;
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={cn(
              "py-5 transition-colors duration-150",
              dark
                ? "border-b border-neutral-800 text-white"
                : "border-b border-neutral-200/80 text-[#111111]"
            )}
          >
            <h3>
              <button
                type="button"
                id={controlId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full text-left flex items-start justify-between gap-4 py-2 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8FF35]"
              >
                <span className="flex items-baseline gap-4 font-bold text-lg md:text-xl tracking-tight leading-snug group-hover:text-[#D8FF35] transition-colors">
                  <span
                    className={cn(
                      "text-xs md:text-sm font-mono tracking-widest shrink-0 font-normal",
                      dark ? "text-[#777777]" : "text-[#888888]"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.question}</span>
                </span>

                <span
                  className={cn(
                    "shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-mono transition-transform duration-200",
                    isOpen
                      ? "bg-[#D8FF35] text-[#111111] rotate-45"
                      : dark
                      ? "bg-neutral-800 text-white group-hover:bg-neutral-700"
                      : "bg-neutral-100 text-[#111111] group-hover:bg-neutral-200"
                  )}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={controlId}
              hidden={!isOpen}
              className={cn(
                "overflow-hidden transition-all duration-300 pl-8 md:pl-10 pr-4",
                isOpen ? "pt-3 pb-2 opacity-100 block" : "max-h-0 opacity-0 hidden"
              )}
            >
              <p
                className={cn(
                  "text-base leading-relaxed",
                  dark ? "text-[#A7A7A7]" : "text-[#555555]"
                )}
              >
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Accordion;
