import { assets } from "./assets";
import type { Certificate } from "./types";

export const certificates: Certificate[] = [
  {
    slug: "seohyun-authorization",
    draft: true,
    verificationStatus: "placeholder",
    title: { mn: "SEOHYUN эрхийн баримт" },
    summary: { mn: "SEOHYUN үйлдвэрлэгчийн эрхийн баримт." },
    brandSlug: "seohyun",
    issuer: { mn: "SEOHYUN" },
    documentType: { mn: "Үйлдвэрлэгчийн эрхийн баримт" },
    previewAsset: assets.certificates.generic,
    publicationAuthorized: false,
    assets: [assets.certificates.generic],
    seo: {
      title: { mn: "SEOHYUN эрхийн баримт" },
      description: { mn: "SEOHYUN үйлдвэрлэгчийн эрхийн баримт." },
      canonicalPath: "/about/certificates#seohyun-authorization",
    },
  },
  {
    slug: "fuji-precision-authorization",
    draft: true,
    verificationStatus: "placeholder",
    title: { mn: "FUJI Precision эрхийн баримт" },
    summary: { mn: "FUJI Precision үйлдвэрлэгчийн эрхийн баримт." },
    brandSlug: "fuji-precision",
    issuer: { mn: "FUJI Precision" },
    documentType: { mn: "Үйлдвэрлэгчийн эрхийн баримт" },
    previewAsset: assets.certificates.generic,
    publicationAuthorized: false,
    assets: [assets.certificates.generic],
    seo: {
      title: { mn: "FUJI Precision эрхийн баримт" },
      description: { mn: "FUJI Precision үйлдвэрлэгчийн эрхийн баримт." },
      canonicalPath: "/about/certificates#fuji-precision-authorization",
    },
  },
  {
    slug: "asia-fuji-authorization",
    draft: false,
    verificationStatus: "verified",
    title: { mn: "ASIA FUJI Монгол дахь онцгой төлөөлөгчийн эрхийн баримт" },
    summary: {
      mn: "Suzhou Asia Fuji Elevator Co., Ltd.-ээс Perfect Construction International LLC-ийг Монгол Улс дахь лифт, урсдаг шат, урсдаг замын онцгой төлөөлөгчөөр томилсон баримт. 2026.03.27–2029.03.27 хүртэл хүчинтэй.",
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
