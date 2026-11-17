"use client";

import React, { useEffect } from "react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only on client and when reduced-motion is not requested
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    let lenisInstance: any = null;
    let animationFrameId: number;

    const initLenis = async () => {
      try {
        const Lenis = (await import("@studio-freight/lenis")).default;
        lenisInstance = new Lenis({
          duration: 1.1,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          touchMultiplier: 1.5,
        });

        function raf(time: number) {
          lenisInstance?.raf(time);
          animationFrameId = requestAnimationFrame(raf);
        }

        animationFrameId = requestAnimationFrame(raf);
      } catch (e) {
        // Fallback gracefully to native scroll
        console.warn("Lenis smooth scroll skipped:", e);
      }
    };

    initLenis();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
}

export default SmoothScroll;
