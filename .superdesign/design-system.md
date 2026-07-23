# Perfect Construction — design system

## Product context

Perfect Construction is a Mongolian elevator distributor and engineering
partner. The website supports experienced construction decision-makers who
need project-specific elevator selection, manufacturer context, completed-work
evidence and direct contact. The conversion model is telephone, email,
Facebook, map and meeting—not a web form.

## Visual direction

Architectural Editorial: a restrained engineering site with large editorial
headlines, generous white space, squared geometry and practical information.
Perfect Construction remains primary; manufacturer brands are supporting
evidence.

## Brand palette

- Ink: `#071d33`
- Navy: `#0d2a47`
- Steel body text: `#40576e`
- Muted text: `#5e6d7a`
- Accent green: `#3f876f`
- Dark green: `#2f6957`
- Pale green: `#dfece7`
- Logo blue: `#2e3094`
- Logo green: `#027a3d`
- Paper: `#ffffff`
- Warm paper: `#f5f4ef`
- Cool paper: `#f1f4f5`
- Light line: `#d6dde2`
- Dark line: `#31475c`

Do not introduce gradients, neon colors, purple UI surfaces or rounded SaaS
cards. Use the supplied logo and social icons exactly.

## Typography

- Display: Cormorant Garamond, weights 500–700, tight tracking and compact
  leading.
- Interface/body: Manrope, regular through 700.
- Mongolian Cyrillic copy must stay readable; do not force uppercase for body
  text.
- Eyebrows use small uppercase Manrope with generous tracking and a short green
  rule.

## Layout

- Maximum shell width: 1280px.
- Page gutters: `clamp(1.25rem, 3.5vw, 3rem)`.
- Desktop uses a 12-column editorial grid.
- Main breakpoint: 900px.
- Hero: seven columns for the title and four columns for supporting content,
  with one-column separation.
- Mobile stacks content in reading order and keeps 44px minimum targets.
- Most surfaces are square; use circular geometry only for icons and approved
  brand marks.

## Spacing

Base scale: 4, 8, 12, 16, 24, 32, 48 and 64px. Section padding uses
`clamp(4rem, 6vw, 6rem)`. Prefer clear, intentional gaps to decorative dividers.

## Motion

- Use slow, low-amplitude floating motion for decorative social icons.
- Each icon can have a distinct delay and 5–8 second duration.
- Movement should be subtle (roughly 6–12px) and must never disturb text
  readability.
- Decorative movement stops when `prefers-reduced-motion: reduce`.
- Decorative icons are `aria-hidden` and non-interactive.
- Clip animation at the containing hero panel so icons never create page
  overflow.

## Contact hero pattern

Keep the current two-column contact hero and its Mongolian copy. The supporting
sentence sits in a bounded right-side composition. Approved Facebook, Gmail,
Messenger and Viber SVG assets float around—not over—the sentence. Icons use
small white or warm-paper tiles with subtle borders/shadows, while preserving
their supplied brand artwork. The text remains the visual anchor and has a
higher stacking level. On mobile, reduce icon count/size and keep every icon
inside the same clipped panel.

