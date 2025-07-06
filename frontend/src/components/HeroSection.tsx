"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface HeroHeading {
  lines: string[];
}

interface HeroItems {
  heading: HeroHeading;
  subheading: string;
  description: string;
  freelancersCount: string;
  heroImage: string;
}

type MarqueeText = string[];

gsap.registerPlugin(useGSAP);

const HeroSection: React.FC = () => {
  const [rowCount, setRowCount] = useState(0);
  const [textSize, setTextSize] = useState(0);
  const marqueeRowsRef = useRef<Array<HTMLDivElement | null>>([]);

  // Responsive font size
  useEffect(() => {
    const updateTextSize = () => {
      const windowHeight = window.innerHeight;
      const minInput = 768; // md breakpoint
      const maxInput = 1280; // xl breakpoint
      const minPx = 100; // minimum font size
      const maxPx = 500; // maximum font size

      const clamped = Math.max(minInput, Math.min(windowHeight, maxInput));
      const textSizePx =
        ((clamped - minInput) / (maxInput - minInput)) * (maxPx - minPx) +
        minPx;

      setTextSize(textSizePx);
    };

    updateTextSize();
    window.addEventListener("resize", updateTextSize);

    return () => {
      window.removeEventListener("resize", updateTextSize);
    };
  }, []);

  // Responsive row count
  useEffect(() => {
    const updateRowCount = () => {
      const windowWidth = window.innerWidth;
      let count = 0;
      if (windowWidth >= 1280) {
        count = 5;
      } else if (windowWidth >= 1024) {
        count = 6;
      } else if (windowWidth >= 768) {
        count = 7;
      } else {
        count = 2;
      }
      setRowCount(count);
    };

    updateRowCount();
    window.addEventListener("resize", updateRowCount);

    return () => {
      window.removeEventListener("resize", updateRowCount);
    };
  }, []);

  // Marquee animation for each row
  useGSAP(() => {
    const DURATION = 200; // Moderate duration for visible movement

    gsap.killTweensOf(".marquee-text"); // Clear existing animations

    marqueeRowsRef.current.forEach((row, index) => {
      if (!row) return;

      const inner = row.querySelector(".marquee-text");
      if (!inner) return;

      // Reset any existing transforms
      gsap.set(inner, { clearProps: "all" });

      // Set up text content
      const originalText = MARQUEE_TEXT.join(" • ");
      inner.innerHTML = ` • <span>${originalText}</span> • <span>${originalText}</span> • <span>${originalText}</span> •`;

      // Get the width of a single span
      const singleSpanWidth = inner.querySelector("span")?.offsetWidth ?? 0;

      // Create simpler, more reliable animation
      if (index % 2 === 0) {
        // Even rows - move left
        gsap.to(inner, {
          x: -singleSpanWidth,
          duration: DURATION,
          repeat: -1,
          ease: "linear",
          onRepeat: () => {
            gsap.set(inner, { x: 0 }); // Reset position instantly on repeat
          },
        });
      } else {
        // Odd rows - move right
        gsap.fromTo(
          inner,
          { x: -singleSpanWidth }, // Start position
          {
            x: 0,
            duration: DURATION,
            repeat: -1,
            ease: "linear",
            onRepeat: () => {
              gsap.set(inner, { x: -singleSpanWidth }); // Reset position instantly on repeat
            },
          },
        );
      }
    });

    // Clean up function
    return () => {
      gsap.killTweensOf(".marquee-text");
    };
  }, [rowCount, textSize]);
  const MARQUEE_TEXT: MarqueeText = [
    "create",
    "design",
    "develop",
    "innovate",
    "collaborate",
  ];
  const HERO_ITEMS: HeroItems = {
    heading: {
      lines: ["Freelance Jobs and Talents at Your Fingertips"],
    },
    subheading: "Find Your Dream Job",
    description:
      "Connect with top freelancers and clients on our platform! Find your perfect match for your next project.",
    freelancersCount: "Over 12800+ freelancers to complete your projects",
    heroImage: "/removed-bg.png",
  };

  // Render
  return (
    <section className="relative z-0 h-screen w-full overflow-x-hidden overflow-y-visible">
      {/* Marquee background */}
      <div className="bg-primary absolute z-0 h-full w-full opacity-20"></div>
      <div className="pointer-events-none absolute inset-0 z-10 hidden flex-col justify-start gap-1 overflow-y-hidden select-none md:flex md:flex-col">
        {Array.from({ length: rowCount }).map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              marqueeRowsRef.current[i] = el;
            }}
            className="text-primary flex translate-y-[-50%] items-center border-none font-bold uppercase opacity-20"
            style={{
              fontSize: `${textSize * 1.5}px`,
              minHeight: `${textSize * 1.1}px`,
              overflow: "hidden",
              whiteSpace: "nowrap",
              willChange: "transform",
            }}
          >
            <span className="marquee-text inline-block">
              {MARQUEE_TEXT.join(" • ")}
            </span>
          </div>
        ))}
      </div>
      {/* Hero background */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h1 className="text-primary text-center text-xl">
          {HERO_ITEMS.heading.lines.join(" ")}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
