import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginPopup = ({ setShowLogin }) => {
    const { setToken, url, loadCartData } = useContext(StoreContext);
    const [currState, setCurrState] = useState("Sign Up");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    };

    const onLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            let new_url = url;
            if (currState === "Login") {
                new_url += "/api/user/login";
            } else {
                new_url += "/api/user/register";
            }

            const response = await axios.post(new_url, data);
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                loadCartData({ token: response.data.token });
                setShowLogin(false);
                toast.success(`Welcome ${response.data.user?.name || ''}!`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                });
            } else {
                toast.error(response.data.message, {
                    position: "top-center",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.", {
                position: "top-center",
                autoClose: 3000,
            });
        } finally {
            setIsLoading(false);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <motion.div
            className='login-popup'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.form
                onSubmit={onLogin}
                className="login-popup-container"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="login-popup-title">
                    <motion.h2
                        key={currState}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {currState}
                    </motion.h2>
                    <motion.img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt="Close"
                        whileHover={{ rotate: 90, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    />
                </div>

                <div className="login-popup-inputs">
                    <AnimatePresence mode="wait">
                        {currState === "Sign Up" && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <input
                                    name='name'
                                    onChange={onChangeHandler}
                                    value={data.name}
                                    type="text"
                                    placeholder='Your name'
                                    required
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <input
                        name='email'
                        onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        placeholder='Your email'
                        required
                    />

                    <div className="password-input-container">
                        <input
                            name='password'
                            onChange={onChangeHandler}
                            value={data.password}
                            type={showPassword ? "text" : "password"}
                            placeholder='Password'
                            required
                        />
                        <span
                            className="password-toggle-icon"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? (
                                <img src={assets.eye_open} alt="Hide password" />
                            ) : (
                                <img src={assets.eye_close} alt="Show password" />
                            )}
                        </span>
                    </div>
                </div>

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="spinner"></div>
                    ) : (
                        currState === "Login" ? "Login" : "Create account"
                    )}
                </motion.button>

                <div className="login-popup-condition">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms">By continuing, I agree to the <a href="#">terms of use</a> & <a href="#">privacy policy</a>.</label>
                </div>

                <motion.div
                    className="toggle-auth-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {currState === "Login" ? (
                        <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
                    ) : (
                        <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
                    )}
                </motion.div>
            </motion.form>
        </motion.div>
    );
};

export default LoginPopup;