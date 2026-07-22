import { assets } from "./assets";
import type { Certificate } from "./types";

export const certificates: Certificate[] = [
  {
    slug: "seohyun-authorization",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "SEOHYUN эрхийн баримт" },
    summary: { mn: "Нийтлэх зөвшөөрөл болон хүчинтэй хугацааг баталгаажуулна." },
    brandSlug: "seohyun",
    issuer: { mn: "SEOHYUN — баталгаажуулна" },
    documentType: { mn: "Үйлдвэрлэгчийн эрхийн баримт" },
    previewAsset: assets.certificates.generic,
    publicationAuthorized: false,
    assets: [assets.certificates.generic],
    seo: {
      title: { mn: "SEOHYUN эрхийн баримт" },
      description: { mn: "SEOHYUN үйлдвэрлэгчийн нийтлэх эрхтэй баримт." },
      canonicalPath: "/about/certificates#seohyun-authorization",
    },
  },
  {
    slug: "fuji-precision-authorization",
    draft: false,
    verificationStatus: "placeholder",
    title: { mn: "FUJI Precision эрхийн баримт" },
    summary: { mn: "Нийтлэх зөвшөөрөл болон хүчинтэй хугацааг баталгаажуулна." },
    brandSlug: "fuji-precision",
    issuer: { mn: "FUJI Precision — баталгаажуулна" },
    documentType: { mn: "Үйлдвэрлэгчийн эрхийн баримт" },
    previewAsset: assets.certificates.generic,
    publicationAuthorized: false,
    assets: [assets.certificates.generic],
    seo: {
      title: { mn: "FUJI Precision эрхийн баримт" },
      description: { mn: "FUJI Precision үйлдвэрлэгчийн нийтлэх эрхтэй баримт." },
      canonicalPath: "/about/certificates#fuji-precision-authorization",
    },
  },
  {
    slug: "asia-fuji-authorization",
    draft: false,
    verificationStatus: "verified",
    title: { mn: "ASIA FUJI Монгол дахь онцгой төлөөлөгчийн эрхийн баримт" },
    summary: {
      mn: "Perfect Construction International LLC-ийг Монгол Улсад ASIA FUJI лифт, урсдаг шат, урсдаг замын маркетинг, түгээлт, борлуулалт, үйлчилгээний эрхтэй онцгой төлөөлөгчөөр томилсон баримт. 2026.03.27-2029.03.27 хүртэл хүчинтэй.",
    },
    brandSlug: "asia-fuji",
    issuer: { mn: "Suzhou Asia Fuji Elevator Co., Ltd." },
    documentType: { mn: "Онцгой төлөөлөгчийн эрхийн баримт" },
    previewAsset: assets.certificates.asiaFujiAuthorization,
    publicationAuthorized: true,
    assets: [assets.certificates.asiaFujiAuthorization],
    seo: {
      title: { mn: "ASIA FUJI Монгол дахь онцгой төлөөлөгчийн эрхийн баримт" },
      description: {
        mn: "ASIA FUJI-ийн Монгол Улс дахь онцгой төлөөлөгчийн 2026-2029 оны эрхийн баримт.",
      },
      canonicalPath: "/about/certificates#asia-fuji-authorization",
      image: assets.certificates.asiaFujiAuthorization,
    },
  },
];
