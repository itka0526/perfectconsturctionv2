import {
  Breadcrumbs,
  ButtonLink,
  ContactPanel,
  ProductCard,
  SectionHeading,
} from "@/components";
import { products } from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import {
  breadcrumbsJsonLd,
  serviceJsonLd,
} from "@/lib/structured-data";

import { JsonLd } from "../_route-helpers";

export const metadata = createPageMetadata({
  title: "Лифт, урсдаг шатны шийдэл | Perfect Construction",
  description:
    "Орон сууц, эмнэлэг, үйлдвэр, үйлчилгээний барилгад төслөөр тохируулах лифт, урсдаг шат, кабин удирдлагын шийдлүүд.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main>
      <JsonLd
        data={[
          breadcrumbsJsonLd([
            { name: "Нүүр", path: "/" },
            { name: "Бүтээгдэхүүн", path: "/products" },
          ]),
          serviceJsonLd({
            name: "Лифтний төслийн шийдэл",
            description:
              "Барилгын хэрэглээ, хэмжээ, ачаалалд нийцүүлэн сонгох бүтээгдэхүүний багц.",
            path: "/products",
          }),
        ]}
      />
      <section className="page-hero section">
        <div className="shell">
          <Breadcrumbs
            items={[{ label: "Нүүр", href: "/" }, { label: "Бүтээгдэхүүн" }]}
          />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Төслийн хэрэглээгээр сонгох</p>
              <h1 className="display">Барилгадаа тохирох хөдөлгөөний шийдэл</h1>
            </div>
            <div>
              <p className="lede">
                Эхлээд барилгын зориулалт, хүний болон ачааны урсгал, шахтын
                нөхцөлийг тодорхойлно. Дараа нь даац, хурд, хийц, үйлдвэрлэгчийг
                төсөлтэй уялдуулна.
              </p>
              <ButtonLink href="/resources" variant="text">
                Төсөл бэлтгэх жагсаалт
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Бүтээгдэхүүний ангилал"
            title="Үзүүлэлт бус, төслийн тохироогоор эхэлнэ"
            description="Доорх ерөнхий ангилал бүрийг бодит хэмжээ, ачаалал, ашиглалтын давтамжаар нарийвчилна."
          />
          <div className="grid-3">
            {products
              .filter((product) => !product.draft)
              .map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split-feature">
          <SectionHeading
            eyebrow="Сонголтын үндэс"
            title="Каталогийг зураг, хэмжилттэй хамт уншина"
          />
          <div className="prose">
            <p>
              Каталогийн стандарт хүснэгт нь эцсийн техникийн шийдвэр биш.
              Шахтын хэмжээ, нүх, машин өрөө, цахилгаан хангамж, зогсолтын тоо,
              хэрэглээний оргил ачааллыг талбайн нөхцөлтэй тулгана.
            </p>
            <p>
              Нарийвчилсан үзүүлэлт, боломжит хийцийг албан ёсны каталог болон
              техникийн уулзалтаар танилцуулна.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <ContactPanel
            title="Аль ангилал тохирохоо хамт тодорхойлъё"
            description="Барилгын зориулалт, давхар, төлөвлөж буй даацын мэдээллээ утас, и-мэйл эсвэл Facebook-ээр хуваалцаарай."
          />
        </div>
      </section>
    </main>
  );
}
