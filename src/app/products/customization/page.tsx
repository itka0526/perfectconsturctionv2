import { notFound } from "next/navigation";

import {
  ButtonLink,
  ContactPanel,
  ProjectImage,
  SectionHeading,
} from "@/components";
import { productBySlug } from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import {
  breadcrumbsJsonLd,
  serviceJsonLd,
} from "@/lib/structured-data";

import { EditorialList, JsonLd } from "../../_route-helpers";

const customization = productBySlug.get("customization");

export const metadata = createPageMetadata({
  title: "Лифтний кабин, хаалга, удирдлагын сонголт",
  description:
    "Барилгын дотоод засал, ашиглалтын нөхцөлд нийцүүлэх лифтний кабин, хаалга, товчлуур, дэлгэц, өнгөлгөөний сонголт.",
  path: "/products/customization",
});

export default function CustomizationPage() {
  if (!customization || customization.draft) {
    notFound();
  }

  return (
    <main>
      <JsonLd
        data={[
          breadcrumbsJsonLd([
            { name: "Нүүр", path: "/" },
            { name: "Бүтээгдэхүүн", path: "/products" },
            { name: "Кабин, хаалга, удирдлага", path: "/products/customization" },
          ]),
          serviceJsonLd({
            name: "Лифтний кабин, хаалга, удирдлагын сонголт",
            description: customization.summary.mn,
            path: "/products/customization",
          }),
        ]}
      />
      <section className="page-hero section">
        <div className="shell">
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Дотоод засалтай уялдуулна</p>
              <h1 className="display">{customization.title.mn}</h1>
              <p className="lede">{customization.summary.mn}</p>
              <ButtonLink href="/contact">Сонголтоо ярилцах</ButtonLink>
            </div>
            <ProjectImage
              asset={customization.assets[0]}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell editorial-grid">
          <div>
          <SectionHeading
            eyebrow="Сонголтын хүрээ"
            title="Сонголт үйлдвэрлэгч бүрд өөр"
            description="Кабины материал, хаалга, товчлуур, дэлгэц, гэрэлтүүлгийн сонголт үйлдвэрлэгч бүрд өөр. Эдгээрийг батлагдсан дотоод засал, ашиглалтын нөхцөлд нийцүүлнэ."
            />
          </div>
          <EditorialList
            items={customization.configurations.map((item) => item.mn)}
          />
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell detail-grid">
          <div>
            <SectionHeading
              eyebrow="Сонголт хийхэд"
              title="Бэлтгэх зураг, мэдээлэл"
            />
            <EditorialList
              items={customization.technicalConsiderations.map(
                (item) => item.mn,
              )}
            />
          </div>
          <div className="prose">
            <h2>Кабин, хаалганы сонголтыг хэзээ батлах вэ?</h2>
            <p>
              Кабин, хаалга, удирдлагын сонголтыг техникийн үзүүлэлт болон
              үйлдвэрийн захиалга батлагдахаас өмнө барилгын дотоод засалтай
              уялдуулж батална.
            </p>
            <p>
              Дэлгэц дээрх өнгө, материалын дүрслэл бодит дээжээс зөрж болдог.
              Иймээс эцсийн сонголтыг үйлдвэрлэгчийн каталог эсвэл бодит дээжээр
              хийнэ.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--contact">
        <div className="shell">
          <ContactPanel
            title="Кабин, хаалганы сонголтоо ярилцъя"
            description="Архитектур, дотоод засал чимэглэлийн зураг, өнгө, материал, ашиглалтын шаардлагаа уулзалтаар танилцуулна уу."
          />
        </div>
      </section>
    </main>
  );
}
