import React from "react";
import StripeCheckout from "@/components/StripeCheckout";

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

export default function StripePaymentPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const getParam = (key: string) => {
    const value = searchParams?.[key];
    if (Array.isArray(value)) return value[0];
    return value ?? undefined;
  };

  const amountParam = getParam("amount");
  const serviceParam = getParam("service") || "Cleaning Service";
  const customerEmail = getParam("email") || undefined;
  const amount = amountParam ? Number(amountParam) : null;

  return (
    <StripeCheckout amount={amount} service={serviceParam} email={customerEmail} />
  );
}