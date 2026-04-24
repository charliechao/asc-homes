# ASC Homes

Astro static site rebuild for ASC Homes.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static output is generated in `dist/`.

## Cloudflare Pages

Use these settings in Cloudflare Pages:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`

## Environment variables

Set this in Cloudflare Pages before enabling the forms:

- `PUBLIC_WEB3FORMS_ACCESS_KEY`
