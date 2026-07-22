import { notFound } from "next/navigation";

import {
  Breadcrumbs,
  ButtonLink,
  ContactPanel,
  PlaceholderBadge,
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
  title: "Лифтний кабин, хаалга, удирдлагын сонголт | Perfect Construction",
  description:
    "Барилгын интерьер, ашиглалтын нөхцөлд нийцүүлэх лифтний кабин, хаалга, товчлуур, дэлгэц, өнгөлгөөний сонголт.",
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
            { name: "Тохируулга", path: "/products/customization" },
          ]),
          serviceJsonLd({
            name: "Лифтний кабин ба удирдлагын тохируулга",
            description: customization.summary.mn,
            path: "/products/customization",
          }),
        ]}
      />
      <section className="page-hero section">
        <div className="shell">
          <Breadcrumbs
            items={[
              { label: "Нүүр", href: "/" },
              { label: "Бүтээгдэхүүн", href: "/products" },
              { label: "Тохируулга" },
            ]}
          />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Архитектуртай уялдуулах</p>
              <h1 className="display">{customization.title.mn}</h1>
              <p className="lede">{customization.summary.mn}</p>
              <PlaceholderBadge />
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
              title="Нэг каталогт баригдахгүй"
              description="Үйлдвэрлэгч бүрийн боломжит материал, хийц, тоноглол өөр тул төслийн батлагдсан интерьер, ашиглалтаар нарийвчилна."
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
              eyebrow="Дизайны шийдвэр"
              title="Бэлтгэх материал"
            />
            <EditorialList
              items={customization.technicalConsiderations.map(
                (item) => item.mn,
              )}
            />
          </div>
          <div className="prose">
            <h2>Сонголтыг хэзээ батлах вэ?</h2>
            <p>
              Кабин, хаалга, удирдлагын сонголт нь техникийн үзүүлэлт,
              үйлдвэрлэлийн захиалга батлагдахаас өмнө төслийн интерьерийн багтай
              нийцсэн байна.
            </p>
            <p>
              Өнгө, материалын дэлгэц дээрх дүрслэл бодит дээжээс зөрж болох тул
              эцсийн сонголтыг баталгаажсан каталог эсвэл дээжээр хийнэ.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <ContactPanel
            title="Интерьерийн шийдлээ техникийн сонголттой уялдуулъя"
            description="Архитектурын зураг, өнгөний чиглэл, ашиглалтын шаардлага байвал уулзалтаар танилцуулаарай."
          />
        </div>
      </section>
    </main>
  );
}
