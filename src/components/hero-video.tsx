"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  src: string;
}

export function HeroVideo({ src }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      video.pause();
      video.currentTime = 0;
      video.dataset.state = "reduced-motion";
      return;
    }

    let isVisible = false;
    let hasScrolled = window.scrollY > 1;

    const playOnce = () => {
      if (!isVisible || !hasScrolled || hasPlayedRef.current) return;

      hasPlayedRef.current = true;
      video.currentTime = 0;
      video.dataset.state = "playing";

      void video.play().catch(() => {
        hasPlayedRef.current = false;
        video.dataset.state = "paused";
      });
    };

    const handleScroll = () => {
      hasScrolled = true;
      playOnce();
    };

    const handleEnded = () => {
      video.dataset.state = "ended";
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        playOnce();
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    video.addEventListener("ended", handleEnded);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      video.removeEventListener("ended", handleEnded);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-video" aria-hidden="true">
      <video
        ref={videoRef}
        data-state="paused"
        disablePictureInPicture
        muted
        playsInline
        preload="auto"
        src={src}
      />
    </div>
  );
}
