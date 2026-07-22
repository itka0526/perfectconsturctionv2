import { assets } from "./assets";
import type { CatalogueDocument } from "./types";

export const catalogues: CatalogueDocument[] = [
  {
    slug: "asia-fuji-passenger-elevator",
    brandSlug: "asia-fuji",
    title: { mn: "ASIA FUJI зорчигчийн лифт" },
    summary: {
      mn: "Зорчигчийн, панорам болон эмнэлгийн лифтний загвар, кабин, хаалга, удирдлага, техникийн ерөнхий мэдээлэл бүхий албан ёсны каталог.",
    },
    sourceLanguage: { mn: "Англи хэл" },
    fileType: "PDF",
    previewAsset: assets.catalogues.asiaFujiPassenger,
    verificationStatus: "verified",
    publicationAuthorized: true,
    downloadPath:
      "/assets/catalogs/asia-fuji-passenger/asia-fuji-passenger-elevator-catalogue.pdf",
    downloadAuthorized: true,
  },
  {
    slug: "fuji-precision-decoration",
    brandSlug: "fuji-precision",
    title: { mn: "FUJI Precision кабин ба өнгөлгөө" },
    summary: {
      mn: "Зорчигчийн, панорам болон амины орон сууцны лифтний кабин, хаалга, тааз, шал, бариул, удирдлагын сонголт бүхий албан ёсны каталог.",
    },
    sourceLanguage: { mn: "Англи хэл" },
    fileType: "PDF",
    previewAsset: assets.catalogues.fujiPrecisionDecoration,
    verificationStatus: "verified",
    publicationAuthorized: true,
    downloadPath:
      "/assets/catalogs/fuji-precision-decoration/fuji-precision-elevator-decoration-catalogue.pdf",
    downloadAuthorized: true,
  },
  {
    slug: "asia-fuji-escalator-moving-walk",
    brandSlug: "asia-fuji",
    title: { mn: "ASIA FUJI урсдаг шат, урсдаг зам" },
    summary: {
      mn: "Урсдаг шат, урсдаг замын загвар, техникийн боломж, аюулгүй ажиллагааны төхөөрөмж, төлөвлөлтийн ерөнхий мэдээлэл бүхий албан ёсны каталог.",
    },
    sourceLanguage: { mn: "Англи хэл" },
    fileType: "PDF",
    previewAsset: assets.catalogues.asiaFujiEscalator,
    verificationStatus: "verified",
    publicationAuthorized: true,
    downloadPath:
      "/assets/catalogs/asia-fuji-escalator/asia-fuji-escalator-moving-walk-catalogue.pdf",
    downloadAuthorized: true,
  },
];
