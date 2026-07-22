import {
  Breadcrumbs,
  ContactPanel,
  PlaceholderBadge,
  ProjectCard,
  SectionHeading,
} from "@/components";
import { projects } from "@/content";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbsJsonLd } from "@/lib/structured-data";

import { JsonLd } from "../_route-helpers";

export const metadata = createPageMetadata({
  title: "Гүйцэтгэсэн лифтний төслүүд | Perfect Construction",
  description:
    "Perfect Construction-ийн Монголд хэрэгжүүлсэн орон сууц, үйлчилгээ, үйлдвэрийн лифтний төслийн кейсүүд.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbsJsonLd([
          { name: "Нүүр", path: "/" },
          { name: "Төсөл", path: "/projects" },
        ])}
      />
      <section className="page-hero section">
        <div className="shell">
          <Breadcrumbs
            items={[{ label: "Нүүр", href: "/" }, { label: "Төсөл" }]}
          />
          <div className="page-hero__grid">
            <div>
              <p className="eyebrow">Монгол дахь ажил</p>
              <h1 className="display">Төслийн нөхцөл шийдлийг тодорхойлдог</h1>
            </div>
            <div>
              <p className="lede">
                Сайн кейс нь зөвхөн гоё кабин биш. Барилгын сорилт, техникийн
                сонголт, угсралтын зохион байгуулалт, бодит үр дүнг хамтад нь
                харуулна.
              </p>
              <PlaceholderBadge label="Одоогийн кейсүүд нь урьдчилсан загвар" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Кейсийн сан"
            title="Орон сууцнаас үйлдвэрийн барилга хүртэл"
            description="Төсөл бүрийн нэр, байршил, он, хүчин чадал, зураг, нийтлэх зөвшөөрлийг үйлдвэрлэлийн хувилбараас өмнө баталгаажуулна."
          />
          <div className="project-grid">
            {projects
              .filter((project) => !project.draft)
              .map((project, index) => (
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
        <div className="shell split-feature">
          <SectionHeading
            eyebrow="Кейсийн стандарт"
            title="Баримттай мэдээлэл л нийтэлнэ"
            inverse
          />
          <div className="prose">
            <p>
              Захиалагчийн зөвшөөрөлгүй нэр, зураг, байршил нийтлэхгүй. Техникийн
              үзүүлэлт бүрийг төслийн баримт, хүлээлгэн өгөлтийн мэдээлэлтэй
              тулгана.
            </p>
            <p>
              Үйлдвэрийн зураг эсвэл ерөнхий сток дүрслэлийг Монголд гүйцэтгэсэн
              ажил мэтээр ашиглахгүй.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <ContactPanel
            title="Дараагийн кейс таны барилга байж болно"
            description="Шинэ төслийн зориулалт, одоогийн барилгын явц, төлөвлөсөн хугацааг шууд ярилцаарай."
          />
        </div>
      </section>
    </main>
  );
}
