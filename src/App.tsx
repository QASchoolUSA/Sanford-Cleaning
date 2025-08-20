import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingChatButton from './components/FloatingChatButton';
import Home from './pages/Home';
import ResidentialCleaning from './pages/ResidentialCleaning';
import CommercialCleaning from './pages/CommercialCleaning';
import DeepCleaning from './pages/DeepCleaning';
import BookingPage from './pages/BookingPage';
import StripePayment from './pages/StripePayment';
import BookingSuccess from './pages/BookingSuccess';
import GetHired from './pages/GetHired';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FAQ from './pages/FAQ';
import PostConstructionCleaning from './pages/PostConstructionCleaning';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <Header />
        <FloatingChatButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential-cleaning" element={<ResidentialCleaning />} />
          <Route path="/commercial-cleaning" element={<CommercialCleaning />} />
          <Route path="/deep-cleaning" element={<DeepCleaning />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/payment" element={<StripePayment />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
          <Route path="/get-hired" element={<GetHired />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/post-construction-cleaning" element={<PostConstructionCleaning />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;