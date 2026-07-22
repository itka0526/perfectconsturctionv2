import { assets } from "./assets";
import type { Product } from "./types";

const sharedTechnicalConsiderations = [
  { mn: "Шахтын цэвэр хэмжээ ба нүхний зохион байгуулалт" },
  { mn: "Даац, хурд, зогсолтын тоо ба ашиглалтын ачаалал" },
  { mn: "Цахилгаан хангамж, машин өрөө болон талбайн бэлэн байдал" },
];

export const products: Product[] = [
  {
    slug: "passenger-elevator",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Зорчигчийн лифт" },
    summary: {
      mn: "Орон сууц, оффис, зочид буудал болон олон нийтийн барилгад төслөөр тохируулах шийдэл.",
    },
    assets: [assets.products.passenger],
    applications: [
      { mn: "Орон сууц" },
      { mn: "Оффис" },
      { mn: "Зочид буудал" },
      { mn: "Үйлчилгээний барилга" },
    ],
    configurations: [
      { mn: "Машин өрөөтэй эсвэл машин өрөөгүй" },
      { mn: "Кабин, хаалга, удирдлагын төслийн сонголт" },
    ],
    technicalConsiderations: sharedTechnicalConsiderations,
    brandSlugs: ["seohyun", "fuji-precision", "asia-fuji"],
    projectSlugs: ["ulaanbaatar-residence", "city-service-center"],
    seo: {
      title: { mn: "Зорчигчийн лифт" },
      description: {
        mn: "Барилгын шаардлагаар тохируулан үйлдвэрлэх зорчигчийн лифтний шийдэл.",
      },
      canonicalPath: "/products/passenger-elevator",
      image: assets.products.passenger,
    },
  },
  {
    slug: "home-elevator",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Гэрийн лифт" },
    summary: {
      mn: "Хувийн сууц болон нам давхар барилгын орон зай, интерьер, хэрэглээнд нийцүүлэх шийдэл.",
    },
    assets: [assets.products.home],
    applications: [{ mn: "Хувийн сууц" }, { mn: "Таун хаус" }],
    configurations: [
      { mn: "Орон зай хэмнэсэн зохион байгуулалт" },
      { mn: "Интерьерт нийцэх кабин ба хаалга" },
    ],
    technicalConsiderations: sharedTechnicalConsiderations,
    brandSlugs: ["seohyun", "fuji-precision", "asia-fuji"],
    projectSlugs: [],
    seo: {
      title: { mn: "Гэрийн лифт" },
      description: { mn: "Хувийн сууцанд төслөөр тохируулах гэрийн лифт." },
      canonicalPath: "/products/home-elevator",
      image: assets.products.home,
    },
  },
  {
    slug: "cargo-elevator",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Ачааны лифт" },
    summary: {
      mn: "Үйлдвэр, агуулах, худалдааны барилгын ачаалал ба ажлын урсгалд нийцүүлэх шийдэл.",
    },
    assets: [assets.products.cargo],
    applications: [
      { mn: "Үйлдвэр" },
      { mn: "Агуулах" },
      { mn: "Худалдааны төв" },
    ],
    configurations: [
      { mn: "Төслийн даац ба хаалганы хэмжээ" },
      { mn: "Ачаа зөөвөрлөлтийн давтамжид тохирох хийц" },
    ],
    technicalConsiderations: sharedTechnicalConsiderations,
    brandSlugs: ["fuji-precision", "asia-fuji"],
    projectSlugs: ["industrial-building"],
    seo: {
      title: { mn: "Ачааны лифт" },
      description: { mn: "Үйлдвэр, агуулахад төслөөр үйлдвэрлэх ачааны лифт." },
      canonicalPath: "/products/cargo-elevator",
      image: assets.products.cargo,
    },
  },
  {
    slug: "hospital-elevator",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Эмнэлгийн лифт" },
    summary: {
      mn: "Ор, тоног төхөөрөмж, эмнэлгийн ажилтны хөдөлгөөнийг тооцсон эрүүл мэндийн барилгын шийдэл.",
    },
    assets: [assets.products.hospital],
    applications: [{ mn: "Эмнэлэг" }, { mn: "Оношилгооны төв" }],
    configurations: [
      { mn: "Ор зөөвөрлөхөд нийцсэн кабин" },
      { mn: "Төслийн урсгал, ариун цэврийн шаардлагын сонголт" },
    ],
    technicalConsiderations: sharedTechnicalConsiderations,
    brandSlugs: ["seohyun", "fuji-precision", "asia-fuji"],
    projectSlugs: [],
    seo: {
      title: { mn: "Эмнэлгийн лифт" },
      description: { mn: "Эмнэлэг, оношилгооны төвд зориулсан лифтний шийдэл." },
      canonicalPath: "/products/hospital-elevator",
      image: assets.products.hospital,
    },
  },
  {
    slug: "panoramic-elevator",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Панорам лифт" },
    summary: {
      mn: "Архитектур, харагдац, зорчигчийн туршлагыг нэгтгэсэн шилэн хийцийн шийдэл.",
    },
    assets: [assets.products.panoramic],
    applications: [
      { mn: "Худалдааны төв" },
      { mn: "Зочид буудал" },
      { mn: "Олон нийтийн барилга" },
    ],
    configurations: [
      { mn: "Шилэн кабин ба гадна хийц" },
      { mn: "Архитектурын шийдэлд нийцэх өнгөлгөө" },
    ],
    technicalConsiderations: sharedTechnicalConsiderations,
    brandSlugs: ["seohyun", "fuji-precision", "asia-fuji"],
    projectSlugs: ["city-service-center"],
    seo: {
      title: { mn: "Панорам лифт" },
      description: { mn: "Архитектурын төсөлд тохируулах панорам лифт." },
      canonicalPath: "/products/panoramic-elevator",
      image: assets.products.panoramic,
    },
  },
  {
    slug: "escalator-moving-walk",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Урсдаг шат ба зам" },
    summary: {
      mn: "Худалдаа, тээвэр, олон нийтийн барилгын зорчигчийн урсгалд зориулсан шийдэл.",
    },
    assets: [assets.products.escalator, assets.products.movingWalk],
    applications: [
      { mn: "Худалдааны төв" },
      { mn: "Тээврийн байгууламж" },
      { mn: "Олон нийтийн барилга" },
    ],
    configurations: [
      { mn: "Дотор ба гадна орчны сонголт" },
      { mn: "Зорчигчийн урсгалд тохирох өргөн, налуу" },
    ],
    technicalConsiderations: sharedTechnicalConsiderations,
    brandSlugs: ["fuji-precision", "asia-fuji"],
    projectSlugs: [],
    seo: {
      title: { mn: "Урсдаг шат ба зам" },
      description: { mn: "Олон нийтийн барилгад зориулсан урсдаг шат, замын шийдэл." },
      canonicalPath: "/products/escalator-moving-walk",
      image: assets.products.escalator,
    },
  },
  {
    slug: "dumbwaiter-service-lift",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Үйлчилгээний бага оврын лифт" },
    summary: {
      mn: "Хоол, бараа, жижиг ачааг давхар хооронд аюулгүй зөөхөд зориулсан шийдэл.",
    },
    assets: [assets.products.dumbwaiter],
    applications: [
      { mn: "Ресторан" },
      { mn: "Зочид буудал" },
      { mn: "Эмнэлэг" },
    ],
    configurations: [
      { mn: "Үйлчилгээний урсгалд тохирох хэмжээ" },
      { mn: "Материал ба хаалганы сонголт" },
    ],
    technicalConsiderations: sharedTechnicalConsiderations,
    brandSlugs: ["fuji-precision", "asia-fuji"],
    projectSlugs: [],
    seo: {
      title: { mn: "Үйлчилгээний бага оврын лифт" },
      description: { mn: "Ресторан, зочид буудалд зориулсан үйлчилгээний лифт." },
      canonicalPath: "/products/dumbwaiter-service-lift",
      image: assets.products.dumbwaiter,
    },
  },
  {
    slug: "customization",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Кабин ба удирдлагын тохируулга" },
    summary: {
      mn: "Кабин, хаалга, товчлуур, дэлгэц, өнгөлгөөг барилгын интерьер ба ашиглалтад нийцүүлнэ.",
    },
    assets: [assets.products.customization],
    applications: [{ mn: "Бүх төрлийн шинэ лифтний төсөл" }],
    configurations: [
      { mn: "Кабины материал ба гэрэлтүүлэг" },
      { mn: "Хаалга, товчлуур, дэлгэцийн сонголт" },
      { mn: "Хүртээмжийн шийдэл" },
    ],
    technicalConsiderations: [
      { mn: "Архитектур, интерьерийн батлагдсан зураг" },
      { mn: "Ашиглалтын орчин ба элэгдлийн нөхцөл" },
      { mn: "Сонгосон үйлдвэрлэгчийн боломжит каталог" },
    ],
    brandSlugs: ["seohyun", "fuji-precision", "asia-fuji"],
    projectSlugs: [],
    seo: {
      title: { mn: "Лифтний кабин ба удирдлагын тохируулга" },
      description: { mn: "Кабин, хаалга, товчлуур, өнгөлгөөний төслийн сонголт." },
      canonicalPath: "/products/customization",
      image: assets.products.customization,
    },
  },
];

export const productBySlug = new Map(
  products.map((product) => [product.slug, product]),
);
