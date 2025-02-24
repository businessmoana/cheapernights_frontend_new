import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <motion.div
      className="w-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen flex flex-col items-center justify-between">
        <Navbar />
        <div
          className="w-full 2xl:px-[15vw] px-[15px] md:pt-[100px] pt-[60px] flex flex-col justify-center items-center"
          style={{ background: "linear-gradient(to bottom, #F5F5F5, #ffffff)" }}
        >
          {children}
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Layout;
