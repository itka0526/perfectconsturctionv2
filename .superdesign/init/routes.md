# Route map

All routes use the root layout in `src/app/layout.tsx`.

| URL | Entry file | Summary |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Editorial homepage with solutions, products, brands, process, timeline and projects. |
| `/products` | `src/app/products/page.tsx` | Product category index. |
| `/products/[slug]` | `src/app/products/[slug]/page.tsx` | Product details and related brands/projects. |
| `/products/customization` | `src/app/products/customization/page.tsx` | Cabin, door, control and finish options. |
| `/brands` | `src/app/brands/page.tsx` | Manufacturer portfolio. |
| `/brands/[slug]` | `src/app/brands/[slug]/page.tsx` | Manufacturer detail. |
| `/projects` | `src/app/projects/page.tsx` | Mongolian project index. |
| `/projects/[slug]` | `src/app/projects/[slug]/page.tsx` | Project case study. |
| `/services` | `src/app/services/page.tsx` | New-project work stages. |
| `/about` | `src/app/about/page.tsx` | Company story and capability. |
| `/about/certificates` | `src/app/about/certificates/page.tsx` | Publishable documents. |
| `/resources` | `src/app/resources/page.tsx` | Preparation checklist, catalogues and FAQ. |
| `/contact` | `src/app/contact/page.tsx` | Direct-contact channels and office details. |
| `/privacy` | `src/app/privacy/page.tsx` | Analytics and external-link disclosure. |
| `not-found` | `src/app/not-found.tsx` | Accessible 404 state. |

Dynamic product, brand and project routes are statically generated and return
`notFound()` for unknown or draft records.

