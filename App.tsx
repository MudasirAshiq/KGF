import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './Home';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Helper component to scroll to top on route change
const ScrollToTopWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTopWrapper>
        <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-stone-50 selection:bg-emerald-200">
          <Navigation />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/terms-of-service" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ScrollToTopWrapper>
    </Router>
  );
};

export default App;