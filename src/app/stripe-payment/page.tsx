export const metadata = {
  title: "Stripe Payment | Sanford Cleaning",
  description: "Secure payment processing for your cleaning services.",
  alternates: { canonical: "https://sanfordcleaning.com/stripe-payment" },
  openGraph: {
    title: "Stripe Payment | Sanford Cleaning",
    description: "Secure payment processing for your cleaning services.",
    type: "website",
    url: "https://sanfordcleaning.com/stripe-payment",
  },
  twitter: {
    card: "summary",
    title: "Stripe Payment | Sanford Cleaning",
    description: "Secure payment processing for your cleaning services.",
  },
  robots: { index: false, follow: false },
};

export default function StripePaymentPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Payment</h1>
      <p>Complete your payment securely via Stripe.</p>
    </main>
  );
}