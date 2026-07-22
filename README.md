# Perfect Construction

Corporate website for Perfect Construction, a Mongolian elevator distributor and engineering partner. The launch locale is Mongolian and the content architecture is ready for a future, fully approved English locale.

## Stack

- Next.js 16 App Router
- React 19 and strict TypeScript
- Tailwind CSS 4 plus CSS custom-property design tokens
- pnpm on Node.js 24 LTS
- Vercel Analytics and Speed Insights
- Vitest, Playwright, and axe accessibility checks

There is no CMS, database, authentication, enquiry form, file upload, search, chat widget, or ecommerce flow. Conversion happens through direct telephone, email, Facebook, map, or meeting links.

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://127.0.0.1:3000`.

## Validation

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
```

Preview and local builds intentionally allow records marked `placeholder` and show a visible preview notice. A Vercel production build, or a build run with `ENFORCE_VERIFIED_CONTENT=true`, fails until every public claim, contact, asset, certificate, and project record passes the production content gate.

## Content and assets

Typed content lives in `src/content/`. Every public record includes a stable slug, draft state, verification status, Mongolian content, optional English content, assets, alternative text, and metadata.

All replaceable media lives under `public/assets/` and every runtime path is registered in `src/content/assets.ts`. Placeholder files are preview-only and must not be promoted to production. See `docs/implementation/content-decisions-2026-07-23.md` for the current confirmed and deferred content decisions.

Original discovery exports are preserved unchanged under `docs/discovery/`.

### Supplied asset inventory

The source files supplied on 2026-07-23 were copied without changing their
contents, renamed in lowercase kebab-case, and placed in separate descriptive
folders. Ten originals are retained under `docs/discovery/source-assets/`;
approved web assets live under matching folders in `public/assets/`.

The three approved manufacturer catalogues are public PDF downloads and also
have selected WebP preview pages. Company brochures remain discovery-only
because they contain legacy manufacturer, staffing, contact, and maintenance
copy. The authorization scan is published only as an optimized preview because
the source contains a document number, signature, and corporate seal.

| Supplied file | Canonical source path | Description and website use |
| --- | --- | --- |
| `ASIA-FUJI-PASSENGER.pdf` | `docs/discovery/source-assets/catalogues/asia-fuji-passenger/asia-fuji-passenger-elevator-catalogue.pdf` | 29-page, 5.28 MiB ASIA FUJI source catalogue covering passenger, panoramic and hospital elevators, cabin and landing-door options, controls, finishes, and civil-planning drawings. The PDF and selected neutral preview pages are public resources. |
| `FUJI-Precision-Decoration-Catalogue.pdf` | `docs/discovery/source-assets/catalogues/fuji-precision-decoration/fuji-precision-elevator-decoration-catalogue.pdf` | 40-page, 7.68 MiB FUJI Precision source catalogue covering business, luxury, customized, panoramic and home-elevator interiors, controls, doors, ceilings, floors, handrails, and escalator finishes. The PDF and selected preview pages are public resources. |
| `ESCALATOR.pdf` | `docs/discovery/source-assets/catalogues/asia-fuji-escalator/asia-fuji-escalator-moving-walk-catalogue.pdf` | 12-page, 8.95 MiB ASIA FUJI source catalogue covering escalators, moving walks, configurations, safety devices, layouts, and civil-planning drawings. The PDF and selected product preview pages are public resources. |
| `codex-clipboard-8604e9db-84d4-44f6-a614-82b4b4d28031.jpg` | `docs/discovery/source-assets/company/brochure-profile-products/perfect-construction-profile-products-mn.jpg` | Mongolian company overview and product brochure retained as source material. Its founding, staffing, manufacturer, and service claims still require client review and are not treated as approved website copy. |
| `codex-clipboard-835f3e3a-7bc9-4f86-a312-6641ed29fb76.jpg` | `docs/discovery/source-assets/company/brochure-services-contact/perfect-construction-services-contact-mn.jpg` | Mongolian workflow, engineering, maintenance, logo, address, email, and telephone brochure retained as source material. The supplied contact values are used in preview; maintenance and unsupported capability claims are not used. |
| `codex-clipboard-afaf774e-8805-4d88-9638-097becc5b5a2.jpg` | `docs/discovery/source-assets/certificates/asia-fuji-authorization-2026-2029/asia-fuji-mongolia-exclusive-agent-authorization-2026-2029.jpg` | Suzhou Asia Fuji Elevator Co., Ltd. appoints Perfect Construction International LLC as its exclusive agent in Mongolia for elevators, escalators, and moving walks. Valid from 2026-03-27 through 2029-03-27; an optimized preview is used on the certificate and ASIA FUJI pages. |
| `perfect-construction-mark.svg` | `docs/discovery/source-assets/company/logo/perfect-construction-mark-source.svg` | Supplied blue-and-green company mark. The public copy is used in preview; authorization plus clear-space and minimum-size rules remain production checks. |
| `officiing_zurag.jpg` | `docs/discovery/source-assets/company/office/perfect-construction-office-exterior-original.jpg` | 507×240 office-building exterior photograph with no people or GPS metadata. A metadata-free WebP is used as a compact About-page image without upscaling. |
| `fuji-precision-logo.svg` | `docs/discovery/source-assets/manufacturer-logos/fuji-precision/fuji-precision-logo-source.svg` | Supplied FUJI Precision logo used on brand cards. The logo does not by itself verify the manufacturer relationship or authorization status. |
| `asia-fuji-logo.svg` | `docs/discovery/source-assets/manufacturer-logos/asia-fuji/asia-fuji-logo-source.svg` | Supplied ASIA FUJI logo used with the separately published 2026–2029 authorization evidence. |

Only the selected catalogue excerpts and optimized authorization preview are
registered as public content. Catalogue imagery is identified as manufacturer
material rather than completed Mongolian project photography.
Cargo, dumbwaiter, SEOHYUN, FUJI Precision authorization, homepage hero, and
project-photo placeholders remain until matching approved evidence is supplied.
Contact-channel testing and ownership, logo-use rules, the exact map destination,
final project facts, founding year, installed count, and page-by-page metadata
approval also remain release blockers.

## Locales

`activeLocales` contains only `mn` at launch. English fields may be prepared in content records, but no `/en` route or language switch should be enabled until all required translations have been reviewed and approved together.

## Deployment

The intended host is Vercel with `https://perfectconstruction.org` as the canonical origin. Add and verify both the apex and `www` domains before DNS cutover; redirect `www` to the apex. Keep the previous host available during the post-cutover monitoring window.
