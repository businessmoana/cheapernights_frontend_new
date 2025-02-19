import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "./icons/footerLogo";
import FaceBook from "./icons/facebook";
import Twitter from "./icons/twitter";
import Linkein from "./icons/linkedin";
import Instagram from "./icons/instagram";
import Youtube from "./icons/youtube";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white 2xl:px-[285px] px-[15px]">
      <div className="w-full flex lg:flex-row flex-col gap-[20px] justify-between items-center py-[50px] border-b-[1px] border-[#57606F]">
        <Link to="/">
          <FooterLogo className="md:w-[350px] md:h-[50px] w-[245px] h-[35px]" />
        </Link>
        <div className="flex md:flex-row flex-col md:gap-[60px] gap-[10px] justify-center items-center">
          <div className="flex gap-5 text-sm font-semibold">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
            <Link to="/blog" className="hover:underline">
              Blog
            </Link>
            <Link to="/help" className="hover:underline">
              Help
            </Link>
            <Link to="/contact-us" className="hover:underline">
              Contact Us
            </Link>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              <FaceBook className="w-[30px] h-[30px]" />
            </a>
            <a href="#" className="hover:underline">
              <Twitter className="w-[30px] h-[30px]" />
            </a>
            <a href="#" className="hover:underline">
              <Linkein className="w-[30px] h-[30px]" />
            </a>
            <a href="#" className="hover:underline">
              <Instagram className="w-[30px] h-[30px]" />
            </a>
            <a href="#" className="hover:underline">
              <Youtube className="w-[30px] h-[30px]" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-[13px] text-[#CED6E0] py-[15px] flex md:flex-row flex-col gap-[10px] md:justify-between justify-center items-center">
        <div>© 2025 Cheapernights.com. All rights reserved. </div>
        <Link to="/term" className="hover:underline">
          CTerms of Service Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
