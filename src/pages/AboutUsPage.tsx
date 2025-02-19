import React from "react";
const aboutUsImageUrl = "/assets/images/about-us.png";
import GotQuestion from "../components/gotQuestion";
import Layout from "../components/Layout";
const AboutUsPage = () => {
  return (
    <Layout>
      <div className="w-full md:pt-[50px] pt-[40px] md:pb-[60px] pb-[40px] md:text-center text-left md:text-4xl text-2xl font-semibold text-[#57606F]">
        About Us
      </div>
      <div className="w-full pt-5 md:px-10 text-[#57606F] flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-[108px]">
        <img src={aboutUsImageUrl} alt="" className="max-w-[580px] h-auto lg:w-[43%] w-full" />
        <div className="flex flex-col gap-5">
          <div className="font-semibold text-[30px]">
            Why pay more on your next vacation rental booking?
          </div>
          <div className="text-[24px]">
            Cheapernights.com is on a mission to save guests money on their next
            vacation rental, either through direct bookings or by identifying
            the cheapest listing available across multiple 3rd party platforms.
          </div>
          <div className="text-[24px]">
            Founded by vacation rental owners who were losing out on income from
            the 15-25% in commissions charged by booking platforms,
            cheapernights.com is the only comprehensive price checking
            application on the internet today.
          </div>
        </div>
      </div>
      <GotQuestion />
    </Layout>
  );
};

export default AboutUsPage;
