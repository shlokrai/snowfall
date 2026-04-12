import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import Home from './pages/Home';
import GlobalHome from './pages/GlobalHome';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Articles from './pages/Articles';

function AppContent() {
  const location = useLocation();
  const isGlobal = location.pathname.includes('/global');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // Snowfall loading screen duration setup for 600ms

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className={`flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900 ${isGlobal ? 'global-theme' : ''}`}>
      {isLoading && <LoadingScreen />}
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/global" element={<GlobalHome />} />
          
          {/* Shared Pages with isGlobal prop */}
          <Route path="/about" element={<AboutUs isGlobal={false} />} />
          <Route path="/global/about" element={<AboutUs isGlobal={true} />} />
          
          <Route path="/services" element={<Services isGlobal={false} />} />
          <Route path="/global/services" element={<Services isGlobal={true} />} />
          
          <Route path="/articles" element={<Articles isGlobal={false} />} />
          <Route path="/global/articles" element={<Articles isGlobal={true} />} />
          
          <Route path="/contact" element={<ContactUs isGlobal={false} />} />
          <Route path="/global/contact" element={<ContactUs isGlobal={true} />} />
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
