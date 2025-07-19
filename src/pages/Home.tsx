import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PriceCalculator from '../components/PriceCalculator';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Professional Cleaning Services in Sanford, FL | Sanford Cleaning Services</title>
        <meta name="description" content="Professional residential and commercial cleaning services in Sanford, Florida near me." />
        <meta name="keywords" content="cleaning services sanford, sanford cleaning services, residential cleaning, commercial cleaning, house cleaning, office cleaning, deep cleaning, carpet cleaning" />
        <meta property="og:title" content="Professional Cleaning Services in Sanford, FL | Sanford Cleaning Services" />
        <meta property="og:description" content="Professional residential and commercial cleaning services in Sanford, Florida." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sanfordcleaning.com" />
      </Helmet>
      <Hero />
      <Services />
      <PriceCalculator />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;