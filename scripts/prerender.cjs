const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/residential-cleaning',
  '/commercial-cleaning',
  '/free-custom-quote',
  '/deep-cleaning',
  '/carpet-cleaning',
  '/pressure-washing',
  '/window-cleaning',
  '/booking',
  '/get-hired',
  '/privacy-policy',
  '/terms-of-service',
  '/faq',
  '/post-construction-cleaning',
  '/move-in-move-out-cleaning',
];

const baseUrl = process.env.PRERENDER_BASE_URL || 'http://localhost:4173'; // Configurable base URL
const distDir = path.join(__dirname, '..', 'dist');

// Try to use Puppeteer to execute JavaScript and capture fully rendered HTML.
let puppeteer = null;
try {
  puppeteer = require('puppeteer');
} catch (e) {
  // Puppeteer not installed; we'll fall back to simple fetch
}

async function fetchPageContent(url, browser) {
  // Prefer browser-based rendering when available
  if (browser) {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0' });
    // Wait for app render signal or presence of key elements
    try {
      await Promise.race([
        page.evaluate(() => new Promise(resolve => {
          document.addEventListener('render-event', resolve, { once: true });
        })),
        page.waitForSelector('h1', { timeout: 8000 })
      ]);
    } catch (_) {
      // If neither condition occurs, proceed to capture content anyway
    }
    const html = await page.content();
    await page.close();
    return html;
  }

  // Fallback: basic fetch (no JS execution)
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.text();
}

async function prerender() {
  console.log('Starting pre-rendering process...');
  
  let browser = null;
  if (puppeteer) {
    browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  }

  for (const route of routes) {
    try {
      console.log(`Pre-rendering: ${route}`);
      
      const url = `${baseUrl}${route}`;
      const html = await fetchPageContent(url, browser);
      
      // Create directory structure if needed
      const routePath = route === '/' ? '/index' : route;
      const filePath = path.join(distDir, `${routePath}.html`);
      const dirPath = path.dirname(filePath);
      
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      
      // Write the pre-rendered HTML
      fs.writeFileSync(filePath, html);
      console.log(`✓ Pre-rendered: ${route} -> ${filePath}`);
      
    } catch (error) {
      console.error(`✗ Failed to pre-render ${route}:`, error.message);
    }
  }
  
  console.log('Pre-rendering complete!');

  if (browser) {
    await browser.close();
  }
}

if (require.main === module) {
  prerender().catch(console.error);
}

module.exports = prerender;