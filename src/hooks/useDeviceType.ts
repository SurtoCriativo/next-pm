"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Enumerates the possible device categories.
 */
export type DeviceType = "mobile" | "tablet" | "desktop";

/**
 * Breakpoints (in pixels) for mobile/tablet/desktop.
 *
 * - mobile: width < 768
 * - tablet: 768 ≤ width < 1024
 * - desktop: width ≥ 1024
 */
const BREAKPOINTS = {
  mobileMax: 768,
  tabletMax: 1024,
};

/**
 * Given a window width, returns the matching DeviceType.
 * Single Responsibility: purely maps a number → DeviceType.
 */
function getDeviceTypeFromWidth(width: number): DeviceType {
  if (width < BREAKPOINTS.mobileMax) {
    return "mobile";
  }
  if (width < BREAKPOINTS.tabletMax) {
    return "tablet";
  }
  return "desktop";
}

/**
 * Custom hook: returns current device type ('mobile' | 'tablet' | 'desktop').
 * - On mount, it reads window.innerWidth and updates.
 * - Listens to resize events (debounced).
 *
 * Usage:
 *   const device = useDeviceType()
 *   if (device === 'mobile') { … }
 */
export function useDeviceType(): DeviceType {
  // We start with 'desktop' by default just to avoid "undefined" on SSR,
  // but as soon as the effect runs on the client, it'll be overwritten.
  const [device, setDevice] = useState<DeviceType>("desktop");
  const resizeTimeout = useRef<number | null>(null);

  const updateDevice = useCallback(() => {
    const width = window.innerWidth;
    const newDevice = getDeviceTypeFromWidth(width);
    setDevice(newDevice);
  }, []);

  useEffect(() => {
    // On mount, immediately set to correct device
    updateDevice();

    // Debounced listener
    const onResize = () => {
      if (resizeTimeout.current !== null) {
        window.clearTimeout(resizeTimeout.current);
      }
      resizeTimeout.current = window.setTimeout(() => {
        updateDevice();
        resizeTimeout.current = null;
      }, 100); // 100ms debounce
    };

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (resizeTimeout.current !== null) {
        window.clearTimeout(resizeTimeout.current);
      }
    };
  }, [updateDevice]);

  return device;
}
