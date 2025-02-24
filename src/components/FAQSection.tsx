import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import faqs from "../constant/faqs";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section md:py-[150px] py-[40px] lg:px-[21vw] px-[15px] flex flex-col items-center justify-center">
      <h2 className="text-4xl text-[#57606F] font-semibold mb-[60px]">
        Frequently Asked Questions
      </h2>
      <div className="faq-list space-y-4 w-full border-t pt-4">
        {faqs.slice(0, 5).map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            index={index}
            activeIndex={activeIndex}
            toggleFAQ={toggleFAQ}
          />
        ))}
      </div>
      <div className="mt-[60px] text-lg font-semibold text-white py-[10px] px-[40px] rounded-[10px] bg-[#FF4757] cursor-pointer">
        <a href="/help">All FAQs</a>
      </div>
    </div>
  );
};

const FAQItem = ({ faq, index, activeIndex, toggleFAQ }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="faq-item border-b pb-4"
      initial={false}
      animate={inView ? { opacity: 1, height: "auto" } : {}}
      transition={{ duration: 0.5 }}
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleFAQ(index)}
      >
        <h3 className="font-semibold text-xl text-[#57606F]">
          {faq.question}
        </h3>
        {activeIndex === index ? (
          <FaTimes className="w-[20px] h-[20px]" color="#57606F" />
        ) : (
          <FaPlus className="w-[20px] h-[20px]" color="#57606F" />
        )}
      </div>
      <motion.div
        initial={false}
        animate={activeIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <motion.p
          className="text-[#57606F] text-lg mt-5"
          initial={false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {faq.answer}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default FAQSection;