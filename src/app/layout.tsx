export const metadata = {
  metadataBase: new URL("https://sanfordcleaning.com"),
  title: {
    default: "Sanford Cleaning",
    template: "%s",
  },
  applicationName: "Sanford Cleaning",
  description: "Professional residential and commercial cleaning in Sanford, FL.",
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
  const siteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sanford Cleaning',
    url: 'https://sanfordcleaning.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://sanfordcleaning.com/guides?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
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
