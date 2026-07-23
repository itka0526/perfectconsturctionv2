import Link from "next/link";

import {
  BrandCard,
  ButtonLink,
  ContactPanel,
  HomeHeroElevator,
  ProcessSteps,
  ProductCard,
  ProjectCard,
  ProjectImage,
  SectionHeading,
} from "@/components";
import {
  assets,
  brands,
  products,
  projects,
  serviceSteps,
  standardTimelineSummary,
} from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import {
  organizationJsonLd,
  serviceJsonLd,
} from "@/lib/structured-data";

import { JsonLd } from "./_route-helpers";

export const metadata = createPageMetadata({
  title: "Барилгын төсөлд тохирсон лифт | Төгс Бүтээн Босголт",
  description:
    "Төгс Бүтээн Босголт нь шинэ барилгын лифтний сонголт, үйлдвэрийн захиалга, тээвэр, угсралт, суурилуулалтыг зохион байгуулна.",
  path: "/",
});

const applications = [
  {
    title: "Орон сууц",
    description: "Давхрын тоо, оршин суугчдын ачаалал, өдөр тутмын хэрэглээнд тохирсон зорчигчийн лифт.",
    href: "/products/passenger-elevator",
  },
  {
    title: "Амины орон сууц",
    description: "Зай талбай бага эзлэх, дотоод засалтай зохицох амины орон сууцны лифт.",
    href: "/products/home-elevator",
  },
  {
    title: "Эмнэлэг",
    description: "Өвчтөний ор, эмнэлгийн тоног төхөөрөмж зөөвөрлөхөд зориулсан кабинтай лифт.",
    href: "/products/hospital-elevator",
  },
  {
    title: "Үйлдвэр ба агуулах",
    description: "Бараа, материалын жин, хэмжээ, зөөвөрлөх давтамжид тохирсон ачааны лифт.",
    href: "/products/cargo-elevator",
  },
  {
    title: "Худалдаа, үйлчилгээ",
    description: "Зорчигчдын ачаалал ихтэй барилгад зориулсан лифт, урсдаг шат, урсдаг зам.",
    href: "/products/escalator-moving-walk",
  },
  {
    title: "Зочид буудал, оффис",
    description: "Барилгын дотоод засал, зорчигчдын ачаалалд тохирсон лифт.",
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
            name: "Шинэ барилгын лифтний нийлүүлэлт, угсралт",
            description:
              "Талбайн хэмжилт, техникийн сонголт, үйлдвэрийн захиалга, тээвэр, угсралтын үйлчилгээ.",
            path: "/services",
          }),
        ]}
      />

      <section className="page-hero page-hero--home-static section">
        <HomeHeroElevator
          car={assets.homepage.elevatorCar}
          shaft={assets.homepage.elevatorShaft}
        />
        <div className="shell">
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Төгс Бүтээн Босголт · Монгол</p>
              <h1 className="display">Барилгын төсөл бүрд тохирсон лифт</h1>
              <p className="lede">
                Барилгын зориулалт, шахтын хэмжээ, даац, ашиглалтын нөхцөл,
                төсөвт нийцүүлэн лифт сонгож, үйлдвэрт захиалах, тээвэрлэх,
                угсарч суурилуулах ажлыг зохион байгуулна.
              </p>
              <div className="button-row">
                <ButtonLink href="/contact">Төслийн талаар ярилцах</ButtonLink>
                <ButtonLink href="/projects" variant="outline">
                  Гүйцэтгэсэн төслүүд
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="applications-title">
        <div className="shell">
          <SectionHeading
            eyebrow="Барилгын зориулалт"
            title="Барилгын зориулалтад тохирох лифт"
            description="Орон сууц, эмнэлэг, үйлдвэр, худалдаа, үйлчилгээний барилга бүрийн ачаалал, орон зай, ашиглалтын нөхцөл өөр байдаг."
          />
          <div className="grid-3" id="applications-title">
            {applications.map((application, index) => (
              <article className="card" key={application.title}>
                <p className="card__meta">0{index + 1}</p>
                <div className="card__body">
                  <h3>{application.title}</h3>
                  <p>{application.description}</p>
                  <Link className="link-arrow" href={application.href}>
                    Бүтээгдэхүүнийг үзэх <span aria-hidden="true">→</span>
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
            eyebrow="Бүтээгдэхүүн"
            title="Барилгадаа тохирох бүтээгдэхүүнийг сонгоно"
            description="Лифтний төрөл, даац, хурд, хийц, өнгөлгөөг барилгын зураг төсөл, шахтын хэмжээ, ашиглалтын нөхцөлд тулгуурлан сонгоно."
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
            eyebrow="Үйлдвэрлэгчид"
            title="Төслийн шаардлагад тохирох үйлдвэрлэгч"
            description="Барилгын зориулалт, техникийн үзүүлэлт, төсөв, тээврийн хугацааг харгалзан үйлдвэрлэгчийн боломжит хувилбарыг санал болгоно."
            action={
              <ButtonLink href="/brands" variant="text">
                Үйлдвэрлэгчдийг үзэх
              </ButtonLink>
            }
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
          <div>
            <p className="eyebrow">Төсөл бүрт тохируулна</p>
            <h2 className="display">Лифт бүр батлагдсан үзүүлэлтээр үйлдвэрлэгдэнэ</h2>
          </div>
          <div className="prose">
            <p>
              Даац, хурд, зогсолтын тоо, шахтын хэмжээ, хаалга, кабин,
              цахилгаан хангамж барилга бүрд өөр. Иймээс үйлдвэрлэл, тээвэр,
              угсралтын хуваарийг батлагдсан техникийн үзүүлэлт болон талбайн
              бэлэн байдалд тулгуурлан гаргана.
            </p>
            <p>
              Талбайн хэмжилт хийж, шаардлагатай мэдээлэл бүрдсэн бол урьдчилсан{" "}
              <strong>үнийн саналыг</strong> дараагийн ажлын өдөрт багтаан
              бэлтгэнэ.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Ажлын дараалал"
            title="Уулзалтаас угсралт, суурилуулалт хүртэл"
            description="Төслийн шаардлагыг тодорхойлохоос эхлээд хэмжилт, сонголт, үйлдвэрлэл, тээвэр, угсралтыг дарааллаар зохион байгуулна."
          />
          <ProcessSteps steps={serviceSteps} />
        </div>
      </section>

      <section className="section section--soft section--timeline-summary">
        <div className="shell">
          <SectionHeading
            eyebrow="Төслийн ерөнхий хугацаа"
            title="Ердийн захиалга <br/> 2–3 сарын хугацаатай"
            description="БНХАУ-аас захиалах ердийн лифтний үйлдвэрлэл, тээвэр, угсралтын ерөнхий хугацаа."
          />
          <div className="prose">
            <p>{standardTimelineSummary.mn}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Гүйцэтгэсэн төслүүд"
            title="Хэрэгжүүлсэн төслүүд"
            description="Монголд хэрэгжүүлсэн орон сууц, үйлчилгээ, үйлдвэрийн барилгын лифтний төслүүдээс танилцуулна."
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
            asset={assets.certificates.asiaFujiAuthorization}
            sizes="(max-width: 768px) 100vw, 42vw"
            caption="ASIA FUJI-ийн Монгол дахь онцгой төлөөлөгчийн 2026–2029 оны эрхийн баримт."
          />
          <div>
            <p className="eyebrow">Албан ёсны эрх, баримт</p>
            <h2 className="display">Үйлдвэрлэгчийн эрх, баримт бичиг</h2>
            <p className="lede">
              Үйлдвэрлэгчийн албан ёсны эрх, гэрчилгээ, хүчинтэй хугацааны
              мэдээллийг нэг дор танилцуулна.
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

      <section className="section section--contact">
        <div className="shell">
          <ContactPanel
            title="Шинэ төслийнхөө талаар ярилцъя"
            description="Шахтын зураг хараахан бэлэн болоогүй байсан ч барилгын зориулалт, давхрын тоо, төлөвлөсөн хугацаагаа утас, и-мэйл эсвэл Facebook-ээр холбогдоод хэлж болно."
          />
        </div>
      </section>
    </main>
  );
}
