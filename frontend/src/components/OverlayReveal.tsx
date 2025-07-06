"use client";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function OverlayReveal() {
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const bars =
        containerRef.current.querySelectorAll<HTMLDivElement>(".bar");
      const tl = gsap.timeline({
        delay: 0.2,
        onComplete: () => setVisible(false),
      });

      tl.to(bars, {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1,
        stagger: { each: 0.1, from: "random" },
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  if (!visible) return null;

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="bar bg-secondary flex-1 origin-bottom scale-y-100 transform"
        />
      ))}
    </div>
  );
}
