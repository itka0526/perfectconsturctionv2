import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  BrandCard,
  ButtonLink,
  ContactPanel,
  ProjectCard,
  ProjectImage,
  SectionHeading,
} from "@/components";
import {
  brands,
  productBySlug,
  products,
  projects,
} from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import {
  breadcrumbsJsonLd,
  serviceJsonLd,
} from "@/lib/structured-data";

import { EditorialList, JsonLd } from "../../_route-helpers";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return products
    .filter((product) => !product.draft && product.slug !== "customization")
    .map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug.get(slug);

  if (!product || product.draft || product.slug === "customization") {
    notFound();
  }

  return createPageMetadata({
    title: product.seo.title.mn,
    description: product.seo.description.mn,
    path: product.seo.canonicalPath,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productBySlug.get(slug);

  if (!product || product.draft || product.slug === "customization") {
    notFound();
  }

  const applicableBrands = brands.filter(
    (brand) => !brand.draft && product.brandSlugs.includes(brand.slug),
  );
  const relatedProjects = projects.filter(
    (project) =>
      !project.draft && product.projectSlugs.includes(project.slug),
  );

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbsJsonLd([
            { name: "Нүүр", path: "/" },
            { name: "Бүтээгдэхүүн", path: "/products" },
            { name: product.title.mn, path: product.seo.canonicalPath },
          ]),
          serviceJsonLd({
            name: `${product.title.mn} — нийлүүлэлт, угсралт`,
            description: product.summary.mn,
            path: product.seo.canonicalPath,
          }),
        ]}
      />

      <section className="page-hero section">
        <div className="shell">
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Захиалгаар үйлдвэрлэнэ</p>
              <h1 className="display">{product.title.mn}</h1>
              <p className="lede">{product.summary.mn}</p>
              <div className="button-row">
                <ButtonLink href="/contact">Төслийн талаар ярилцах</ButtonLink>
                <ButtonLink href="/resources" variant="outline">
                  Бэлтгэх мэдээлэл
                </ButtonLink>
              </div>
            </div>
            <ProjectImage
              asset={product.assets[0]}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell detail-grid">
          <div>
            <SectionHeading
              eyebrow="Зориулалт"
              title="Ямар барилгад тохирох вэ?"
            />
            <EditorialList items={product.applications.map((item) => item.mn)} />
          </div>
          <div>
            <SectionHeading
              eyebrow="Сонголт"
              title="Юуг сонгох вэ?"
            />
            <EditorialList
              items={product.configurations.map((item) => item.mn)}
            />
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell split-feature">
          <SectionHeading
            eyebrow="Техникийн уулзалт"
            title="Үнийн санал гаргахад шаардлагатай мэдээлэл"
            inverse
          />
          <div className="prose">
            <EditorialList
              items={product.technicalConsiderations.map((item) => item.mn)}
            />
            <p>
              Даац, хурд, хэмжээ, хийцийн боломжийг үйлдвэрлэгчийн албан ёсны
              каталог болон талбайн бодит хэмжилтэд тулгуурлан сонгоно.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            eyebrow="Үйлдвэрлэгч"
            title="Техникийн үзүүлэлт, төсөв, тээврийг харьцуулна"
            description="Доорх үйлдвэрлэгчдийн боломжит хэмжээ, даац, хурд, хийцийг төслийн нөхцөлтэй харьцуулна."
          />
          <div className="grid-3">
            {applicableBrands.map((brand) => (
              <BrandCard brand={brand} key={brand.slug} />
            ))}
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="section">
          <div className="shell">
            <SectionHeading
              eyebrow="Холбогдох төсөл"
              title="Ижил төрлийн гүйцэтгэсэн ажил"
              description="Ижил төрлийн барилгад хэрэгжүүлсэн шийдлүүдийг харьцуулж үзнэ үү."
            />
            <div className="project-grid">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section--contact">
        <div className="shell">
          <ContactPanel
            title="Захиалгынхаа талаар ярилцъя"
            description="Шахтын зураг, давхрын тоо, төлөвлөсөн даац, ашиглалтын зориулалтын мэдээллээ шууд хэлж болно."
          />
        </div>
      </section>
    </main>
  );
}
