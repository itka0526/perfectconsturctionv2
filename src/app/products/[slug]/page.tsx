import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  BrandCard,
  Breadcrumbs,
  ButtonLink,
  ContactPanel,
  PlaceholderBadge,
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
    title: `${product.seo.title.mn} | Perfect Construction`,
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

  const applicableBrands = brands.filter((brand) =>
    product.brandSlugs.includes(brand.slug),
  );
  const relatedProjects = projects.filter((project) =>
    product.projectSlugs.includes(project.slug),
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
            name: `${product.title.mn} — төслийн нийлүүлэлт`,
            description: product.summary.mn,
            path: product.seo.canonicalPath,
          }),
        ]}
      />

      <section className="page-hero section">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Нүүр", href: "/" },
              { label: "Бүтээгдэхүүн", href: "/products" },
              { label: product.title.mn },
            ]}
          />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Төслөөр тохируулах шийдэл</p>
              <h1 className="display">{product.title.mn}</h1>
              <p className="lede">{product.summary.mn}</p>
              {product.verificationStatus === "placeholder" ? (
                <PlaceholderBadge />
              ) : null}
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
              eyebrow="Хаана тохирох вэ"
              title="Барилгын хэрэглээ"
            />
            <EditorialList items={product.applications.map((item) => item.mn)} />
          </div>
          <div>
            <SectionHeading
              eyebrow="Юуг тохируулах вэ"
              title="Боломжит тохиргоо"
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
            title="Үнийн саналын өмнө шалгах зүйлс"
            inverse
          />
          <div className="prose">
            <EditorialList
              items={product.technicalConsiderations.map((item) => item.mn)}
            />
            <p>
              Даац, хурд, хэмжээ болон сонголтын албан ёсны хүрээг үйлдвэрлэгчийн
              баталгаажсан каталог, талбайн бодит нөхцөлтэй хамт тохирно.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            eyebrow="Үйлдвэрлэгчийн хувилбар"
            title="Төсөв, хийц, логистикийг хамтад нь сонгоно"
            description="Доорх брэндүүдийн боломжит үзүүлэлтийг төсөл тус бүрээр баталгаажуулна."
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
              eyebrow="Холбогдох ажил"
              title="Төслийн жишээнүүд"
              description="Бодит кейсийн мэдээлэл, зургийг нийтлэх зөвшөөрлийн дараа шинэчилнэ."
            />
            <div className="project-grid">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="shell">
          <ContactPanel
            title={`${product.title.mn}-ний төслийг ярилцъя`}
            description="Шахтын зураг, давхар, даац, ашиглалтын зориулалтын мэдээлэл байвал шууд хуваалцаарай. Маягт бөглөх шаардлагагүй."
          />
        </div>
      </section>
    </main>
  );
}
