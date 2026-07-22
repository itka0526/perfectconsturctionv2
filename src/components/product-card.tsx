import type { Product } from "@/content";
import { ButtonLink } from "./button-link";
import { PlaceholderBadge } from "./placeholder-badge";
import { ProjectImage } from "./project-image";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const asset = product.assets[0];

  return (
    <article className="card product-card">
      {asset && (
        <div className="card__media">
          <ProjectImage
            asset={asset}
            sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
            priority={priority}
            aspect="4 / 3"
          />
        </div>
      )}
      <div className="card__body">
        <div className="card__meta">
          <span>Лифтний шийдэл</span>
          {product.verificationStatus === "placeholder" && (
            <PlaceholderBadge />
          )}
        </div>
        <h3>{product.title.mn}</h3>
        <p>{product.summary.mn}</p>
        <ButtonLink
          href={`/products/${product.slug}`}
          variant="text"
          eventName="product_click"
          eventContext={product.slug}
        >
          Дэлгэрэнгүй
        </ButtonLink>
      </div>
    </article>
  );
}
