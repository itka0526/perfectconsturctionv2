import Link from "next/link";

import {
  BrandCard,
  ButtonLink,
  ContactPanel,
  PlaceholderBadge,
  ProcessSteps,
  ProductCard,
  ProjectCard,
  ProjectImage,
  SectionHeading,
  TimelineStrip,
} from "@/components";
import {
  assets,
  brands,
  products,
  projects,
  proofMetrics,
  serviceSteps,
  standardTimeline,
} from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import {
  organizationJsonLd,
  serviceJsonLd,
} from "@/lib/structured-data";

import { JsonLd } from "./_route-helpers";

export const metadata = createPageMetadata({
  title: "Төсөлд тохирсон лифтний шийдэл | Perfect Construction",
  description:
    "Perfect Construction нь Монголын барилгын шинэ төсөлд лифтний техникийн сонголт, үйлдвэрлэл, хүргэлт, угсралтыг нэг урсгалаар зохион байгуулна.",
  path: "/",
});

const applications = [
  {
    title: "Орон сууц",
    description: "Оршин суугчдын урсгал, давхар, даацад тохирсон зорчигчийн лифт.",
    href: "/products/passenger-elevator",
  },
  {
    title: "Хувийн сууц",
    description: "Орон зай, интерьер, өдөр тутмын хэрэглээнд нийцсэн гэрийн лифт.",
    href: "/products/home-elevator",
  },
  {
    title: "Эмнэлэг",
    description: "Ор, тоног төхөөрөмж, ажилтны хөдөлгөөнийг тооцсон шийдэл.",
    href: "/products/hospital-elevator",
  },
  {
    title: "Үйлдвэр ба агуулах",
    description: "Ачааны төрөл, даац, хаалга, ажлын давтамжаар тохируулна.",
    href: "/products/cargo-elevator",
  },
  {
    title: "Худалдаа, үйлчилгээ",
    description: "Хүний урсгал ба архитектурт нийцсэн лифт, урсдаг шат.",
    href: "/products/escalator-moving-walk",
  },
  {
    title: "Зочид буудал ба оффис",
    description: "Зорчигчийн туршлага, өнгөлгөө, ашиглалтын ачааллын тэнцвэр.",
    href: "/products/panoramic-elevator",
  },
];

