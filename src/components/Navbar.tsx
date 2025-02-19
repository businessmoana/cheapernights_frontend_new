import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavLogo from './icons/navLogo';
import MobileMenu from './MobileMenu';

const Navbar: React.FC = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const getLinkClass = (path: string) => {
        return location.pathname === path ? 'text-[#FF4757]' : 'hover:text-gray-400';
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`z-50 fixed top-0 w-full flex items-center justify-between md:py-5 md:px-[60px] py-[14px] px-[15px] bg-white text-[#57606F] font-semibold text-[18px] ${isScrolled ? 'shadow-md' : ''}`}>
            <div className="flex items-center">
                <Link to="/">
                    <NavLogo width={350} height={50} className="md:w-[350px] md:h-[50px] w-[224px] h-[32px]" />
                </Link>
            </div>
            <div className="hidden md:flex gap-[30px]">
                <ul className="flex gap-[30px]">
                    <li>
                        <Link to="/" className={getLinkClass('/')}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className={getLinkClass('/about')}>About Us</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={getLinkClass('/blog')}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/help" className={getLinkClass('/help')}>Help</Link>
                    </li>
                    <li>
                        <Link to="/contact-us" className={getLinkClass('/contact-us')}>Contact Us</Link>
                    </li> 
                </ul>
            </div>
            <div className="md:hidden">
                <button onClick={() => setIsMobileMenuOpen(true)} className="text-2xl">&#9776;</button>
            </div>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        </nav>
    );
};

export default Navbar;