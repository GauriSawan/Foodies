import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import './ExploreMenu.css';
import { StoreContext } from '../../Context/StoreContext';

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='explore-menu'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="explore-menu-header"
      >
        <h1>Explore our <span className="highlight">delicious</span> menu</h1>
        <p className='explore-menu-text'>
          Choose from a diverse menu featuring a delectable array of dishes.
        </p>
      </motion.div>

      <div className="explore-menu-scroll-container">
        <div className="explore-menu-list">
          {menu_list.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
              className={`explore-menu-list-item ${category === item.menu_name ? 'active' : ''}`}
            >
              <div className="image-container">
                <motion.img
                  src={item.menu_image}
                  alt={item.menu_name}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                {category === item.menu_name && (
                  <motion.div 
                    className="active-indicator"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </div>
              <p>{item.menu_name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.hr 
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default ExploreMenu;