export default function HomePage() {
  return (
    <main>
      <JsonLd
        data={[
          organizationJsonLd(),
          serviceJsonLd({
            name: "Шинэ төслийн лифтний шийдэл",
            description:
              "Талбайн хэмжилтээс ашиглалтад оруулах хүртэлх төслийн үйлчилгээ.",
            path: "/services",
          }),
        ]}
      />

      <section className="page-hero section">
        <div className="shell page-hero__grid">
          <div>
            <p className="eyebrow">Perfect Construction · Монгол</p>
            <h1 className="display">Барилга бүрд тохирсон лифтний шийдэл</h1>
            <p className="lede">
              Шахтын бодит хэмжээ, ашиглалтын ачаалал, төсөв, архитектурт
              тулгуурлан техникийн сонголтоос угсралт хүртэл нэг багтай
              ажиллана.
            </p>
            <div className="button-row">
              <ButtonLink href="/contact">Төслийн талаар ярилцах</ButtonLink>
              <ButtonLink href="/projects" variant="outline">
                Гүйцэтгэсэн төслүүд
              </ButtonLink>
            </div>
          </div>
          <ProjectImage
            asset={assets.homepage.hero}
            priority
            sizes="(max-width: 768px) 100vw, 54vw"
            caption="Монголд хэрэгжүүлсэн бодит төслийн зургаар солино."
          />
        </div>
      </section>

      <section className="section section--ink" aria-labelledby="proof-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Орон нутгийн хариуцлага"
            title="Шийдвэр гаргахад хэрэгтэй нотолгоо"
            description="Үзүүлэлтүүдийг баримтаар баталгаажуулсны дараа үйлдвэрлэлийн хувилбарт нийтэлнэ."
            inverse
          />
          <h2 id="proof-title" className="sr-only">
            Компанийн гол үзүүлэлт
          </h2>
          <div className="proof-grid">
            {proofMetrics.map((metric) => (
              <article className="card" key={metric.id}>
                <PlaceholderBadge />
                <strong className="display">{metric.value.mn}</strong>
                <p>{metric.label.mn}</p>
                {metric.note ? <small>{metric.note.mn}</small> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="applications-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Барилгын зориулалтаар"
            title="Зөв бүтээгдэхүүнээс өмнө зөв хэрэглээг тодорхойлно"
            description="Брэндээс эхлэхийн оронд барилгын урсгал, хэмжээ, ашиглалтын нөхцөлийг эхэлж ярилцана."
          />
          <div className="grid-3" id="applications-title">
            {applications.map((application, index) => (
              <article className="card" key={application.title}>
                <p className="card__meta">0{index + 1}</p>
                <div className="card__body">
                  <h3>{application.title}</h3>
                  <p>{application.description}</p>
                  <Link className="link-arrow" href={application.href}>
                    Шийдлийг үзэх <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            eyebrow="Тэргүүлэх ангилал"
            title="Төслийн хэрэгцээнд нийцүүлэх бүтээгдэхүүнүүд"
            description="Нарийвчилсан үзүүлэлтийг талбай, зураг, ашиглалтын нөхцөлтэй хамт сонгоно."
            action={
              <ButtonLink href="/products" variant="text">
                Бүх бүтээгдэхүүн
              </ButtonLink>
            }
          />
          <div className="grid-3">
            {products
              .filter((product) => product.slug !== "customization")
              .slice(0, 6)
              .map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Үйлдвэрлэгчийн сонголт"
            title="Гурван брэнд, нэг төслийн хариуцлага"
            description="Брэнд бүрийн гарал, өртөг, логистик, боломжит тохиргоог Perfect Construction төслийн нөхцөлтэй уялдуулна."
            action={
              <ButtonLink href="/brands" variant="text">
                Брэндүүдийг харьцуулах
              </ButtonLink>
            }
          />
          <div className="brand-rail">
            {brands.map((brand) => (
              <BrandCard brand={brand} key={brand.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell split-feature">
          <div>
            <p className="eyebrow">Агуулахын бэлэн бараа биш</p>
            <h2 className="display">Лифт бүр төслийн үзүүлэлтээр үйлдвэрлэгдэнэ</h2>
          </div>
          <div className="prose">
            <p>
              Даац, хурд, зогсолтын тоо, шахтын хэмжээ, хаалга, кабин, цахилгаан
              хангамж төслөөс төсөлд өөр байдаг. Иймээс үйлдвэрлэл, хүргэлт,
              угсралтын хугацаа нь батлагдсан үзүүлэлт болон талбайн бэлэн
              байдлаас эхэлнэ.
            </p>
            <p>
              Талбайн хэмжилт, шаардлагатай мэдээлэл бүрэн үед урьдчилсан
              <strong> үнийн санал</strong>-ыг дараагийн ажлын өдөрт багтаан
              бэлтгэх зорилготой. Энэ хугацааг нийтлэхээс өмнө баталгаажуулна.
            </p>
            <PlaceholderBadge label="Нэхэмжлэл биш — урьдчилсан үнийн санал" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Төслийн урсгал"
            title="Уулзалтаас ашиглалтад оруулах хүртэл"
            description="Захиалагч, барилгын баг, үйлдвэр гурвын шийдвэрийг зургаан тодорхой үе шатанд нэгтгэнэ."
          />
          <ProcessSteps steps={serviceSteps} />
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell">
          <SectionHeading
            eyebrow="Стандарт суурь хугацаа"
            title="30 хоног · 15 хоногоос · 8 хоногоос"
            description="Ердийн БНХАУ гаралтай тохиргоонд ашиглах төлөвлөлтийн суурь. Үе бүр зөвхөн доорх эхлэх нөхцөл бүрдсэнээс тоологдоно."
          />
          <TimelineStrip steps={standardTimeline} />
          <div className="prose">
            <p>
              SEOHYUN болон онцгой хийцтэй төслүүдэд үйлдвэрлэл, шууд бус
              тээвэр, угсралтын хуваарийг тусад нь гаргана. Захиалагч техникийн
              баталгаажуулалт болон талбайн бэлэн байдлаас үл хамааран дурын
              хүргэлтийн өдөр сонгох боломжгүй.
            </p>
            <PlaceholderBadge label="Хугацааны мэдэгдлийг баталгаажуулна" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Монголд хэрэгжүүлсэн ажил"
            title="Төслийн нөхцөлөөс шийдэл хүртэл"
            description="Эдгээр кейсийг бодит зураг, хүчин чадал, он, захиалагчийн нийтлэх зөвшөөрлөөр бүрэн болгоно."
            action={
              <ButtonLink href="/projects" variant="text">
                Бүх төсөл
              </ButtonLink>
            }
          />
          <div className="project-grid">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard
                featured={index === 0}
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell editorial-grid">
          <ProjectImage
            asset={assets.company.team}
            sizes="(max-width: 768px) 100vw, 42vw"
            caption="Инженерийн багийн баталгаажсан зургаар солино."
          />
          <div>
            <p className="eyebrow">Хариуцлага ба нотолгоо</p>
            <h2 className="display">Үйлдвэрийн холбоо, инженерийн оролцоо, нэг цэгийн зохион байгуулалт</h2>
            <p className="lede">
              Үйлдвэрлэгчийн эрхийн баримт, багийн мэргэшил, төслийн туршлагыг
              нийтлэх зөвшөөрөлтэй эх сурвалжаар баталгаажуулна.
            </p>
            <div className="button-row">
              <ButtonLink href="/about" variant="light">
                Компанийн тухай
              </ButtonLink>
              <ButtonLink href="/about/certificates" variant="light">
                Баримт, гэрчилгээ
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <ContactPanel
            title="Шинэ төслийнхөө нөхцөлийг ярилцъя"
            description="Шахтын зураг бэлэн эсэхээс үл хамааран барилгын зориулалт, давхар, төлөвлөсөн хугацаагаа утас, и-мэйл эсвэл Facebook-ээр хуваалцаарай. Маягт бөглөх шаардлагагүй."
          />
        </div>
      </section>
    </main>
  );
}
