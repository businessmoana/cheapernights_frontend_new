import React, { useState } from "react";
import Layout from "../components/Layout";
import { FaPlus, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
const generalFaqImageUrl = "/assets/images/general-faq.png";
const travelerFaqImageUrl = "/assets/images/traveler-faq.png";
const hostFaqImageUrl = "/assets/images/host-faq.png";

import faqs from "../constant/faqs";

const HelpPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <Layout>
      <motion.div 
        className="w-full md:pt-[50px] pt-[40px] md:pb-[60px] pb-[40px] md:text-center text-left md:text-4xl text-2xl font-semibold text-[#57606F]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Help
      </motion.div>
      <div className="w-full flex justify-between items-center md:mb-[80px] mb-[60px]">
        <motion.div 
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={generalFaqImageUrl}
            alt=""
            className="md:w-[120px] md:h-[120px] w-20 h-20"
          />
          <div className="md:w-[250px] w-[107px] text-center text-[#FF4757] font-semibold text-base mt-5">
            General
            <br className="block md:hidden" /> questions
          </div>
        </motion.div>
        <motion.div 
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={travelerFaqImageUrl}
            alt=""
            className="md:w-[120px] md:h-[120px] w-20 h-20"
          />
          <div className="md:w-[250px] w-[107px] text-center text-[#FF4757] font-semibold text-base mt-5">
            Traveler
            <br className="block md:hidden" /> FAQ
          </div>
        </motion.div>
        <motion.div 
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src={hostFaqImageUrl}
            alt=""
            className="md:w-[120px] md:h-[120px] w-20 h-20"
          />
          <div className="md:w-[250px] w-[107px] text-center text-[#FF4757] font-semibold text-base mt-5">
            Host
            <br className="block md:hidden" /> FAQ
          </div>
        </motion.div>
      </div>
      <motion.h2 
        className="w-full md:text-center md:text-4xl text-[24px] text-[#57606F] font-semibold md:mb-[60px] mb-[30px]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        General questions
      </motion.h2>
      <div className="faq-list space-y-4 w-full border-t pt-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index} 
            className="faq-item border-b pb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-semibold md:text-xl text-lg text-[#57606F]">
                {faq.question}
              </h3>
              {activeIndex === index ? (
                <FaTimes className="md:w-[20px] w-[16px] md:h-[20px] h-[16px]" color="#57606F" />
              ) : (
                <FaPlus className="md:w-[20px] w-[16px] md:h-[20px] h-[16px]" color="#57606F" />
              )}
            </div>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div 
                  className="text-[#57606F] text-lg mt-5"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="md:text-4xl text-2xl font-semibold text-[#FF4757] md:mt-[90px] mt-[60px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Still have questions?
      </motion.div>
      <motion.div 
        className="md:mt-[30px] mt-5 md:mb-[150px] mb-[60px] text-lg font-semibold text-white py-[10px] px-[40px] rounded-[10px] bg-[#FF4757] cursor-pointer w-full md:w-fit text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a href="/contact-us">Contact Us</a>
      </motion.div>
    </Layout>
  );
};

export default HelpPage;