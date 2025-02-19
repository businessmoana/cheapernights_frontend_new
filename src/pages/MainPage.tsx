import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DetailSection from '../components/DetailSection';
import LatestNews from '../components/LatestNews';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import GoToTopButton from '../components/GoToTopButton';

const MainPage: React.FC = () => {
    return (
        <div className='w-screen'>
            <Navbar />
            <HeroSection />
            <DetailSection />
            <LatestNews />
            <FAQSection />
            <Footer />
            <GoToTopButton/>
        </div>
    );
};

export default MainPage;