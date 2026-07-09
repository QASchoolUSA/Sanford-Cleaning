import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/booking-success', '/get-hired-success', '/stripe-payment'],
        },
        sitemap: 'https://sanfordcleaning.com/sitemap.xml',
    };
}
