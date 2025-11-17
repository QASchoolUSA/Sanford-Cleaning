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
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sanford',
      addressRegion: 'FL',
      postalCode: '32771',
      addressCountry: 'US',
    },
    areaServed: [
      'Sanford, FL',
      'Lake Mary, FL',
      'Longwood, FL',
      'Altamonte Springs, FL',
    ],
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