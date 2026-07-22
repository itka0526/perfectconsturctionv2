import { assets } from "./assets";
import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "ulaanbaatar-residence",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Орон сууцны төсөл" },
    summary: {
      mn: "Улаанбаатар хотод хэрэгжүүлсэн орон сууцны лифтний төслийн урьдчилсан танилцуулга.",
    },
    location: { mn: "Улаанбаатар" },
    buildingType: { mn: "Орон сууц" },
    completionLabel: { mn: "Дууссан оныг баталгаажуулна" },
    challenge: {
      mn: "Шахтын бодит хэмжээ, зорчигчдын ачаалал, барилгын ажлын хуваарийг төслийн баримтаар шинэчилнэ.",
    },
    solution: {
      mn: "Сонгосон загвар, техникийн үзүүлэлт, угсралтын ажил, үр дүнг баталгаажсан мэдээллээр шинэчилнэ.",
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
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Үйлчилгээний төв" },
    summary: {
      mn: "Улаанбаатар хотод хэрэгжүүлсэн үйлчилгээний барилгын лифтний төслийн урьдчилсан танилцуулга.",
    },
    location: { mn: "Улаанбаатар" },
    buildingType: { mn: "Үйлчилгээний төв" },
    completionLabel: { mn: "Дууссан оныг баталгаажуулна" },
    challenge: {
      mn: "Зорчигчдын урсгал, архитектурын шаардлага, талбайн бэлэн байдлыг төслийн баримтаар шинэчилнэ.",
    },
    solution: {
      mn: "Техникийн сонголт, кабин, өнгөлгөө, угсралтын явц, үр дүнг баталгаажсан мэдээллээр шинэчилнэ.",
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
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Үйлдвэрийн барилга" },
    summary: {
      mn: "Үйлдвэрийн барилгын ачаа зөөвөрлөх зориулалттай лифтний төслийн урьдчилсан танилцуулга.",
    },
    location: { mn: "Төслийн байршлыг баталгаажуулна" },
    buildingType: { mn: "Үйлдвэр" },
    completionLabel: { mn: "Дууссан оныг баталгаажуулна" },
    challenge: {
      mn: "Ачааны жин, хэмжээ, зөөвөрлөх давтамж, талбайн нөхцөлийг төслийн баримтаар шинэчилнэ.",
    },
    solution: {
      mn: "Сонгосон ачааны лифт, хамгаалалтын хийц, угсралтын ажил, үр дүнг баталгаажсан мэдээллээр шинэчилнэ.",
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
