import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DetailSection from '../components/DetailSection';
import LatestNews from '../components/LatestNews';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import GoToTopButton from '../components/GoToTopButton';

const MainPage: React.FC = () => {
    return (
        <motion.div 
            className='w-screen'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Navbar />
            <HeroSection />
            <DetailSection />
            <LatestNews />
            <FAQSection />
            <Footer />
            <GoToTopButton/>
        </motion.div>
    );
};

export default MainPage;