import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  Breadcrumbs,
  ContactPanel,
  Gallery,
  PlaceholderBadge,
  ProductCard,
  ProjectImage,
  SectionHeading,
} from "@/components";
import {
  brandBySlug,
  productBySlug,
  projectBySlug,
  projects,
} from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbsJsonLd } from "@/lib/structured-data";

import { JsonLd } from "../../_route-helpers";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects
    .filter((project) => !project.draft)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug.get(slug);

  if (!project || project.draft) {
    notFound();
  }

  return createPageMetadata({
    title: project.seo.title.mn,
    description: project.seo.description.mn,
    path: project.seo.canonicalPath,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectBySlug.get(slug);

  if (!project || project.draft) {
    notFound();
  }

  const relatedProducts = project.productSlugs
    .map((productSlug) => productBySlug.get(productSlug))
    .filter(
      (product): product is NonNullable<typeof product> =>
        Boolean(product && !product.draft),
    );
  const brand = project.brandSlug
    ? brandBySlug.get(project.brandSlug)
    : undefined;

  return (
    <main>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Нүүр", path: "/" },
          { name: "Төсөл", path: "/projects" },
          { name: project.title.mn, path: project.seo.canonicalPath },
        ])}
      />
      <section className="page-hero section">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Нүүр", href: "/" },
              { label: "Төсөл", href: "/projects" },
              { label: project.title.mn },
            ]}
          />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">
                {project.buildingType.mn} · {project.location.mn}
              </p>
              <h1 className="display">{project.title.mn}</h1>
              <p className="lede">{project.summary.mn}</p>
              <PlaceholderBadge label="Төслийн мэдээлэл, зургийг баталгаажуулна" />
            </div>
            <ProjectImage
              asset={project.assets[0]}
              priority
              sizes="(max-width: 768px) 100vw, 52vw"
              caption="Захиалагчийн зөвшөөрөлтэй бодит төслийн зургаар солино."
            />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell proof-grid">
          <article className="card">
            <p className="card__meta">Байршил</p>
            <h2>{project.location.mn}</h2>
          </article>
          <article className="card">
            <p className="card__meta">Барилгын төрөл</p>
            <h2>{project.buildingType.mn}</h2>
          </article>
          <article className="card">
            <p className="card__meta">Гүйцэтгэл</p>
            <h2>{project.completionLabel.mn}</h2>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="shell detail-grid">
          <article>
            <p className="eyebrow">Барилгын нөхцөл</p>
            <h2>{project.challenge.mn}</h2>
            <PlaceholderBadge />
          </article>
          <article>
            <p className="eyebrow">Сонгосон шийдэл</p>
            <h2>{project.solution.mn}</h2>
            <PlaceholderBadge />
          </article>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell">
          <SectionHeading
            eyebrow="Төслийн зураг"
            title="Талбай, угсралтын явц, дууссан ажил"
            description="Доорх зургийн цомогт зөвхөн тухайн төслийн нийтлэх зөвшөөрөлтэй зургууд орно."
            inverse
          />
          <Gallery assets={project.assets} label={`${project.title.mn} зургийн цомог`} />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Төслийн бүрэлдэхүүн"
            title="Сонгосон бүтээгдэхүүн ба үйлдвэрлэгч"
          />
          {brand ? (
            <p className="lede">
              Үйлдвэрлэгч: {" "}
              <Link className="link-arrow" href={`/brands/${brand.slug}`}>
                {brand.title.mn} <span aria-hidden="true">→</span>
              </Link>
            </p>
          ) : null}
          <div className="grid-3">
            {relatedProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <ContactPanel
            title="Ижил төрлийн төслөө ярилцъя"
            description="Барилга бүрийн хэмжээ, зориулалт, ашиглалтын нөхцөл өөр тул таны төсөлд тохирох хувилбарыг тусад нь тодорхойлно."
          />
        </div>
      </section>
    </main>
  );
}
