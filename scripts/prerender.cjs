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

const baseUrl = process.env.PRERENDER_BASE_URL || 'http://localhost:4173'; // Configurable base URL
const distDir = path.join(__dirname, '..', 'dist');

async function fetchPageContent(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    throw new Error(`Failed to fetch ${url}: ${error.message}`);
  }
}

async function prerender() {
  console.log('Starting pre-rendering process...');
  
  for (const route of routes) {
    try {
      console.log(`Pre-rendering: ${route}`);
      
      const url = `${baseUrl}${route}`;
      const html = await fetchPageContent(url);
      
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
}

if (require.main === module) {
  prerender().catch(console.error);
}

module.exports = prerender;