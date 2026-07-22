import { assets } from "./assets";
import type { CatalogueDocument } from "./types";

export const catalogues: CatalogueDocument[] = [
  {
    slug: "asia-fuji-passenger-elevator",
    brandSlug: "asia-fuji",
    title: { mn: "ASIA FUJI зорчигчийн лифт" },
    summary: {
      mn: "Зорчигч, панорам, эмнэлгийн лифт, кабин, хаалга, удирдлага болон ерөнхий техникийн төлөвлөлтийн эх каталог.",
    },
    sourceLanguage: { mn: "Англи хэл" },
    fileType: "PDF",
    previewAsset: assets.catalogues.asiaFujiPassenger,
    verificationStatus: "verified",
    publicationAuthorized: true,
    downloadAuthorized: false,
  },
  {
    slug: "fuji-precision-decoration",
    brandSlug: "fuji-precision",
    title: { mn: "FUJI Precision кабин ба өнгөлгөө" },
    summary: {
      mn: "Бизнес, тансаг, захиалгат, панорам болон гэрийн лифтний кабин, хаалга, тааз, шал, бариул, удирдлагын сонголтын эх каталог.",
    },
    sourceLanguage: { mn: "Англи хэл" },
    fileType: "PDF",
    previewAsset: assets.catalogues.fujiPrecisionDecoration,
    verificationStatus: "verified",
    publicationAuthorized: true,
    downloadAuthorized: false,
  },
  {
    slug: "asia-fuji-escalator-moving-walk",
    brandSlug: "asia-fuji",
    title: { mn: "ASIA FUJI урсдаг шат ба зам" },
    summary: {
      mn: "Урсдаг шат, урсдаг зам, боломжит тохиргоо, аюулгүй ажиллагааны төхөөрөмж болон ерөнхий төлөвлөлтийн эх каталог.",
    },
    sourceLanguage: { mn: "Англи хэл" },
    fileType: "PDF",
    previewAsset: assets.catalogues.asiaFujiEscalator,
    verificationStatus: "verified",
    publicationAuthorized: true,
    downloadAuthorized: false,
  },
];
