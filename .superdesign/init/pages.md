# Page dependency trees

## `/` — Home

- `src/app/page.tsx`
  - `src/components/index.ts`
    - `src/components/button-link.tsx`
    - `src/components/contact-panel.tsx`
    - `src/components/hero-video.tsx`
    - `src/components/product-card.tsx`
    - `src/components/project-card.tsx`
    - `src/components/section-heading.tsx`
    - `src/components/timeline-strip.tsx`
  - `src/content/index.ts`
  - `src/app/_route-helpers.tsx`
  - `src/lib/metadata.ts`
  - `src/lib/structured-data.ts`

## `/contact` — Contact

- `src/app/contact/page.tsx`
  - `src/components/index.ts`
    - `src/components/placeholder-badge.tsx`
    - `src/components/section-heading.tsx`
    - `src/components/tracked-link.tsx`
  - `src/content/index.ts`
    - `src/content/site.ts`
    - `src/content/types.ts`
  - `src/app/_route-helpers.tsx`
  - `src/lib/metadata.ts`
  - `src/lib/structured-data.ts`

## `/products`

- `src/app/products/page.tsx`
  - `src/components/product-card.tsx`
  - `src/components/contact-panel.tsx`
  - `src/components/section-heading.tsx`
  - `src/content/products.ts`

## `/products/[slug]`

- `src/app/products/[slug]/page.tsx`
  - `src/components/gallery.tsx`
  - `src/components/contact-panel.tsx`
  - `src/components/project-card.tsx`
  - `src/content/products.ts`
  - `src/content/brands.ts`
  - `src/content/projects.ts`

## `/brands`

- `src/app/brands/page.tsx`
  - `src/components/brand-card.tsx`
  - `src/components/contact-panel.tsx`
  - `src/components/section-heading.tsx`
  - `src/content/brands.ts`

## `/projects`

- `src/app/projects/page.tsx`
  - `src/components/project-card.tsx`
  - `src/components/contact-panel.tsx`
  - `src/components/section-heading.tsx`
  - `src/content/projects.ts`

## `/services`

- `src/app/services/page.tsx`
  - `src/components/button-link.tsx`
  - `src/components/contact-panel.tsx`
  - `src/components/process-steps.tsx`
  - `src/components/section-heading.tsx`
  - `src/content/services.ts`

## `/about`

- `src/app/about/page.tsx`
  - `src/components/button-link.tsx`
  - `src/components/contact-panel.tsx`
  - `src/components/project-image.tsx`
  - `src/components/section-heading.tsx`
  - `src/content/site.ts`

## `/resources`

- `src/app/resources/page.tsx`
  - `src/components/contact-panel.tsx`
  - `src/components/project-image.tsx`
  - `src/components/section-heading.tsx`
  - `src/content/catalogues.ts`
  - `src/content/services.ts`
  - `src/app/_route-helpers.tsx`

## Shared layout dependency tree

- `src/app/layout.tsx`
  - `src/components/site-header.tsx`
    - `src/components/logo.tsx`
    - `src/components/mobile-navigation.tsx`
    - `src/components/button-link.tsx`
    - `src/components/tracked-link.tsx`
    - `src/components/navigation.ts`
  - `src/components/site-footer.tsx`
    - `src/components/logo.tsx`
    - `src/components/placeholder-badge.tsx`
    - `src/components/tracked-link.tsx`
    - `src/components/navigation.ts`
  - `src/components/sticky-contact-bar.tsx`
  - `src/components/preview-indicator.tsx`
  - `src/app/globals.css`

