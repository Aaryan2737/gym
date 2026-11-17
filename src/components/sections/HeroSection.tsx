"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/content/site";
import Button from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function HeroSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Dynamic GSAP entrance animation with safety check
    let ctx: any;
    const initAnimation = async () => {
      try {
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        if (prefersReducedMotion) return;

        const { gsap } = await import("gsap");
        ctx = gsap.context(() => {
          gsap.from(".hero-anim-item", {
            y: 35,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: "power3.out",
          });
        }, headlineRef);
      } catch (err) {
        console.warn("GSAP hero animation skipped:", err);
      }
    };

    initAnimation();
    return () => ctx?.revert();
  }, []);

  return (
    <section
      id="home"
      ref={headlineRef}
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-end bg-[#0c0c0c] text-white pt-32 pb-16 sm:pb-20 overflow-hidden"
    >
      {/* Background Editorial High-Res Photography */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="JERAI Athletic Club High Performance Training Floor in Koregaon Park Pune"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.55] contrast-[1.15]"
        />
        {/* Layered Editorial Atmosphere Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/70 to-black/75" />
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#D8FF35]/15 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 w-full">
        {/* Eyebrow Label */}
        <div className="hero-anim-item inline-flex items-center gap-2 mb-4 bg-neutral-900/90 border border-neutral-700/80 px-3.5 py-1.5 backdrop-blur-md">
          <span className="w-2 h-2 bg-[#D8FF35] rounded-full inline-block animate-pulse" />
          <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-neutral-200 uppercase">
            {siteConfig.area}, {siteConfig.city} • Premier Athletic Facility
          </span>
        </div>

        {/* Main Display Headline */}
        <h1 className="hero-anim-item text-display text-white max-w-5xl mb-6 drop-shadow-sm">
          <span>FORGE YOUR </span>
          <span className="text-[#D8FF35] underline decoration-neutral-800 decoration-4 underline-offset-8">
            STRENGTH
          </span>
        </h1>

        {/* Subtitle & Value Proposition */}
        <p className="hero-anim-item text-base sm:text-xl lg:text-2xl text-neutral-200 max-w-2xl font-normal leading-relaxed mb-8 sm:mb-10 drop-shadow">
          Engineered for disciplined lifters and athletes. 10,000+ sq ft of
          competition-grade Olympic iron, curved cardio tracks, and certified
          1-on-1 coaching in Pune.
        </p>

        {/* CTAs */}
        <div className="hero-anim-item flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md sm:max-w-none">
          <Button
            variant="primary"
            size="lg"
            href="#contact"
            onClick={() => trackEvent("trial_request_submit", { source: "hero" })}
            className="shadow-xl"
          >
            Book a 1-Day Trial Pass →
          </Button>

          <Button
            variant="outline-light"
            size="lg"
            href="#membership"
            onClick={() => trackEvent("membership_plan_view", { source: "hero" })}
          >
            Compare Membership Plans
          </Button>
        </div>

        {/* Quick Highlights Bar */}
        <div className="hero-anim-item mt-12 sm:mt-16 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 text-neutral-300 backdrop-blur-xs">
          <div>
            <span className="text-2xl sm:text-3xl font-black text-white font-mono block">
              10,000+
            </span>
            <span className="text-xs uppercase tracking-wider text-neutral-400">
              Sq Ft Athletic Floor
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-3xl font-black text-white font-mono block">
              6 RACKS
            </span>
            <span className="text-xs uppercase tracking-wider text-neutral-400">
              Olympic Power Cages
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-3xl font-black text-[#D8FF35] font-mono block">
              05:30 AM
            </span>
            <span className="text-xs uppercase tracking-wider text-neutral-400">
              Early Morning Opening
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-3xl font-black text-white font-mono block">
              100%
            </span>
            <span className="text-xs uppercase tracking-wider text-neutral-400">
              Certified Coaching
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="hidden md:flex absolute bottom-6 right-12 items-center gap-3 text-xs font-mono tracking-widest text-neutral-400 uppercase">
        <span>Scroll to explore</span>
        <span className="w-5 h-5 border border-neutral-700 flex items-center justify-center text-[10px]">
          ↓
        </span>
      </div>
    </section>
  );
}

export default HeroSection;
