'use client'
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShow(false);
      } else {
        // Scrolling up
        setShow(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (show) {
      controls.start({  y: 0 });
    } else {
      controls.start({  y: '-100%' });
    }
  }, [show, controls]);

  return (
    <motion.div
      className='h-28 w-full m-auto fixed flex items-center top-0 z-50'
      animate={controls}
      transition={{ duration: 0.3 }}
    >
      <div className='flex items-center justify-between w-[90%] m-auto font-semibold'>
        <div className='w-44 border bg-[#e6d3b0] text-black h-14 rounded-full flex justify-center items-center'>LOGO</div>
        <div className='w-[30vw] bg-[#e6d3b0] text-black border h-14 rounded-full flex justify-center items-center'>
          <div className="flex justify-around w-full">
            <span>ABOUT</span>
            <span>WORKS</span>
            <span>CONNECT</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
