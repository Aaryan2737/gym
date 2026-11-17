"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { footerNavItems } from "@/content/navigation";
import { getPhoneUrl, getWhatsAppUrl } from "@/lib/utils";
import { getDefaultWhatsAppMessage } from "@/lib/whatsapp";

export function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0c0c0c] text-[#A7A7A7] border-t border-neutral-900 pt-16 sm:pt-20 pb-12">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white font-mono font-black text-2xl uppercase tracking-tighter"
            >
              <span className="w-3 h-3 bg-[#D8FF35] rounded-none inline-block" />
              <span>{siteConfig.name}</span>
            </Link>

            <p className="text-sm leading-relaxed max-w-sm text-neutral-400">
              {siteConfig.description}
            </p>

            {/* Quick Demo Badge */}
            <div className="inline-block bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400 px-3 py-1.5 uppercase tracking-wider">
              Concept Demo Specification • Indian Market
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {siteConfig.socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-300 hover:text-[#D8FF35] hover:border-[#D8FF35] transition-colors"
                >
                  {s.platform.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  About Philosophy
                </Link>
              </li>
              <li>
                <Link href="/#facilities" className="hover:text-white transition-colors">
                  Equipment & Zones
                </Link>
              </li>
              <li>
                <Link href="/#training" className="hover:text-white transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link href="/#trainers" className="hover:text-white transition-colors">
                  Coaching Staff
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-[#D8FF35] font-semibold transition-colors">
                  Membership Plans
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Common Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-4">
              Governance
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 className="text-white text-xs font-black uppercase tracking-[0.2em] mb-4">
              Club Hours & Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-neutral-400 block font-mono">Weekdays:</span>
                <span className="text-white font-semibold">{siteConfig.openingHours[0]?.hours}</span>
              </div>
              <div>
                <span className="text-neutral-400 block font-mono">Saturday:</span>
                <span className="text-white font-semibold">{siteConfig.openingHours[1]?.hours}</span>
              </div>
              <div>
                <span className="text-neutral-400 block font-mono">Sunday:</span>
                <span className="text-white font-semibold">{siteConfig.openingHours[2]?.hours}</span>
              </div>

              <div className="pt-2 border-t border-neutral-900 space-y-1.5">
                <a
                  href={getPhoneUrl(siteConfig.phone)}
                  className="block text-neutral-300 hover:text-white"
                >
                  📞 {siteConfig.phone}
                </a>
                <a
                  href={getWhatsAppUrl(siteConfig.whatsappNumber, getDefaultWhatsAppMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#25D366] hover:underline"
                >
                  💬 WhatsApp Concierge
                </a>
                <p className="text-neutral-400 leading-tight pt-1">
                  📍 {siteConfig.address}, {siteConfig.city}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Disclaimers */}
        <div className="pt-8 border-t border-neutral-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            Designed with PHIVE editorial inspiration for independent Indian fitness brands.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
