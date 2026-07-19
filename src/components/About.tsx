import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Leaf, Clock, Award } from 'lucide-react';
import { siteFacts } from '@/lib/siteFacts';

type AboutProps = {
  /** Use h1 on the dedicated /about page; keep h2 when embedded on the homepage. */
  asPage?: boolean;
};

const About = ({ asPage = false }: AboutProps) => {
  const TitleTag = asPage ? 'h1' : 'h2';
  const values = [
    {
      icon: Shield,
      title: 'Trusted & Insured',
      description: 'Fully licensed, bonded, and insured for your peace of mind.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'We use environmentally safe cleaning products and methods.'
    },
    {
      icon: Clock,
      title: 'Reliable Service',
      description: 'Consistent, punctual service you can count on every time.'
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: '100% satisfaction guarantee on all our cleaning services.'
    }
  ];

  const processSteps = [
    {
      title: 'Request a quote or book online',
      text: 'Share the service type and property details. Typical 3-bedroom packages and deep-clean ranges are published on this site so expectations stay grounded.',
    },
    {
      title: 'Confirm access and priorities',
      text: 'Entry instructions, pets, and rooms that need extra attention go on the job notes before the crew arrives.',
    },
    {
      title: 'We clean to the checklist',
      text: 'Trained professionals use modern techniques and eco-friendly products tailored to homes, apartments, offices, and specialty jobs.',
    },
    {
      title: 'You review the result',
      text: 'If something needs a touch-up, tell us. Our satisfaction guarantee means we stand behind the work.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-3">
                About {siteFacts.brandName}
              </p>
              <TitleTag data-cy="about-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Family-owned cleaning for Sanford homes and workplaces
              </TitleTag>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {siteFacts.experienceStatement} We&apos;re your partners in creating healthier, more comfortable living and working spaces.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our team of trained professionals uses the latest cleaning techniques and eco-friendly products to deliver exceptional results. We understand that every space is unique, which is why we customize our services to meet your specific needs and budget.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Legally operating as {siteFacts.legalName}, we provide house, apartment, residential, commercial, deep, move, post-construction, and specialty cleaning across Sanford. {siteFacts.pricing.messages.full} Contact us at{' '}
                <a href={siteFacts.phone.href} className="text-blue-600 font-medium hover:underline">{siteFacts.phone.display}</a>
                {' '}or{' '}
                <a href={`mailto:${siteFacts.email}`} className="text-blue-600 font-medium hover:underline">{siteFacts.email}</a>.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-6">
                Being family-owned shapes how we schedule and communicate. You work with a local business that answers the phone, publishes real pricing ranges, and stands behind licensed, bonded, and insured work—rather than a distant call center rotating gig workers through your home.
              </p>
              {!asPage && (
                <p className="text-lg mt-6">
                  <Link href="/about" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    Learn more about our story →
                  </Link>
                </p>
              )}
            </div>
          </div>

          <div className="relative">
            <Image
              src="/sanford-cleaning-about-us.webp"
              alt="Sanford Cleaning - Professional Cleaning Team"
              width={800}
              height={800}
              className="w-full max-w-md mx-auto aspect-square object-cover rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How we work</h2>
          <p className="text-gray-600 mb-8">
            Experience is easier to trust when the steps are clear—from first quote to finished checklist.
          </p>
          <ol className="space-y-6">
            {processSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-1 text-gray-600">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-20 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Service-area policy</h2>
          <p className="text-gray-600 leading-relaxed">
            {siteFacts.serviceAreaPolicy.description} We schedule mobile crews across Sanford and nearby communities—no public retail storefront. If you are unsure whether we cover your address, ask when you request a quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                <value.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap gap-4 justify-center">
          <Link
            href="/booking"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Book a cleaning
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
          >
            Read FAQ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
