import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GlobalHome from './pages/GlobalHome';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Articles from './pages/Articles';

function AppContent() {
  const location = useLocation();
  const isGlobal = location.pathname.includes('/global');

  return (
    <div className={`flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900 ${isGlobal ? 'global-theme' : ''}`}>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/global" element={<GlobalHome />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
