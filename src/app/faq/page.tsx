export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about services, scheduling, pricing, and policies.",
  alternates: { canonical: "https://sanfordcleaning.com/faq" },
  openGraph: {
    title: "FAQ",
    description: "Frequently asked questions about services, scheduling, pricing, and policies.",
    type: "website",
    url: "https://sanfordcleaning.com/faq",
  },
  twitter: {
    card: "summary",
    title: "FAQ",
    description: "Frequently asked questions about services, scheduling, pricing, and policies.",
  },
};

import Link from "next/link";
import { CheckCircle, Phone, Mail, Calendar } from "lucide-react";

export default function FAQPage() {
  const faqs = [
    {
      q: "Do you have insurance?",
      a: "Yes, we are fully insured.",
    },
    {
      q: "Can you provide a W9?",
      a: "Sure thing — upon request we can provide a W9.",
    },
    {
      q: "How long have you been performing house and office cleaning in Sanford, FL?",
      a: "Under this company, we’ve been serving Sanford for 2 years. Before that, we worked for other companies. Overall experience is around 5–7 years. We’re a family‑owned business.",
    },
    {
      q: "What are the ways to book cleaning?",
      a: "You can call (321) 236‑0618, email info@sanfordcleaning.com, or use the booking page at /booking.",
    },
    {
      q: "When do you charge for cleaning?",
      a: "We charge only after the cleaning is completed. You can pay using Zelle, Cash, Check, or a Stripe invoice/payment link.",
    },
    {
      q: "What are the payment methods for cleaning?",
      a: "We accept Zelle, Cash, Check, and Stripe — using credit/debit card or bank account and routing number (ACH).",
    },
    {
      q: "What types of cleaning do you provide?",
      a: "House Cleaning in Sanford, FL and nearby cities; Office Cleaning in Sanford, FL and nearby cities; Window Cleaning in Sanford, FL and nearby cities.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-blue-700 mb-3">
              <Calendar className="w-6 h-6" />
              <span className="font-semibold">Frequently Asked Questions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">FAQ</h1>
            <p className="text-lg text-gray-600">Answers to common questions about booking, payment, and our services.</p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
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

          {/* Actions */}
          <div className="max-w-4xl mx-auto mt-10 flex flex-col sm:flex-row gap-4">
            <a href="tel:321-236-0618" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              <Phone className="w-5 h-5" /> Call (321) 236-0618
            </a>
            <a href="mailto:info@sanfordcleaning.com" className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              <Mail className="w-5 h-5" /> info@sanfordcleaning.com
            </a>
            <Link href="/booking" className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:border-blue-300 hover:text-blue-700 transition-colors">
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </div>
  );
}