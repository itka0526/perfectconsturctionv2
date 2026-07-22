import type { ProofMetric, SiteSettings } from "./types";

export const siteSettings: SiteSettings = {
  companyName: { mn: "Perfect Construction" },
  legalName: { mn: "Төгс Бүтээн Босголт" },
  canonicalUrl: "https://perfectconstruction.org",
  activeLocales: ["mn"],
  defaultLocale: "mn",
  address: { mn: "Улаанбаатар, Монгол — хаягийг баталгаажуулна" },
  addressVerificationStatus: "placeholder",
  contacts: [
    {
      id: "phone-primary",
      kind: "phone",
      label: { mn: "Утас" },
      value: "+976 7000 0000",
      href: "tel:+97670000000",
      verificationStatus: "placeholder",
    },
    {
      id: "email-primary",
      kind: "email",
      label: { mn: "И-мэйл" },
      value: "info@perfectconstruction.org",
      href: "mailto:info@perfectconstruction.org",
      verificationStatus: "placeholder",
    },
    {
      id: "facebook-primary",
      kind: "facebook",
      label: { mn: "Facebook" },
      value: "Perfect Construction",
      href: "https://www.facebook.com/",
      verificationStatus: "placeholder",
      external: true,
    },
    {
      id: "map-primary",
      kind: "map",
      label: { mn: "Газрын зураг" },
      value: "Улаанбаатар",
      href: "https://maps.google.com/?q=Ulaanbaatar",
      verificationStatus: "placeholder",
      external: true,
    },
  ],
};

export const proofMetrics: ProofMetric[] = [
  {
    id: "manufacturer-count",
    value: { mn: "3" },
    label: { mn: "баталгаажсан үйлдвэрлэгч" },
    verificationStatus: "placeholder",
  },
  {
    id: "quotation-speed",
    value: { mn: "1 ажлын өдөр" },
    label: { mn: "мэдээлэл бүрэн үед урьдчилсан үнийн санал" },
    note: { mn: "Талбайн хэмжилтийн дараах хугацааг баталгаажуулна." },
    verificationStatus: "placeholder",
  },
  {
    id: "baseline-timeline",
    value: { mn: "30 / 15 / 8" },
    label: { mn: "хоногийн стандарт суурь хугацаа" },
    note: { mn: "Үйлдвэрлэл / хүргэлт / угсралт" },
    verificationStatus: "placeholder",
  },
];

export const activeLocales = siteSettings.activeLocales;
