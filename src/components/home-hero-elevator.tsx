"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";

import type { AssetRef } from "@/content";

interface HomeHeroElevatorProps {
  car: AssetRef;
  shaft: AssetRef;
}

const DEFAULT_SCROLL_START = 0.12;
const DEFAULT_SCROLL_RANGE = 0.88;
const DEFAULT_SCROLL_TRAVEL = 0.72;
const DEFAULT_SCROLL_RESPONSE = 14;
const DEFAULT_SCROLL_SNAP = 0.35;

function readNumber(
  styles: CSSStyleDeclaration,
  property: string,
  fallback: number,
) {
  const value = Number.parseFloat(styles.getPropertyValue(property));

  return Number.isFinite(value) ? value : fallback;
}

export function HomeHeroElevator({
  car,
  shaft,
}: HomeHeroElevatorProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const section = root?.closest<HTMLElement>(".page-hero--home-static");

    if (!root || !section) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let frame = 0;
    let isVisible = true;
    let needsMeasurement = true;
    let isInitialized = false;
    let currentOffset = 0;
    let targetOffset = 0;
    let maximumOffset = 0;
    let targetProgress = 0;
    let response = DEFAULT_SCROLL_RESPONSE;
    let snapDistance = DEFAULT_SCROLL_SNAP;
    let previousTime = 0;

    const measureTarget = () => {
      if (reducedMotion.matches) {
        currentOffset = 0;
        targetOffset = 0;
        maximumOffset = 0;
        targetProgress = 0;
        previousTime = 0;
        isInitialized = true;
        root.style.setProperty("--hero-elevator-scroll-progress", "0");
        root.style.setProperty("--hero-elevator-scroll-offset", "0px");
        return;
      }

      const styles = getComputedStyle(section);
      const sectionRect = section.getBoundingClientRect();
      const scrollStart = readNumber(
        styles,
        "--hero-elevator-scroll-start",
        DEFAULT_SCROLL_START,
      );
      const scrollRange = readNumber(
        styles,
        "--hero-elevator-scroll-range",
        DEFAULT_SCROLL_RANGE,
      );
      const scrollTravel = readNumber(
        styles,
        "--hero-elevator-scroll-travel",
        DEFAULT_SCROLL_TRAVEL,
      );
      response = Math.max(
        readNumber(
          styles,
          "--hero-elevator-scroll-response",
          DEFAULT_SCROLL_RESPONSE,
        ),
        0.01,
      );
      snapDistance = Math.max(
        readNumber(
          styles,
          "--hero-elevator-scroll-snap",
          DEFAULT_SCROLL_SNAP,
        ),
        0.01,
      );
      const startLine = window.innerHeight * scrollStart;
      const range = Math.max(sectionRect.height * scrollRange, 1);
      targetProgress = Math.min(
        Math.max((startLine - sectionRect.top) / range, 0),
        1,
      );
      maximumOffset = root.offsetHeight * scrollTravel;
      targetOffset = targetProgress * maximumOffset;

      if (!isInitialized) {
        currentOffset = targetOffset;
        isInitialized = true;
      }
    };

    const renderOffset = () => {
      const progress =
        maximumOffset > 0
          ? Math.min(Math.max(currentOffset / maximumOffset, 0), 1)
          : targetProgress;

      root.style.setProperty(
        "--hero-elevator-scroll-progress",
        progress.toFixed(4),
      );
      root.style.setProperty(
        "--hero-elevator-scroll-offset",
        `${currentOffset.toFixed(2)}px`,
      );
    };

    const animate = (time: number) => {
      frame = 0;

      if (!isVisible) {
        previousTime = 0;
        return;
      }

      if (needsMeasurement) {
        measureTarget();
        needsMeasurement = false;
      }

      if (reducedMotion.matches) {
        return;
      }

      const deltaSeconds = previousTime
        ? Math.min((time - previousTime) / 1000, 0.1)
        : 1 / 60;
      const ease = 1 - Math.exp(-response * deltaSeconds);

      previousTime = time;
      currentOffset += (targetOffset - currentOffset) * ease;

      const isSettled =
        Math.abs(targetOffset - currentOffset) <= snapDistance;

      if (isSettled) {
        currentOffset = targetOffset;
        previousTime = 0;
      }

      renderOffset();

      if (!isSettled) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const scheduleUpdate = () => {
      needsMeasurement = true;

      if (!isVisible || frame) {
        return;
      }

      frame = window.requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;

      if (isVisible) {
        scheduleUpdate();
      } else {
        previousTime = 0;

        if (frame) {
          window.cancelAnimationFrame(frame);
          frame = 0;
        }
      }
    });

    observer.observe(section);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    reducedMotion.addEventListener("change", scheduleUpdate);
    measureTarget();
    needsMeasurement = false;
    renderOffset();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      className="home-hero-elevator"
      aria-hidden="true"
      data-home-elevator=""
      ref={rootRef}
      style={
        {
          "--hero-elevator-scroll-offset": "0px",
          "--hero-elevator-scroll-progress": 0,
          position: "absolute",
        } as CSSProperties
      }
    >
      <Image
        alt=""
        className="home-hero-elevator__shaft"
        fill
        preload
        sizes="(max-width: 900px) 92vw, 44vw"
        src={shaft.src}
      />
      <div
        className="home-hero-elevator__car"
        style={{ position: "absolute" }}
      >
        <Image
          alt=""
          draggable={false}
          fill
          loading="eager"
          sizes="(max-width: 900px) 74vw, 36vw"
          src={car.src}
        />
      </div>
    </div>
  );
}
