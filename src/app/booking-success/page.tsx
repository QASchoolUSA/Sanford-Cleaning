export const metadata = {
  title: "Booking Confirmed | Sanford Cleaning",
  description: "Your cleaning appointment has been scheduled.",
  alternates: { canonical: "https://sanfordcleaning.com/booking-success" },
  openGraph: {
    title: "Booking Confirmed | Sanford Cleaning",
    description: "Your cleaning appointment has been scheduled.",
    type: "website",
    url: "https://sanfordcleaning.com/booking-success",
  },
  twitter: {
    card: "summary",
    title: "Booking Confirmed | Sanford Cleaning",
    description: "Your cleaning appointment has been scheduled.",
  },
  robots: { index: false, follow: false },
};

export default function BookingSuccessPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Booking Confirmed</h1>
      <p>Thank you! Your appointment is confirmed and a confirmation email has been sent.</p>
    </main>
  );
}