import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DetailSection from "../components/DetailSection";
import LatestNews from "../components/LatestNews";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import GoToTopButton from "../components/GoToTopButton";
import { useSearchContext } from "../context/SearchContext"; // Import the context
import { CSpinner } from "@coreui/react";

const MainPage = () => {
  const { isLoading } = useSearchContext(); // Use the context

  return (
    <motion.div
      className={`w-screen ${isLoading ? "overflow-hidden h-screen" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      {isLoading && (
        <div className="spinner w-screen h-screen absolute top-0 left-0 z-[1000] flex justify-center items-center bg-gray-600 bg-opacity-50">
          <div className="flex gap-4 justify-center items-center w-full">
            <CSpinner color="primary" variant="grow" />
            <CSpinner color="secondary" variant="grow" />
            <CSpinner color="success" variant="grow" />
            <CSpinner color="danger" variant="grow" />
            <CSpinner color="warning" variant="grow" />
            <CSpinner color="info" variant="grow" />
            <CSpinner color="light" variant="grow" />
          </div>
        </div>
      )}{" "}
      <HeroSection />
      <DetailSection />
      <LatestNews />
      <FAQSection />
      <Footer />
      <GoToTopButton />
    </motion.div>
  );
};

export default MainPage;
