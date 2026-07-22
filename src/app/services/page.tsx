import {
  Breadcrumbs,
  ButtonLink,
  ContactPanel,
  PlaceholderBadge,
  ProcessSteps,
  SectionHeading,
  TimelineStrip,
} from "@/components";
import {
  afterSalesStatement,
  serviceSteps,
  standardTimeline,
} from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import {
  breadcrumbsJsonLd,
  serviceJsonLd,
} from "@/lib/structured-data";

import { EditorialList, JsonLd } from "../_route-helpers";

export const metadata = createPageMetadata({
  title: "Лифтний шинэ төслийн үйлчилгээ | Perfect Construction",
  description:
    "Талбайн хэмжилт, техникийн сонголт, үйлдвэрлэл, хүргэлт, угсралт, ашиглалтад оруулах шинэ төслийн урсгал.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbsJsonLd([
            { name: "Нүүр", path: "/" },
            { name: "Үйлчилгээ", path: "/services" },
          ]),
          serviceJsonLd({
            name: "Шинэ төслийн лифтний инженерчлэл ба нийлүүлэлт",
            description:
              "Талбайн хэмжилтээс угсралт, ашиглалтад оруулах хүртэлх төслийн урсгал.",
            path: "/services",
          }),
        ]}
      />
      <section className="page-hero section">
        <div className="shell">
          <Breadcrumbs
            items={[{ label: "Нүүр", href: "/" }, { label: "Үйлчилгээ" }]}
          />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Шинэ төсөлд төвлөрнө</p>
              <h1 className="display">Зөв хэмжилтээс найдвартай ашиглалтад</h1>
            </div>
            <div>
              <p className="lede">
                Perfect Construction шинэ барилгын лифтний сонголт, үйлдвэрлэл,
                тээвэр, угсралтын уялдааг хариуцна. Бусдын суурилуулсан лифтний
                ерөнхий засвар үйлчилгээг энэ сайтаар санал болгохгүй.
              </p>
              <ButtonLink href="/contact">Төслийн талаар ярилцах</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Зургаан үе шат"
            title="Нэг шийдвэр дараагийн ажлын эхлэлийг тодорхойлно"
            description="Захиалагч, барилгын баг, үйлдвэрлэгчийн баталгаажуулалтыг дараалалтай зохион байгуулна."
          />
          <ProcessSteps steps={serviceSteps} />
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell detail-grid">
          <div>
            <SectionHeading
              eyebrow="Эхний уулзалтад"
              title="Бэлэн байвал шийдвэр хурдан болно"
              inverse
            />
          </div>
          <EditorialList
            items={[
              "Барилгын зориулалт ба давхрын тоо",
              "Шахтын архитектур, бүтээцийн зураг болон бодит хэмжээ",
              "Төлөвлөсөн даац, хурд, зогсолтын тоо",
              "Цахилгаан хангамж ба машин өрөөний нөхцөл",
              "Зорчигч, ачааны ашиглалтын төрөл ба оргил ачаалал",
              "Барилгын ажлын явц, талбай бэлэн болох төлөвлөсөн огноо",
            ]}
          />
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            eyebrow="Төлөвлөлтийн суурь"
            title="30 хоног · 15 хоногоос · 8 хоногоос"
            description="Ердийн БНХАУ гаралтай тохиргоонд ашиглах суурь хугацаа. Үе бүрийн эхлэх нөхцөлийг доор тодорхой заав."
          />
          <TimelineStrip steps={standardTimeline} />
          <div className="prose">
            <p>
              SEOHYUN болон онцгой хийцтэй төслүүдэд үйлдвэрлэл, логистик,
              угсралтын хуваарийг тусад нь гаргана. Гааль, зам тээвэр, зураг
              өөрчлөлт, талбайн бэлэн бус байдал хуваарьт нөлөөлж болно.
            </p>
            <PlaceholderBadge label="Эцсийн хугацааг гэрээ, төслийн хуваариар батална" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split-feature">
          <SectionHeading
            eyebrow="Хүлээлгэн өгсний дараа"
            title="Зөвхөн өөрийн нийлүүлсэн тоног төхөөрөмжид"
          />
          <div className="prose">
            <p>{afterSalesStatement.mn}</p>
            <p>
              Энэ нь бусад компанийн төсөлд тусдаа засвар үйлчилгээ авах санал
              биш. Дуудлагын нөхцөл, баталгаа, сэлбэг, хариу өгөх хугацааг тухайн
              гэрээгээр тодорхойлно.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <ContactPanel
            title="Төслийн одоогийн шатнаас эхэлье"
            description="Барилга 40–45 хувьтай явж байсан ч бодит хэмжилт, техникийн сонголтыг одоо тодорхойлох боломжтой."
          />
        </div>
      </section>
    </main>
  );
}
