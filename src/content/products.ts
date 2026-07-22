import { assets } from "./assets";
import type { Product } from "./types";

const sharedTechnicalConsiderations = [
  { mn: "Шахтын дотор хэмжээ, худгийн гүн, бүтээцийн бэлэн байдал" },
  { mn: "Даац, хурд, зогсолтын тоо, ашиглалтын ачаалал" },
  { mn: "Цахилгаан хангамж, техникийн өрөө, барилгын ажлын бэлэн байдал" },
];

export const products: Product[] = [
  {
    slug: "passenger-elevator",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Зорчигчийн лифт" },
    summary: {
      mn: "Орон сууц, оффис, зочид буудал, олон нийтийн барилгад зориулан даац, хурд, кабин, хаалгыг төслийн нөхцөлөөр сонгоно.",
    },
    assets: [assets.products.passenger],
    applications: [
      { mn: "Орон сууц" },
      { mn: "Оффис" },
      { mn: "Зочид буудал" },
      { mn: "Үйлчилгээний барилга" },
    ],
    configurations: [
      { mn: "Техникийн өрөөтэй эсвэл өрөөгүй хийц" },
      { mn: "Кабин, хаалга, удирдлагын сонголт" },
    ],
    technicalConsiderations: sharedTechnicalConsiderations,
    brandSlugs: ["fuji-precision", "asia-fuji"],
    projectSlugs: ["ulaanbaatar-residence", "city-service-center"],
    seo: {
      title: { mn: "Зорчигчийн лифт" },
      description: {
        mn: "Орон сууц, оффис, зочид буудал, олон нийтийн барилгад зориулсан зорчигчийн лифт.",
      },
      canonicalPath: "/products/passenger-elevator",
      image: assets.products.passenger,
    },
  },
  {
    slug: "home-elevator",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Амины орон сууцны лифт" },
    summary: {
      mn: "Амины орон сууц, таун хаусын зай талбай, дотоод засал, өдөр тутмын хэрэглээнд тохируулан сонгоно.",
    },
    assets: [assets.products.home],
    applications: [{ mn: "Амины орон сууц" }, { mn: "Таун хаус" }],
    configurations: [
      { mn: "Орон зай хэмнэсэн зохион байгуулалт" },
      { mn: "Дотоод засалтай зохицох кабин, хаалга" },
    ],
    technicalConsiderations: sharedTechnicalConsiderations,
    brandSlugs: ["fuji-precision", "asia-fuji"],
    projectSlugs: [],
    seo: {
      title: { mn: "Амины орон сууцны лифт" },
      description: { mn: "Амины орон сууц, таун хауст зориулсан бага оврын лифт." },
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
      mn: "Үйлдвэр, агуулах, худалдааны барилгын ачааны жин, хэмжээ, зөөвөрлөх давтамжид тохируулан сонгоно.",
    },
    assets: [assets.products.cargo],
    applications: [
      { mn: "Үйлдвэр" },
      { mn: "Агуулах" },
      { mn: "Худалдааны төв" },
    ],
    configurations: [
      { mn: "Даац, кабин, хаалганы хэмжээ" },
      { mn: "Ачаа зөөвөрлөх давтамж, ашиглалтын орчинд тохирох хийц" },
    ],
    technicalConsiderations: sharedTechnicalConsiderations,
    brandSlugs: ["fuji-precision", "asia-fuji"],
    projectSlugs: ["industrial-building"],
    seo: {
      title: { mn: "Ачааны лифт" },
      description: { mn: "Үйлдвэр, агуулах, худалдааны барилгад зориулсан ачааны лифт." },
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
      mn: "Өвчтөний ор, эмнэлгийн тоног төхөөрөмжийг аюулгүй зөөвөрлөхөд тохирсон хэмжээтэй кабин бүхий лифт.",
    },
    assets: [assets.products.hospital],
    applications: [{ mn: "Эмнэлэг" }, { mn: "Оношилгооны төв" }],
    configurations: [
      { mn: "Ор зөөвөрлөхөд нийцсэн кабин" },
      { mn: "Хөдөлгөөний зохион байгуулалт, ариун цэврийн шаардлагад нийцэх сонголт" },
    ],
    technicalConsiderations: sharedTechnicalConsiderations,
    brandSlugs: ["fuji-precision", "asia-fuji"],
    projectSlugs: [],
    seo: {
      title: { mn: "Эмнэлгийн лифт" },
      description: { mn: "Эмнэлэг, оношилгооны төвд зориулсан эмнэлгийн лифт." },
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
      mn: "Шилэн кабин, гадна хийц, өнгөлгөөг барилгын архитектур, дотоод засалтай уялдуулан сонгоно.",
    },
    assets: [assets.products.panoramic],
    applications: [
      { mn: "Худалдааны төв" },
      { mn: "Зочид буудал" },
      { mn: "Олон нийтийн барилга" },
    ],
    configurations: [
      { mn: "Шилэн кабин, гадна хүрээний хийц" },
      { mn: "Барилгын архитектуртай зохицох өнгөлгөө" },
    ],
    technicalConsiderations: sharedTechnicalConsiderations,
    brandSlugs: ["fuji-precision", "asia-fuji"],
    projectSlugs: ["city-service-center"],
    seo: {
      title: { mn: "Панорам лифт" },
      description: { mn: "Худалдаа, үйлчилгээ, олон нийтийн барилгад зориулсан панорам лифт." },
      canonicalPath: "/products/panoramic-elevator",
      image: assets.products.panoramic,
    },
  },
  {
    slug: "escalator-moving-walk",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Урсдаг шат, урсдаг зам" },
    summary: {
      mn: "Худалдааны төв, тээврийн байгууламж, олон нийтийн барилгын зорчигчдын урсгалд зориулна.",
    },
    assets: [assets.products.escalator, assets.products.movingWalk],
    applications: [
      { mn: "Худалдааны төв" },
      { mn: "Тээврийн байгууламж" },
      { mn: "Олон нийтийн барилга" },
    ],
    configurations: [
      { mn: "Дотор болон гадна орчинд суурилуулах хувилбар" },
      { mn: "Зорчигчдын урсгалд тохирох өргөн, налуу" },
    ],
    technicalConsiderations: [
      { mn: "Барилгын нээлхийн хэмжээ, хучилт, тулгуурын байрлал" },
      { mn: "Өргөх өндөр, налуу, гишгүүрийн өргөн, зорчигчдын урсгал" },
      { mn: "Цахилгаан хангамж, ус тусгаарлалт, угсралтын талбай" },
    ],
    brandSlugs: ["fuji-precision", "asia-fuji"],
    projectSlugs: [],
    seo: {
      title: { mn: "Урсдаг шат, урсдаг зам" },
      description: { mn: "Худалдаа, тээвэр, олон нийтийн барилгад зориулсан урсдаг шат, урсдаг зам." },
      canonicalPath: "/products/escalator-moving-walk",
      image: assets.products.escalator,
    },
  },
  {
    slug: "dumbwaiter-service-lift",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Хоолны болон үйлчилгээний лифт" },
    summary: {
      mn: "Хоол, бараа, жижиг оврын ачааг давхар хооронд зөөвөрлөхөд зориулсан бага оврын лифт.",
    },
    assets: [assets.products.dumbwaiter],
    applications: [
      { mn: "Зоогийн газар" },
      { mn: "Зочид буудал" },
      { mn: "Эмнэлэг" },
    ],
    configurations: [
      { mn: "Зөөвөрлөх ачаанд тохирох кабин, даац" },
      { mn: "Кабины материал, хаалганы хийц" },
    ],
    technicalConsiderations: [
      { mn: "Шахтын дотор хэмжээ, худгийн гүн, хаалганы нээлхий" },
      { mn: "Зөөвөрлөх ачааны жин, кабин, зогсолтын тоо" },
      { mn: "Цахилгаан хангамж, ариун цэвэр, галын шаардлага" },
    ],
    brandSlugs: ["fuji-precision", "asia-fuji"],
    projectSlugs: [],
    seo: {
      title: { mn: "Хоолны болон үйлчилгээний лифт" },
      description: { mn: "Зоогийн газар, зочид буудал, эмнэлэгт зориулсан бага оврын үйлчилгээний лифт." },
      canonicalPath: "/products/dumbwaiter-service-lift",
      image: assets.products.dumbwaiter,
    },
  },
  {
    slug: "customization",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "Кабин, хаалга, удирдлагын сонголт" },
    summary: {
      mn: "Кабины материал, хаалга, товчлуур, дэлгэц, гэрэлтүүлэг, өнгөлгөөг барилгын дотоод засал, ашиглалтын нөхцөлд нийцүүлнэ.",
    },
    assets: [assets.products.customization],
    applications: [{ mn: "Бүх төрлийн шинэ лифтний төсөл" }],
    configurations: [
      { mn: "Кабины материал, өнгөлгөө, гэрэлтүүлэг" },
      { mn: "Хаалга, товчлуур, дэлгэцийн сонголт" },
      { mn: "Хүртээмжийн хэрэгслийн сонголт" },
    ],
    technicalConsiderations: [
      { mn: "Архитектур, дотоод засал чимэглэлийн батлагдсан зураг" },
      { mn: "Ашиглалтын орчин ба элэгдлийн нөхцөл" },
      { mn: "Сонгосон үйлдвэрлэгчийн боломжит каталог" },
    ],
    brandSlugs: ["fuji-precision", "asia-fuji"],
    projectSlugs: [],
    seo: {
      title: { mn: "Лифтний кабин, хаалга, удирдлагын сонголт" },
      description: { mn: "Кабин, хаалга, товчлуур, дэлгэц, гэрэлтүүлэг, өнгөлгөөний сонголт." },
      canonicalPath: "/products/customization",
      image: assets.products.customization,
    },
  },
];

export const productBySlug = new Map(
  products.map((product) => [product.slug, product]),
);
