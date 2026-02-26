import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sanfordcleaning.com';

    // Route configuration to verify priorities and update frequencies
    const routes = [
        // Homepage
        { url: '', priority: 1.0, changeFrequency: 'weekly' as const },

        // Main Service Pages (High Priority)
        { url: '/house-cleaning', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/commercial-cleaning', priority: 0.9, changeFrequency: 'monthly' as const },
        { url: '/residential-cleaning', priority: 0.9, changeFrequency: 'monthly' as const },

        // Core Services
        { url: '/deep-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/move-in-move-out-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/apartment-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/maintenance-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },

        // Specialized Services
        { url: '/carpet-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/window-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/pressure-washing', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/post-construction-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/airbnb-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/office-cleaning', priority: 0.8, changeFrequency: 'monthly' as const },

        // Booking & Quotes
        { url: '/booking', priority: 0.8, changeFrequency: 'monthly' as const },
        { url: '/free-custom-quote', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/custom-quote', priority: 0.7, changeFrequency: 'monthly' as const },

        // Info & Legal
        { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
        { url: '/faq', priority: 0.6, changeFrequency: 'monthly' as const },
        { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
        { url: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' as const },

        // Employment
        { url: '/get-hired', priority: 0.7, changeFrequency: 'monthly' as const },

        // Dynamic Pages (Low Priority)
        { url: '/booking-success', priority: 0.1, changeFrequency: 'yearly' as const },
    ];

    // Dynamically include all /guides subdirectories
    const guideRoutes: { url: string; priority: number; changeFrequency: "monthly" }[] = [
        { url: '/guides', priority: 0.8, changeFrequency: 'monthly' }
    ];

    try {
        const guidesDir = path.join(process.cwd(), 'src/app/guides');
        if (fs.existsSync(guidesDir)) {
            const items = fs.readdirSync(guidesDir, { withFileTypes: true });
            for (const item of items) {
                if (item.isDirectory() && item.name !== 'layout.tsx' && item.name !== 'page.tsx') {
                    guideRoutes.push({
                        url: `/guides/${item.name}`,
                        priority: 0.7,
                        changeFrequency: 'monthly'
                    });
                }
            }
        }
    } catch (e) {
        console.error("Sitemap generation error reading guides:", e);
    }

    const allRoutes = [...routes, ...guideRoutes];

    return allRoutes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
