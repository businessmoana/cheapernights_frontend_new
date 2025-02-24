import React from 'react';
const HomeImageUrl = "/assets/images/home.png";
const SearchEngineImageUrl = "/assets/images/search-engine.png";
const RankingImageUrl = "/assets/images/ranking.png";
const FirstDetailImageUrl = "/assets/images/detail-1.png";
const SecondDetailImageUrl = "/assets/images/detail-2.png";
import { motion } from 'framer-motion';

const DetailSection: React.FC = () => {
    return (
        <div className='w-full 2xl:px-[315px] px-[15px] flex flex-col md:gap-[150px] gap-[64px]'>
            <motion.div 
                className='w-full flex flex-col md:flex-row justify-center items-center gap-[90px] pt-[80px]'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className='flex flex-row md:flex-col justify-center items-center gap-[30px] max-w-[370px]'>
                    <motion.img 
                        src={HomeImageUrl} 
                        alt="" 
                        className='w-[120px] h-[120px]' 
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className='text-xl text-center font-semibold text-[#57606F]'>Use your preferred booking platform to find your dream stay</div>
                </div>
                <div className='flex flex-row md:flex-col justify-center items-center gap-[30px] max-w-[370px]'>
                    <motion.img 
                        src={SearchEngineImageUrl} 
                        alt="" 
                        className='w-[120px] h-[120px]' 
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className='text-xl text-center font-semibold text-[#57606F]'>Copy the URL of your listing, with the dates and criteria entered, and paste into the cheapernights.com search engine</div>
                </div>
                <div className='flex flex-row md:flex-col justify-center items-center gap-[30px] max-w-[370px]'>
                    <motion.img 
                        src={RankingImageUrl} 
                        alt="" 
                        className='w-[120px] h-[120px]' 
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className='text-xl text-center font-semibold text-[#57606F]'>Select the cheapest booking option available on the internet</div>
                </div>
            </motion.div>

            <motion.div 
                className='w-full flex lg:flex-row flex-col justify-center lg:gap-[110px] gap-[20px] items-center'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.img 
                    src={FirstDetailImageUrl} 
                    className='max:w-[580px] w-full h-auto' 
                    alt="" 
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
                <div>
                    <div className='text-[#57606F] font-semibold text-[36px]'>Get the best price on your vacation rental</div>
                    <div className='text-[#57606F] text-[18px] pt-5'>Save money on your next getaway by finding the best price for your vacation rental. Our tool compares listings across multiple booking platforms like Airbnb, Booking.com, and Vrbo, helping you discover where the same rental is available for less. Don't overpay—get the best deal with ease!</div>
                    <motion.div 
                        className='w-fit mt-10 text-center text-[18px] font-semibold py-[10px] px-20 bg-[#FF4757] text-white rounded-[10px]'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Learn more
                    </motion.div>
                </div>
            </motion.div>

            <motion.div 
                className='w-full flex lg:flex-row flex-col justify-center lg:gap-[110px] gap-[20px] items-center'
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div>
                    <div className='text-[#57606F] font-semibold text-[36px]'>Save money by using with cheapernights.com</div>
                    <div className='text-[#57606F] text-[18px] pt-5'>Save money on your vacation rental by using Cheapernights! Our powerful comparison tool helps you find the best price by checking listings across multiple booking platforms like Airbnb, Booking.com, and Vrbo. Simply paste the rental URL, and we’ll show you where to book for less—so you can enjoy more and spend less on your next trip!</div>
                </div>
                <motion.img 
                    src={SecondDetailImageUrl} 
                    className='max:w-[580px] w-full h-auto' 
                    alt="" 
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                />
            </motion.div>
        </div>
    );
};

export default DetailSection;