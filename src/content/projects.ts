import { assets } from "./assets";
import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "ulaanbaatar-residence",
    draft: true,
    verificationStatus: "placeholder",
    title: { mn: "Орон сууцны төсөл" },
    summary: {
      mn: "Улаанбаатар хотод хэрэгжүүлсэн орон сууцны лифтний төсөл.",
    },
    location: { mn: "Улаанбаатар" },
    buildingType: { mn: "Орон сууц" },
    completionLabel: { mn: "Орон сууцны лифтний төсөл" },
    challenge: {
      mn: "Шахтын хэмжээ, зорчигчдын ачаалал, барилгын ажлын хуваарьтай уялдуулан төлөвлөнө.",
    },
    solution: {
      mn: "Барилгын нөхцөлд тохирсон загвар, техникийн үзүүлэлт, угсралтын шийдлийг сонгоно.",
    },
    productSlugs: ["passenger-elevator"],
    brandSlug: "fuji-precision",
    assets: [assets.projects.residence],
    seo: {
      title: { mn: "Орон сууцны лифтний төсөл" },
      description: { mn: "Улаанбаатар хотод хэрэгжүүлсэн орон сууцны лифтний төсөл." },
      canonicalPath: "/projects/ulaanbaatar-residence",
      image: assets.projects.residence,
    },
  },
  {
    slug: "city-service-center",
    draft: true,
    verificationStatus: "placeholder",
    title: { mn: "Үйлчилгээний төв" },
    summary: {
      mn: "Улаанбаатар хотод хэрэгжүүлсэн үйлчилгээний барилгын лифтний төсөл.",
    },
    location: { mn: "Улаанбаатар" },
    buildingType: { mn: "Үйлчилгээний төв" },
    completionLabel: { mn: "Үйлчилгээний барилгын төсөл" },
    challenge: {
      mn: "Зорчигчдын урсгал, архитектурын шаардлага, талбайн бэлэн байдлыг хамтад нь тооцно.",
    },
    solution: {
      mn: "Техникийн сонголт, кабин, өнгөлгөө, угсралтын ажлыг барилгын нөхцөлтэй уялдуулна.",
    },
    productSlugs: ["passenger-elevator", "panoramic-elevator"],
    brandSlug: "asia-fuji",
    assets: [assets.projects.commercial],
    seo: {
      title: { mn: "Үйлчилгээний төвийн лифтний төсөл" },
      description: { mn: "Улаанбаатар хотод хэрэгжүүлсэн үйлчилгээний төвийн лифтний төсөл." },
      canonicalPath: "/projects/city-service-center",
      image: assets.projects.commercial,
    },
  },
  {
    slug: "industrial-building",
    draft: true,
    verificationStatus: "placeholder",
    title: { mn: "Үйлдвэрийн барилга" },
    summary: {
      mn: "Үйлдвэрийн барилгын ачаа зөөвөрлөх зориулалттай лифтний төсөл.",
    },
    location: { mn: "Монгол" },
    buildingType: { mn: "Үйлдвэр" },
    completionLabel: { mn: "Үйлдвэрийн ачааны лифтний төсөл" },
    challenge: {
      mn: "Ачааны жин, хэмжээ, зөөвөрлөх давтамж, талбайн нөхцөлийг хамтад нь тооцно.",
    },
    solution: {
      mn: "Ачааны лифт, хамгаалалтын хийц, угсралтын шийдлийг ашиглалтын нөхцөлд тохируулна.",
    },
    productSlugs: ["cargo-elevator"],
    brandSlug: "fuji-precision",
    assets: [assets.projects.industrial],
    seo: {
      title: { mn: "Үйлдвэрийн ачааны лифтний төсөл" },
      description: { mn: "Үйлдвэрийн барилгад хэрэгжүүлсэн ачааны лифтний төсөл." },
      canonicalPath: "/projects/industrial-building",
      image: assets.projects.industrial,
    },
  },
];

export const projectBySlug = new Map(
  projects.map((project) => [project.slug, project]),
);
