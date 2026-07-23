import {
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
  title: "Лифт, урсдаг шат, урсдаг зам",
  description:
    "Орон сууц, эмнэлэг, үйлдвэр, үйлчилгээний барилгад зориулсан лифт, урсдаг шат, урсдаг зам, кабин, удирдлагын сонголт.",
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
            name: "Лифт, урсдаг шатны нийлүүлэлт",
            description:
              "Барилгын зориулалт, хэмжээ, ачаалалд нийцүүлэн сонгох лифт, урсдаг шат, урсдаг зам.",
            path: "/products",
          }),
        ]}
      />
      <section className="page-hero section">
        <div className="shell">
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Бүтээгдэхүүний сонголт</p>
              <h1 className="display">Барилгадаа тохирох лифтийг сонгоно</h1>
            </div>
            <div>
              <p className="lede">
                Барилгын зориулалт, зорчигчдын тоо, зөөвөрлөх ачааны жин,
                шахтын хэмжээг эхэлж тодорхойлно. Үүний дараа даац, хурд, хийц,
                үйлдвэрлэгчийг сонгоно.
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
            title="Барилгын зориулалтаас сонголт эхэлнэ"
            description="Бүтээгдэхүүний ангилал бүрийг шахтын бодит хэмжээ, ачаалал, ашиглалтын давтамжид тулгуурлан нарийвчилна."
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
            title="Каталогийн үзүүлэлтийг бодит хэмжилтээр шалгана"
          />
          <div className="prose">
            <p>
              Каталогийн стандарт үзүүлэлт нь эцсийн сонголт биш. Шахтын хэмжээ,
              худгийн гүн, техникийн өрөө, цахилгаан хангамж, зогсолтын тоо,
              ашиглалтын ачааллыг барилгын бодит нөхцөлтэй тулган шалгана.
            </p>
            <p>
              Боломжит хэмжээ, даац, хурд, хийцийг үйлдвэрлэгчийн албан ёсны
              каталог, техникийн уулзалтад тулгуурлан сонгоно.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--contact">
        <div className="shell">
          <ContactPanel
            title="Ямар төрлийн лифт хэрэгтэйг хамт тодорхойлъё"
            description="Барилгын зориулалт, давхрын тоо, төлөвлөсөн даацын талаар утас, и-мэйл эсвэл Facebook-ээр холбогдож ярилцъя."
          />
        </div>
      </section>
    </main>
  );
}
