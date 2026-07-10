type Props = {
  includeProfessionalService?: boolean;
  includeSearchAction?: boolean;
};

const ORGANIZATION_ID = 'https://sanfordcleaning.com/#organization';
const WEBSITE_ID = 'https://sanfordcleaning.com/#website';
const PROFESSIONAL_SERVICE_ID = 'https://sanfordcleaning.com/#professionalservice';

/** Verified social/map profiles. Add BBB/Yelp/LinkedIn/Angi URLs when verified (see docs/seo-aeo-geo-blueprint.md). */
const SAME_AS = [
  'https://www.facebook.com/profile.php?id=61579618588193',
  'https://www.instagram.com/sanfordcleaning',
  'https://www.google.com/maps/place/Sanford,+FL+32771',
];

/** Placeholders for ops — do not emit into JSON-LD until URLs are real. */
export const SAME_AS_PLACEHOLDERS = [
  'REPLACE_WITH_BBB_PROFILE_URL',
  'REPLACE_WITH_YELP_PROFILE_URL',
  'REPLACE_WITH_LINKEDIN_COMPANY_URL',
  'REPLACE_WITH_ANGI_OR_HOMEADVISOR_URL',
] as const;

const CORE_SERVICE_MENTIONS = [
  { '@type': 'Service', name: 'House Cleaning', url: 'https://sanfordcleaning.com/house-cleaning' },
  { '@type': 'Service', name: 'Apartment Cleaning', url: 'https://sanfordcleaning.com/apartment-cleaning' },
  { '@type': 'Service', name: 'Move-Out Cleaning', url: 'https://sanfordcleaning.com/move-in-move-out-cleaning' },
  { '@type': 'Service', name: 'Airbnb Cleaning', url: 'https://sanfordcleaning.com/airbnb-cleaning' },
  { '@type': 'Service', name: 'Commercial Cleaning', url: 'https://sanfordcleaning.com/commercial-cleaning' },
  { '@type': 'Service', name: 'Office Cleaning', url: 'https://sanfordcleaning.com/office-cleaning' },
  { '@type': 'Service', name: 'Post-Construction Cleaning', url: 'https://sanfordcleaning.com/post-construction-cleaning' },
  { '@type': 'Service', name: 'Deep Cleaning', url: 'https://sanfordcleaning.com/deep-cleaning' },
];

const AREA_SERVED = [
  { '@type': 'City', name: 'Sanford', sameAs: 'https://en.wikipedia.org/wiki/Sanford,_Florida' },
  { '@type': 'City', name: 'Lake Mary', sameAs: 'https://en.wikipedia.org/wiki/Lake_Mary,_Florida' },
  { '@type': 'City', name: 'Longwood' },
  { '@type': 'City', name: 'Heathrow' },
  { '@type': 'City', name: 'Altamonte Springs' },
  { '@type': 'City', name: 'Winter Springs' },
  { '@type': 'City', name: 'DeBary' },
  { '@type': 'City', name: 'Deltona' },
  { '@type': 'City', name: 'Casselberry' },
  { '@type': 'City', name: 'Oviedo' },
  { '@type': 'City', name: 'Winter Park' },
];

/**
 * Phase 4 entity graph: Organization + WebSite + ProfessionalService
 * with about/mentions optimized for Sanford Cleaning core entities.
 */
