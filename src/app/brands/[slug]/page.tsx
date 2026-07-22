import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  Breadcrumbs,
  ButtonLink,
  ContactPanel,
  PlaceholderBadge,
  ProductCard,
  ProjectImage,
  SectionHeading,
} from "@/components";
import {
  brandBySlug,
  brands,
  certificates,
  products,
} from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbsJsonLd } from "@/lib/structured-data";

import { JsonLd } from "../../_route-helpers";

type BrandPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return brands
    .filter((brand) => !brand.draft)
    .map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = brandBySlug.get(slug);

  if (!brand || brand.draft) {
    notFound();
  }

  return createPageMetadata({
    title: brand.seo.title.mn,
    description: brand.seo.description.mn,
    path: brand.seo.canonicalPath,
  });
}

export default async function BrandDetailPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = brandBySlug.get(slug);

  if (!brand || brand.draft) {
    notFound();
  }

  const applicableProducts = products.filter((product) =>
    brand.productSlugs.includes(product.slug),
  );
  const brandCertificates = certificates.filter((certificate) =>
    !certificate.draft && brand.certificateSlugs.includes(certificate.slug),
  );

  return (
    <main>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Нүүр", path: "/" },
          { name: "Үйлдвэрлэгчид", path: "/brands" },
          { name: brand.title.mn, path: brand.seo.canonicalPath },
        ])}
      />
      <section className="page-hero section">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Нүүр", href: "/" },
              { label: "Үйлдвэрлэгчид", href: "/brands" },
              { label: brand.title.mn },
            ]}
          />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Үйлдвэрлэгч · {brand.origin.mn}</p>
              <h1 className="display">{brand.title.mn}</h1>
              <p className="lede">{brand.summary.mn}</p>
              {brand.verificationStatus === "placeholder" ? (
                <PlaceholderBadge label="Үйлдвэрлэгчийн мэдээллийг баталгаажуулна" />
              ) : null}
              <ButtonLink href="/contact">Үнийн санал авах</ButtonLink>
            </div>
            <ProjectImage
              asset={brand.assets[0]}
              priority
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell detail-grid">
          <article>
            <p className="eyebrow">Ямар төсөлд тохирох вэ?</p>
            <h2>{brand.positioning.mn}</h2>
          </article>
          <article className="prose">
            <p className="eyebrow">Тээврийн нөхцөл</p>
            <p>{brand.logisticsNote.mn}</p>
          </article>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            eyebrow="Бүтээгдэхүүн"
            title={`${brand.title.mn}-ийн боломжит бүтээгдэхүүнүүд`}
            description="Загвар, даац, хурд, хийцийн боломжийг үйлдвэрлэгчийн албан ёсны каталогоор баталгаажуулна."
          />
          <div className="grid-3">
            {applicableProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell split-feature">
          <SectionHeading
            eyebrow="Албан ёсны эрх"
            title="Үйлдвэрлэгчийн эрхийн баримт"
            inverse
          />
          <div className="prose">
            <p>{brand.authorizationStatement.mn}</p>
            {brand.verificationStatus === "placeholder" ? (
              <PlaceholderBadge label="Нийтлэх зөвшөөрөл хүлээгдэж байна" />
            ) : null}
            {brandCertificates.map((certificate) => (
              <p key={certificate.slug}>
                <Link
                  className="link-arrow"
                  href={`/about/certificates#${certificate.slug}`}
                >
                  {certificate.title.mn} <span aria-hidden="true">→</span>
                </Link>
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <ContactPanel
            title={`${brand.title.mn}-ийн бүтээгдэхүүнийг төсөлдөө сонгоё`}
            description="Барилгын зориулалт, шахтын хэмжээ, даац, хугацаа, төсвийн хүрээгээ шууд ярилцаарай."
          />
        </div>
      </section>
    </main>
  );
}
