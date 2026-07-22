import type { AssetRef } from "./types";

const placeholder = (
  src: string,
  altMn: string,
  width = 1600,
  height = 1000,
): AssetRef => ({
  src,
  alt: { mn: altMn },
  width,
  height,
  verificationStatus: "placeholder",
});

const verified = (
  src: string,
  altMn: string,
  width: number,
  height: number,
): AssetRef => ({
  src,
  alt: { mn: altMn },
  width,
  height,
  verificationStatus: "verified",
});

export const assets = {
  company: {
    logo: placeholder(
      "/assets/company/logo/perfect-construction-mark.svg",
      "Төгс Бүтээн Босголт компанийн тэмдэг",
      500,
      500,
    ),
    office: verified(
      "/assets/company/office/perfect-construction-office-exterior.webp",
      "Төгс Бүтээн Босголт компанийн оффис байрладаг барилгын гадна төрх",
      507,
      240,
    ),
  },
  homepage: {
    elevatorDescentVideo: {
      src: "/assets/homepage/elevator-descent.webm",
      verificationStatus: "verified",
    },
    hero: placeholder(
      "/assets/placeholders/hero.svg",
      "Монголд хэрэгжүүлсэн лифтний төслийн үндсэн зургийн түр байрлал",
      1920,
      1280,
    ),
  },
  manufacturers: {
    seohyun: placeholder(
      "/assets/placeholders/brand.svg",
      "SEOHYUN үйлдвэрлэгчийн баталгаажуулах логоны түр байрлал",
      640,
      320,
    ),
    fujiPrecision: verified(
      "/assets/manufacturers/fuji-precision/fuji-precision-logo.svg",
      "FUJI Precision үйлдвэрлэгчийн лого",
      510,
      80,
    ),
    asiaFuji: verified(
      "/assets/manufacturers/asia-fuji/asia-fuji-logo.svg",
      "ASIA FUJI үйлдвэрлэгчийн лого",
      200,
      200,
    ),
  },
  products: {
    passenger: verified(
      "/assets/products/passenger/passenger-asia-fuji-2.png",
      "ASIA FUJI зорчигчийн лифтний бүхээгийн гурван өнгөлгөөний сонголт",
      2412,
      1721,
    ),
    home: verified(
      "/assets/catalogs/fuji-precision-decoration/fuji-precision-home-elevator-decoration.webp",
      "FUJI Precision амины орон сууцны лифтний кабин, өнгөлгөөний каталогийн хуудас",
      1600,
      1138,
    ),
    cargo: verified(
      "/assets/products/cargo/cargo-asia-fuji.jpg",
      "Ачааны лифтээр модон хайрцаг тээвэрлэж буй ажилчид",
      382,
      405,
    ),
    hospital: verified(
      "/assets/catalogs/asia-fuji-passenger/asia-fuji-hospital-elevator.webp",
      "ASIA FUJI эмнэлгийн лифтний каталогийн танилцуулга",
      1600,
      1138,
    ),
    panoramic: verified(
      "/assets/products/panoramic/panararomic-asia-fuji.png",
      "ASIA FUJI панорам лифтний шилэн кабин, дотоод засал",
      1193,
      851,
    ),
    escalator: verified(
      "/assets/products/escalator/escalator-asia-fuji.png",
      "ASIA FUJI урсдаг шатны шилэн хашлага болон зорчих хэсэг",
      1723,
      1228,
    ),
    movingWalk: verified(
      "/assets/catalogs/asia-fuji-escalator/asia-fuji-moving-walk.webp",
      "ASIA FUJI урсдаг замын каталогийн техникийн танилцуулга",
      1600,
      1138,
    ),
    dumbwaiter: placeholder(
      "/assets/placeholders/product.svg",
      "Үйлчилгээний бага оврын лифтний баталгаажуулах зургийн түр байрлал",
    ),
    customization: verified(
      "/assets/catalogs/fuji-precision-decoration/fuji-precision-customized-cabin-series.webp",
      "FUJI Precision захиалгат кабин, өнгөлгөөний каталогийн хуудас",
      1600,
      1138,
    ),
  },
  projects: {
    residence: placeholder(
      "/assets/placeholders/project-residence.svg",
      "Улаанбаатар хотын орон сууцны төслийн зургийн түр байрлал",
    ),
    commercial: placeholder(
      "/assets/placeholders/project-commercial.svg",
      "Улаанбаатар хотын үйлчилгээний төвийн төслийн зургийн түр байрлал",
    ),
    industrial: placeholder(
      "/assets/placeholders/project-industrial.svg",
      "Үйлдвэрийн барилгын төслийн зургийн түр байрлал",
    ),
  },
  certificates: {
    generic: placeholder(
      "/assets/placeholders/certificate.svg",
      "Нийтлэх зөвшөөрөл хүлээгдэж буй гэрчилгээний түр байрлал",
      900,
      1273,
    ),
    asiaFujiAuthorization: verified(
      "/assets/certificates/asia-fuji-authorization-2026-2029/asia-fuji-mongolia-exclusive-agent-authorization-2026-2029.webp",
      "ASIA FUJI Монгол дахь онцгой төлөөлөгчийн 2026-2029 оны эрхийн баримт",
      1600,
      1136,
    ),
  },
  catalogues: {
    asiaFujiPassenger: verified(
      "/assets/catalogs/asia-fuji-passenger/asia-fuji-passenger-landing-door-options.webp",
      "ASIA FUJI зорчигчийн лифтний давхрын хаалганы сонголтын каталогийн хуудас",
      1600,
      1139,
    ),
    fujiPrecisionDecoration: verified(
      "/assets/catalogs/fuji-precision-decoration/fuji-precision-business-series.webp",
      "FUJI Precision бизнес ангиллын кабин, өнгөлгөөний каталогийн хуудас",
      1600,
      1138,
    ),
    asiaFujiEscalator: verified(
      "/assets/catalogs/asia-fuji-escalator/asia-fuji-escalator-technology.webp",
      "ASIA FUJI урсдаг шат, урсдаг замын каталогийн танилцуулга",
      1600,
      1138,
    ),
  },
} as const;

export const allAssetRefs: AssetRef[] = [
  assets.company.logo,
  assets.company.office,
  assets.homepage.hero,
  ...Object.values(assets.manufacturers),
  ...Object.values(assets.products),
  ...Object.values(assets.projects),
  ...Object.values(assets.certificates),
  ...Object.values(assets.catalogues),
];
