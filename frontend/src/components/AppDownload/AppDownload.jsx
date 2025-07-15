import React from 'react';
import { motion } from 'framer-motion';
import './AppDownload.css';
import { assets } from '../../assets/assets';
import appScreenshot from '../../assets/app_screenshot.jpg';

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <div className="app-download-container">
                <motion.div 
                    className="phone-mockup"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="screen">
                        <img src={appScreenshot} alt="App Screenshot" />
                    </div>
                </motion.div>

                <div className="app-download-content">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        For Better Experience Download <br />
                        <span className="highlight">Tomato App</span>
                    </motion.p>

                    <motion.div 
                        className="app-download-platforms"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.img 
                            src={assets.play_store} 
                            alt="Google Play Store" 
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        />
                        <motion.img 
                            src={assets.app_store} 
                            alt="Apple App Store" 
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        />
                    </motion.div>

                    <motion.div 
                        className="app-features"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="feature">
                            <img src={assets.fast_icon} alt="Fast" />
                            <span>Fast Delivery</span>
                        </div>
                        <div className="feature">
                            <img src={assets.discount_icon} alt="Discount" />
                            <span>Exclusive Offers</span>
                        </div>
                        <div className="feature">
                            <img src={assets.tracking_icon} alt="Tracking" />
                            <span>Real-time Tracking</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default AppDownload;