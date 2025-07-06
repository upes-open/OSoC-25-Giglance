"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import stockImage from "public/stock-image.jpg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

interface HeroHeading {
  lines: string[];
}

interface HeroItems {
  heading: HeroHeading;
  subheading: string;
  description: string;
  freelancersCount: string;
}

type MarqueeText = string[];

gsap.registerPlugin(useGSAP, SplitText);

const HeroSection: React.FC = () => {
  const [rowCount, setRowCount] = useState(0);
  const [textSize, setTextSize] = useState(0);
  const marqueeRowsRef = useRef<Array<HTMLDivElement | null>>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const giglanceTextRef = useRef<HTMLHeadingElement>(null);

  const headingSplitText = useRef<SplitText | null>(null);
  const subheadingSplitText = useRef<SplitText | null>(null);
  const giglanceTextSplit = useRef<SplitText | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (headingRef.current) {
        headingSplitText.current = new SplitText(headingRef.current, {
          type: "lines",
          linesClass: "hero-heading-line",
        });
      }
      if (subheadingRef.current) {
        subheadingSplitText.current = new SplitText(subheadingRef.current, {
          type: "lines,words",
          wordsClass: "hero-subheading-word",
          linesClass: "hero-subheading-line",
        });
      }
    }, 10);

    return () => {
      if (headingSplitText.current) headingSplitText.current.revert();
      if (subheadingSplitText.current) subheadingSplitText.current.revert();
    };
  }, []);
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
        count = 7;
      }
      setRowCount(count);
    };

    updateRowCount();
    window.addEventListener("resize", updateRowCount);

    return () => {
      window.removeEventListener("resize", updateRowCount);
    };
  }, []);

  const MARQUEE_TEXT: MarqueeText = [
    "create",
    "design",
    "develop",
    "innovate",
    "collaborate",
  ];

  // Marquee animation for each row
  useGSAP(() => {
    const DURATION = 200;

    gsap.killTweensOf(".marquee-text");

    marqueeRowsRef.current.forEach((row, index) => {
      if (!row) return;

      const inner = row.querySelector(".marquee-text");
      if (!inner) return;

      gsap.set(inner, { clearProps: "all" });

      const shuffledText = [...MARQUEE_TEXT];
      for (let i = 0; i < index % MARQUEE_TEXT.length; i++) {
        shuffledText.push(shuffledText.shift()!);
      }

      const rowText = shuffledText.join(" • ");
      inner.innerHTML = ` • <span>${rowText}</span> • <span>${rowText}</span> • <span>${rowText}</span> •`;

      const singleSpanWidth = inner.querySelector("span")?.offsetWidth ?? 0;

      if (index % 2 === 0) {
        // Even rows - move left
        gsap.to(inner, {
          x: -singleSpanWidth,
          duration: DURATION,
          repeat: -1,
          ease: "linear",
          onRepeat: () => {
            gsap.set(inner, { x: 0 });
          },
        });
      } else {
        // Odd rows - move right
        gsap.fromTo(
          inner,
          { x: -singleSpanWidth },
          {
            x: 0,
            duration: DURATION,
            repeat: -1,
            ease: "linear",
            onRepeat: () => {
              gsap.set(inner, { x: -singleSpanWidth });
            },
          },
        );
      }
    });

    return () => {
      gsap.killTweensOf(".marquee-text");
    };
  }, [rowCount, textSize]);

  // GSAP reveal animation
  useGSAP(() => {
    const marqueeTL = gsap.timeline({ delay: 0.2 });

    marqueeTL.fromTo(
      marqueeRowsRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 0.2,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: {
          amount: 0.6,
          from: "start",
        },
      },
    );

    return () => {
      marqueeTL.kill();
    };
  }, [rowCount]);

  useGSAP(() => {
    setTimeout(() => {
      const headingTL = gsap.timeline({
        delay: 0.7,
        defaults: { duration: 0.8, ease: "power2.out" },
      });
      if (giglanceTextRef.current) {
        giglanceTextSplit.current = new SplitText(giglanceTextRef.current, {
          type: "chars",
          linesClass: "hero-giglance-line",
          charsClass: "hero-giglance-chars",
        });

        gsap.set(".hero-giglance-chars", { y: 30, opacity: 0 });
        headingTL.to(".hero-giglance-chars", {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: {
            amount: 0.4,
            from: "random",
          },
        });
      }
      if (document.querySelectorAll(".hero-subheading-word").length > 0) {
        gsap.set(".hero-subheading-word", { y: 30, opacity: 0 });
        headingTL.to(
          ".hero-subheading-word",
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
          },
          "-=1",
        );
      }

      if (document.querySelectorAll(".hero-heading-line").length > 0) {
        gsap.set(".hero-heading-line", { y: 70, opacity: 0 });
        headingTL.to(
          ".hero-heading-line",
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
          },
          "-=1",
        );
      }

      headingTL.fromTo(
        ".hero-content-item",
        { y: 0, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
        },
        "-=1",
      );

      if (imageRef.current) {
        headingTL.fromTo(
          imageRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.8",
        );
      }
    }, 100);
  }, []);

  const HERO_ITEMS: HeroItems = {
    heading: {
      lines: ["Freelance Jobs and Talents at Your Fingertips"],
    },
    subheading: "Find Your Dream Job",
    description:
      "Connect with top freelancers and clients on our platform! Find your perfect match for your next project.",
    freelancersCount: "Over 12800+ freelancers to complete your projects",
  };

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
            className="text-primary flex translate-y-[-50%] items-center border-none font-bold uppercase italic opacity-20"
            style={{
              fontSize: `${textSize * 1.5}px`,
              minHeight: `${textSize * 1.1}px`,
              overflow: "hidden",
              whiteSpace: "nowrap",
              willChange: "transform",
              fontFamily: inter.style.fontFamily,
            }}
          >
            <span className="marquee-text inline-block"></span>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-20 container mx-auto flex h-full items-center justify-center px-4 md:px-8">
        <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row lg:gap-12">
          {/* Text Content */}
          <div className="w-full pt-[50%] text-center md:w-1/2 md:pt-[20%] md:text-left lg:pt-[0%]">
            <div className="overflow-hidden">
              <h3
                ref={subheadingRef}
                className={`${inter.variable} text-primary mb-2 text-lg font-semibold md:text-xl`}
              >
                {HERO_ITEMS.subheading}
              </h3>
            </div>
            <div className="overflow-hidden">
              <h1
                ref={giglanceTextRef}
                className={`giglance-text overflow-hidden text-7xl font-bold text-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ${inter.variable} leading-none`}
              >
                GIGLANCE
              </h1>
              <h1
                ref={headingRef}
                className={`text-primary ${inter.variable} mb-4 text-3xl font-bold tracking-tight uppercase md:mb-6 md:text-4xl lg:text-5xl xl:text-6xl`}
              >
                {HERO_ITEMS.heading.lines.join(" ")}
              </h1>
            </div>

            <p
              className={`${inter.variable} hero-content-item mx-auto mb-8 max-w-2xl text-base md:mx-0 md:text-lg`}
            >
              {HERO_ITEMS.description}
            </p>

            <div className="hero-content-item mb-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
              <Button size="lg" className="text-base">
                Find Jobs
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                Hire Talent
              </Button>
            </div>

            <p
              className={`${inter.variable} hero-content-item text-sm text-gray-600 md:text-base`}
            >
              {HERO_ITEMS.freelancersCount}
            </p>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className="hero-content-item flex w-full justify-center md:w-1/2 md:justify-end"
          >
            <div className="relative aspect-square w-full max-w-xl">
              <Image
                src={stockImage}
                alt="Freelance Platform"
                className="rounded-3xl object-cover shadow-lg"
                fill
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
