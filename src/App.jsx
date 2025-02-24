import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import MainPage from './pages/MainPage';
import SearchResultPage from './pages/SearchResultPage';
import AboutUsPage from './pages/AboutUsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import HelpPage from './pages/HelpPage';
import ContactUsPage from './pages/ContactUsPage';
import TermServicePage from './pages/TermServicePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import PageNotFound from './components/PageNotFound';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/term-service" element={<TermServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;