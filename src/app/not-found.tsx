import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn’t find the page you’re looking for. You can return to the homepage or book a cleaning in minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/booking"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Book a Cleaning
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Prefer to talk? Call <a href="tel:321-236-0618" className="text-blue-600 hover:underline">(321) 236-0618</a>
        </p>
      </div>
    </main>
  );
}