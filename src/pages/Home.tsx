import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PriceCalculator from '../components/PriceCalculator';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>House Cleaning Services Sanford, FL | Sanford Cleaning</title>
        <meta name="description" content="Sanford's #1 rated cleaning service for home & office. Get an instant, free quote online and book in 60 seconds. We're your trusted local cleaners for a spotless space!" />
        <meta name="keywords" content="cleaning services sanford fl, house cleaning sanford fl, commercial cleaning sanford fl, deep cleaning services sanford fl, sanford cleaning company" />
        <meta property="og:title" content="Sanford Cleaning | Top-Rated Home & Commercial Cleaning in Sanford, FL" />
        <meta property="og:description" content="Get a sparkling clean home or office with Sanford Cleaning's top-rated services. We offer reliable residential, commercial, and deep cleaning in Sanford, FL. Book online in 60 seconds!" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sanford Cleaning" />
        <meta property="og:url" content="https://sanfordcleaning.com" />
        <meta property="og:image" content="https://sanfordcleaning.com/sanford-cleaning-homepage.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sanford Cleaning | #1 Rated Cleaning Service in Sanford, FL" />
        <meta name="twitter:description" content="Sanford's #1 rated cleaning service for home & office. Get an instant, free quote online and book in 60 seconds!" />
        <meta name="twitter:image" content="https://sanfordcleaning.com/sanford-cleaning-homepage.webp" />
        <link rel="canonical" href="https://sanfordcleaning.com" />
        <script type="application/ld+json">
          {`
            [
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
                "sameAs": [
                  "https://sanfordcleaning.com"
                ]
              }
            ]
          `}
        </script>
      </Helmet>
      <Hero />
      <Services />
      <PriceCalculator />
      <About />
      <Contact />
    </>
  );
};

export default Home;