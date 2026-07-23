import {
  BrandCard,
  ButtonLink,
  ContactPanel,
  SectionHeading,
} from "@/components";
import { brands } from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbsJsonLd } from "@/lib/structured-data";

import { JsonLd } from "../_route-helpers";

export const metadata = createPageMetadata({
  title: "Лифт үйлдвэрлэгчид",
  description:
    "FUJI Precision, ASIA FUJI үйлдвэрлэгчийн бүтээгдэхүүн, гарал үүсэл, тээврийн нөхцөлийн танилцуулга.",
  path: "/brands",
});

export default function BrandsPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Нүүр", path: "/" },
          { name: "Үйлдвэрлэгчид", path: "/brands" },
        ])}
      />
      <section className="page-hero section">
        <div className="shell">
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Үйлдвэрлэгчид</p>
              <h1 className="display">Үйлдвэрлэгчийг төслийн шаардлагаар сонгоно</h1>
            </div>
            <p className="lede">
              Үйлдвэрлэгч бүрийн бүтээгдэхүүний төрөл, техникийн боломж, үнэ,
              тээврийн хугацаа өөр. Эдгээрийг барилгын зориулалт, шахтын хэмжээ,
              төсөв, хэрэгжүүлэх хугацаатай харьцуулж сонгоно.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Үйлдвэрлэгчийн сонголт"
            title="Төсөлдөө тохирох үйлдвэрлэгч"
            description="Үйлдвэрлэгчийн албан ёсны эрх, хүчинтэй хугацаа, бүтээгдэхүүний чиглэлийг баримттай нь танилцуулна."
          />
          <div className="brand-rail">
            {brands.filter((brand) => !brand.draft).map((brand) => (
              <BrandCard brand={brand} key={brand.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell split-feature">
          <SectionHeading
            eyebrow="БНХАУ-ын үйлдвэрлэгчид"
            title="Лифт бүрийг захиалгын үзүүлэлтээр үйлдвэрлэнэ"
            inverse
          />
          <div className="prose">
            <p>
              FUJI Precision болон ASIA FUJI нь зорчигчийн, ачааны, эмнэлгийн,
              амины орон сууцны, панорам лифт, урсдаг шат, урсдаг замыг төслийн
              хэмжээ, зориулалт, техникийн шаардлагын дагуу үйлдвэрлэнэ.
            </p>
            <p>
              Загвар, даац, хурд, кабин, хаалга, удирдлагын сонголтыг барилгын
              зураг, талбайн хэмжилт, ашиглалтын шаардлагад тулгуурлан батална.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split-feature">
          <SectionHeading
            eyebrow="Албан ёсны эрх"
            title="Үйлдвэрлэгчийн эрхийг баримтаар шалгана"
          />
          <div className="prose">
            <p>
              Үйлдвэрлэгчийн танилцуулга, эрхийн баримт, гэрчилгээ, хүчинтэй
              хугацааг баримт, гэрчилгээний хэсгээс үзэж болно.
            </p>
            <ButtonLink href="/about/certificates" variant="outline">
              Баримт, гэрчилгээ үзэх
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section section--contact">
        <div className="shell">
          <ContactPanel
            title="Төсөлдөө тохирох үйлдвэрлэгчийг сонгоё"
            description="Барилгын зориулалт, техникийн шаардлага, төсөв, хугацаагаа хэлбэл тохирох үйлдвэрлэгч, тээврийн хувилбарыг ярилцана."
          />
        </div>
      </section>
    </main>
  );
}
