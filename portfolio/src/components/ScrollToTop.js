import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ArrowUpCircle } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <Link
          to='home' smooth={true} offset={-70} duration={500}
          className='fixed bottom-10 sm:bottom-2 right-10 cursor-pointer bg-designColor p-3 rounded-full shadow-lg hover:bg-blue-800 transition-all animate-bounce'
        >
          <ArrowUpCircle size={25} className='text-white' strokeWidth={3} />
        </Link>
      )}
    </>
  );
};

export default ScrollToTop;
