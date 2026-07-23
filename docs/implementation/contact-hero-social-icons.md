# Contact hero social-icon composition

## Design source

- Superdesign project: `dafe489e-3c3e-42f2-bd4e-bf896ec95f0e`
- Draft: `4bf6c23b-92b3-4fa5-95ee-e8b936c4decd`
- Title: **OmniConnect Landing Page**

The reference uses branded communication icons in white tiles moving on large
continuous orbits. Perfect Construction adopts the floating-tile idea only.
The reference palette, type, full-screen composition, and large orbital paths
do not belong to the approved Architectural Editorial direction and are not
copied.

## Implementation

1. Register Facebook, Gmail, Messenger, and Viber SVG files in the central asset
   registry.
2. Place four non-interactive icon tiles around the contact-page hero sentence.
3. Keep the sentence above the decorative icons in the stacking order.
4. Clip all icon motion to the right-hand hero composition with
   `overflow: hidden`.
5. Use slow, low-amplitude CSS movement so the icons support the copy rather
   than distract from it.
6. Preserve the existing desktop editorial grid and stack the composition below
   the title at the mobile breakpoint.
7. Disable animation for `prefers-reduced-motion`.

## Acceptance checks

- All four SVG files load and remain decorative to assistive technology.
- No icon can create horizontal page overflow.
- Icons visibly move on ordinary motion settings and are static when reduced
  motion is requested.
- The copy remains readable above every icon at desktop and mobile widths.
- The composition remains clipped at its own boundary, including when an icon
  is intentionally positioned partly outside that boundary.
