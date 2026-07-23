import { allAssetRefs, assets } from "./assets";
import { brands } from "./brands";
import { catalogues } from "./catalogues";
import { certificates } from "./certificates";
import { products } from "./products";
import { projects } from "./projects";
import { standardTimeline } from "./services";
import { proofMetrics, siteSettings } from "./site";
import type { PublishableRecord } from "./types";

export interface ContentValidationIssue {
  code: string;
  path: string;
  message: string;
}

export interface ContentValidationOptions {
  production?: boolean;
}

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const isBlank = (value: string | undefined) => !value?.trim();

const addDuplicateIssues = (
  issues: ContentValidationIssue[],
  collectionName: string,
  slugs: string[],
) => {
  const seen = new Set<string>();
  for (const slug of slugs) {
    if (seen.has(slug)) {
      issues.push({
        code: "duplicate-slug",
        path: `${collectionName}.${slug}`,
        message: `Duplicate slug: ${slug}`,
      });
    }
    seen.add(slug);
  }
};

const validateRecord = (
  issues: ContentValidationIssue[],
  collectionName: string,
  record: PublishableRecord,
  production: boolean,
) => {
  const path = `${collectionName}.${record.slug}`;

  if (!slugPattern.test(record.slug)) {
    issues.push({
      code: "invalid-slug",
      path: `${path}.slug`,
      message: "Slugs must use lowercase kebab-case.",
    });
  }

  if (isBlank(record.title.mn) || isBlank(record.summary.mn)) {
    issues.push({
      code: "missing-mongolian-content",
      path,
      message: "Published records require Mongolian title and summary content.",
    });
  }

  if (
    isBlank(record.seo.title.mn) ||
    isBlank(record.seo.description.mn) ||
    !record.seo.canonicalPath.startsWith("/")
  ) {
    issues.push({
      code: "incomplete-metadata",
      path: `${path}.seo`,
      message: "Title, description, and a root-relative canonical path are required.",
    });
  }

  for (const [index, asset] of record.assets.entries()) {
    if (
      !asset.src.startsWith("/assets/") ||
      isBlank(asset.alt.mn) ||
      asset.width <= 0 ||
      asset.height <= 0
    ) {
      issues.push({
        code: "invalid-asset",
        path: `${path}.assets.${index}`,
        message: "Assets require a central /assets path, Mongolian alt text, and dimensions.",
      });
    }
  }

  if (production && !record.draft && record.verificationStatus !== "verified") {
    issues.push({
      code: "placeholder-record",
      path,
      message: "A published production record is still marked as placeholder.",
    });
  }

  if (production && !record.draft) {
    record.assets.forEach((asset, index) => {
      if (asset.verificationStatus !== "verified") {
        issues.push({
          code: "placeholder-asset",
          path: `${path}.assets.${index}`,
          message: "A published production page references a placeholder asset.",
        });
      }
    });
  }
};

const validateReferences = (issues: ContentValidationIssue[]) => {
  const productSlugs = new Set(products.map(({ slug }) => slug));
  const brandSlugs = new Set(brands.map(({ slug }) => slug));
  const projectSlugs = new Set(projects.map(({ slug }) => slug));
  const certificateSlugs = new Set(certificates.map(({ slug }) => slug));

  products.forEach((product) => {
    product.brandSlugs.forEach((slug) => {
      if (!brandSlugs.has(slug)) {
        issues.push({
          code: "missing-reference",
          path: `products.${product.slug}.brandSlugs`,
          message: `Unknown brand slug: ${slug}`,
        });
      }
    });
    product.projectSlugs.forEach((slug) => {
      if (!projectSlugs.has(slug)) {
        issues.push({
          code: "missing-reference",
          path: `products.${product.slug}.projectSlugs`,
          message: `Unknown project slug: ${slug}`,
        });
      }
    });
  });

  brands.forEach((brand) => {
    brand.productSlugs.forEach((slug) => {
      if (!productSlugs.has(slug)) {
        issues.push({
          code: "missing-reference",
          path: `brands.${brand.slug}.productSlugs`,
          message: `Unknown product slug: ${slug}`,
        });
      }
    });
    brand.certificateSlugs.forEach((slug) => {
      if (!certificateSlugs.has(slug)) {
        issues.push({
          code: "missing-reference",
          path: `brands.${brand.slug}.certificateSlugs`,
          message: `Unknown certificate slug: ${slug}`,
        });
      }
    });
  });

  projects.forEach((project) => {
    project.productSlugs.forEach((slug) => {
      if (!productSlugs.has(slug)) {
        issues.push({
          code: "missing-reference",
          path: `projects.${project.slug}.productSlugs`,
          message: `Unknown product slug: ${slug}`,
        });
      }
    });
    if (project.brandSlug && !brandSlugs.has(project.brandSlug)) {
      issues.push({
        code: "missing-reference",
        path: `projects.${project.slug}.brandSlug`,
        message: `Unknown brand slug: ${project.brandSlug}`,
      });
    }
  });

  catalogues.forEach((catalogue) => {
    if (!brandSlugs.has(catalogue.brandSlug)) {
      issues.push({
        code: "missing-reference",
        path: `catalogues.${catalogue.slug}.brandSlug`,
        message: `Unknown brand slug: ${catalogue.brandSlug}`,
      });
    }
  });
};

