import type { Brand } from "@/content";
import { ButtonLink } from "./button-link";
import { PlaceholderBadge } from "./placeholder-badge";
import { ProjectImage } from "./project-image";

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  const asset = brand.assets[0];

  return (
    <article className="card brand-card">
      {asset && (
        <div className="card__media brand-card__media">
          <ProjectImage
            asset={asset}
            sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
            aspect="2 / 1"
          />
        </div>
      )}
      <div className="card__body">
        <div className="card__meta">
          <span>{brand.origin.mn}</span>
          {brand.verificationStatus === "placeholder" && (
            <PlaceholderBadge label="Статус баталгаажуулна" />
          )}
        </div>
        <h3>{brand.title.mn}</h3>
        <p>{brand.positioning.mn}</p>
        <ButtonLink
          href={`/brands/${brand.slug}`}
          variant="text"
          eventName="brand_click"
          eventContext={brand.slug}
        >
          Брэндийн тухай
        </ButtonLink>
      </div>
    </article>
  );
}
