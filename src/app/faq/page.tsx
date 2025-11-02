export const metadata = {
  title: "FAQ | Sanford Cleaning",
  description: "Frequently asked questions about services, scheduling, and pricing.",
  alternates: { canonical: "https://sanfordcleaning.com/faq" },
  openGraph: {
    title: "FAQ | Sanford Cleaning",
    description: "Frequently asked questions about services, scheduling, and pricing.",
    type: "website",
    url: "https://sanfordcleaning.com/faq",
  },
  twitter: {
    card: "summary",
    title: "FAQ | Sanford Cleaning",
    description: "Frequently asked questions about services, scheduling, and pricing.",
  },
};

import Script from "next/script";

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What areas do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We serve Sanford, FL and surrounding areas. Contact us for availability in your location.",
        },
      },
      {
        "@type": "Question",
        name: "How do I schedule or reschedule?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book or reschedule online in minutes via our booking page.",
        },
      },
      {
        "@type": "Question",
        name: "What’s included in each service type?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard, deep, and move-in/move-out cleanings include different checklists. See each service page for full details.",
        },
      },
    ],
  };

  return (
    <main style={{ padding: 24, maxWidth: 800, margin: "0 auto" }}>
      <h1>Frequently Asked Questions</h1>
      <ul>
        <li>What areas do you serve?</li>
        <li>How do I schedule or reschedule?</li>
        <li>What’s included in each service type?</li>
      </ul>
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
    </main>
  );
}