export function validateContent(
  options: ContentValidationOptions = {},
): ContentValidationIssue[] {
  const production = options.production ?? false;
  const issues: ContentValidationIssue[] = [];
  const collections: Array<[string, PublishableRecord[]]> = [
    ["products", products],
    ["brands", brands],
    ["projects", projects],
    ["certificates", certificates],
  ];

  collections.forEach(([name, records]) => {
    addDuplicateIssues(
      issues,
      name,
      records.map(({ slug }) => slug),
    );
    records.forEach((record) => validateRecord(issues, name, record, production));
  });

  validateReferences(issues);

  addDuplicateIssues(
    issues,
    "catalogues",
    catalogues.map(({ slug }) => slug),
  );

  catalogues.forEach((catalogue) => {
    if (!slugPattern.test(catalogue.slug)) {
      issues.push({
        code: "invalid-slug",
        path: `catalogues.${catalogue.slug}.slug`,
        message: "Slugs must use lowercase kebab-case.",
      });
    }

    if (
      isBlank(catalogue.title.mn) ||
      isBlank(catalogue.summary.mn) ||
      catalogue.previewAsset.verificationStatus !== "verified" ||
      (catalogue.downloadAuthorized &&
        (!catalogue.downloadPath?.startsWith("/assets/") ||
          catalogue.downloadPath.length === 0)) ||
      (!catalogue.downloadAuthorized && catalogue.downloadPath !== undefined)
    ) {
      issues.push({
        code: "invalid-catalogue",
        path: `catalogues.${catalogue.slug}`,
        message:
          "Catalogues require Mongolian copy, a verified preview, and an authorized public path for any download.",
      });
    }

    if (
      production &&
      (catalogue.verificationStatus !== "verified" ||
        !catalogue.publicationAuthorized)
    ) {
      issues.push({
        code: "catalogue-not-authorized",
        path: `catalogues.${catalogue.slug}`,
        message: "A public catalogue must be verified and authorized for publication.",
      });
    }
  });

  if (siteSettings.activeLocales.includes("en")) {
    collections.forEach(([name, records]) => {
      records
        .filter(({ draft }) => !draft)
        .forEach((record) => {
          if (isBlank(record.title.en) || isBlank(record.summary.en)) {
            issues.push({
              code: "incomplete-active-locale",
              path: `${name}.${record.slug}`,
              message: "English is active but this record is not fully translated.",
            });
          }
        });
    });
  }

  if (production) {
    const standalonePublicAssets = [
      ["site.logo", assets.company.logo],
      ["site.office", assets.company.office],
      ["homepage.elevatorShaft", assets.homepage.elevatorShaft],
      ["homepage.elevatorCar", assets.homepage.elevatorCar],
    ] as const;

    standalonePublicAssets.forEach(([path, asset]) => {
      if (asset.verificationStatus !== "verified") {
        issues.push({
          code: "placeholder-asset",
          path,
          message: "A standalone public asset is still marked as placeholder.",
        });
      }
    });

    siteSettings.contacts.forEach((contact) => {
      if (contact.verificationStatus !== "verified") {
        issues.push({
          code: "placeholder-contact",
          path: `site.contacts.${contact.id}`,
          message: "A public contact channel is still marked as placeholder.",
        });
      }
    });

    if (siteSettings.addressVerificationStatus !== "verified") {
      issues.push({
        code: "placeholder-address",
        path: "site.address",
        message: "The public office address is still marked as placeholder.",
      });
    }

    proofMetrics.forEach((metric) => {
      if (metric.verificationStatus !== "verified") {
        issues.push({
          code: "placeholder-proof",
          path: `proofMetrics.${metric.id}`,
          message: "A public proof metric is still marked as placeholder.",
        });
      }
    });

    standardTimeline.forEach((step) => {
      if (step.verificationStatus !== "verified") {
        issues.push({
          code: "placeholder-timeline",
          path: `timeline.${step.id}`,
          message: "A public timeline claim is still marked as placeholder.",
        });
      }
    });

    certificates.forEach((certificate) => {
      if (!certificate.draft && !certificate.publicationAuthorized) {
        issues.push({
          code: "certificate-not-authorized",
          path: `certificates.${certificate.slug}`,
          message: "Certificate publication has not been authorized.",
        });
      }
    });
  }

  return issues;
}

export const hasPlaceholderContent =
  allAssetRefs.some(({ verificationStatus }) => verificationStatus === "placeholder") ||
  validateContent({ production: true }).length > 0;

export function assertContentReadyForProduction() {
  const issues = validateContent({ production: true });
  if (issues.length === 0) return;

  const details = issues
    .map((issue) => `- [${issue.code}] ${issue.path}: ${issue.message}`)
    .join("\n");

  throw new Error(`Production content validation failed:\n${details}`);
}
