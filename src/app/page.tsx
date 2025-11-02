import Script from 'next/script';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'House Cleaning Services Sanford, FL | Sanford Cleaning',
  description:
    "Top-rated house and office cleaning in Sanford, FL. Get a free instant quote and book in 60 seconds for a spotless space.",
  alternates: {
    canonical: 'https://sanfordcleaning.com',
  },
  openGraph: {
    title:
      'Sanford Cleaning | Top-Rated House & Commercial Cleaning in Sanford, FL',
    description:
      "Get a sparkling clean house or office with Sanford Cleaning's top-rated services. We offer reliable residential, commercial, and deep cleaning in Sanford, FL. Book online in 60 seconds!",
    type: 'website',
    url: 'https://sanfordcleaning.com',
    siteName: 'Sanford Cleaning',
    images: [
      {
        url: 'https://sanfordcleaning.com/sanford-cleaning-homepage.webp',
        width: 1200,
        height: 630,
        alt: 'Sanford Cleaning homepage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanford Cleaning | #1 Rated Cleaning Service in Sanford, FL',
    description:
      "Sanford's #1 rated cleaning service for house & office. Get an instant, free quote online and book in 60 seconds!",
    images: ['https://sanfordcleaning.com/sanford-cleaning-homepage.webp'],
  },
};

export default function HomePage() {
  const jsonLd = `[
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://sanfordcleaning.com/#website",
      "url": "https://sanfordcleaning.com",
      "name": "Sanford Cleaning",
      "alternateName": "Sanford Cleaning Services",
      "description": "Professional cleaning services in Sanford, FL",
      "publisher": {
        "@type": "Organization",
        "@id": "https://sanfordcleaning.com/#organization"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://sanfordcleaning.com/#organization",
      "name": "Sanford Cleaning",
      "alternateName": "Sanford Cleaning Services",
      "url": "https://sanfordcleaning.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sanfordcleaning.com/sanford-cleaning-logo.png",
        "width": 300,
        "height": 300
      },
      "image": "https://sanfordcleaning.com/sanford-cleaning-logo.png",
      "description": "Professional residential and commercial cleaning services in Sanford, FL",
      "telephone": "(321) 236-0618",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sanford",
        "addressRegion": "FL",
        "postalCode": "32771",
        "addressCountry": "US"
      },
      "sameAs": ["https://sanfordcleaning.com"]
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://sanfordcleaning.com/#localbusiness",
      "name": "Sanford Cleaning",
      "url": "https://sanfordcleaning.com",
      "image": "https://sanfordcleaning.com/sanford-cleaning-homepage.webp",
      "telephone": "(321) 236-0618",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sanford",
        "addressRegion": "FL",
        "postalCode": "32771",
        "addressCountry": "US"
      },
      "areaServed": [
        "Sanford, FL",
        "Lake Mary, FL",
        "Longwood, FL",
        "Altamonte Springs, FL"
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "18:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "09:00",
          "closes": "16:00"
        }
      ],
      "sameAs": ["https://sanfordcleaning.com"]
    }
  ]`;

  return (
    <main>
      <Script id="homepage-jsonld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}