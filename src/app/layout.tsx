export const metadata = {
  metadataBase: new URL("https://sanfordcleaning.com"),
  title: {
    default: "Sanford Cleaning | House Cleaning & Maid Service in Sanford, FL",
    template: "%s | Sanford Cleaning",
  },
  applicationName: "Sanford Cleaning",
  description: "Professional house cleaning, maid service, and commercial cleaning in Sanford, FL. Insured cleaners serving Lake Mary, Longwood & Central Florida. Book online in 60 seconds.",
  alternates: {
    canonical: "https://sanfordcleaning.com",
  },
  openGraph: {
    siteName: "Sanford Cleaning",
    type: "website",
    url: "https://sanfordcleaning.com",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@SanfordCleaning",
    site: "@SanfordCleaning",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import Analytics from "@/components/Analytics";
import ClientLayoutWrapper from "@/components/ClientLayoutWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const isProd = process.env.NODE_ENV === 'production';
  return (
    <html lang="en">
      <head>
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://a.basemaps.cartocdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://b.basemaps.cartocdn.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://c.basemaps.cartocdn.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <MicrosoftClarity />
        <Analytics />
        <ScrollToTop />
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
        {isProd && pixelId && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
      </body>
    </html>
  );
}
