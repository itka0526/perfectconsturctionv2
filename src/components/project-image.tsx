import Image from "next/image";
import type { CSSProperties } from "react";
import type { AssetRef } from "@/content";
import { PlaceholderBadge } from "./placeholder-badge";

interface ProjectImageProps {
  asset: AssetRef;
  sizes?: string;
  priority?: boolean;
  className?: string;
  aspect?: string;
  caption?: string;
}

export function ProjectImage({
  asset,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  className = "",
  aspect,
  caption,
}: ProjectImageProps) {
  const image = (
    <div
      className={`project-image ${className}`.trim()}
      style={
        {
          "--image-aspect": aspect ?? `${asset.width} / ${asset.height}`,
        } as CSSProperties
      }
    >
      <Image
        src={asset.src}
        alt={asset.alt.mn}
        fill
        sizes={sizes}
        priority={priority}
      />
      {asset.verificationStatus === "placeholder" && (
        <span className="project-image__status">
          <PlaceholderBadge label="Түр зураг" />
        </span>
      )}
    </div>
  );

  if (!caption) {
    return image;
  }

  return (
    <figure className="project-image-figure">
      {image}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
