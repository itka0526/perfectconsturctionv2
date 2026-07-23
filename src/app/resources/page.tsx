import Link from "next/link";

import {
  ContactPanel,
  ProjectImage,
  SectionHeading,
} from "@/components";
import { catalogues, standardTimelineSummary } from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbsJsonLd } from "@/lib/structured-data";

import { EditorialList, JsonLd } from "../_route-helpers";

export const metadata = createPageMetadata({
  title: "Лифтний төсөл бэлтгэх материал",
  description:
    "Лифтний төсөлд шаардлагатай зураг, хэмжээс, техникийн мэдээлэл, стандарт хугацаа, каталог, түгээмэл асуултууд.",
  path: "/resources",
});

const faq = [
  {
    question: "Лифтээ барилгын аль үед сонгох вэ?",
    answer:
      "Архитектур, бүтээцийн зураг боловсруулах үед лифтний шаардлагыг тодорхойлбол шахтын хэмжээ, худгийн гүн, техникийн өрөө, цахилгаан хангамжийг зөв төлөвлөхөд тустай. Барилгын ажил эхэлсэн бол талбайд бодит хэмжилт хийнэ.",
  },
  {
    question: "Лифтийг хэрхэн захиалж үйлдвэрлүүлдэг вэ?",
    answer:
      "Барилгын зориулалт, шахтын хэмжээ, даац, хурд, зогсолтын тоо, хаалга, кабины сонголтыг тодорхойлсны дараа тухайн төслийн үзүүлэлтээр үйлдвэрт захиална.",
  },
  {
    question: "Үнийн саналд ямар мэдээлэл хэрэгтэй вэ?",
    answer:
      "Барилгын зориулалт, давхрын болон зогсолтын тоо, шахтын зураг эсвэл бодит хэмжээ, төлөвлөсөн даац, цахилгаан хангамж, ашиглалтын нөхцөл, талбай бэлэн болох хугацаа хэрэгтэй. Дутуу мэдээллийг эхний уулзалтаар тодруулна.",
  },
  {
    question: "Шинэ лифтний төсөл ерөнхийдөө хэр хугацаа шаарддаг вэ?",
    answer: standardTimelineSummary.mn,
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Нүүр", path: "/" },
          { name: "Материал", path: "/resources" },
        ])}
      />
      <section className="page-hero section">
        <div className="shell">
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Төсөл бэлтгэх мэдээлэл</p>
              <h1 className="display">Лифт төлөвлөхөд шаардлагатай зураг, мэдээлэл</h1>
            </div>
            <p className="lede">
              Архитектор, ерөнхий гүйцэтгэгч, захиалагчийн багийн анхны
              уулзалтад бэлтгэх зураг, хэмжээс, техникийн мэдээлэл, ерөнхий
              хугацааг энд нэгтгэв.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell detail-grid detail-grid--resources">
          <div>
            <SectionHeading
              eyebrow="01 · Зураг ба хэмжээ"
              title="Шахт, бүтээц, талбай"
            />
            <EditorialList
              items={[
              "Давхар бүрийн архитектурын план зураг, зүсэлт",
                "Шахтын дотор цэвэр хэмжээ, ханын хийц",
              "Худгийн гүн, шахтын оройн өндөр, техникийн өрөөний нөхцөл",
                "Хаалганы нээлхий ба давхрын түвшин",
                "Талбайн бодит хэмжилт хийх боломж",
              ]}
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="02 · Хэрэглээ ба үзүүлэлт"
              title="Ачаалал, даац, цахилгаан хангамж"
            />
            <EditorialList
              items={[
                "Барилгын зориулалт, давхар, зогсолтын тоо",
                "Зорчигч эсвэл ачааны зориулалт, ашиглалтын ачаалал",
                "Төлөвлөсөн даац ба хурд",
                "Цахилгаан хангамжийн мэдээлэл",
                "Кабин, хаалга, удирдлагын өнгө, материалын чиглэл",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            eyebrow="03 · Захиалгын хугацаа"
            title="Ердийн захиалга 2–3 сарын хугацаатай"
            description="Үйлдвэрлэл, тээвэр, угсралтын хугацааг тухайн ажил эхэлсэн өдрөөс тус тус тооцно."
          />
          <div className="prose">
            <p>{standardTimelineSummary.mn}</p>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell">
          <SectionHeading
            eyebrow="04 · Үйлдвэрлэгчийн каталог"
            title="Бүтээгдэхүүн, кабин, хийцийн танилцуулга"
            description="Доорх материалд үйлдвэрлэгчийн бүтээгдэхүүн, кабин, хаалга, хийцийн сонголтыг харуулав. Техникийн үзүүлэлтийг төслийн нөхцөлд тохируулан сонгоно."
            inverse
          />
          <div className="grid-3">
            {catalogues
              .filter((catalogue) => catalogue.publicationAuthorized)
              .map((catalogue) => (
              <article className="card" key={catalogue.slug}>
                <div className="card__media">
                  <ProjectImage
                    asset={catalogue.previewAsset}
                    aspect="4 / 3"
                    sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                </div>
                <div className="card__body">
                  <p className="card__meta">
                    Үйлдвэрлэгчийн каталог · {catalogue.sourceLanguage.mn}
                  </p>
                  <h2>{catalogue.title.mn}</h2>
                  <p>{catalogue.summary.mn}</p>
                  {catalogue.downloadAuthorized && catalogue.downloadPath ? (
                    <a
                      className="link-arrow"
                      download
                      href={catalogue.downloadPath}
                    >
                      PDF татах <span aria-hidden="true">↓</span>
                    </a>
                  ) : (
                    <Link className="link-arrow" href="/contact">
                      Төслийн талаар ярилцах <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell faq-section__inner">
          <SectionHeading
            eyebrow="Түгээмэл асуулт"
            title="Төлөвлөлтийн өмнө мэдэх зүйлс"
          />
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--contact">
        <div className="shell">
          <ContactPanel
            title="Зураг бүрэн болоогүй байсан ч холбогдож болно"
            description="Бэлэн байгаа зураг, мэдээллээ и-мэйлээр илгээх эсвэл талбайн уулзалт товлоорой."
          />
        </div>
      </section>
    </main>
  );
}
