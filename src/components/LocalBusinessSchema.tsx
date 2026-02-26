type Props = {
  id?: string;
  name?: string;
  url?: string;
  telephone?: string;
  image?: string;
  priceRange?: string;
};

export default function LocalBusinessSchema({
  id = 'https://sanfordcleaning.com/#localbusiness',
  name = 'Sanford Cleaning',
  url = 'https://sanfordcleaning.com',
  telephone = '(321) 236-0618',
  image = 'https://sanfordcleaning.com/sanford-cleaning-homepage.webp',
  priceRange = '$$',
}: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': id,
    name,
    url,
    image,
    telephone,
    priceRange,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.80286,
      longitude: -81.27312,
    },
    hasMap: 'https://www.google.com/maps/place/Sanford,+FL+32771',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '137',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Verified Customer' },
        datePublished: '2023-11-15',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Sanford Cleaning did an amazing job on our move-out clean. Highly recommend their professional team!',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Local Business Owner' },
        datePublished: '2024-01-20',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Reliable office cleaning service in Sanford. They always leave our workspace spotless.',
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sanford',
      addressRegion: 'FL',
      postalCode: '32771',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: 'Sanford', sameAs: 'https://en.wikipedia.org/wiki/Sanford,_Florida' },
      { '@type': 'City', name: 'Lake Mary', sameAs: 'https://en.wikipedia.org/wiki/Lake_Mary,_Florida' },
      { '@type': 'City', name: 'Longwood' },
      { '@type': 'City', name: 'Altamonte Springs' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cleaning Services in Sanford, FL',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Move-In/Move-Out Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Apartment Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Window Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deep Cleaning' } }
      ]
    },
    description: 'Top-rated professional cleaning company in Sanford, FL. We offer move out cleaning, apartment cleaning, office cleaning, and deep cleaning services.',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '16:00',
      },
    ],
    sameAs: ['https://sanfordcleaning.com'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}