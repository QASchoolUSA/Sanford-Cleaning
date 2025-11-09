"use client";

import { useState } from "react";

export default function PayWithStripeButton() {
  const [loading, setLoading] = useState(false);

  const startCheckout = async () => {
    try {
      setLoading(true);

      let amount: number | null = null;
      let service: string = "Cleaning Service";
      let customerEmail: string | undefined = undefined;
      let address: string | undefined = undefined;
      let squareFootage: string | undefined = undefined;

      try {
        const stored = localStorage.getItem("lastStripePayment");
        if (stored) {
          const parsed = JSON.parse(stored) as {
            amount?: number;
            service?: string;
            email?: string;
            address?: string;
            squareFootage?: string;
          };
          const a = parsed?.amount;
          if (typeof a === "number" && !isNaN(a) && a > 0) {
            amount = a;
          }
          if (typeof parsed?.service === "string" && parsed.service.length > 0) {
            service = parsed.service;
          }
          if (typeof parsed?.email === "string" && parsed.email.length > 0) {
            customerEmail = parsed.email;
          }
          if (typeof parsed?.address === "string" && parsed.address.length > 0) {
            address = parsed.address;
          }
          if (typeof parsed?.squareFootage === "string" && parsed.squareFootage.length > 0) {
            squareFootage = parsed.squareFootage;
          }
        }
      } catch {
        // ignore storage errors
      }

      if (!amount || isNaN(amount) || amount <= 0) {
        alert(
          "We couldn't find a valid amount from your booking. Please return to booking and select card payment again."
        );
        setLoading(false);
        return;
      }

      const resp = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, service, customerEmail, address, squareFootage }),
      });

      if (!resp.ok) {
        const data = await resp.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to create checkout session.");
      }

      const { url } = await resp.json();
      if (!url) throw new Error("No checkout URL returned.");
      window.location.href = url;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.error("Stripe checkout error:", message);
      alert(
        "Unable to start Stripe checkout. Please try again or choose another payment method."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={startCheckout}
      disabled={loading}
      className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-60"
   >
      {loading ? "Redirecting…" : "Pay with Card"}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-5 h-5 ml-2 text-white"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}