# Extractable Superdesign components

## SiteHeader

- Source: `src/components/site-header.tsx`
- Category: layout
- Description: utility contact bar, company wordmark, desktop navigation, CTA
  and mobile menu.
- Extractable props: `activeItem` (string, default `"contact"`).
- Hardcoded: logo asset, Mongolian labels, Lucide icons, CSS classes.

## SiteFooter

- Source: `src/components/site-footer.tsx`
- Category: layout
- Description: brand statement, primary/secondary navigation and direct
  contact channels.
- Extractable props: none.
- Hardcoded: labels, logo, links and layout.

## Logo

- Source: `src/components/logo.tsx`
- Category: basic
- Description: bilingual Perfect Construction brand mark.
- Extractable props: `compact` and `inverse`.
- Hardcoded: approved logo file and company names.

## SectionHeading

- Source: `src/components/section-heading.tsx`
- Category: basic
- Description: editorial eyebrow, display title, description and optional CTA.
- Extractable props: none for reusable canvas extraction.
- Hardcoded: typography and spacing rules.

## ContactPanel

- Source: `src/components/contact-panel.tsx`
- Category: basic
- Description: direct-contact CTA with telephone, email, Facebook and map.
- Extractable props: none for reusable canvas extraction.
- Hardcoded: icons, channel labels and presentation.

## ProductCard

- Source: `src/components/product-card.tsx`
- Category: basic
- Description: product image, verification badge, title, copy and detail link.
- Extractable props: none.
- Hardcoded: card structure and image treatment.

