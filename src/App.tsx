import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ResidentialCleaning from './pages/ResidentialCleaning';
import CommercialCleaning from './pages/CommercialCleaning';
import DeepCleaning from './pages/DeepCleaning';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/residential-cleaning" element={<ResidentialCleaning />} />
          <Route path="/commercial-cleaning" element={<CommercialCleaning />} />
          <Route path="/deep-cleaning" element={<DeepCleaning />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;