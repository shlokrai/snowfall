import React, { useState, useEffect, useRef } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import GlobalSnowfall from './components/GlobalSnowfall';
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
  const [isSnowingGlobally, setIsSnowingGlobally] = useState(false);
  const [transitionState, setTransitionState] = useState('');
  const prevIsGlobal = useRef(isGlobal);

  useEffect(() => {
    // Only trigger loading screen when switching between Indian and Global verticals
    if (prevIsGlobal.current !== isGlobal) {
      setTransitionState(isGlobal ? 'to-global' : 'to-indian');
      setIsLoading(true);
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500); // 2.5 seconds to feel smooth but not too long
      
      prevIsGlobal.current = isGlobal;
      return () => clearTimeout(timer);
    }
  }, [isGlobal]);

  return (
    <div className={`flex flex-col min-h-screen font-sans bg-gray-50 text-gray-900 ${isGlobal ? 'global-theme' : ''}`}>
      {isSnowingGlobally && <GlobalSnowfall />}
      {isLoading && <LoadingScreen transitionState={transitionState} />}
      <Header isSnowingGlobally={isSnowingGlobally} toggleSnowfall={() => setIsSnowingGlobally(!isSnowingGlobally)} />
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
