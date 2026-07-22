import { assets } from "./assets";
import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "ulaanbaatar-residence",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Орон сууцны төсөл" },
    summary: {
      mn: "Улаанбаатар хотод хэрэгжүүлсэн орон сууцны лифтний төслийн кейсийн загвар.",
    },
    location: { mn: "Улаанбаатар" },
    buildingType: { mn: "Орон сууц" },
    completionLabel: { mn: "Он, хүчин чадлыг баталгаажуулна" },
    challenge: {
      mn: "Шахтын бодит хэмжээ, зорчигчийн ачаалал, барилгын ажлын хуваарийг баримтаар нөхнө.",
    },
    solution: {
      mn: "Сонгосон загвар, үзүүлэлт, угсралтын шийдэл болон үр дүнг төслийн баримтаар нөхнө.",
    },
    productSlugs: ["passenger-elevator"],
    brandSlug: "fuji-precision",
    assets: [assets.projects.residence],
    seo: {
      title: { mn: "Орон сууцны лифтний төсөл" },
      description: { mn: "Улаанбаатар хотын орон сууцны лифтний төслийн кейс." },
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
      mn: "Улаанбаатар хотод хэрэгжүүлсэн үйлчилгээний барилгын төслийн кейсийн загвар.",
    },
    location: { mn: "Улаанбаатар" },
    buildingType: { mn: "Үйлчилгээний төв" },
    completionLabel: { mn: "Он, хүчин чадлыг баталгаажуулна" },
    challenge: {
      mn: "Хүний урсгал, архитектурын шаардлага, талбайн бэлэн байдлыг баримтаар нөхнө.",
    },
    solution: {
      mn: "Техникийн сонголт, өнгөлгөө, угсралтын явц ба үр дүнг төслийн баримтаар нөхнө.",
    },
    productSlugs: ["passenger-elevator", "panoramic-elevator"],
    brandSlug: "asia-fuji",
    assets: [assets.projects.commercial],
    seo: {
      title: { mn: "Үйлчилгээний төвийн лифтний төсөл" },
      description: { mn: "Улаанбаатар хотын үйлчилгээний төвийн лифтний кейс." },
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
      mn: "Ачаа зөөвөрлөлтийн шаардлагатай үйлдвэрийн барилгын төслийн кейсийн загвар.",
    },
    location: { mn: "Төслийн байршлыг баталгаажуулна" },
    buildingType: { mn: "Үйлдвэр" },
    completionLabel: { mn: "Он, хүчин чадлыг баталгаажуулна" },
    challenge: {
      mn: "Ачааны төрөл, даац, хаалганы хэмжээ, ажлын давтамжийг баримтаар нөхнө.",
    },
    solution: {
      mn: "Сонгосон ачааны лифт, хамгаалалт, угсралтын шийдэл ба үр дүнг баримтаар нөхнө.",
    },
    productSlugs: ["cargo-elevator"],
    brandSlug: "fuji-precision",
    assets: [assets.projects.industrial],
    seo: {
      title: { mn: "Үйлдвэрийн ачааны лифтний төсөл" },
      description: { mn: "Үйлдвэрийн барилгын ачааны лифтний төслийн кейс." },
      canonicalPath: "/projects/industrial-building",
      image: assets.projects.industrial,
    },
  },
];

export const projectBySlug = new Map(
  projects.map((project) => [project.slug, project]),
);
