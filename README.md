# Juliet Ogbonna — Portfolio

Next.js 16 (App Router, Cache Components, Turbopack) · Tailwind CSS v4 · next-themes · Nodemailer

## Run locally
```bash
npm install
cp .env.example .env.local   # fill in SMTP_PASS
npm run dev                  # http://localhost:3000
```

## Pages
`/` home · `/about` (bio, services, education) · `/skills` · `/projects` · `/experience` · `/contact`

All content lives in **`src/lib/data.ts`** — edit text, skills, projects and links there.

## Contact form
Messages are sent by a Server Action (`src/app/actions/contact.ts`) to Juliet's inbox with the visitor's
email set as *Reply-To*, and the visitor gets an automatic thank-you. It needs a Gmail **App Password**
(Google Account → Security → 2-Step Verification → App passwords) in `SMTP_PASS`.

## Project screenshots
Device mockups load live, high-DPI captures of each site automatically (Microlink API, cached 30 days by
`next/image`). For pixel-perfect local images instead:
```bash
npx playwright install chromium
npm run capture      # writes public/projects/*.png — the site picks them up automatically
```

## Deploy to Vercel
Import the repo, add the variables from `.env.example` in *Project → Settings → Environment Variables*, deploy.

## Performance & SEO built in
Static prerendering of every page, self-hosted variable fonts (no layout shift), optimised AVIF/WebP images
with a preloaded hero, CSS-only animations that respect reduced-motion, Metadata API with Open Graph and
Twitter cards, generated OG image and icons, JSON-LD Person schema, sitemap.xml, robots.txt and web manifest.
