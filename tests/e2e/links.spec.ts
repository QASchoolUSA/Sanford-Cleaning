import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

function getRoutesFromSitemap(): string[] {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) return ['/'];
  const xml = fs.readFileSync(sitemapPath, 'utf-8');
  const locs = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map(m => m[1]);
  const routes = locs
    .map((url) => {
      try {
        const u = new URL(url);
        return u.pathname + (u.search || '');
      } catch {
        return url; // fallback if not an absolute URL
      }
    })
    .map((r) => (r.startsWith('/') ? r : `/${r}`));
  return Array.from(new Set(routes));
}

function normalizeHref(href: string, base: URL): URL | null {
  const trimmed = href.trim();
  if (!trimmed) return null;
  if (trimmed.startsWith('#')) return null;
  if (/^(mailto:|tel:|javascript:)/i.test(trimmed)) return null;
  let url: URL;
  try {
    if (/^https?:\/\//i.test(trimmed)) {
      url = new URL(trimmed);
    } else {
      url = new URL(trimmed, base);
    }
  } catch {
    return null;
  }
  return url;
}

function isSameOrigin(target: URL, base: URL): boolean {
  return target.origin === base.origin;
}

function stripHash(url: URL): string {
  return url.origin + url.pathname + (url.search || '');
}

test('all internal links across site respond OK', async ({ page }) => {
  const baseStr = (test.info().project.use.baseURL as string) ?? 'http://localhost:3000';
  const baseURL = new URL(baseStr);

  // Seed with sitemap routes
  const seedRoutes = getRoutesFromSitemap();
  const toVisit = new Set<string>(seedRoutes.map(r => new URL(r, baseURL).toString()));

  // Crawl each seed route and collect more internal links
  for (const route of seedRoutes) {
    const target = new URL(route, baseURL).toString();
    const response = await page.goto(target, { waitUntil: 'domcontentloaded' });
    expect(response?.ok(), `HTTP response not OK for seed route ${route}`).toBeTruthy();

    const hrefs: string[] = await page.$$eval('a[href]', (els) =>
      els.map((el) => (el as HTMLAnchorElement).getAttribute('href') || '').filter(Boolean)
    );

    for (const href of hrefs) {
      const url = normalizeHref(href, baseURL);
      if (!url) continue;
      if (!isSameOrigin(url, baseURL)) continue; // skip external links
      const normalized = stripHash(url);
      toVisit.add(normalized);
    }
  }

  // Deduped list of internal URLs to verify
  const urls = Array.from(toVisit);
  expect(urls.length, 'No internal links discovered').toBeGreaterThan(0);

  for (const absUrl of urls) {
    const response = await page.goto(absUrl, { waitUntil: 'domcontentloaded' });
    expect(response?.ok(), `Broken link detected: ${absUrl}`).toBeTruthy();

    // Basic content presence check
    const hasBody = await page.locator('body').count();
    expect(hasBody, `Missing <body> for ${absUrl}`).toBeGreaterThan(0);
  }
});