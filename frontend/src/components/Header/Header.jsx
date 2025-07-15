import React, { useEffect, useState } from 'react';
import './Header.css';
import { motion } from 'framer-motion';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='header' id="home">
      <div className='header-overlay'></div>
      
      <motion.div 
        className='header-contents'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h2
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Order your <span className='highlight'>favourite</span> food here
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </motion.p>
        
        <motion.button
          onClick={scrollToMenu}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "#ff6b6b",
            color: "white"
          }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          animate={{
            boxShadow: isHovered 
              ? "0 5px 15px rgba(255, 107, 107, 0.4)" 
              : "0 5px 15px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          View Menu
          <motion.span
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ type: "spring", stiffness: 500 }}
          >
            →
          </motion.span>
        </motion.button>
      </motion.div>
      
      <div className='floating-elements'>
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={i}
            className='floating-element'
            initial={{ y: 0, x: Math.random() * 100 }}
            animate={{ 
              y: [0, 50, 0],
              x: [Math.random() * 50, Math.random() * 50 + 50],
              rotate: [0, Math.random() * 360]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;