type OfferProps = {
    name: string;
    price?: string;
    description?: string;
};

type Props = {
    name: string;
    serviceType: string;
    description: string;
    url: string;
    image?: string;
    providerName?: string;
    providerImage?: string;
    areaServed?: string;
    offers?: OfferProps[];
};

export default function ServiceSchema({
    name,
    serviceType,
    description,
    url,
    image = 'https://sanfordcleaning.com/sanford-cleaning-homepage.webp',
    providerName = 'Sanford Cleaning',
    providerImage = 'https://sanfordcleaning.com/sanford-cleaning-homepage.webp',
    areaServed = 'Sanford, FL',
    offers = [],
}: Props) {
    const jsonLd: any = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name,
        serviceType,
        description,
        url,
        image,
        provider: {
            '@type': 'LocalBusiness',
            name: providerName,
            image: providerImage,
            priceRange: '$$',
        },
        areaServed: {
            '@type': 'City',
            name: areaServed,
        },
    };

    if (offers.length > 0) {
        jsonLd.hasOfferCatalog = {
            '@type': 'OfferCatalog',
            name: `${serviceType} Services`,
            itemListElement: offers.map((offer) => {
                const item: any = {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: offer.name,
                    },
                };
                if (offer.price) {
                    item.priceSpecification = {
                        '@type': 'UnitPriceSpecification',
                        price: offer.price,
                        priceCurrency: 'USD',
                        unitText: 'service',
                    };
                }
                if (offer.description) {
                    item.description = offer.description;
                }
                return item;
            }),
        };
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
