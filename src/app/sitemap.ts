import { MetadataRoute } from 'next';

/** Static guide slugs — no fs (Cloudflare Workers cannot readdir at runtime). */
const GUIDE_SLUGS = [
    'affordable-deep-cleaning-companies-sanford-fl',
    'airbnb-turnover-sla-sanford-fl',
    'apartment-deep-cleaning-sanford-fl',
    'best-house-cleaning-deals-discounts-sanford-fl',
    'best-house-cleaning-services-sanford-fl',
    'compare-house-cleaning-companies-sanford-fl-service-quality',
    'eco-friendly-house-cleaning-options-sanford-fl',
    'florida-humidity-deep-cleaning-sanford-waterfront-homes',
    'how-much-does-house-cleaning-cost-sanford-fl',
    'how-to-book-house-cleaner-sanford-fl',
    'how-to-book-professional-house-cleaner-sanford-fl',
    'how-to-book-professional-house-cleaner-sanford-fl-customer-reviews',
    'rough-vs-final-post-construction-cleaning-sanford-fl',
    'sanford-fl-house-cleaning-prices-packages',
    'sanford-fl-house-cleaning-service-providers-quality',
    'sanford-fl-move-out-cleaning-services-costs',
    'sanford-fl-weekly-biweekly-house-cleaning-providers',
    'top-rated-house-cleaning-companies-sanford-fl-reviews',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sanfordcleaning.com';

    const routes = [
        { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
        { url: '/house-cleaning', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/commercial-cleaning', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/deep-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/move-in-move-out-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/apartment-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/maintenance-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/carpet-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/window-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/pressure-washing', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/post-construction-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/airbnb-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/office-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/booking', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/custom-quote', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/faq', priority: 0.6, changeFrequency: 'monthly' as const },
        { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
        { url: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },
        { url: '/get-hired', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/guides', priority: 0.8, changeFrequency: 'monthly' as const },
        ...GUIDE_SLUGS.map((slug) => ({
            url: `/guides/${slug}`,
            priority: 0.7,
            changeFrequency: 'monthly' as const,
        })),
    ];

    return routes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
