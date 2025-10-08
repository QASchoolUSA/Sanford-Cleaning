const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const routes = [
  '/',
  '/residential-cleaning',
  '/commercial-cleaning',
  '/free-custom-quote',
  '/deep-cleaning',
  '/booking',
  '/get-hired',
  '/privacy-policy',
  '/terms-of-service',
  '/faq',
  '/post-construction-cleaning',
  '/move-in-move-out-cleaning',
];

const baseUrl = 'http://localhost:4173'; // Vite preview server
const distDir = path.join(__dirname, '..', 'dist');

async function prerender() {
  console.log('Starting pre-rendering process...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  for (const route of routes) {
    try {
      console.log(`Pre-rendering: ${route}`);
      
      await page.goto(`${baseUrl}${route}`, {
        waitUntil: 'networkidle2',
        timeout: 10000
      });
      
      // Wait for React to render using a simple delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Get the rendered HTML
      const html = await page.content();
      
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
  
  await browser.close();
  console.log('Pre-rendering complete!');
}

if (require.main === module) {
  prerender().catch(console.error);
}

module.exports = prerender;