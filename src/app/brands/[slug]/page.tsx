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
    title: `${brand.seo.title.mn} | Perfect Construction`,
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
    brand.certificateSlugs.includes(certificate.slug),
  );
  const isSeohyun = brand.slug === "seohyun";

  return (
    <main>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Нүүр", path: "/" },
          { name: "Брэнд", path: "/brands" },
          { name: brand.title.mn, path: brand.seo.canonicalPath },
        ])}
      />
      <section className="page-hero section">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Нүүр", href: "/" },
              { label: "Брэнд", href: "/brands" },
              { label: brand.title.mn },
            ]}
          />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Үйлдвэрлэгч · {brand.origin.mn}</p>
              <h1 className="display">{brand.title.mn}</h1>
              <p className="lede">{brand.summary.mn}</p>
              {brand.verificationStatus === "placeholder" ? (
                <PlaceholderBadge label="Брэндийн мэдээллийг баталгаажуулна" />
              ) : null}
              <ButtonLink href="/contact">Төслөөр санал авах</ButtonLink>
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
            <p className="eyebrow">Төслийн байршуулалт</p>
            <h2>{brand.positioning.mn}</h2>
          </article>
          <article className="prose">
            <p className="eyebrow">Логистикийн нөхцөл</p>
            <p>{brand.logisticsNote.mn}</p>
            <p>
              {isSeohyun
                ? "30/15/8 хоногийн БНХАУ гаралтай стандарт суурь хугацаа энэ брэндэд шууд хамаарахгүй. Үйлдвэрлэл, шууд бус тээвэр, хүргэлтийг төсөл бүрээр тусад нь батална."
                : "Ердийн тохиргоонд 30 хоногийн үйлдвэрлэл, 15 хоногоос хүргэлт, 8 хоногоос угсралтын суурийг авч үзэж болох боловч эхлэх нөхцөл болон эцсийн хуваарийг төслөөр батална."}
            </p>
          </article>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            eyebrow="Боломжит хэрэглээ"
            title={`${brand.title.mn}-тай авч үзэх бүтээгдэхүүнүүд`}
            description="Бодит загвар, даац, хурд, тохиргооны боломжийг албан ёсны каталогоор баталгаажуулна."
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
            eyebrow="Үйлдвэрлэгчийн нотолгоо"
            title="Эрхийн статусыг баримтаар харуулна"
            inverse
          />
          <div className="prose">
            <p>{brand.authorizationStatement.mn}</p>
            <PlaceholderBadge label="Нийтлэх зөвшөөрөл хүлээгдэж байна" />
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
            title={`${brand.title.mn}-ийн хувилбарыг төсөлдөө тооцъё`}
            description="Барилгын зориулалт, шахтын хэмжээ, даац, хугацаа, төсвийн чиглэлээ шууд ярилцаарай."
          />
        </div>
      </section>
    </main>
  );
}
