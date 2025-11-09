"use client";

import { useState } from "react";
import PayWithStripeButton from "./PayWithStripeButton";

type Props = {
  paidParam?: string | string[];
};

export default function BookingSuccessPayments({ paidParam }: Props) {
  // Avoid SSR to prevent hydration mismatch when client-only data (URL/localStorage)
  // affects whether this component renders.
  if (typeof window === "undefined") {
    return null;
  }
  // Read client-only value. No need to store in React state.
  let paymentType: string | null = null;
  try {
    paymentType = localStorage.getItem("paymentType");
  } catch {
    paymentType = null;
  }

  const isStripePaidParam = Array.isArray(paidParam)
    ? paidParam.includes("stripe")
    : paidParam === "stripe";

  // Client-side fallback: read paid from the URL query to be robust when
  // SSR does not include searchParams in the initial HTML.
  const isStripeFromLocation = new URLSearchParams(window.location.search).get("paid") === "stripe";

  const hidePayments = isStripePaidParam || isStripeFromLocation || paymentType === "Credit Card";
  // Hide when appropriate.
  if (hidePayments) return null;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Choose Your Payment Method</h2>
            <p className="text-gray-600">We accept Zelle, cash/check on the day of service, or card via Stripe.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Pay with Card (Stripe) */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-blue-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.25 8.25h19.5M5.25 12.75h5.25m-5.25 3h9.75M3 6h18a1.5 1.5 0 011.5 1.5v9A1.5 1.5 0 0121 18H3a1.5 1.5 0 01-1.5-1.5v-9A1.5 1.5 0 013 6z"/></svg>
                </div>
                <h3 className="font-semibold text-gray-900">Pay with Card</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">Secure online payment using Stripe. You can pay with Visa, MasterCard, American Express, or Discover.</p>
              <PayWithStripeButton />
            </div>

            {/* Zelle */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-purple-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m-4-4h8M12 21a9 9 0 100-18 9 9 0 000 18z"/></svg>
                </div>
                <h3 className="font-semibold text-gray-900">Zelle</h3>
              </div>
              <p className="text-gray-700 text-sm mb-2">Send payment via Zelle using your banking app.</p>
              <p className="text-gray-700 text-sm">Use our email <a href="mailto:info@sanfordcleaning.com" className="text-blue-600 hover:underline">info@sanfordcleaning.com</a> and include your booking name in the memo.</p>
            </div>

            {/* Cash or Check */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-green-600"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2h9a2 2 0 002-2v-2m3-5h-6m0 0l2-2m-2 2l2 2"/></svg>
                </div>
                <h3 className="font-semibold text-gray-900">Cash or Check</h3>
              </div>
              <p className="text-gray-700 text-sm mb-2">You can pay with cash or check at the time of service. Please have the exact amount ready.</p>
              <p className="text-gray-700 text-sm">Make checks payable to <span className="font-medium">Topaz West LLC</span>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}