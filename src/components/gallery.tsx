"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { AssetRef } from "@/content";
import { ProjectImage } from "./project-image";

interface GalleryProps {
  assets: AssetRef[];
  label?: string;
}

export function Gallery({
  assets,
  label = "Төслийн зургийн цомог",
}: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (assets.length === 0) {
    return (
      <div className="gallery gallery--empty" role="status">
        Зураг нийтлэх зөвшөөрөл хүлээгдэж байна.
      </div>
    );
  }

  const safeIndex = Math.min(selectedIndex, assets.length - 1);
  const currentAsset = assets[safeIndex];
  const hasMultiple = assets.length > 1;

  const selectPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? assets.length - 1 : current - 1,
    );
  };

  const selectNext = () => {
    setSelectedIndex((current) =>
      current === assets.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section className="gallery" aria-label={label}>
      <div className="gallery__stage">
        <ProjectImage
          asset={currentAsset}
          sizes="(max-width: 900px) 100vw, 70vw"
          aspect="16 / 10"
          priority
        />
        {hasMultiple && (
          <div className="gallery__controls">
            <button type="button" onClick={selectPrevious}>
              <ChevronLeft aria-hidden="true" size={20} strokeWidth={1.8} />
              <span className="sr-only">Өмнөх зураг</span>
            </button>
            <p aria-live="polite" aria-atomic="true">
              {safeIndex + 1} / {assets.length}
            </p>
            <button type="button" onClick={selectNext}>
              <ChevronRight aria-hidden="true" size={20} strokeWidth={1.8} />
              <span className="sr-only">Дараагийн зураг</span>
            </button>
          </div>
        )}
      </div>
      {hasMultiple && (
        <div className="gallery__thumbnails" role="list">
          {assets.map((asset, index) => (
            <button
              key={`${asset.src}-${index}`}
              type="button"
              role="listitem"
              aria-label={`${index + 1}-р зургийг үзэх`}
              aria-current={safeIndex === index ? "true" : undefined}
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={asset.src}
                alt=""
                fill
                sizes="96px"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
