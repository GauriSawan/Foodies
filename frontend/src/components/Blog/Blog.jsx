import React from 'react';
import { motion } from 'framer-motion';
import './Blog.css';
import { assets } from '../../assets/assets';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Perfect Pizza Dough',
      excerpt: 'Learn the secrets to making restaurant-quality pizza dough at home.',
      date: 'May 15, 2023',
      image: assets.blog1,
      category: 'Recipes'
    },
    {
      id: 2,
      title: 'Top 10 Healthy Eating Tips',
      excerpt: 'Simple changes you can make for a healthier lifestyle without sacrificing flavor.',
      date: 'April 28, 2023',
      image: assets.blog2,
      category: 'Nutrition'
    },
    {
      id: 3,
      title: 'Seasonal Ingredients to Try This Summer',
      excerpt: 'Discover the best seasonal produce and how to use them in your cooking.',
      date: 'June 2, 2023',
      image: assets.blog3,
      category: 'Seasonal'
    }
  ];

  return (
    <div className='blog' id='blog'>
      <motion.div 
        className="blog-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>Our <span className="highlight">Blog</span></h1>
        <p>Discover recipes, tips, and stories from our culinary team</p>
      </motion.div>

      <div className="blog-categories">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Posts
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Recipes
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Nutrition
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Seasonal
        </motion.button>
      </div>

      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <motion.div 
            key={post.id}
            className="blog-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-category">{post.category}</span>
            </div>
            <div className="blog-content">
              <div className="blog-date">{post.date}</div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="blog-newsletter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Subscribe to Our Newsletter</h2>
        <p>Get the latest recipes and cooking tips delivered to your inbox</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Blog;