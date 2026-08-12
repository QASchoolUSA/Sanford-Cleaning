export const metadata = {
  title: "House Cleaning FAQ Sanford FL | Pricing, Booking & Policies",
  description:
    "Answers to common house cleaning questions in Sanford, FL — pricing, service areas, booking, payment, insurance, and what's included. Sanford Cleaning FAQ.",
  alternates: { canonical: "https://sanfordcleaning.com/faq" },
  openGraph: {
    title: "House Cleaning FAQ Sanford FL | Sanford Cleaning",
    description:
      "Frequently asked questions about house cleaning, maid service, and office cleaning in Sanford, FL. Pricing, booking, and policies explained.",
    type: "website",
    url: "https://sanfordcleaning.com/faq",
  },
  twitter: {
    card: "summary",
    title: "House Cleaning FAQ Sanford FL | Sanford Cleaning",
    description:
      "Frequently asked questions about house cleaning, maid service, and office cleaning in Sanford, FL.",
  },
};

import Link from "next/link";
import { CheckCircle, Phone, Mail, Calendar } from "lucide-react";
import { siteFacts } from "@/lib/siteFacts";

export default function FAQPage() {
  const faqs = [
    {
      q: "How much does house cleaning cost in Sanford, FL?",
      a: (
        <>
          Standard house cleaning typically starts at $80 for smaller homes and ranges from $120–$200 for a
          3-bedroom home. Deep cleaning and move-out cleaning cost more depending on size and condition. Get an{" "}
          <Link href="/booking" className="text-blue-600 hover:text-blue-800 underline">instant quote online</Link> or{" "}
          <Link href="/custom-quote" className="text-blue-600 hover:text-blue-800 underline">request a custom quote</Link> for
          transparent pricing.
        </>
      ),
      aText:
        "Standard house cleaning typically starts at $80 for smaller homes and ranges from $120–$200 for a 3-bedroom home. Deep cleaning and move-out cleaning cost more depending on size and condition. Get an instant quote online or request a custom quote for transparent pricing.",
    },
    {
      q: "What areas do you serve?",
      a: (
        <>
          We provide house cleaning and maid service in Sanford, Lake Mary, Heathrow, Longwood, Altamonte Springs,
          Winter Springs, DeBary, Deltona, Casselberry, Oviedo, and Winter Park — within approximately 30 miles of Sanford.
        </>
      ),
      aText:
        "We provide house cleaning and maid service in Sanford, Lake Mary, Heathrow, Longwood, Altamonte Springs, Winter Springs, DeBary, Deltona, Casselberry, Oviedo, and Winter Park — within approximately 30 miles of Sanford.",
    },
    {
      q: "Do you have insurance?",
      a: "Yes, we are fully licensed, bonded, and insured for your peace of mind.",
      aText: "Yes, we are fully licensed, bonded, and insured for your peace of mind.",
    },
    {
      q: "What types of cleaning do you provide?",
      a: (
        <>
          We offer{" "}
          <Link href="/house-cleaning" className="text-blue-600 hover:text-blue-800 underline">house cleaning</Link>,{" "}
          <Link href="/deep-cleaning" className="text-blue-600 hover:text-blue-800 underline">deep cleaning</Link>,{" "}
          <Link href="/move-in-move-out-cleaning" className="text-blue-600 hover:text-blue-800 underline">move-in/move-out cleaning</Link>,{" "}
          <Link href="/maintenance-cleaning" className="text-blue-600 hover:text-blue-800 underline">recurring maintenance cleaning</Link>,{" "}
          <Link href="/office-cleaning" className="text-blue-600 hover:text-blue-800 underline">office cleaning</Link>,{" "}
          <Link href="/commercial-cleaning" className="text-blue-600 hover:text-blue-800 underline">commercial cleaning</Link>,{" "}
          <Link href="/window-cleaning" className="text-blue-600 hover:text-blue-800 underline">window cleaning</Link>,{" "}
          <Link href="/carpet-cleaning" className="text-blue-600 hover:text-blue-800 underline">carpet cleaning</Link>,{" "}
          <Link href="/airbnb-cleaning" className="text-blue-600 hover:text-blue-800 underline">Airbnb turnover cleaning</Link>, and more.
        </>
      ),
      aText:
        "We offer house cleaning, deep cleaning, move-in/move-out cleaning, recurring maintenance cleaning, office cleaning, commercial cleaning, window cleaning, carpet cleaning, Airbnb turnover cleaning, and more.",
    },
    {
      q: "What is included in a standard house cleaning?",
      a: "A standard visit includes kitchen cleaning and sanitization, bathroom cleaning, dusting all surfaces, vacuuming and mopping floors, trash removal, and bed making. Deep cleaning adds baseboards, inside appliances, cabinet fronts, and other detailed tasks.",
      aText:
        "A standard visit includes kitchen cleaning and sanitization, bathroom cleaning, dusting all surfaces, vacuuming and mopping floors, trash removal, and bed making. Deep cleaning adds baseboards, inside appliances, cabinet fronts, and other detailed tasks.",
    },
    {
      q: "How long have you been performing house and office cleaning in Sanford, FL?",
      a: siteFacts.experienceStatement,
      aText: siteFacts.experienceStatement,
    },
    {
      q: "What are the ways to book cleaning?",
      a: (
        <>
          You can call {siteFacts.phone.display}, email {siteFacts.email}, or{" "}
          <Link href="/booking" className="text-blue-600 hover:text-blue-800 underline">book online</Link> for instant pricing and scheduling.
        </>
      ),
      aText:
        `You can call ${siteFacts.phone.display}, email ${siteFacts.email}, or book online for instant pricing and scheduling.`,
    },
    {
      q: "Do you offer a satisfaction guarantee?",
      a: "Yes. We stand behind our work with a 100% satisfaction guarantee. If something isn't right, contact us within 24 hours and we'll make it right.",
      aText:
        "Yes. We stand behind our work with a 100% satisfaction guarantee. If something isn't right, contact us within 24 hours and we'll make it right.",
    },
    {
      q: "Can you provide a W9?",
      a: "Sure thing — upon request we can provide a W9 for commercial and property management clients.",
      aText: "Sure thing — upon request we can provide a W9 for commercial and property management clients.",
    },
    {
      q: "When do you charge for cleaning?",
      a: "Payment is expected upon completion of service. No upfront payment is required to book.",
      aText:
        "Payment is expected upon completion of service. No upfront payment is required to book.",
    },
    {
      q: "Do I need to pay when I book?",
      a: "No. You can book online with no payment. Payment is due after your cleaning is complete.",
      aText:
        "No. You can book online with no payment. Payment is due after your cleaning is complete.",
    },
    {
      q: "What is your cancellation policy?",
      a: "Please provide at least 24 hours notice for cancellations or rescheduling. Late cancellations may be subject to a fee. Contact us by phone or email as soon as your plans change.",
      aText:
        "Please provide at least 24 hours notice for cancellations or rescheduling. Late cancellations may be subject to a fee. Contact us by phone or email as soon as your plans change.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.aText },
    })),
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-blue-700 mb-3">
              <Calendar className="w-6 h-6" />
              <span className="font-semibold">Frequently Asked Questions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions About Cleaning Services in Sanford, FL
            </h1>
            <p className="text-lg text-gray-600">
              Answers to common questions about booking, pricing, service areas, and our house cleaning and maid service policies.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl p-6 bg-gray-50 hover:bg-blue-50 hover:border-blue-200 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.q}</h3>
                    <p className="text-gray-700">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-10 flex flex-col sm:flex-row gap-4">
            <a href={siteFacts.phone.href} className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              <Phone className="w-5 h-5" /> Call {siteFacts.phone.display}
            </a>
            <a href={`mailto:${siteFacts.email}`} className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              <Mail className="w-5 h-5" /> {siteFacts.email}
            </a>
            <Link href="/booking" className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:border-blue-300 hover:text-blue-700 transition-colors">
              Book Online
            </Link>
          </div>
        </div>
      </section>

      <script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}
