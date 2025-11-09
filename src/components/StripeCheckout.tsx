"use client";

import React, { useState } from "react";

type Props = {
  amount: number | null;
  service: string;
  email?: string;
};

export default function StripeCheckout({ amount, service, email }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startCheckout = async () => {
    try {
      setLoading(true);
      setError(null);

      if (!amount || isNaN(amount) || amount <= 0) {
        setError("Missing or invalid amount. Please return and try again.");
        setLoading(false);
        return;
      }

      const resp = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, service, customerEmail: email }),
      });

      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to create checkout session.");
      }

      const { url } = await resp.json();
      if (!url) {
        throw new Error("No checkout URL returned.");
      }

      window.location.href = url;
    } catch (err: any) {
      setError(err?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Pay with Card</h1>
            <p className="text-gray-600 mb-6">Secure payment via Stripe Checkout.</p>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-gray-700"><span className="font-semibold">Service:</span> {service || "Cleaning Service"}</p>
              <p className="text-gray-700"><span className="font-semibold">Amount:</span> {amount && !isNaN(amount) ? `$${amount.toFixed(2)}` : "Not provided"}</p>
              {email && (
                <p className="text-gray-700"><span className="font-semibold">Email:</span> {email}</p>
              )}
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-md p-3 mb-4">{error}</div>
            )}

            <button
              onClick={startCheckout}
              disabled={loading}
              className="w-full inline-flex items-center justify-center px-5 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60"
            >
              {loading ? "Redirecting…" : "Pay with Stripe"}
            </button>

            <p className="text-sm text-gray-500 mt-4 text-center">You will be redirected to a secure Stripe-hosted page.</p>

            <div className="mt-6 text-center">
              <a href="/booking" className="text-blue-600 hover:underline">Return to booking</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}