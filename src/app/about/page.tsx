import {
  Breadcrumbs,
  ButtonLink,
  ContactPanel,
  PlaceholderBadge,
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
  title: "Perfect Construction компанийн тухай",
  description:
    "Монголын шинэ барилгын лифтний төслийг үйлдвэр, логистик, талбайн инженерчлэлтэй уялдуулах Perfect Construction компанийн танилцуулга.",
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
          <Breadcrumbs
            items={[
              { label: "Нүүр", href: "/" },
              { label: "Компанийн тухай" },
            ]}
          />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Perfect Construction</p>
              <h1 className="display">Монгол дахь төслийн хариуцлага</h1>
              <p className="lede">
                Үйлдвэрлэгчийн каталогийг барилгын бодит нөхцөлтэй холбож,
                захиалагч, үйлдвэрийн баг, талбайн инженерүүдийн шийдвэрийг нэг
                урсгалд оруулна.
              </p>
              <PlaceholderBadge label="Компанийн түүх, тоон үзүүлэлтийг баталгаажуулна" />
            </div>
            <ProjectImage
              asset={assets.company.office}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              caption="Компанийн оффис эсвэл талбайн бодит зургаар солино."
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split-feature">
          <SectionHeading
            eyebrow="Үндсэн үүрэг"
            title="Брэндийн нэрээс барилгын шийдэл рүү"
          />
          <div className="prose">
            <p>
              Туршлагатай барилгын захиалагч үйлдвэрлэгчийн нэр, ерөнхий
              үзүүлэлтийг мэддэг. Манай ажил бол тэдгээр сонголтыг шахтын бодит
              хэмжээ, барилгын ачаалал, төсөв, логистик, угсралтын дараалалтай
              нийцүүлэх юм.
            </p>
            <p>
              Perfect Construction нь гурван үйлдвэрлэгчийг танилцуулах боловч
              төслийн хэмжилт, сонголт, зохион байгуулалтын хариуцлагыг өөрийн
              компанийн нэрээр ил тод харуулна.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="shell editorial-grid">
          <ProjectImage
            asset={assets.company.team}
            sizes="(max-width: 768px) 100vw, 44vw"
            caption="Багийн нэр, мэргэшил, зураг нийтлэх зөвшөөрлийг баталгаажуулна."
          />
          <div>
            <SectionHeading
              eyebrow="Инженерийн оролцоо"
              title="Талбай, үйлдвэр, захиалагчийн хооронд"
              inverse
            />
            <EditorialList
              items={[
                "Шахт, нүх, цахилгаан, талбайн нөхцөлийн хэмжилт",
                "Даац, хурд, зогсолт, хаалга, кабин, удирдлагын сонголт",
                "Үйлдвэрлэлийн үзүүлэлт ба захиалгын баталгаажуулалт",
                "Тээвэр, талбайн бэлэн байдал, угсралтын уялдаа",
                "Тохируулга, хүлээлгэн өгөлт, гэрээт борлуулалтын дараах дэмжлэг",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="shell detail-grid">
          <div>
            <p className="eyebrow">Компанийн түүх</p>
            <h2 className="display">Он дарааллыг баримтаар нөхнө</h2>
            <p className="lede">
              Үүсгэн байгуулагдсан он, томоохон үе шат, суурилуулсан нэгжийн тоог
              “хэзээний байдлаар” гэдэг огноотой нийтэлнэ.
            </p>
            <PlaceholderBadge />
          </div>
          <div>
            <p className="eyebrow">Нээлттэй нотолгоо</p>
            <h2>Эрхийн баримт ба гэрчилгээ</h2>
            <p>
              Нийтлэх зөвшөөрөлтэй баримтыг нэг сангаас үзүүлж, үйлдвэрлэгчийн
              мэдээлэлтэй холбоно.
            </p>
            <ButtonLink href="/about/certificates" variant="outline">
              Баримтын сан
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <ContactPanel
            title="Компанийн чадварыг төслөөр шалгаарай"
            description="Уулзалтаар төслийн бодит нөхцөл, боломжит үйлдвэрлэгч, техникийн сонголтыг хамт хэлэлцэнэ."
          />
        </div>
      </section>
    </main>
  );
}
