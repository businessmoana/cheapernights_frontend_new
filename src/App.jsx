import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import MainPage from "./pages/MainPage";
import SearchResultPage from "./pages/SearchResultPage";
import AboutUsPage from "./pages/AboutUsPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import HelpPage from "./pages/HelpPage";
import ContactUsPage from "./pages/ContactUsPage";
import TermServicePage from "./pages/TermServicePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import PageNotFound from "./components/PageNotFound";
import { SearchProvider } from "./context/SearchContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <SearchProvider>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/searchResult" element={<SearchResultPage />} />
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
    </SearchProvider>
  );
}

export default App;
