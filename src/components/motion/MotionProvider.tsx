"use client";

import React from "react";
import SmoothScroll from "./SmoothScroll";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}

export default MotionProvider;
