import { siteFacts } from '@/lib/siteFacts';

type Props = {
  id?: string;
  name?: string;
  url?: string;
  telephone?: string;
  image?: string;
  priceRange?: string;
};

const SERVICE_AREAS = [
  { '@type': 'City', name: 'Sanford', sameAs: 'https://en.wikipedia.org/wiki/Sanford,_Florida' },
  { '@type': 'City', name: 'Lake Mary', sameAs: 'https://en.wikipedia.org/wiki/Lake_Mary,_Florida' },
  { '@type': 'City', name: 'Heathrow' },
  { '@type': 'City', name: 'Longwood' },
  { '@type': 'City', name: 'Altamonte Springs' },
  { '@type': 'City', name: 'Winter Springs' },
  { '@type': 'City', name: 'DeBary' },
  { '@type': 'City', name: 'Deltona' },
  { '@type': 'City', name: 'Casselberry' },
  { '@type': 'City', name: 'Oviedo' },
  { '@type': 'City', name: 'Winter Park' },
];


export default function LocalBusinessSchema({
  id = `${siteFacts.url}/#localbusiness`,
  name = siteFacts.brandName,
  url = siteFacts.url,
  telephone = siteFacts.phone.e164,
  image = 'https://sanfordcleaning.com/sanford-cleaning-homepage.webp',
  priceRange = '$$',
}: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': id,
    name,
    legalName: siteFacts.legalName,
    url,
    image,
    telephone,
    email: siteFacts.email,
    priceRange,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.80286,
      longitude: -81.27312,
    },
    hasMap: 'https://www.google.com/maps/place/Sanford,+FL+32771',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteFacts.serviceAreaPolicy.locality,
      addressRegion: siteFacts.serviceAreaPolicy.region,
      postalCode: siteFacts.serviceAreaPolicy.postalCode,
      addressCountry: siteFacts.serviceAreaPolicy.country,
    },
    areaServed: SERVICE_AREAS,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cleaning Services in Sanford, FL',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'House Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maid Service' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Move-In/Move-Out Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Apartment Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restaurant Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Window Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Deep Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Airbnb Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Post-Construction Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Maintenance Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Turnover Cleaning' } },
      ],
    },
    description: `${siteFacts.brandName} provides professional move-out, apartment, office, and deep cleaning services. ${siteFacts.serviceAreaPolicy.description}`,
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
    sameAs: siteFacts.sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
