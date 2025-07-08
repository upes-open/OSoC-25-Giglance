"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const fadeTimeout = useRef<NodeJS.Timeout | null>(null);
  const pointerSize = 20; // Size of the cursor
  // Hide cursor on mobile devices
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        cursorRef.current?.classList.add("hidden");
      } else {
        cursorRef.current?.classList.remove("hidden");
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;

      // Move cursor smoothly
      gsap.to(cursorRef.current, {
        x: e.clientX - pointerSize / 2,
        y: e.clientY - pointerSize / 2,
        duration: 0.2,
        scale: 1,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Fade in cursor
      gsap.to(cursorRef.current, {
        opacity: 0.2,
        duration: 0.1,
        ease: "power2.out",
        overwrite: "auto",
      });

      // Reset fade-out timer
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
      fadeTimeout.current = setTimeout(() => {
        gsap.to(cursorRef.current, {
          opacity: 0,
          scale: 0.5,
          duration: 0.5,
          ease: "power2.out",
        });
      }, 500); // 0.5s after last move
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`bg-primary pointer-events-none fixed z-[9999] rounded-full opacity-0`}
      style={{ width: pointerSize, height: pointerSize }}
    ></div>
  );
}
