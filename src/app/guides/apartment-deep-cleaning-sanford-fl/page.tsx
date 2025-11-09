import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Apartment Deep Cleaning in Sanford FL | Sanford Cleaning',
  description:
    'Apartment deep cleaning services in Sanford FL. Ideal for first-time cleanings, move-outs, and renter refreshes. Learn what’s included and pricing tips.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/apartment-deep-cleaning-sanford-fl' },
  openGraph: {
    title: 'Apartment Deep Cleaning in Sanford FL',
    description:
      'A renter-friendly guide to apartment deep cleaning in Sanford: checklist, add-ons, and scheduling from Sanford Cleaning.',
    url: 'https://sanfordcleaning.com/guides/apartment-deep-cleaning-sanford-fl',
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
      { '@type': 'ListItem', position: 3, name: 'Apartment Deep Cleaning in Sanford FL', item: 'https://sanfordcleaning.com/guides/apartment-deep-cleaning-sanford-fl' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Apartment Deep Cleaning in Sanford FL</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            For apartments, deep cleaning focuses on high-use spaces like kitchens and bathrooms, plus baseboards and
            fixtures. Sanford Cleaning helps renters set a spotless baseline, prepare for inspections, or refresh after
            a busy season.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/booking" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Book Apartment Deep Clean</Link>
            <Link href="/deep-cleaning" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Deep Cleaning Details</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">Checklist Highlights</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Kitchen degreasing, appliance exterior, and sink fixtures</li>
          <li>Bathroom descaling: shower, tub, mirrors, and tile</li>
          <li>Baseboards, door frames, and high-touch surfaces</li>
          <li>Add-ons: inside oven, fridge, and windows</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Keywords and Searches</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>apartment deep cleaning Sanford FL</li>
          <li>deep cleaning near me</li>
          <li>Sanford renter move-out cleaning</li>
        </ul>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Sanford Cleaning for Apartments</h3>
          <p className="mt-2 text-slate-700">
            We coordinate with building guidelines, elevator access, and parking as needed—so your deep clean is
            smooth and on time.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/booking" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Schedule</Link>
            <Link href="/move-in-move-out-cleaning" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Move-Out Cleaning</Link>
          </div>
        </div>
      </section>
    </main>
  );
}