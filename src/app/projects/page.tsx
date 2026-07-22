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
  title: "Гүйцэтгэсэн лифтний төслүүд",
  description:
    "Төгс Бүтээн Босголтын Монголд хэрэгжүүлсэн орон сууц, үйлчилгээ, үйлдвэрийн барилгын лифтний төслүүд.",
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
              <p className="eyebrow">Гүйцэтгэсэн ажил</p>
              <h1 className="display">Монголд хэрэгжүүлсэн лифтний төслүүд</h1>
            </div>
            <div>
              <p className="lede">
                Төсөл бүрийн барилгын нөхцөл, техникийн сонголт, угсралтын
                ажлын зохион байгуулалт, гүйцэтгэлийг бодит зураг, мэдээллээр
                танилцуулна.
              </p>
              <PlaceholderBadge label="Одоогийн төслүүдийн мэдээлэл урьдчилсан" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Гүйцэтгэсэн төслүүд"
            title="Орон сууцнаас үйлдвэрийн барилга хүртэл"
            description="Төсөл бүрийн нэр, байршил, гүйцэтгэсэн он, зураг, нийтлэх зөвшөөрлийг нийтлэхээс өмнө баталгаажуулна."
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
            eyebrow="Нийтлэх зарчим"
            title="Зөвхөн баталгаажсан мэдээлэл нийтэлнэ"
            inverse
          />
          <div className="prose">
            <p>
              Захиалагчийн зөвшөөрөлгүй нэр, зураг, байршил нийтлэхгүй. Техникийн
              үзүүлэлт бүрийг төслийн баримт, хүлээлгэн өгөлтийн мэдээлэлтэй
              тулгана.
            </p>
            <p>
              Үйлдвэрийн зураг эсвэл ерөнхий зориулалтын дүрслэлийг Монголд
              гүйцэтгэсэн ажил мэтээр ашиглахгүй.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <ContactPanel
            title="Шинэ барилгынхаа төслийг ярилцъя"
            description="Барилгын зориулалт, одоогийн явц, лифт суурилуулах төлөвлөсөн хугацаагаа шууд ярилцаарай."
          />
        </div>
      </section>
    </main>
  );
}
