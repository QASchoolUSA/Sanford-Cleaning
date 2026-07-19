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
  title: 'House Cleaning in Sanford, FL',
  description:
    "Professional home cleaners in Sanford, FL offering housekeeping, deep cleaning, and move-out services. Request a quote online today.",
  alternates: {
    canonical: 'https://sanfordcleaning.com',
  },
  openGraph: {
    title:
      'Sanford Cleaning | House & Commercial Cleaning',
    description:
      "Get a sparkling clean house or office with Sanford Cleaning. We offer reliable housekeeping, commercial, and deep cleaning in Sanford, FL.",
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
    title: 'Sanford Cleaning | Local Cleaning in Sanford, FL',
    description:
      "Professional house and office cleaning in Sanford, FL. Get a free quote online.",
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
