import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';
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
    // Deduplicate and ensure leading slash
    .map((r) => (r.startsWith('/') ? r : `/${r}`));
  return Array.from(new Set(routes));
}

const routes = getRoutesFromSitemap();

test.describe('Sitemap pages open', () => {
  for (const route of routes) {
    test(`opens ${route}`, async ({ page }: { page: Page }) => {
      const base = test.info().project.use.baseURL ?? 'http://localhost:3000';
      const target = new URL(route, base).toString();
      const response = await page.goto(target, { waitUntil: 'domcontentloaded' });
      expect(response?.ok(), `HTTP response not OK for ${route}`).toBeTruthy();
      const hasMain = await page.locator('main').count();
      expect(hasMain, `Missing <main> element on ${route}`).toBeGreaterThan(0);
    });
  }
});

// Smoke test for booking success with paid=stripe param
test('booking success hides payment when paid=stripe', async ({ page }: { page: Page }) => {
  const base = test.info().project.use.baseURL ?? 'http://localhost:3000';
  const target = new URL('/booking-success?paid=stripe', base).toString();
  const response = await page.goto(target, { waitUntil: 'domcontentloaded' });
  expect(response?.ok(), 'HTTP response not OK for booking-success').toBeTruthy();
  // Heading inside payments section should not be visible when paid via Stripe
  await expect(page.getByRole('heading', { name: 'Choose Your Payment Method' })).toBeHidden();
});