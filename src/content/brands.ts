import { assets } from "./assets";
import type { Brand } from "./types";

export const brands: Brand[] = [
  {
    slug: "seohyun",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "SEOHYUN" },
    summary: {
      mn: "Өндөр шаардлагатай төсөлд чиглэсэн БНСУ-ын премиум шийдэл.",
    },
    origin: { mn: "БНСУ" },
    positioning: {
      mn: "Премиум төсөв, хийц ба сонголт шаардсан барилгад төслөөр санал болгоно.",
    },
    logisticsNote: {
      mn: "Монгол руу шууд тээврийн нөхцөл хязгаарлагдмал тул өртөг, хүргэлтийн хугацааг төсөл бүрээр тусад нь тооцно.",
    },
    authorizationStatement: {
      mn: "Дистрибьюторын статус болон нийтлэх баримтыг баталгаажуулсны дараа байршуулна.",
    },
    productSlugs: [
      "passenger-elevator",
      "home-elevator",
      "hospital-elevator",
      "panoramic-elevator",
      "customization",
    ],
    certificateSlugs: ["seohyun-authorization"],
    assets: [assets.manufacturers.seohyun],
    seo: {
      title: { mn: "SEOHYUN лифт" },
      description: { mn: "SEOHYUN премиум лифтний төслийн шийдэл." },
      canonicalPath: "/brands/seohyun",
      image: assets.manufacturers.seohyun,
    },
  },
  {
    slug: "fuji-precision",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "FUJI Precision" },
    summary: {
      mn: "Монголын эдийн засаг, барилгын төслийн шаардлагад тохируулах БНХАУ-ын шийдэл.",
    },
    origin: { mn: "БНХАУ" },
    positioning: {
      mn: "Орон сууц, үйлчилгээ, үйлдвэр зэрэг өргөн хэрэглээнд төсөв ба үзүүлэлтийг тэнцвэржүүлнэ.",
    },
    logisticsNote: {
      mn: "Стандарт тохиргоонд БНХАУ-аас Монгол руу хүргэх суурь хугацааг үйлдвэрийн гаралтаас тооцно.",
    },
    authorizationStatement: {
      mn: "Үйлдвэрлэгчийн харилцаа болон нийтлэх баримтыг баталгаажуулсны дараа байршуулна.",
    },
    productSlugs: [
      "passenger-elevator",
      "home-elevator",
      "cargo-elevator",
      "hospital-elevator",
      "panoramic-elevator",
      "escalator-moving-walk",
      "dumbwaiter-service-lift",
      "customization",
    ],
    certificateSlugs: ["fuji-precision-authorization"],
    assets: [assets.manufacturers.fujiPrecision],
    seo: {
      title: { mn: "FUJI Precision лифт" },
      description: { mn: "FUJI Precision төслөөр тохируулах лифтний шийдэл." },
      canonicalPath: "/brands/fuji-precision",
      image: assets.manufacturers.fujiPrecision,
    },
  },
  {
    slug: "asia-fuji",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "ASIA FUJI" },
    summary: {
      mn: "Монголын барилгын хэрэгцээнд төслөөр тохируулан үйлдвэрлэх БНХАУ-ын шийдэл.",
    },
    origin: { mn: "БНХАУ" },
    positioning: {
      mn: "Шинэ төслийн хэмжээ, даац, хурд, кабин ба удирдлагын шаардлагаар тохируулна.",
    },
    logisticsNote: {
      mn: "Үйлдвэрлэлийн батлагдсан үзүүлэлт, үйлдвэрийн гаралтын дараа хүргэлтийн хугацааг тооцно.",
    },
    authorizationStatement: {
      mn: "Suzhou Asia Fuji Elevator Co., Ltd.-ийн эрхийн баримтаар Perfect Construction International LLC нь Монгол Улсад маркетинг, түгээлт, борлуулалт, үйлчилгээний эрхтэй онцгой төлөөлөгчөөр 2026.03.27-2029.03.27 хүртэл томилогдсон.",
    },
    productSlugs: [
      "passenger-elevator",
      "home-elevator",
      "cargo-elevator",
      "hospital-elevator",
      "panoramic-elevator",
      "escalator-moving-walk",
      "dumbwaiter-service-lift",
      "customization",
    ],
    certificateSlugs: ["asia-fuji-authorization"],
    assets: [assets.manufacturers.asiaFuji],
    seo: {
      title: { mn: "ASIA FUJI лифт" },
      description: { mn: "ASIA FUJI төслөөр тохируулах лифтний шийдэл." },
      canonicalPath: "/brands/asia-fuji",
      image: assets.manufacturers.asiaFuji,
    },
  },
];

export const brandBySlug = new Map(brands.map((brand) => [brand.slug, brand]));
