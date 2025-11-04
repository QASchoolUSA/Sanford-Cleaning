export default function Head() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://sanfordcleaning.com/#organization',
    name: 'Sanford Cleaning',
    url: 'https://sanfordcleaning.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://sanfordcleaning.com/sanford-cleaning-logo.png',
      width: 300,
      height: 300,
    },
    image: 'https://sanfordcleaning.com/sanford-cleaning-logo.png',
    description: 'Professional residential and commercial cleaning in Sanford, FL.',
    sameAs: ['https://sanfordcleaning.com'],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://sanfordcleaning.com/#website',
    url: 'https://sanfordcleaning.com',
    name: 'Sanford Cleaning',
    alternateName: 'Sanford Cleaning Services',
    publisher: {
      '@type': 'Organization',
      '@id': 'https://sanfordcleaning.com/#organization',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <meta name="msvalidate.01" content="7A3D763C07E2034E0C4C57B811BBE928" />
    </>
  );
}