export default function EntityGraphSchema({
  includeProfessionalService = true,
  includeSearchAction = true,
}: Props) {
  const organization = {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: 'Sanford Cleaning',
    alternateName: ['Sanford Cleaning Services', 'Topaz West LLC'],
    url: 'https://sanfordcleaning.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://sanfordcleaning.com/sanford-cleaning-logo.png',
      width: 300,
      height: 300,
    },
    image: 'https://sanfordcleaning.com/sanford-cleaning-homepage.webp',
    description:
      'Professional house cleaning, apartment cleaning, move-out cleaning, Airbnb cleaning, commercial cleaning, and post-construction cleaning in Sanford, FL.',
    telephone: '(321) 236-0618',
    email: 'info@sanfordcleaning.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sanford',
      addressRegion: 'FL',
      postalCode: '32771',
      addressCountry: 'US',
    },
    sameAs: SAME_AS,
    about: [
      {
        '@type': 'Thing',
        name: 'Professional Cleaning Services in Sanford, FL',
        description: 'Residential and commercial cleaning services for Sanford and Seminole County.',
      },
      {
        '@type': 'City',
        name: 'Sanford',
        sameAs: 'https://en.wikipedia.org/wiki/Sanford,_Florida',
      },
    ],
    mentions: CORE_SERVICE_MENTIONS,
  };

  const website: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: 'https://sanfordcleaning.com',
    name: 'Sanford Cleaning',
    alternateName: 'Sanford Cleaning Services',
    description: 'Professional cleaning services in Sanford, FL for homeowners, property managers, and businesses.',
    publisher: { '@id': ORGANIZATION_ID },
    about: {
      '@type': 'Thing',
      name: 'Cleaning Services in Sanford, FL',
    },
    mentions: CORE_SERVICE_MENTIONS.slice(0, 5),
  };

  if (includeSearchAction) {
    website.potentialAction = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sanfordcleaning.com/guides?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    };
  }

  const professionalService = {
    '@type': 'ProfessionalService',
    '@id': PROFESSIONAL_SERVICE_ID,
    name: 'Sanford Cleaning',
    url: 'https://sanfordcleaning.com',
    image: 'https://sanfordcleaning.com/sanford-cleaning-homepage.webp',
    telephone: '(321) 236-0618',
    priceRange: '$$',
    description:
      'Bonded and insured cleaning company offering house cleaning, apartment cleaning, turnover cleaning, move-out cleaning, post-construction cleaning, Airbnb cleaning, commercial cleaning, office cleaning, and restaurant cleaning in Sanford, FL.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sanford',
      addressRegion: 'FL',
      postalCode: '32771',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.80286,
      longitude: -81.27312,
    },
    areaServed: AREA_SERVED,
    serviceType: [
      'House Cleaning',
      'Apartment Cleaning',
      'Turnover Cleaning',
      'Move Out Cleaning',
      'Post Construction Cleaning',
      'Airbnb Cleaning',
      'Commercial Cleaning',
      'Office Cleaning',
      'Restaurant Cleaning',
    ],
    about: [
      { '@type': 'Thing', name: 'House Cleaning' },
      { '@type': 'Thing', name: 'Apartment Cleaning' },
      { '@type': 'Thing', name: 'Turnover Cleaning' },
      { '@type': 'Thing', name: 'Move Out Cleaning' },
      { '@type': 'Thing', name: 'Post Construction Cleaning' },
      { '@type': 'Thing', name: 'Airbnb Cleaning' },
      { '@type': 'Thing', name: 'Commercial Cleaning' },
      { '@type': 'Thing', name: 'Office Cleaning' },
      { '@type': 'Thing', name: 'Restaurant Cleaning' },
    ],
    mentions: [
      { '@type': 'Audience', audienceType: 'Homeowners' },
      { '@type': 'Audience', audienceType: 'Apartment Owners' },
      { '@type': 'Audience', audienceType: 'Property Managers' },
      { '@type': 'Audience', audienceType: 'Office Business Owners' },
      { '@type': 'Audience', audienceType: 'Restaurant and Cafe Owners' },
      { '@type': 'Audience', audienceType: 'Airbnb Hosts' },
    ],
    parentOrganization: { '@id': ORGANIZATION_ID },
    sameAs: SAME_AS,
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cleaning Services in Sanford, FL',
      itemListElement: CORE_SERVICE_MENTIONS.map((service) => ({
        '@type': 'Offer',
        itemOffered: service,
      })),
    },
  };

  const graph = [organization, website];
  if (includeProfessionalService) {
    graph.push(professionalService);
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <script
      id="entity-graph-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
