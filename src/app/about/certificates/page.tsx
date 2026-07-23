import {
  ContactPanel,
  ProjectImage,
  SectionHeading,
} from "@/components";
import { certificates } from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbsJsonLd } from "@/lib/structured-data";

import { JsonLd } from "../../_route-helpers";

export const metadata = createPageMetadata({
  title: "Үйлдвэрлэгчийн эрхийн баримт, гэрчилгээ",
  description:
    "Төгс Бүтээн Босголтын үйлдвэрлэгчийн эрхийн баримт, гэрчилгээний сан.",
  path: "/about/certificates",
});

const orderedCertificates = certificates
  .filter(
    (certificate) => !certificate.draft && certificate.publicationAuthorized,
  );

export default function CertificatesPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Нүүр", path: "/" },
          { name: "Компанийн тухай", path: "/about" },
          { name: "Баримт, гэрчилгээ", path: "/about/certificates" },
        ])}
      />
      <section className="page-hero section">
        <div className="shell">
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Албан ёсны баримт</p>
              <h1 className="display">Үйлдвэрлэгчийн эрхийн баримт, гэрчилгээ</h1>
            </div>
            <p className="lede">
              Үйлдвэрлэгчийн эрхийн баримтын гаргагч, төрөл, хүчинтэй хугацаа,
              үзэх зураг болон эх PDF файлыг нэг дор танилцуулна.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Үйлдвэрлэгчээр"
            title="Эрхийн баримт, гэрчилгээ"
            description="Үйлдвэрлэгчтэй хамтран ажиллах эрх, баримт бичгийг эндээс үзнэ үү."
          />
          <div className="certificate-grid">
            {orderedCertificates.map((certificate) => (
              <article className="card" id={certificate.slug} key={certificate.slug}>
                <div className="card__media">
                  <ProjectImage
                    asset={certificate.previewAsset}
                    sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                </div>
                <div className="card__body">
                  <p className="card__meta">{certificate.documentType.mn}</p>
                  <h2>{certificate.title.mn}</h2>
                  <p>{certificate.summary.mn}</p>
                  <p>Гаргагч: {certificate.issuer.mn}</p>
                  {certificate.downloadPath ? (
                    <a
                      className="link-arrow"
                      download
                      href={certificate.downloadPath}
                    >
                      Эх баримт татах <span aria-hidden="true">↓</span>
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--contact">
        <div className="shell">
          <ContactPanel
            title="Төсөлд тохирох үйлдвэрлэгчийн талаар асуугаарай"
            description="Тухайн үйлдвэрлэгчийн эрхийн баримт болон бүтээгдэхүүний мэдээллийг уулзалтаар дэлгэрэнгүй танилцуулна."
          />
        </div>
      </section>
    </main>
  );
}
