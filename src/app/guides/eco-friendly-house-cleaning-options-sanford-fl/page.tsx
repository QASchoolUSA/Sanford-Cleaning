import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Eco-Friendly House Cleaning Options Available in Sanford FL | Sanford Cleaning',
  description:
    'Learn about eco-friendly house cleaning in Sanford FL. See products, practices, and how Sanford Cleaning keeps homes clean and family- and pet-safe.',
  alternates: { canonical: 'https://sanfordcleaning.com/guides/eco-friendly-house-cleaning-options-sanford-fl' },
  openGraph: {
    title: 'Eco-Friendly House Cleaning in Sanford FL',
    description:
      'Green cleaning tips, products, and services from Sanford Cleaning. Make your Sanford home sparkle—safely.',
    url: 'https://sanfordcleaning.com/guides/eco-friendly-house-cleaning-options-sanford-fl',
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
      { '@type': 'ListItem', position: 3, name: 'Eco-Friendly House Cleaning Options in Sanford FL', item: 'https://sanfordcleaning.com/guides/eco-friendly-house-cleaning-options-sanford-fl' },
    ],
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Eco-Friendly House Cleaning Options Available in Sanford FL</h1>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Sanford Cleaning offers eco-friendly products and practices that are effective, family-safe, and pet-friendly.
            If you’re searching for green cleaning in Sanford FL, here are the supplies we use, what’s covered, and tips
            to keep your home fresher between visits.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/booking" className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Book Eco-Friendly Cleaning</Link>
            <Link href="/house-cleaning" className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">House Cleaning</Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold">Products and Practices</h2>
        <ul className="mt-3 list-disc pl-6 text-slate-700">
          <li>Low-VOC, non-toxic cleaners for kitchens and bathrooms</li>
          <li>Microfiber cloths for better dust capture and less waste</li>
          <li>HEPA-friendly practices for improved air quality</li>
          <li>Pet-safe and family-conscious application methods</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Benefits of Green Cleaning</h2>
        <p className="mt-3 text-slate-700">
          Eco-friendly house cleaning reduces harsh chemical exposure while delivering a high-standard finish.
          It’s ideal for families, allergy-sensitive households, and anyone looking to lower their environmental footprint.
        </p>

        <div className="mt-8 rounded-lg border p-6">
          <h3 className="text-xl font-semibold">Sanford Cleaning: Cleaner Homes, Conscious Choices</h3>
          <p className="mt-2 text-slate-700">
            When you search “eco-friendly house cleaning Sanford FL,” choose a team that balances effectiveness with
            care. Our checklists cover high-touch areas and durable finishes for a long-lasting clean.
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/booking" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Schedule a Green Clean</Link>
            <Link href="/deep-cleaning" className="rounded-md border border-slate-300 px-4 py-2 text-slate-700 hover:bg-slate-100">Deep Cleaning</Link>
          </div>
        </div>
      </section>
    </main>
  );
}