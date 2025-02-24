import React from "react";
import { motion } from "framer-motion";

const HeroImageUrl = "/assets/images/hero-image.png";
const SiteListImageUrl = "/assets/images/site-list.png";
const SiteListMobileImageUrl = "/assets/images/site-list-mobile.png";
import SearchIcon from "./icons/searchIcon";

const HeroSection: React.FC = () => {
  return (
    <div className="md:mt-[90px] mt-[60px] w-full flex flex-col items-center justify-center pt-[100px] relative">
      <motion.div
        className="absolute w-full top-0 left-0 md:h-[calc(100%-50px)] h-[calc(100%-70px)] z-0"
        style={{
          backgroundImage: `url(${HeroImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>
      <motion.div
        className="z-10 flex flex-col items-center justify-center w-full"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-white font-medium md:text-[30px] text-[20px] md:leading-[40px] leading-[25px] text-center">
          The AI powered vacation <br className="block sm:hidden" /> rental
          price checker
        </div>
        <div className="mt-[20px] md:mt-[30px] text-[#FF4757] leading-[50px] text-[48px] md:leading-[70px] md:text-[70px] font-bold text-center">
          Save up to 25%
        </div>
        <div className="text-white text-[40px] md:text-[60px] leading-[50px] md:leading-[70px] font-bold text-center">
          on your next <br className="block sm:hidden" />
          vacation rental
        </div>
        <div className="relative h-20 w-[80%] mt-[50px] md:mt-[60px]">
          <input
            type="search"
            id="search"
            className="block w-full h-full p-4 ps-10 text-xl text-[#57606F]  border-gray-300 rounded-[20px] outline-none"
            placeholder="Paste your listing URL from any of our supported booking platforms"
            required
          />
          <SearchIcon
            className="absolute top-[10px] right-[10px]"
            width={60}
            height={60}
          />
        </div>
        <motion.img
          src={SiteListImageUrl}
          alt=""
          className="mt-[20px] w-[1120px] h-[140px] md:block hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src={SiteListMobileImageUrl}
          alt=""
          className="mt-[20px] w-[360px] h-[155px] block md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;