"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/content/site";
import { getWhatsAppUrl } from "@/lib/utils";
import { getDefaultWhatsAppMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after small delay to avoid layout shift
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    trackEvent("whatsapp_click", { location: "floating_button" });
  };

  const url = getWhatsAppUrl(
    siteConfig.whatsappNumber,
    getDefaultWhatsAppMessage()
  );

  if (!isVisible) return null;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Chat directly with JERAI concierge on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba59] active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 cursor-pointer"
      >
        {/* Subtle Ping Wave on load */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:hidden"
          style={{ animationDuration: "2.5s" }}
          aria-hidden="true"
        />

        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 sm:w-8 sm:h-8 relative z-10 transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.42 0-2.82-.37-4.06-1.07l-.29-.16-3.02.79.81-2.95-.19-.3a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.19-.09-1.12-.55-1.3-.61-.17-.06-.3-.09-.43.09-.13.19-.5.61-.61.73-.11.13-.23.14-.42.05-.19-.09-.8-.29-1.53-.94-.57-.51-.95-1.13-1.06-1.32-.11-.19-.01-.29.08-.38.08-.08.19-.23.28-.34.09-.12.13-.19.19-.32.06-.13.03-.25-.01-.34-.05-.09-.43-1.04-.6-1.42-.16-.37-.32-.32-.43-.33h-.37c-.13 0-.34.05-.51.23-.18.19-.68.66-.68 1.62 0 .96.7 1.88.8 2.01.09.13 1.38 2.11 3.35 2.96.47.2.83.33 1.12.42.47.15.9.13 1.24.08.38-.06 1.12-.46 1.28-.9.16-.45.16-.83.11-.91-.04-.08-.17-.13-.36-.23z" />
        </svg>

        {/* Hover Tooltip on Desktop */}
        <span className="hidden sm:group-hover:inline-block absolute right-full mr-3.5 px-3 py-1.5 bg-[#111111] text-[#F4F2EC] text-xs font-bold tracking-wider whitespace-nowrap rounded-none uppercase shadow-lg border border-neutral-700">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}

export default WhatsAppButton;
