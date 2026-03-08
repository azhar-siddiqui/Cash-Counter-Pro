"use client";

import { useEffect } from "react";

export function Analytics() {
  useEffect(() => {
    // Add your analytics code here
    // Example: Google Analytics, Plausible, etc.

    // Example for Google Analytics 4
    if (typeof window !== "undefined") {
      // gtag code would go here
      console.log("Analytics loaded");
    }
  }, []);

  return null;
}
