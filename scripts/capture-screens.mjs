// Captures crisp laptop / tablet / phone screenshots of every project into public/projects.
// Usage:  npx playwright install chromium   (once)
//         npm run capture
// When these PNGs exist, the site uses them instead of the live Microlink captures.
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const projects = [
  { slug: "mater-christi", url: "https://materchristicentre.com/" },
  { slug: "nova-hairs", url: "https://nova-hairs.vercel.app/" },
  { slug: "dev-portfolio", url: "https://dev-portfolio-quyw-gb51m2ndc-juliet-ogbonnas-projects.vercel.app/" },
];
const devices = {
  laptop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5 },
  tablet: { viewport: { width: 820, height: 1180 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  mobile: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true },
};

await mkdir("public/projects", { recursive: true });
const browser = await chromium.launch();
for (const p of projects) {
  for (const [name, opts] of Object.entries(devices)) {
    const ctx = await browser.newContext(opts);
    const page = await ctx.newPage();
    await page.goto(p.url, { waitUntil: "networkidle", timeout: 60000 }).catch(() => {});
    await page.waitForTimeout(2500);
    await page.screenshot({ path: `public/projects/${p.slug}-${name}.png` });
    console.log("✓", p.slug, name);
    await ctx.close();
  }
}
await browser.close();
