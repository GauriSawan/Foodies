import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { title: "COMPANY", links: ["Home", "About us", "Delivery", "Privacy policy"] },
    { title: "GET IN TOUCH", links: ["+971-558730493", "contact@foodie.com"] }
  ];

  const socialIcons = [
    { icon: assets.facebook_icon, name: "Facebook" },
    { icon: assets.twitter_icon, name: "Twitter" },
    { icon: assets.linkedin_icon, name: "LinkedIn" },
    { icon: assets.instagram_icon, name: "Instagram" }
  ];

  return (
    <div className='footer' id='footer'>
      <div className="footer-wave"></div>
      
      <div className="footer-content">
        <motion.div 
          className="footer-content-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.img 
            src={assets.logo} 
            alt="Company Logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          
          <div className="footer-social-icons">
            {socialIcons.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  title={social.name}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {footerLinks.map((section, index) => (
          <motion.div
            key={index}
            className={`footer-content-${index === 0 ? 'center' : 'right'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2>{section.title}</h2>
            <ul>
              {section.links.map((link, linkIndex) => (
                <motion.li
                  key={linkIndex}
                  whileHover={{ x: 5, color: "#FF6B6B" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {link}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.hr
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <motion.p 
        className="footer-copyright"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Copyright {currentYear} © gaurisawant - All Rights Reserved.
      </motion.p>

      <div className="footer-back-to-top">
        <motion.a 
          href="#home"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={assets.arrow_up} alt="Back to top" />
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;