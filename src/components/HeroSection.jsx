import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroImageUrl = "/assets/images/hero-image.png";
const SiteListImageUrl = "/assets/images/site-list.png";
const SiteListMobileImageUrl = "/assets/images/site-list-mobile.png";
import SearchIcon from "./icons/searchIcon";
import axios from "axios";
import { useSearchContext } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate()
  const [ipAddress, setIpAddress] = useState(null);
  const [url, setUrl] = useState("");
  const { setIsLoading, setError, setResult } = useSearchContext(); 
  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    fetchIpAddress();
  }, []);

  const handleSubmit = async (e) => {
    if (url) {
      setIsLoading(true);
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/googleSearch`,
          {
            searchText: url,
            ipAddress: ipAddress,
          }
        );
        if (response.data.status == "success") {
          setResult(response.data);
          navigate("/searchResult");
        } else {
          setResult(null);
        }
        setError('');
        setIsLoading(false);
      } catch (error) {
        setError("There was an error making the request"); // Set error message
        setIsLoading(false);
        console.error("There was an error making the request:", error);
      }
    }
  };

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
            onChange={handleInputChange}
            className="block w-full h-full p-4 ps-10 text-xl text-[#57606F]  border-gray-300 rounded-[20px] outline-none"
            placeholder="Paste your listing URL from any of our supported booking platforms"
            required
          />
          <SearchIcon
            className="absolute top-[10px] right-[10px] cursor-pointer"
            width={60}
            height={60}
            onClick={()=> {
              handleSubmit()
            }}
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