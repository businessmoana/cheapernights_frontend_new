import React from "react";
import QuestionMark from "./icons/questionMark";

const GotQuestion = () => {
  return (
    <div className="md:my-[150px] my-[60px] w-full flex gap-[40px] justify-center items-center 2xl:ps-[50px] ps-[20px] 2xl:pe-[50px] pe-[20px] rounded-[20px] bg-[#FF4757]">
      <QuestionMark className="lg:w-[250px] w-[200px] h-[300px] md:block hidden" />
      <div className="flex-1 flex flex-col justify-center items-center pt-[40px] pb-5 md:block">
        <div className="text-4xl font-semibold text-white mb-[10px]">Got questions?</div>
        <div className="text-lg font-semibold md:mb-10 mb-[25px] text-white">
          We'd love to hear from you—whether you need support, want to connect
          with our founders, or just want to say hello!
        </div>
        <div className="flex row:gap-5 md:flex-row flex-col gap-[10px] ">
          <div className="cursor-pointer rounded-[10px] py-[10px] px-10 text-[#FF4757] bg-white font-semibold text-lg">
            <a href="/help">Visit our Help page</a>
          </div>
          <div className="cursor-pointer rounded-[10px] py-[10px] px-10 border border-white text-[#ffffff] font-semibold text-lg text-center">
            <a href="/contact-us">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GotQuestion;
