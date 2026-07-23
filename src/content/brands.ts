import { assets } from "./assets";
import type { Brand } from "./types";

export const brands: Brand[] = [
  {
    slug: "seohyun",
    draft: true,
    verificationStatus: "placeholder",
    title: { mn: "SEOHYUN" },
    summary: {
      mn: "Өндөр зэрэглэлийн барилгын төсөлд санал болгох БНСУ-ын үйлдвэрлэгч.",
    },
    origin: { mn: "БНСУ" },
    positioning: {
      mn: "Өндөр зэрэглэлийн хийц, материал, тоноглол шаардсан төсөлд тохирох хувилбарыг сонгоно.",
    },
    logisticsNote: {
      mn: "Монгол руу шууд тээвэрлэх боломж хязгаарлагдмал тул тээврийн зардал, тээвэрлэлтийн хугацааг төсөл бүрд тусад нь тооцно.",
    },
    authorizationStatement: {
      mn: "SEOHYUN-ийн бүтээгдэхүүн, тээвэр, төслийн нөхцөлийг захиалга бүрд тусад нь тооцно.",
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
      description: { mn: "БНСУ-ын SEOHYUN лифтний бүтээгдэхүүн, тээврийн нөхцөлийн мэдээлэл." },
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
      mn: "Монголын барилгын төсөлд зориулан үзүүлэлт, хийцийг захиалгаар үйлдвэрлэх БНХАУ-ын үйлдвэрлэгч.",
    },
    origin: { mn: "БНХАУ" },
    positioning: {
      mn: "Орон сууц, үйлчилгээний төв, үйлдвэр зэрэг барилгад шаардлагатай үзүүлэлт, төсөвт нийцэх хувилбарыг сонгоно.",
    },
    logisticsNote: {
      mn: "БНХАУ-аас Монгол руу тээвэрлэх хугацааг бүтээгдэхүүн үйлдвэрээс гарсан өдрөөс тооцно.",
    },
    authorizationStatement: {
      mn: "FUJI Precision-ийн бүтээгдэхүүнийг барилгын зориулалт, хэмжээ, даац, хийцийн шаардлагад тохируулан сонгоно.",
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
      description: { mn: "FUJI Precision лифт, урсдаг шатны захиалгаар үйлдвэрлэх бүтээгдэхүүний мэдээлэл." },
      canonicalPath: "/brands/fuji-precision",
      image: assets.manufacturers.fujiPrecision,
    },
  },
  {
    slug: "asia-fuji",
    draft: false,
    verificationStatus: "verified",
    title: { mn: "ASIA FUJI" },
    summary: {
      mn: "Монголын барилгын төсөлд зориулан хэмжээ, үзүүлэлт, хийцийг захиалгаар үйлдвэрлэх БНХАУ-ын үйлдвэрлэгч.",
    },
    origin: { mn: "БНХАУ" },
    positioning: {
      mn: "Шахтын хэмжээ, даац, хурд, кабин, хаалга, удирдлагын шаардлагад нийцэх хувилбарыг сонгоно.",
    },
    logisticsNote: {
      mn: "Техникийн үзүүлэлт батлагдаж, бүтээгдэхүүн үйлдвэрээс гарсны дараа тээврийн хугацааг тооцно.",
    },
    authorizationStatement: {
      mn: "Suzhou Asia Fuji Elevator Co., Ltd.-ээс Perfect Construction International LLC-ийг Монгол Улс дахь лифт, урсдаг шат, урсдаг замын онцгой төлөөлөгчөөр 2026.03.27–2029.03.27 хүртэл томилсон баримт.",
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
      description: { mn: "ASIA FUJI лифт, урсдаг шатны захиалгаар үйлдвэрлэх бүтээгдэхүүний мэдээлэл." },
      canonicalPath: "/brands/asia-fuji",
      image: assets.manufacturers.asiaFuji,
    },
  },
];

export const brandBySlug = new Map(brands.map((brand) => [brand.slug, brand]));
