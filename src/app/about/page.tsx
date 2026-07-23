import {
  ButtonLink,
  ContactPanel,
  ProjectImage,
  SectionHeading,
} from "@/components";
import { assets } from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import {
  breadcrumbsJsonLd,
  organizationJsonLd,
} from "@/lib/structured-data";

import { EditorialList, JsonLd } from "../_route-helpers";

export const metadata = createPageMetadata({
  title: "Компанийн тухай",
  description:
    "Шинэ барилгын лифтний сонголт, үйлдвэрийн захиалга, тээвэр, угсралтыг зохион байгуулах Төгс Бүтээн Босголт компанийн танилцуулга.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={[
          organizationJsonLd(),
          breadcrumbsJsonLd([
            { name: "Нүүр", path: "/" },
            { name: "Компанийн тухай", path: "/about" },
          ]),
        ]}
      />
      <section className="page-hero section">
        <div className="shell">
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Төгс Бүтээн Босголт</p>
              <h1 className="display">Лифтний төслийг эхнээс нь зохион байгуулна</h1>
              <p className="lede">
                Үйлдвэрлэгчийн бүтээгдэхүүнийг барилгын зураг, шахтын бодит
                хэмжээ, ашиглалтын шаардлагад нийцүүлэн сонгож, захиалга,
                тээвэр, угсралтын ажлыг зохион байгуулна.
              </p>
            </div>
            <ProjectImage
              asset={assets.company.office}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              caption="Төгс Бүтээн Босголт компанийн оффис байрладаг барилга."
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split-feature">
          <SectionHeading
            eyebrow="Бидний ажил"
            title="Үйлдвэрлэгчийн бүтээгдэхүүнийг барилгын нөхцөлд нийцүүлнэ"
          />
          <div className="prose">
            <p>
              Үйлдвэрлэгчийн нэр, каталог дангаараа зөв сонголтыг тодорхойлохгүй.
              Шахтын бодит хэмжээ, барилгын ачаалал, төсөв, тээврийн хугацаа,
              угсралтын нөхцөлийг хамтад нь тооцох шаардлагатай.
            </p>
            <p>
              Төгс Бүтээн Босголт нь хамтран ажилладаг үйлдвэрлэгчдийн бүтээгдэхүүнийг
              танилцуулж, талбайн хэмжилт, техникийн сонголт, үйлдвэрийн захиалга,
              тээвэр, угсралтын ажлыг хариуцан зохион байгуулна.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell split-feature">
          <div>
            <SectionHeading
              eyebrow="Төслийн уялдаа"
              title="Захиалагч, барилгын баг, үйлдвэртэй хамтран ажиллана"
              inverse
            />
          </div>
          <div>
            <EditorialList
              items={[
                "Шахтын хэмжээ, худгийн гүн, цахилгаан хангамж, талбайн бодит хэмжилт",
                "Даац, хурд, зогсолтын тоо, хаалга, кабин, удирдлагын сонголт",
                "Техникийн үзүүлэлт, үйлдвэрийн захиалгыг тохиролцох",
                "Тээвэр, талбайн бэлэн байдал, угсралтын ажлыг төлөвлөх",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell detail-grid about-history">
          <div className="about-history__summary">
            <p className="eyebrow">Компанийн түүх</p>
            <h2 className="display">Компанийн түүх, гүйцэтгэсэн ажил</h2>
            <p className="lede">
              Компанийн үйл ажиллагааны чиглэл, хэрэгжүүлсэн ажил, хамтын
              ажиллагааны туршлагыг нэг дор танилцуулна.
            </p>
          </div>
          <div className="about-history__documents">
            <p className="eyebrow">Албан ёсны баримт</p>
            <h2>Эрхийн баримт ба гэрчилгээ</h2>
            <p>
              Үйлдвэрлэгчийн эрхийн баримт, гэрчилгээг нэг дор танилцуулна.
            </p>
            <ButtonLink href="/about/certificates" variant="outline">
              Баримт, гэрчилгээ
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section section--contact">
        <div className="shell">
          <ContactPanel
            title="Шинэ төслийнхөө талаар уулзаж ярилцъя"
            description="Уулзалтаар барилгын бодит нөхцөл, боломжит үйлдвэрлэгч, техникийн сонголт, хэрэгжүүлэх хугацааг хэлэлцэнэ."
          />
        </div>
      </section>
    </main>
  );
}
