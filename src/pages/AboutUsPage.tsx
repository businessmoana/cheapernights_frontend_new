import React from "react";
import { motion } from "framer-motion";
const aboutUsImageUrl = "/assets/images/about-us.png";
import GotQuestion from "../components/gotQuestion";
import Layout from "../components/Layout";

const AboutUsPage = () => {
  return (
    <Layout>
      <motion.div 
        className="w-full md:pt-[50px] pt-[40px] md:pb-[60px] pb-[40px] md:text-center text-left md:text-4xl text-2xl font-semibold text-[#57606F]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.div>
      <div className="w-full pt-5 md:px-10 text-[#57606F] flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-[108px]">
        <motion.img 
          src={aboutUsImageUrl} 
          alt="" 
          className="max-w-[580px] h-auto lg:w-[43%] w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <div className="flex flex-col gap-[20px]">
          <motion.div 
            className="font-semibold md:text-[30px] text-[24px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why pay more on your next vacation rental booking?
          </motion.div>
          <motion.div 
            className="md:text-[24px] text-[18px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cheapernights.com is on a mission to save guests money on their next
            vacation rental, either through direct bookings or by identifying
            the cheapest listing available across multiple 3rd party platforms.
          </motion.div>
          <motion.div 
            className="md:text-[24px] text-[18px]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Founded by vacation rental owners who were losing out on income from
            the 15-25% in commissions charged by booking platforms,
            cheapernights.com is the only comprehensive price checking
            application on the internet today.
          </motion.div>
        </div>
      </div>
      <GotQuestion />
    </Layout>
  );
};

export default AboutUsPage;