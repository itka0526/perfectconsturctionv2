import { siteSettings } from "@/content";

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue | undefined };

export type JsonLdObject = { [key: string]: JsonLdValue | undefined };

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function serializeJsonLd(value: JsonLdObject | JsonLdObject[]) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export function organizationJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${siteSettings.canonicalUrl}/#organization`,
    name: siteSettings.companyName.mn,
    legalName: siteSettings.legalName.mn,
    url: siteSettings.canonicalUrl,
    areaServed: {
      "@type": "Country",
      name: "Монгол",
    },
  };
}

export function breadcrumbsJsonLd(items: BreadcrumbItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteSettings.canonicalUrl).toString(),
    })),
  };
}

export function serviceJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: new URL(path, siteSettings.canonicalUrl).toString(),
    provider: {
      "@id": `${siteSettings.canonicalUrl}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Монгол",
    },
  };
}
