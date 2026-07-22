import {
  Breadcrumbs,
  ButtonLink,
  ContactPanel,
  ProcessSteps,
  SectionHeading,
} from "@/components";
import { serviceSteps, standardTimelineSummary } from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import {
  breadcrumbsJsonLd,
  serviceJsonLd,
} from "@/lib/structured-data";

import { EditorialList, JsonLd } from "../_route-helpers";

export const metadata = createPageMetadata({
  title: "Лифтний шинэ төслийн үйлчилгээ",
  description:
    "Талбайн хэмжилт, техникийн сонголт, үйлдвэрийн захиалга, тээвэр, угсралт, суурилуулалтын ажлын дараалал.",
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
            name: "Шинэ барилгын лифтний нийлүүлэлт, угсралт",
            description:
              "Талбайн хэмжилтээс үйлдвэрийн захиалга, тээвэр, угсралт хүртэлх ажлын дараалал.",
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
              <p className="eyebrow">Шинэ барилгын төсөл</p>
              <h1 className="display">Хэмжилтээс угсралт, суурилуулалт хүртэл</h1>
            </div>
            <div>
              <p className="lede">
                Төгс Бүтээн Босголт шинэ барилгын лифтний хэмжилт, техникийн
                сонголт, үйлдвэрийн захиалга, тээвэр, угсралт, суурилуулалтыг
                дарааллаар зохион байгуулна.
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
            title="Ажил бүр батлагдсан дарааллаар үргэлжилнэ"
            description="Захиалагч, барилгын баг, үйлдвэрлэгчтэй хийх баталгаажуулалтыг үе шат бүрд уялдуулна."
          />
          <ProcessSteps steps={serviceSteps} />
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell detail-grid">
          <div>
          <SectionHeading
            eyebrow="Эхний уулзалтад"
            title="Бэлтгэх зураг, мэдээлэл"
              inverse
            />
          </div>
          <EditorialList
            items={[
              "Барилгын зориулалт ба давхрын тоо",
              "Барилгын архитектур, бүтээцийн зураг, шахтын бодит хэмжээ",
              "Төлөвлөсөн даац, хурд, зогсолтын тоо",
              "Цахилгаан хангамж, техникийн өрөөний нөхцөл",
              "Зорчигч, ачааны зориулалт, ашиглалтын ачаалал",
              "Барилгын ажлын явц, талбай бэлэн болох төлөвлөсөн огноо",
            ]}
          />
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            eyebrow="Төслийн ерөнхий хугацаа"
            title="Ердийн захиалга 2–3 сарын хугацаатай"
            description="БНХАУ-аас захиалах ердийн лифтний үйлдвэрлэл, тээвэр, угсралтын ерөнхий хугацаа."
          />
          <div className="prose">
            <p>{standardTimelineSummary.mn}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <ContactPanel
            title="Барилгын ажлын явцаа ярилцъя"
            description="Барилгын ажил эхэлсэн байсан ч шахтын бодит хэмжилт хийж, техникийн сонголтыг тодорхойлох боломжтой."
          />
        </div>
      </section>
    </main>
  );
}
