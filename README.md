# Youth Challenge Club website

A responsive one-page website starter for Youth Challenge Club, built with Next.js App Router, React, TypeScript, Tailwind CSS v4, and Lucide icons.

## Run locally

Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Styling approach

**Page styling lives in Tailwind utility classes in `app/page.tsx` and `app/layout.tsx`.** The `app/globals.css` file is intentionally minimal and contains only `@import "tailwindcss";`, which loads Tailwind's stylesheet and utilities. Do not add page styling or component selectors there; use Tailwind classes directly on the JSX elements.

For example, the hero heading can be edited here:

```tsx
<h1 className="font-serif text-5xl font-extrabold leading-[0.98] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.25rem]">
  A stronger future <em className="text-[#477052]">starts here.</em>
</h1>
```

- Typography: edit `font-*`, `text-*`, `leading-*`, and `tracking-*` classes.
- Spacing: edit `p-*`, `px-*`, `py-*`, `m-*`, `mt-*`, `gap-*`, and related classes.
- Colour: edit `bg-*`, `text-*`, `border-*`, and `from-*` / `to-*` classes.
- Responsive behaviour: edit `sm:`, `md:`, `lg:`, `xl:`, and `2xl:` variants.
- Interaction states: edit `hover:`, `focus-visible:`, `group-hover:`, and `group-open:` variants.

## Before publishing

1. Replace the illustrative stock photographs with Youth Challenge Club's own photos where possible, and confirm consent for any identifiable people shown.
2. Replace bracketed contact, service-area and registration placeholders with verified details.
3. Update the empty `mailto:` link to the organisation's official email address.
4. Review all programme descriptions to ensure they accurately reflect the organisation's current activities and capacity.
5. Add a real donation/payment flow only after choosing and configuring a suitable provider. The current site does not process payments.

## Production build

```bash
npm run build
npm run start
```
