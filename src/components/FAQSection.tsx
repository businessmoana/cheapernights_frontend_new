import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the purpose of this website?",
      answer:
        "This website serves as a platform to share knowledge and insights through blog posts.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact support through the Help page or by emailing support@example.com.",
    },
    {
      question: "Where can I find the latest updates?",
      answer:
        "Latest updates can be found in the Latest News section on the main page.",
    },
    {
      question: "Can I contribute to the blog?",
      answer:
        "Yes, we welcome contributions! Please reach out via the contact form on the Help page.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section md:py-[150px] py-[40px] lg:px-[21vw] px-[15px] flex flex-col items-center justify-center">
      <h2 className="text-4xl text-[#57606F] font-semibold mb-[60px]">
        Frequently Asked Questions
      </h2>
      <div className="faq-list space-y-4 w-full border-t pt-4">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item border-b pb-4">
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
            {activeIndex === index && (
              <p className="text-[#57606F] text-lg mt-5">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-[60px] text-lg font-semibold text-white py-[10px] px-[40px] rounded-[10px] bg-[#FF4757] cursor-pointer">
        <a href="/help">All FAQs</a>
      </div>
    </div>
  );
};

export default FAQSection;
