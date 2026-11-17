"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { mainNavItems } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { getPhoneUrl, getWhatsAppUrl } from "@/lib/utils";
import { getDefaultWhatsAppMessage } from "@/lib/whatsapp";
import Button from "@/components/ui/Button";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-[#111111] text-[#F4F2EC] overflow-y-auto animate-fadeIn"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800">
        <Link
          href="/"
          onClick={onClose}
          className="text-xl font-black tracking-tighter uppercase text-white flex items-center gap-2"
        >
          <span className="w-2.5 h-2.5 bg-[#D8FF35] rounded-full inline-block" />
          <span>{siteConfig.name}</span>
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="w-11 h-11 flex items-center justify-center text-white bg-neutral-900 border border-neutral-700 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D8FF35]"
        >
          <span className="text-2xl font-mono leading-none">✕</span>
        </button>
      </div>

      {/* Main Links */}
      <nav className="flex-1 px-8 py-8 flex flex-col justify-center gap-4">
        {mainNavItems.map((item, index) => (
          <div key={item.href} className="border-b border-neutral-800/80 pb-3">
            <Link
              href={item.href}
              onClick={onClose}
              className="group flex items-baseline justify-between text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-200 hover:text-[#D8FF35] transition-colors py-2"
            >
              <span>{item.label}</span>
              <span className="text-xs font-mono text-neutral-600 group-hover:text-[#D8FF35]">
                {String(index + 1).padStart(2, "0")} →
              </span>
            </Link>
          </div>
        ))}

        <div className="pt-2">
          <Link
            href="/membership"
            onClick={onClose}
            className="flex items-baseline justify-between text-xl font-bold uppercase tracking-wide text-[#D8FF35] py-2"
          >
            <span>Membership Plans →</span>
          </Link>
        </div>
      </nav>

      {/* Action Footer */}
      <div className="p-8 border-t border-neutral-800 bg-[#161616] space-y-4">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          href="#contact"
          onClick={onClose}
        >
          Book a Free Trial Session
        </Button>

        <div className="grid grid-cols-2 gap-3 pt-2">
          <a
            href={getWhatsAppUrl(siteConfig.whatsappNumber, getDefaultWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider text-center"
          >
            <span>WhatsApp</span>
          </a>
          <a
            href={getPhoneUrl(siteConfig.phone)}
            className="flex items-center justify-center gap-2 py-3 px-4 bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider text-center border border-neutral-700"
          >
            <span>Call Desk</span>
          </a>
        </div>

        <p className="text-[11px] text-center text-neutral-500 font-mono pt-2">
          {siteConfig.area}, {siteConfig.city} • Open Daily {siteConfig.openingHours[0]?.hours}
        </p>
      </div>
    </div>
  );
}

export default MobileMenu;
