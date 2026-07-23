# Theme and design tokens

## Compact token summary

- Framework: Next.js App Router with React 19.
- Styling: global CSS with Tailwind CSS v4 token registration; custom semantic
  components rather than a component framework.
- Body typeface: Manrope (`--font-body`).
- Display typeface: Cormorant Garamond (`--font-display`, weights 500–700).
- Primary ink: `#071d33`; secondary navy: `#0d2a47`.
- Body steel: `#40576e`; muted: `#5e6d7a`.
- Accent green: `#3f876f`; dark green: `#2f6957`; pale green: `#dfece7`.
- Company logo colors: blue `#2e3094`, green `#027a3d`.
- Surfaces: white `#ffffff`, warm paper `#f5f4ef`, cool paper `#f1f4f5`.
- Lines: `#d6dde2` and dark `#31475c`.
- Shadow: `0 24px 64px rgb(7 29 51 / 10%)`.
- Maximum shell: 1280px.
- Spacing scale: 4, 8, 12, 16, 24, 32, 48 and 64px.
- Responsive layout breakpoint: desktop arrangements above 900px; mobile
  stacking at 900px and below.
- Motion: restrained 180ms transitions; respect `prefers-reduced-motion`.
- Corners: mostly square editorial surfaces; circular only for icon marks.

## Raw token source

```css
@import "tailwindcss";

:root {
  --ink: #071d33;
  --navy: #0d2a47;
  --steel: #40576e;
  --steel-light: #566b7d;
  --green: #3f876f;
  --green-dark: #2f6957;
  --green-pale: #dfece7;
  --logo-blue: #2e3094;
  --logo-green: #027a3d;
  --paper: #ffffff;
  --paper-warm: #f5f4ef;
  --paper-cool: #f1f4f5;
  --line: #d6dde2;
  --line-dark: #31475c;
  --text: #142a3d;
  --muted: #5e6d7a;
  --shadow: 0 24px 64px rgb(7 29 51 / 10%);
  --shell: 1280px;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-7: 3rem;
  --space-8: 4rem;
  --gutter: clamp(1.25rem, 3.5vw, 3rem);
  --section-space: clamp(4rem, 6vw, 6rem);
  --section-heading-space: clamp(2.5rem, 4vw, 4rem);
  --content-gap: clamp(1.5rem, 3vw, 3rem);
  --layout-gap: clamp(2rem, 5vw, 5rem);
  --cluster-gap: clamp(1rem, 2vw, 2rem);
  --grid-gap: clamp(1rem, 2vw, 2rem);
  --card-space: clamp(1.25rem, 2.25vw, 2rem);
  --feature-space: clamp(2rem, 4vw, 3.5rem);
  --panel-space: clamp(2rem, 5vw, 5rem);
  --font-sans: var(--font-body), "Arial", sans-serif;
  --font-serif: var(--font-display), "Georgia", serif;
}

@theme inline {
  --color-background: var(--paper);
  --color-foreground: var(--text);
  --font-sans: var(--font-body);
  --font-serif: var(--font-display);
}

.shell {
  width: min(calc(100% - (var(--gutter) * 2)), var(--shell));
  margin-inline: auto;
}

.section {
  padding-block: var(--section-space);
}

.page-hero {
  position: relative;
  padding-block: calc(var(--section-space) - 1rem);
  overflow: hidden;
}

.page-hero__grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  align-items: end;
  gap: var(--grid-gap);
}

.page-hero__grid > :first-child {
  grid-column: 1 / span 7;
}

.page-hero__grid > :last-child:not(:first-child) {
  grid-column: 9 / -1;
}

.display {
  max-width: 12ch;
  margin-bottom: var(--space-5);
  font-family: var(--font-serif);
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 600;
  letter-spacing: -0.045em;
  line-height: 0.88;
}

.lede {
  max-width: 63ch;
  margin-bottom: 0;
  color: var(--steel);
  font-size: clamp(1rem, 1.5vw, 1.25rem);
  line-height: 1.7;
}
```

The complete current stylesheet remains the source of truth at
`src/app/globals.css`.

