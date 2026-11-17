"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { mainNavItems } from "@/content/navigation";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-[#111111]/95 backdrop-blur-md py-4 border-b border-neutral-800 shadow-xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6"
        )}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D8FF35]"
          >
            <span className="w-3 h-3 bg-[#D8FF35] inline-block transition-transform duration-300 group-hover:scale-125" />
            <span className="font-black text-xl sm:text-2xl tracking-tighter uppercase font-mono">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-neutral-300"
          >
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#D8FF35] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D8FF35] hover:after:w-full after:transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/membership"
              className="text-xs uppercase font-bold tracking-wider text-neutral-300 hover:text-white transition-colors"
            >
              Plans
            </Link>
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              className="shadow-md"
            >
              Book Trial
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <Button
              variant="primary"
              size="sm"
              href="#contact"
              className="text-[11px] px-3 py-2 sm:hidden"
            >
              Trial
            </Button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 bg-neutral-900 border border-neutral-700 text-white cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D8FF35]"
            >
              <span className="w-5 h-[2px] bg-white transition-all" />
              <span className="w-5 h-[2px] bg-[#D8FF35] transition-all" />
              <span className="w-3 self-start ml-2.5 h-[2px] bg-white transition-all" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Modal */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

export default SiteHeader;
