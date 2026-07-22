import {
  BrandCard,
  Breadcrumbs,
  ButtonLink,
  ContactPanel,
  SectionHeading,
} from "@/components";
import { brands } from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbsJsonLd } from "@/lib/structured-data";

import { JsonLd } from "../_route-helpers";

export const metadata = createPageMetadata({
  title: "Лифт үйлдвэрлэгч брэндүүд | Perfect Construction",
  description:
    "SEOHYUN, FUJI Precision, ASIA FUJI үйлдвэрлэгчийн төслийн байршуулалт, гарал, логистикийн ялгааг харьцуулна.",
  path: "/brands",
});

export default function BrandsPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Нүүр", path: "/" },
          { name: "Брэнд", path: "/brands" },
        ])}
      />
      <section className="page-hero section">
        <div className="shell">
          <Breadcrumbs
            items={[{ label: "Нүүр", href: "/" }, { label: "Брэнд" }]}
          />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Үйлдвэрлэгчийн портфолио</p>
              <h1 className="display">Брэндийг нэрээр бус, төслийн тохироогоор сонгоно</h1>
            </div>
            <p className="lede">
              Туршлагатай захиалагчид үйлдвэрлэгчийн нэрийг мэддэг. Perfect
              Construction тухайн брэндийн боломжит хийц, өртөг, логистикийг
              Монгол дахь барилгын бодит шаардлагатай уялдуулна.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Гурван сонголт"
            title="Нэг төсөлд тохирсон үйлдвэрлэгч"
            description="Эрхийн статус, лого, үйлдвэрийн тодорхойлолтыг нийтлэхээс өмнө баримтаар баталгаажуулна."
          />
          <div className="brand-rail">
            {brands.map((brand) => (
              <BrandCard brand={brand} key={brand.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell">
          <SectionHeading
            eyebrow="Байршуулалтын ялгаа"
            title="Өртөг, хугацаа, хийцийг ил тод ярилцана"
            inverse
          />
          <div className="grid-3">
            <article className="card">
              <p className="card__meta">БНСУ</p>
              <div className="card__body">
                <h2>SEOHYUN</h2>
                <p>
                  Премиум төсөв, хийц шаардсан төсөлд авч үзнэ. Монгол руу шууд
                  тээврийн нөхцөл хязгаарлагдмал учир өртөг, хүргэлтийг тусдаа
                  хуваариар тооцно.
                </p>
              </div>
            </article>
            <article className="card">
              <p className="card__meta">БНХАУ</p>
              <div className="card__body">
                <h2>FUJI Precision</h2>
                <p>
                  Орон сууц, үйлчилгээ, үйлдвэр зэрэг өргөн хэрэглээнд төсөв,
                  техникийн үзүүлэлтийн хувилбарыг төсөл бүрээр тохируулна.
                </p>
              </div>
            </article>
            <article className="card">
              <p className="card__meta">БНХАУ</p>
              <div className="card__body">
                <h2>ASIA FUJI</h2>
                <p>
                  Хэмжээ, даац, хурд, кабин, удирдлагын шаардлагаар үйлдвэрлэх
                  төслийн тохиргоог сонгоно.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell split-feature">
          <SectionHeading
            eyebrow="Нотолгоо"
            title="Логоноос илүү эрхийн баримт чухал"
          />
          <div className="prose">
            <p>
              Нүүр болон бүтээгдэхүүний хуудсанд товч үйлдвэрлэгчийн танилцуулга
              байна. Нийтлэх зөвшөөрөлтэй эрхийн баримт, гэрчилгээ, хүчинтэй
              хугацааны дэлгэрэнгүйг тусгай сангаас үзүүлнэ.
            </p>
            <ButtonLink href="/about/certificates" variant="outline">
              Баримт, гэрчилгээ үзэх
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <ContactPanel
            title="Аль үйлдвэрлэгч тохирохыг хамт харьцуулъя"
            description="Төсөв, барилгын зориулалт, хугацааны шаардлагаа хуваалцвал боломжит брэнд, логистикийн хувилбарыг ярилцана."
          />
        </div>
      </section>
    </main>
  );
}
