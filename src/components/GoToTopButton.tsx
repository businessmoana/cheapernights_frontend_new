import React, { useState, useEffect } from 'react';

const GoToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4">
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="w-10 h-10 bg-[#FF4757] text-white rounded-full shadow-lg text-xl"
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default GoToTopButton;