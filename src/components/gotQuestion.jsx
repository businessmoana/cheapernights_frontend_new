import React from "react";
import { motion } from "framer-motion";
import QuestionMark from "./icons/questionMark";

const GotQuestion = () => {
  return (
    <motion.div 
      className="md:my-[150px] my-[60px] w-full flex gap-[40px] justify-center items-center 2xl:ps-[50px] ps-[20px] 2xl:pe-[50px] pe-[20px] rounded-[20px] bg-[#FF4757]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <QuestionMark className="lg:w-[250px] w-[200px] h-[300px] md:block hidden" />
      <div className="flex-1 flex flex-col justify-center items-center pt-[40px] pb-5 md:block">
        <motion.div 
          className="text-4xl font-semibold text-white mb-[10px]"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Got questions?
        </motion.div>
        <motion.div 
          className="text-lg font-semibold md:mb-10 mb-[25px] text-white"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We'd love to hear from you—whether you need support, want to connect
          with our founders, or just want to say hello!
        </motion.div>
        <div className="flex row:gap-[20px] md:flex-row flex-col gap-[10px] ">
          <motion.div 
            className="cursor-pointer rounded-[10px] py-[10px] px-10 text-[#FF4757] bg-white font-semibold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/help">Visit our Help page</a>
          </motion.div>
          <motion.div 
            className="cursor-pointer rounded-[10px] py-[10px] px-10 border border-white text-[#ffffff] font-semibold text-lg text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="/contact-us">Contact Us</a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GotQuestion;