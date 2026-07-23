import type { ProofMetric, SiteSettings } from "./types";

export const siteSettings: SiteSettings = {
  companyName: { mn: "Төгс Бүтээн Босголт" },
  legalName: { mn: "“Төгс Бүтээн Босголт” ХХК" },
  canonicalUrl: "https://perfectconstruction.org",
  activeLocales: ["mn"],
  defaultLocale: "mn",
  address: {
    mn: "Сүхбаатар дүүрэг, 9-р хороо, Дөлгөөн нуур гудамж, Компьютер молл төв, Улаанбаатар хот, Монгол Улс",
  },
  shortAddress: {
    mn: "СБД, 9-р хороо, Дөлгөөн нуур, Компьютер молл төв",
  },
  addressVerificationStatus: "verified",
  contacts: [
    {
      id: "phone-primary",
      kind: "phone",
      label: { mn: "Утас" },
      value: "7013-7300",
      href: "tel:+97670137300",
      verificationStatus: "verified",
    },
    {
      id: "phone-secondary",
      kind: "phone",
      label: { mn: "Утас" },
      value: "7233-7300",
      href: "tel:+97672337300",
      verificationStatus: "verified",
    },
    {
      id: "phone-mobile",
      kind: "phone",
      label: { mn: "Утас" },
      value: "8558-3300",
      href: "tel:+97685583300",
      verificationStatus: "verified",
    },
    {
      id: "email-primary",
      kind: "email",
      label: { mn: "И-мэйл" },
      value: "perfectreconstruction@gmail.com",
      href: "mailto:perfectreconstruction@gmail.com",
      verificationStatus: "verified",
    },
    {
      id: "facebook-primary",
      kind: "facebook",
      label: { mn: "Facebook" },
      value: "MongolianPerfectConstruction",
      href: "https://www.facebook.com/MongolianPerfectConstruction",
      verificationStatus: "verified",
      external: true,
    },
    {
      id: "map-primary",
      kind: "map",
      label: { mn: "Газрын зураг" },
      value: "Компьютер молл төв",
      href: "https://www.google.com/maps/search/?api=1&query=Computer%20Mall%20Ulaanbaatar",
      verificationStatus: "verified",
      external: true,
    },
  ],
};

export const proofMetrics: ProofMetric[] = [
  {
    id: "quotation-speed",
    value: { mn: "1 ажлын өдөр" },
    label: { mn: "урьдчилсан үнийн санал" },
    note: { mn: "Талбайн хэмжилт хийж, шаардлагатай мэдээлэл бүрэн болсон үед" },
    verificationStatus: "verified",
  },
  {
    id: "service-coverage",
    value: { mn: "Монгол Улс" },
    label: { mn: "шинэ төсөл хэрэгжүүлэх бүс" },
    note: { mn: "Тээвэр, угсралтын нөхцөлийг төсөл бүрд тусад нь тооцно" },
    verificationStatus: "verified",
  },
];

export const activeLocales = siteSettings.activeLocales;
