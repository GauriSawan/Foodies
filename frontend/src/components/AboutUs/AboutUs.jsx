import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.css';
import { assets } from '../../assets/assets';

const AboutUs = () => {
  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '50+', label: 'Professional Chefs' },
    { number: '100+', label: 'Menu Items' },
    { number: '5', label: 'Years Experience' }
  ];

  const team = [
    { name: 'John Smith', role: 'Head Chef', image: assets.chef1 },
    { name: 'Sarah Johnson', role: 'Pastry Chef', image: assets.chef2 },
    { name: 'Michael Chen', role: 'Sous Chef', image: assets.chef3 }
  ];

  return (
    <div className='about-us' id='about-us'>
      <motion.div
        className="about-hero"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our <span className="highlight">Story</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Delivering delicious meals with love since 2018
          </motion.p>
        </div>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-mission"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Mission</h2>
          <p>
            At Tomato, we're passionate about bringing people together through delicious food.
            Our mission is to provide high-quality, authentic meals made with fresh ingredients
            and served with exceptional hospitality.
          </p>
          <p>
            We believe food should be an experience, not just a meal. That's why we carefully
            source our ingredients and prepare each dish with attention to detail.
          </p>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

        </motion.div>
      </div>

      <div className="about-stats">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="about-team">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meet Our <span className="highlight">Team</span>
        </motion.h2>

        <div className="team-members">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={assets.facebook_icon} alt="Facebook" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={assets.twitter_icon} alt="Twitter" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={assets.instagram_icon} alt="Instagram" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;