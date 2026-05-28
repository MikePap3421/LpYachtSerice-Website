import './App.css'
import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';

const Home          = lazy(() => import('./components/Home'));
const Services      = lazy(() => import('./components/Services'));
const Projects      = lazy(() => import('./components/Projects'));
const Contact       = lazy(() => import('./components/Contact'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const NotFound      = lazy(() => import('./components/NotFound'));

const PageLoader = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f2f2f3',
    }}
  >
    <div
      style={{
        width: 40,
        height: 40,
        border: '3px solid rgba(39,70,136,0.15)',
        borderTop: '3px solid #274688',
        borderRadius: '50%',
        animation: 'lp-spin 0.8s linear infinite',
      }}
    />
    <style>{`@keyframes lp-spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <>
      <ScrollToTop />
      <CookieBanner />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/privacy"  element={<PrivacyPolicy />} />
          <Route path="*"         element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;