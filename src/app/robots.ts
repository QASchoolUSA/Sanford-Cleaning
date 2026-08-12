import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/booking-success', '/get-hired-success'],
            },
            {
                userAgent: [
                    'GPTBot',
                    'ChatGPT-User',
                    'ClaudeBot',
                    'Claude-User',
                    'PerplexityBot',
                    'Google-Extended',
                    'Amazonbot',
                    'Applebot-Extended',
                ],
                allow: '/',
            },
        ],
        sitemap: 'https://sanfordcleaning.com/sitemap.xml',
        host: 'https://sanfordcleaning.com',
    };
}
