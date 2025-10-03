const express = require('express');
const router = express.Router();

// Proxy endpoint for Geoapify autocomplete API
router.get('/autocomplete', async (req, res) => {
  try {
    const { text, limit = 10 } = req.query;
    
    if (!text || text.length < 3) {
      return res.json({ results: [] });
    }

    const apiKey = process.env.GEOAPIFY_API_KEY;
    
    if (!apiKey) {
      console.error('GEOAPIFY_API_KEY environment variable is not set');
      return res.status(500).json({ error: 'Geocoding service configuration error' });
    }
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(text)}&limit=${limit}&apiKey=${apiKey}&filter=countrycode:us&format=json`;

    console.log('Proxying Geoapify request:', url);

    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('Geoapify API error:', response.status, response.statusText);
      return res.status(response.status).json({ error: 'Geocoding service error' });
    }

    const data = await response.json();
    console.log('Geoapify response:', data);

    // Filter out country-level results and keep only specific addresses
    const filteredResults = data.results?.filter(result => {
      // Keep results that have specific address components (house number, street, or city)
      // Don't filter based on "United States" text since we'll clean it up later
      return result.housenumber || result.street || result.city;
    }).map(result => {
      // Clean up the formatted address by removing country references
      if (result.formatted) {
        result.formatted = result.formatted
          .replace(/, United States of America$/, '')
          .replace(/, United States$/, '')
          .replace(/, USA$/, '')
          .trim();
      }
      return result;
    }).slice(0, 5) || [];

    res.json({ results: filteredResults });
  } catch (error) {
    console.error('Geocoding proxy error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;