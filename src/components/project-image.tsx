import Image from "next/image";
import type { CSSProperties } from "react";
import type { AssetRef } from "@/content";

interface ProjectImageProps {
  asset: AssetRef;
  sizes?: string;
  priority?: boolean;
  className?: string;
  aspect?: string;
  scale?: number;
  position?: string;
  fit?: "cover" | "contain";
  caption?: string;
}

export function ProjectImage({
  asset,
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  className = "",
  aspect,
  scale = 1,
  position = "center",
  fit = "cover",
  caption,
}: ProjectImageProps) {
  const image = (
    <div
      className={`project-image ${className}`.trim()}
      data-fit={fit}
      style={
        {
          "--image-aspect": aspect ?? `${asset.width} / ${asset.height}`,
          "--image-scale": scale,
          "--image-hover-scale": scale * 1.025,
          "--image-position": position,
          "--image-fit": fit,
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
