/**
 * Local JSON-LD validation for key SEO pages.
 * Parses embedded application/ld+json blocks and checks required fields.
 * Run after `pnpm build && pnpm start` (or against a base URL).
 *
 * Usage: BASE_URL=http://localhost:3000 pnpm validate:jsonld
 */
const BASE = process.env.BASE_URL || 'http://localhost:3000';

const PAGES = [
  '/',
  '/guides/how-much-does-house-cleaning-cost-sanford-fl',
  '/guides/sanford-fl-house-cleaning-prices-packages',
  '/guides/airbnb-turnover-sla-sanford-fl',
  '/guides/rough-vs-final-post-construction-cleaning-sanford-fl',
];

type Issue = { page: string; severity: 'error' | 'warn'; message: string };

function extractJsonLd(html: string): unknown[] {
  const blocks: unknown[] = [];
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html)) !== null) {
    const raw = match[1].trim();
    try {
      blocks.push(JSON.parse(raw));
    } catch {
      blocks.push({ __parseError: true, raw: raw.slice(0, 120) });
    }
  }
  return blocks;
}

function asArray(node: unknown): Record<string, unknown>[] {
  if (!node || typeof node !== 'object') return [];
  const obj = node as Record<string, unknown>;
  if (Array.isArray(obj['@graph'])) {
    return (obj['@graph'] as unknown[]).filter((n) => n && typeof n === 'object') as Record<
      string,
      unknown
    >[];
  }
  return [obj];
}

function validateNode(page: string, node: Record<string, unknown>, issues: Issue[]) {
  if (node.__parseError) {
    issues.push({ page, severity: 'error', message: `Invalid JSON-LD parse: ${node.raw}` });
    return;
  }
  const type = node['@type'];
  if (!type) {
    issues.push({ page, severity: 'error', message: 'Missing @type' });
    return;
  }
  const types = Array.isArray(type) ? type : [type];

  if (types.includes('Organization') || types.includes('ProfessionalService')) {
    if (!node.name) issues.push({ page, severity: 'error', message: `${types[0]} missing name` });
    if (!node.url) issues.push({ page, severity: 'error', message: `${types[0]} missing url` });
    if (!node.sameAs) {
      issues.push({ page, severity: 'warn', message: `${types[0]} missing sameAs` });
    } else if (Array.isArray(node.sameAs)) {
      for (const u of node.sameAs as string[]) {
        if (typeof u === 'string' && u.startsWith('REPLACE_WITH_')) {
          issues.push({ page, severity: 'error', message: `Placeholder sameAs emitted: ${u}` });
        }
      }
    }
  }

  if (types.includes('WebSite')) {
    if (!node.url) issues.push({ page, severity: 'error', message: 'WebSite missing url' });
    if (!node.publisher && !node.name) {
      issues.push({ page, severity: 'warn', message: 'WebSite missing publisher/name' });
    }
  }

  if (types.includes('FAQPage')) {
    const main = node.mainEntity;
    if (!Array.isArray(main) || main.length === 0) {
      issues.push({ page, severity: 'error', message: 'FAQPage missing mainEntity questions' });
    } else {
      for (const q of main as Record<string, unknown>[]) {
        if (!q.name || !(q.acceptedAnswer as Record<string, unknown>)?.text) {
          issues.push({ page, severity: 'error', message: 'FAQ question missing name or answer text' });
        }
      }
    }
  }

  if (types.includes('TechArticle') || types.includes('Article')) {
    if (!node.headline) issues.push({ page, severity: 'error', message: `${types[0]} missing headline` });
    if (!node.author) issues.push({ page, severity: 'warn', message: `${types[0]} missing author` });
    if (!node.publisher) issues.push({ page, severity: 'warn', message: `${types[0]} missing publisher` });
  }

  if (types.includes('BreadcrumbList')) {
    const items = node.itemListElement;
    if (!Array.isArray(items) || items.length < 2) {
      issues.push({ page, severity: 'warn', message: 'BreadcrumbList has fewer than 2 items' });
    }
  }
}

async function main() {
  const issues: Issue[] = [];
  const summary: { page: string; types: string[]; count: number }[] = [];

  for (const path of PAGES) {
    const url = `${BASE}${path}`;
    let html: string;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        issues.push({ page: path, severity: 'error', message: `HTTP ${res.status} for ${url}` });
        continue;
      }
      html = await res.text();
    } catch (e) {
      issues.push({
        page: path,
        severity: 'error',
        message: `Fetch failed: ${(e as Error).message}`,
      });
      continue;
    }

    const blocks = extractJsonLd(html);
    if (blocks.length === 0) {
      issues.push({ page: path, severity: 'error', message: 'No JSON-LD blocks found' });
      continue;
    }

    const types: string[] = [];
    for (const block of blocks) {
      for (const node of asArray(block)) {
        const t = node['@type'];
        if (typeof t === 'string') types.push(t);
        else if (Array.isArray(t)) types.push(...(t as string[]));
        validateNode(path, node, issues);
      }
    }
    summary.push({ page: path, types: [...new Set(types)], count: blocks.length });
  }

  console.log('=== JSON-LD Summary ===');
  for (const s of summary) {
    console.log(`${s.page}: ${s.count} block(s) → ${s.types.join(', ') || '(none)'}`);
  }

  const errors = issues.filter((i) => i.severity === 'error');
  const warns = issues.filter((i) => i.severity === 'warn');

  console.log('\n=== Warnings ===');
  if (warns.length === 0) console.log('(none)');
  else warns.forEach((w) => console.log(`[warn] ${w.page}: ${w.message}`));

  console.log('\n=== Errors ===');
  if (errors.length === 0) console.log('(none)');
  else errors.forEach((e) => console.log(`[error] ${e.page}: ${e.message}`));

  console.log(
    `\nResult: ${errors.length === 0 ? 'PASS' : 'FAIL'} (${errors.length} errors, ${warns.length} warnings)`
  );
  console.log(
    '\nNote: Google Rich Results Test on live URLs requires deploy/merge. Local checks cover syntax + required fields.'
  );

  process.exit(errors.length === 0 ? 0 : 1);
}

main();
