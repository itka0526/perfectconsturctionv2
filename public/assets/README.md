# Perfect Construction asset registry

All public media is replaceable under this single directory. Application code
must reference assets through `src/content/assets.ts`; do not scatter literal
paths through components.

The SVG files in `placeholders/` are preview-only layout aids. Each one is
visibly marked **REPLACE BEFORE PRODUCTION**, is marked `placeholder` in the
content registry, and must never be represented as a real project, product,
manufacturer logo, certificate, office, or team photograph.

## Replacement flow

1. Obtain the original file and written publication approval.
2. Crop project and product photography for the aspect ratio recorded in
   `assets.ts`; keep a high-resolution source outside the repository.
3. Export web photographs as WebP or AVIF and authorized logos as SVG or a
   transparent high-resolution PNG. Certificate previews need an optimized
   image; add a PDF only when download publication is authorized.
4. Place the file in its named category directory below and update only the
   central registry path, intrinsic dimensions, alternative text, and
   `verificationStatus`.
5. Run content validation and visually check subject cropping at all supported
   viewports.
6. Do not set an item to `verified` until the claim, asset, and permission are
   all approved. A production build rejects any remaining placeholder.

## Directory contract

```text
company/{logo,team,office}
manufacturers/{seohyun,fuji-precision,asia-fuji}
products/{passenger,home,cargo,hospital,panoramic,escalator,dumbwaiter,customization}
projects/{project-slug}
catalogs/{asia-fuji-passenger,fuji-precision-decoration,asia-fuji-escalator}
certificates/{certificate-slug}
homepage/
icons/
placeholders/
```

Manufacturer catalogue excerpts must be described as catalogue imagery, not
as completed Perfect Construction projects. Original catalogues, brochures,
and certificate scans live under `docs/discovery/source-assets/`; public assets
contain only the selected web previews approved for the current presentation.
