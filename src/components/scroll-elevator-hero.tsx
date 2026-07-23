"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef } from "react";
import type { AssetRef } from "@/content";

interface ScrollElevatorHeroProps {
  car: AssetRef;
  children: ReactNode;
  shaft: AssetRef;
}

const STATIC_PROGRESS = "0.22";

export function ScrollElevatorHero({
  car,
  children,
  shaft,
}: ScrollElevatorHeroProps) {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    const sticky = stickyRef.current;

    if (!root || !track || !sticky) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const compactLayout = window.matchMedia("(max-width: 900px)");
    let frame = 0;
    let isVisible = true;

    const update = () => {
      frame = 0;

      if (reducedMotion.matches || compactLayout.matches) {
        root.style.setProperty("--scroll-progress", STATIC_PROGRESS);
        return;
      }

      const trackRect = track.getBoundingClientRect();
      const stickyTop = Number.parseFloat(getComputedStyle(sticky).top) || 0;
      const travel = Math.max(track.offsetHeight - sticky.offsetHeight, 1);
      const progress = Math.min(
        Math.max((stickyTop - trackRect.top) / travel, 0),
        1,
      );

      root.style.setProperty("--scroll-progress", progress.toFixed(4));
    };

    const scheduleUpdate = () => {
      if (!isVisible || frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;

      if (isVisible) {
        scheduleUpdate();
      }
    });

    observer.observe(track);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    reducedMotion.addEventListener("change", scheduleUpdate);
    compactLayout.addEventListener("change", scheduleUpdate);
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);
      compactLayout.removeEventListener("change", scheduleUpdate);

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <section
      className="page-hero page-hero--home page-hero--scroll"
      data-scroll-elevator=""
      ref={rootRef}
      style={{ "--scroll-progress": 0 } as CSSProperties}
    >
      <div className="scroll-hero__track" ref={trackRef}>
        <div className="scroll-hero__sticky" ref={stickyRef}>
          <div className="shell scroll-hero__stage">
            <div className="scroll-hero__copy">{children}</div>
            <div className="scroll-elevator" aria-hidden="true">
              <Image
                alt=""
                className="scroll-elevator__shaft"
                fill
                preload
                sizes="(max-width: 900px) 95vw, 48vw"
                src={shaft.src}
              />
              <div className="scroll-elevator__car">
                <Image
                  alt=""
                  draggable={false}
                  fill
                  loading="eager"
                  sizes="(max-width: 900px) 72vw, 39vw"
                  src={car.src}
                />
              </div>
              <div className="scroll-elevator__top-mask" />
              <div className="scroll-elevator__floor-mask" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
