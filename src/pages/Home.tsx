import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PriceCalculator from '../components/PriceCalculator';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
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