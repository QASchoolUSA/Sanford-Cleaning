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
        <title>Top-Rated Home & Commercial Cleaning in Sanford, FL | Sanford Cleaning</title>
        <meta name="description" content="Get a sparkling clean home or office with Sanford Cleaning's top-rated services. We offer reliable residential, commercial, and deep cleaning in Sanford, FL. Book online in 60 seconds!" />
        <meta name="keywords" content="house cleaning sanford fl, commercial cleaning sanford fl, office cleaning sanford, deep cleaning services sanford, sanford cleaning company, move-in cleaning sanford" />
        <meta property="og:title" content="Top-Rated Home & Commercial Cleaning in Sanford, FL | Sanford Cleaning" />
        <meta property="og:description" content="Get a sparkling clean home or office with Sanford Cleaning's top-rated services. We offer reliable residential, commercial, and deep cleaning in Sanford, FL. Book online in 60 seconds!" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sanford Cleaning" />
        <link rel="canonical" href="https://sanfordcleaning.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sanford Cleaning",
              "image": "https://sanfordcleaning.com/sanford-cleaning-logo.png",
              "@id": "https://sanfordcleaning.com",
              "url": "https://sanfordcleaning.com",
              "telephone": "(321) 236-0618",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sanford",
                "addressLocality": "Sanford",
                "addressRegion": "FL",
                "postalCode": "32771",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.8008,
                "longitude": -81.2731
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "87"
              }
            }
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