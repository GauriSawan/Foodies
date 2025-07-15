import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredItems = food_list.filter(item => 
    category === "All" || category === item.category
  );

  return (
    <div className='food-display' id='food-display'>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="highlight">Top dishes</span> near you
      </motion.h2>

      {filteredItems.length === 0 ? (
        <motion.div 
          className="no-items-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img src="/empty-plate.png" alt="No items" />
          <p>No dishes available in this category yet</p>
        </motion.div>
      ) : (
        <motion.div 
          className='food-display-list'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <FoodItem 
                image={item.image} 
                name={item.name} 
                desc={item.description} 
                price={item.price} 
                id={item._id}
                category={item.category}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default FoodDisplay;