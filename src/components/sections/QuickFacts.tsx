import React from "react";
import { quickFacts } from "@/content/site";

export function QuickFacts() {
  return (
    <section
      aria-label="Gym Highlights"
      className="bg-[#181818] border-b border-neutral-800 text-white py-8 sm:py-10"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
          {quickFacts.map((fact, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${idx !== 0 ? "pt-4 lg:pt-0 lg:pl-8" : ""}`}
            >
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#D8FF35] uppercase mb-1">
                {fact.label}
              </span>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase">
                {fact.value}
              </span>
              {fact.description && (
                <span className="text-xs text-neutral-400 mt-1 font-normal">
                  {fact.description}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QuickFacts;
