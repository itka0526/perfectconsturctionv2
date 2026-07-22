export type Locale = "mn" | "en";

export type VerificationStatus = "placeholder" | "verified";

export interface LocalizedText {
  mn: string;
  en?: string;
}

export interface AssetRef {
  src: string;
  alt: LocalizedText;
  width: number;
  height: number;
  verificationStatus: VerificationStatus;
}

export interface SeoMetadata {
  title: LocalizedText;
  description: LocalizedText;
  canonicalPath: string;
  image?: AssetRef;
}

export interface PublishableRecord {
  slug: string;
  draft: boolean;
  verificationStatus: VerificationStatus;
  title: LocalizedText;
  summary: LocalizedText;
  assets: AssetRef[];
  seo: SeoMetadata;
}

export type ContactChannelKind =
  | "phone"
  | "email"
  | "facebook"
  | "map"
  | "office";

export interface ContactChannel {
  id: string;
  kind: ContactChannelKind;
  label: LocalizedText;
  value: string;
  href: string;
  verificationStatus: VerificationStatus;
  external?: boolean;
}

export interface SiteSettings {
  companyName: LocalizedText;
  legalName: LocalizedText;
  canonicalUrl: string;
  activeLocales: Locale[];
  defaultLocale: Locale;
  address: LocalizedText;
  addressVerificationStatus: VerificationStatus;
  contacts: ContactChannel[];
}

export interface ProofMetric {
  id: string;
  value: LocalizedText;
  label: LocalizedText;
  note?: LocalizedText;
  verificationStatus: VerificationStatus;
}

export interface Product extends PublishableRecord {
  applications: LocalizedText[];
  configurations: LocalizedText[];
  technicalConsiderations: LocalizedText[];
  brandSlugs: string[];
  projectSlugs: string[];
}

export interface Brand extends PublishableRecord {
  origin: LocalizedText;
  positioning: LocalizedText;
  logisticsNote: LocalizedText;
  authorizationStatement: LocalizedText;
  productSlugs: string[];
  certificateSlugs: string[];
}

export interface Project extends PublishableRecord {
  location: LocalizedText;
  buildingType: LocalizedText;
  completionLabel: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  productSlugs: string[];
  brandSlug?: string;
}

export interface ServiceStep {
  id: string;
  order: number;
  title: LocalizedText;
  description: LocalizedText;
  verificationStatus: VerificationStatus;
}

export interface TimelineStep {
  id: string;
  duration: LocalizedText;
  title: LocalizedText;
  startsWhen: LocalizedText;
  verificationStatus: VerificationStatus;
}

export interface Certificate extends PublishableRecord {
  brandSlug?: string;
  issuer: LocalizedText;
  documentType: LocalizedText;
  previewAsset: AssetRef;
  downloadPath?: string;
  publicationAuthorized: boolean;
}

export interface CatalogueDocument {
  slug: string;
  brandSlug: string;
  title: LocalizedText;
  summary: LocalizedText;
  sourceLanguage: LocalizedText;
  fileType: "PDF";
  downloadPath?: string;
  previewAsset: AssetRef;
  verificationStatus: VerificationStatus;
  publicationAuthorized: boolean;
  downloadAuthorized: boolean;
}
