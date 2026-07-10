import Hero from '@/components/Hero';
import EntityGraphSchema from '@/components/seo/EntityGraphSchema';
import dynamic from 'next/dynamic';

const SpecialOffers = dynamic(() => import('@/components/SpecialOffers'));
const Services = dynamic(() => import('@/components/Services'));
const BeforeAfterSlider = dynamic(() => import('@/components/BeforeAfterSlider'));
const About = dynamic(() => import('@/components/About'));
const Gallery = dynamic(() => import('@/components/Gallery'));
const ServiceAreas = dynamic(() => import('@/components/ServiceAreas'));
const Contact = dynamic(() => import('@/components/Contact'));

export const metadata = {
  title: 'Top-Rated House Cleaning Services Sanford, FL',
  description:
    "Looking for the best home cleaners and maid service in Sanford, FL? Bonded, insured house cleaning, deep cleaning, and move-out services. Book online today!",
  alternates: {
    canonical: 'https://sanfordcleaning.com',
  },
  openGraph: {
    title:
      'Sanford Cleaning | Top-Rated House & Commercial Cleaning in Sanford, FL',
    description:
      "Get a sparkling clean house or office with Sanford Cleaning's top-rated home cleaners. We offer reliable housekeeping, commercial, and deep cleaning in Sanford, FL. Book online in 60 seconds!",
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
  return (
    <main>
      {/* Phase 4: Organization + WebSite + ProfessionalService entity graph */}
      <EntityGraphSchema />
      <Hero />
      <SpecialOffers />
      <BeforeAfterSlider />
      <Services />
      <About />
      <Gallery />
      <ServiceAreas />
      <Contact />
    </main>
  );
}