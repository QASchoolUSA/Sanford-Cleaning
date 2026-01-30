import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sanfordcleaning.com';

    const routes = [
        '',
        '/house-cleaning',
        '/residential-cleaning',
        '/commercial-cleaning',
        '/move-in-move-out-cleaning',
        '/deep-cleaning',
        '/carpet-cleaning',
        '/window-cleaning',
        '/pressure-washing',
        '/post-construction-cleaning',
        '/office-cleaning',
        '/booking',
        '/free-custom-quote',
        '/about',
        '/contact',
        '/faq',
        '/privacy-policy',
        '/terms-of-service',
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
