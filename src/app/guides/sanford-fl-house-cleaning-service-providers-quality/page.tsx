import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sanford FL House Cleaning Service Providers by Quality | Sanford Cleaning',
  description:
    'Compare Sanford FL house cleaning providers by service quality. See training, checklists, eco options, and communication practices from Sanford Cleaning.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/sanford-fl-house-cleaning-service-providers-quality' },
  openGraph: {
    title: 'Sanford FL House Cleaning Providers: Quality Guide',
    description:
      'Quality-first comparison of house cleaning providers in Sanford—choose a reliable partner like Sanford Cleaning.',
    url: 'https://sanfordcleaning.com/guides/sanford-fl-house-cleaning-service-providers-quality',
    siteName: 'Sanford Cleaning',
  },
};

export default function Page() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sanfordcleaning.com/' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://sanfordcleaning.com/guides' },
      { '@type': 'ListItem', position: 3, name: 'Sanford FL House Cleaning Providers by Quality', item: 'https://sanfordcleaning.com/guides/sanford-fl-house-cleaning-service-providers-quality' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Sanford FL House Cleaning Service Providers by Quality</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Choosing a provider is easier when you know what quality looks like. Sanford Cleaning follows a detailed
            checklist, uses eco-friendly options, and keeps communication simple and friendly.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/house-cleaning" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">View Services</Link>
            <Link href="/free-custom-quote" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Get a Quote</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">Quality Signals</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Training and standardized checklists</li>
          <li>Eco-friendly supplies and pet-safe methods</li>
          <li>Transparent pricing and clear add-ons</li>
          <li>Consistent arrival windows and friendly communication</li>
        </ul>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Sanford Cleaning: Local and Reliable</h3>
          <p className="mt-2 text-slate-700">
            We serve Sanford, Lake Mary, and nearby areas with flexible scheduling—weekly, biweekly, and one-time.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/booking" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Book Now</Link>
            <Link href="/deep-cleaning" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Deep Cleaning</Link>
          </div>
        </div>
      </section>
    </main>
  );
}