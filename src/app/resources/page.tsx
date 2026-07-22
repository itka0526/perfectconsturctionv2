import Link from "next/link";

import {
  Breadcrumbs,
  ContactPanel,
  PlaceholderBadge,
  ProjectImage,
  SectionHeading,
  TimelineStrip,
} from "@/components";
import { catalogues, standardTimeline } from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbsJsonLd } from "@/lib/structured-data";

import { EditorialList, JsonLd } from "../_route-helpers";

export const metadata = createPageMetadata({
  title: "Лифтний төсөл бэлтгэх материал | Perfect Construction",
  description:
    "Лифтний төсөлд шаардлагатай зураг, хэмжээс, техникийн мэдээлэл, стандарт хугацаа, каталог, түгээмэл асуултууд.",
  path: "/resources",
});

const faq = [
  {
    question: "Лифтээ барилгын аль үед сонгох вэ?",
    answer:
      "Архитектур, бүтээцийн зураг боловсруулах үед зөвлөлдөх нь шахт, нүх, машин өрөө, цахилгааны өөрчлөлтийн эрсдэлийг бууруулна. Барилга эхэлсэн бол бодит хэмжилтээр одоогийн нөхцөлийг шалгана.",
  },
  {
    question: "Лифт бэлэн агуулахад байдаг уу?",
    answer:
      "Ердийн шинэ төслийн лифт агуулахын бэлэн бараа биш. Даац, хурд, зогсолт, хаалга, кабин, шахтын хэмжээгээр үйлдвэрлэлийн захиалга батлагдана.",
  },
  {
    question: "Үнийн саналд ямар мэдээлэл хэрэгтэй вэ?",
    answer:
      "Барилгын зориулалт, давхар ба зогсолт, шахтын зураг эсвэл бодит хэмжээ, төлөвлөсөн даац, цахилгаан, ашиглалтын төрөл, талбайн хуваарь хэрэгтэй. Мэдээлэл дутуу бол эхний уулзалтаар нөхнө.",
  },
  {
    question: "30/15/8 хоног бүх төсөлд баталгаатай юу?",
    answer:
      "Энэ нь ердийн БНХАУ гаралтай тохиргооны төлөвлөлтийн суурь. Үйлдвэрлэл батлагдсан захиалгаас, хүргэлт үйлдвэрийн гаралтаас, угсралт талбайн бэлэн байдлын баталгаанаас эхэлнэ. SEOHYUN болон онцгой хийцэд тусдаа хуваарь гарна.",
  },
  {
    question: "Бусад компанийн лифтний засвар авах уу?",
    answer:
      "Үгүй. Энэ сайт шинэ төсөлд төвлөрнө. Perfect Construction-аас нийлүүлж, суурилуулсан тоног төхөөрөмжид тухайн гэрээ, баталгаат нөхцөлийн дагуу дэмжлэг үзүүлнэ.",
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
          <Breadcrumbs
            items={[{ label: "Нүүр", href: "/" }, { label: "Материал" }]}
          />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Төсөл бэлтгэх төв</p>
              <h1 className="display">Зөв мэдээлэл эрт байвал шийдвэр тодорхой болно</h1>
            </div>
            <p className="lede">
              Архитектор, ерөнхий гүйцэтгэгч, захиалагчийн баг анхны уулзалтаас
              өмнө шалгах зүйлс, хугацааны эхлэх нөхцөл, каталогийн төлөвийг энд
              нэгтгэв.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell detail-grid">
          <div>
            <SectionHeading
              eyebrow="01 · Зураг ба хэмжээ"
              title="Шахт, бүтээц, талбай"
            />
            <EditorialList
              items={[
                "Давхар бүрийн архитектурын план, зүсэлт",
                "Шахтын дотор цэвэр хэмжээ, ханын хийц",
                "Нүх, толгойн өндөр, машин өрөөний нөхцөл",
                "Хаалганы нээлхий ба давхрын түвшин",
                "Талбайн бодит хэмжилт хийх боломж",
              ]}
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="02 · Хэрэглээ ба үзүүлэлт"
              title="Урсгал, даац, цахилгаан"
            />
            <EditorialList
              items={[
                "Барилгын зориулалт, давхар, зогсолтын тоо",
                "Зорчигч эсвэл ачааны төрөл, оргил ачаалал",
                "Төлөвлөсөн даац ба хурд",
                "Цахилгаан хангамжийн мэдээлэл",
                "Кабин, хаалга, удирдлагын дизайны чиглэл",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            eyebrow="03 · Хугацааны зураглал"
            title="Эхлэх нөхцөлийг огнооноос өмнө тохирно"
            description="Доорх нь ердийн БНХАУ гаралтай тохиргооны суурь бөгөөд эцсийн хуваарь биш."
          />
          <TimelineStrip steps={standardTimeline} />
          <PlaceholderBadge label="Төслийн гэрээ, хуваариар батална" />
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell">
          <SectionHeading
            eyebrow="04 · Үйлдвэрлэгчийн эх материал"
            title="Каталогийн сонгосон, шалгасан хуудсууд"
            description="Доорх нь үйлдвэрлэгчийн каталогоос сонгосон бүтээгдэхүүн, хийцийн танилцуулга. Эх материалын хуучин холбоо барих болон үйлчилгээний мэдээлэл Perfect Construction-ийн одоогийн нөхцөлийг төлөөлөхгүй; техникийн үзүүлэлтийг төсөл бүрээр баталгаажуулна."
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
                      Төслийн сонголт ярилцах <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell prose">
          <SectionHeading
            eyebrow="Түгээмэл асуулт"
            title="Төлөвлөлтийн өмнө мэдэх зүйлс"
          />
          <div className="resource-list">
            {faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <ContactPanel
            title="Материал дутуу байсан ч эхний яриагаа хийж болно"
            description="Байгаа зураг, мэдээллээ и-мэйлээр илгээх эсвэл талбайн уулзалт товлоорой. Веб маягт, файл байршуулах хэсэг байхгүй."
          />
        </div>
      </section>
    </main>
  );
}
