/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
"use client";

import React, { useEffect, useRef } from "react";

// Define proper types for Locomotive Scroll
interface LocomotiveScrollOptions {
  el: HTMLElement | null;
  smooth: boolean;
  [key: string]: unknown;
}

interface LocomotiveScrollInstance {
  destroy: () => void;
  [key: string]: unknown;
}

// Define a constructor type
type LocomotiveScrollConstructor = new (
  options: LocomotiveScrollOptions,
) => LocomotiveScrollInstance;

export default function LocomotiveScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollInstanceRef = useRef<LocomotiveScrollInstance | null>(null);

  useEffect(() => {
    let isMounted = true;

    if (scrollRef.current) {
      // @ts-expect-error - Dynamic import might not have proper types
      void import("locomotive-scroll")
        .then((module) => {
          if (!isMounted) return;

          // Fixed type assertion
          // @eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const LocomotiveScroll: LocomotiveScrollConstructor = module.default;

          const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
          });
          scrollInstanceRef.current = scroll;
        })
        .catch((error) => {
          console.error("Failed to load locomotive-scroll:", error);
        });
    }

    return () => {
      isMounted = false;
      if (scrollInstanceRef.current) {
        scrollInstanceRef.current.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
