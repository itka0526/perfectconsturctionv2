# Perfect Construction implementation requirements

## Approved product and visual direction

The implementation source of truth is **Architectural Editorial** (direction
2): real Mongolian project photography, generous whitespace, editorial type,
deep navy/indigo, steel neutrals, white, and limited green accents. Manufacturer
brands support the Perfect Construction identity; they do not replace it.

`public/og.png` is the approved direction-specific social card. Preserve that
file until the client approves a replacement containing final verified identity
and imagery.

## Runtime architecture

- Native Next.js 16 App Router, React 19, strict TypeScript, Node.js 24 LTS, and
  pnpm with a committed lockfile.
- Server Components by default. Client Components are limited to navigation,
  galleries, anonymous analytics events, and browser-only behavior.
- Tailwind CSS plus CSS custom-property design tokens. No database, CMS,
  authentication, forms, uploads, ecommerce, or remote HTML rendering.
- Mongolian is the only active locale at launch. Content models accept optional
  English values, but `/en` routes and a locale switch must remain disabled.
- Local, typed content in `src/content/` is the single source for products,
  manufacturers, projects, contacts, timelines, certificates, and metadata.
- Public media lives under `public/assets/`; paths and intrinsic dimensions are
  registered centrally in `src/content/assets.ts`.
- The canonical origin is `https://perfectconstruction.org`; requests for
  `www.perfectconstruction.org` permanently redirect to the apex.

## Rendering, discovery, and navigation

- Each public route has one meaningful H1, route metadata, a canonical URL, and
  appropriate breadcrumb/structured-data support.
- Dynamic product, brand, and project routes are generated only for non-draft
  records; unknown or draft slugs return `notFound()`.
- `sitemap.ts` lists every static public route and each non-draft dynamic record.
- Vercel preview deployments return a `robots.txt` that disallows crawling;
  production allows crawling and publishes the canonical sitemap.
- Existing underscore-style product paths and documented legacy sections use
  permanent 308 redirects from the exported mapping in `next.config.ts`.
- Direct conversion paths are telephone, email, Facebook, maps/office, and a
  meeting. The site intentionally contains no enquiry or quotation form.

## Preview and production content gate

Preview deployments may show content records and SVG assets visibly labelled as
placeholders. `warnAboutUnverifiedContent()` runs whenever Next.js loads the
project configuration.

The validator reports every public non-draft record, asset, contact, address,
proof metric, timeline claim, or certificate authorization that remains
unverified. The report is informational: it does not stop `dev`, `build`, or
`start`, and it does not change the command exit code.

## Security and privacy

- The static CSP defaults to same-origin content and denies objects, framing,
  unrelated browser features, and external form submissions.
- Inline Next.js bootstrap/style output is allowed because the site is
  statically rendered without per-request nonces; development-only evaluation
  is enabled only for the Next.js development runtime.
- Vercel Web Analytics and Speed Insights script/connect origins are allowlisted.
- Responses include strict referrer, MIME sniffing, frame, HSTS, and restrictive
  permissions headers.
- Analytics events contain only event categories for phone, email, Facebook,
  map, brand, product, and project clicks. Never include a phone number, email
  address, URL query containing client details, or any other personal data in an
  event property.

## Verification commands

```text
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
node scripts/check-public-assets.mjs
```

Playwright covers public navigation, direct-contact links, mobile navigation,
representative dynamic records, 404 behavior, legacy redirects, WCAG Axe scans,
and visual baselines at 390×844, 768×1024, 1024×768, and 1440×1000. Generate or
update screenshot baselines only after an intentional, client-approved UI
change.

## Release constraints

- Do not attach the production domain or change DNS during implementation.
- Add and verify both apex and `www` domains on Vercel before cutover; apex stays
  canonical and `www` redirects.
- Retain the previous host for at least seven days after cutover.
- Roll back a launch-blocking release by restoring the previous DNS target.
- Production acceptance still requires real approved projects, working contact
  channels, manufacturer authorization evidence, final Mongolian review, and a
  successful enforced-content build.
