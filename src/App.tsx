import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatNotification from './components/ChatNotification';
import MicrosoftClarity from './components/MicrosoftClarity';

// Lazy load page components for code splitting
const Home = React.lazy(() => import('./pages/Home'));
const ResidentialCleaning = React.lazy(() => import('./pages/ResidentialCleaning'));
const CommercialCleaning = React.lazy(() => import('./pages/CommercialCleaning'));
const CustomQuote = React.lazy(() => import('./pages/CustomQuote'));
const DeepCleaning = React.lazy(() => import('./pages/DeepCleaning'));
const BookingPage = React.lazy(() => import('./pages/BookingPage'));
const BookingSummary = React.lazy(() => import('./components/BookingSummary'));
const StripePayment = React.lazy(() => import('./pages/StripePayment'));
const BookingSuccess = React.lazy(() => import('./pages/BookingSuccess'));
const GetHired = React.lazy(() => import('./pages/GetHired'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const PostConstructionCleaning = React.lazy(() => import('./pages/PostConstructionCleaning'));
const MoveInMoveOutCleaning = React.lazy(() => import('./pages/MoveInMoveOutCleaning'));
const GetHiredSuccess = React.lazy(() => import('./pages/GetHiredSuccess'));
const PressureWashing = React.lazy(() => import('./pages/PressureWashing'));
const WindowCleaning = React.lazy(() => import('./pages/WindowCleaning'));
const CarpetCleaning = React.lazy(() => import('./pages/CarpetCleaning'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <MicrosoftClarity />
        <ScrollToTop />
        <ChatNotification />
        <Header />
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-lg">Loading...</div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/residential-cleaning" element={<ResidentialCleaning />} />
            <Route path="/commercial-cleaning" element={<CommercialCleaning />} />
            <Route path="/free-custom-quote" element={<CustomQuote />} />
            <Route path="/deep-cleaning" element={<DeepCleaning />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking-summary" element={<BookingSummary />} />
            <Route path="/payment" element={<StripePayment />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
            <Route path="/get-hired" element={<GetHired />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/post-construction-cleaning" element={<PostConstructionCleaning />} />
            <Route path="/move-in-move-out-cleaning" element={<MoveInMoveOutCleaning />} />
            <Route path="/pressure-washing" element={<PressureWashing />} />
            <Route path="/window-cleaning" element={<WindowCleaning />} />
            <Route path="/carpet-cleaning" element={<CarpetCleaning />} />
            <Route path="/get-hired-success" element={<GetHiredSuccess />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;