import React, { useContext, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  // Memoized nav items
  const navItems = React.useMemo(() => [
    { path: "/", name: "home", label: "Home" },
    { hash: "#explore-menu", name: "menu", label: "Menu" },
    { hash: "#about-us", name: "about", label: "About Us" },
    { hash: "#blog", name: "blog", label: "Blog" },
    { hash: "#contact-us", name: "contact", label: "Contact Us" },
    { hash: "#app-download", name: "mob-app", label: "Mobile App" }
  ], []);

  // Memoized getActiveMenu with location dependency
  const getActiveMenu = useCallback(() => {
    const path = location.pathname;
    const hash = location.hash.toLowerCase();

    if (path === '/') {
      if (hash === '#explore-menu') return 'menu';
      if (hash === '#app-download') return 'mob-app';
      if (hash === '#contact-us') return 'contact';
      if (hash === '#about-us') return 'about';
      if (hash === '#blog') return 'blog';
      return 'home';
    }
    if (path === '/aboutus') return 'about';
    if (path === '/blog') return 'blog';
    if (path === '/profile') return 'profile';
    if (path === '/settings') return 'settings';
    if (path === '/myorders') return 'orders';
    if (path.startsWith('/search')) return '';
    return '';
  }, [location]);

  const [activeMenu, setActiveMenu] = useState(getActiveMenu());

  // Update activeMenu on location change
  useEffect(() => {
    setActiveMenu(getActiveMenu());
  }, [getActiveMenu]);

  // Scroll listener for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy to update active menu on scroll (only on home page)
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 150;

      let currentActive = 'home';

      navItems.forEach(({ hash, name }) => {
        if (hash) {
          const section = document.querySelector(hash);
          if (section && section.offsetTop <= scrollPos) {
            currentActive = name;
          }
        }
      });

      if (activeMenu !== currentActive) {
        setActiveMenu(currentActive);
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();

    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, [location.pathname, activeMenu, navItems]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
    setShowMobileMenu(false);
    setShowProfileDropdown(false);
  };

  const closeAllMenus = () => {
    setShowMobileMenu(false);
    setShowProfileDropdown(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      closeAllMenus();
    }
  };

  const handleAnchorClick = (e, hash) => {
    e.preventDefault();
    closeAllMenus();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: hash } });
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.querySelector(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <motion.div 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="navbar-left">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link to="/" onClick={closeAllMenus}>
              <img className="logo" src={assets.logo} alt="Tomato Logo" />
            </Link>
          </motion.div>
          
          <ul className="navbar-menu">
            {navItems.map((item, index) => (
              <motion.li 
                key={index}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.path ? (
                  <Link 
                    to={item.path} 
                    onClick={() => {
                      setActiveMenu(item.name);
                      closeAllMenus();
                    }} 
                    className={`${activeMenu === item.name ? "active" : ""}`}
                  >
                    {item.label}
                    {activeMenu === item.name && (
                      <motion.div 
                        className="underline"
                        layoutId="underline"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                ) : (
                  <a 
                    href={item.hash}
                    onClick={(e) => {
                      handleAnchorClick(e, item.hash);
                      setActiveMenu(item.name);
                    }}
                    className={`${activeMenu === item.name ? "active" : ""}`}
                  >
                    {item.label}
                    {activeMenu === item.name && (
                      <motion.div 
                        className="underline"
                        layoutId="underline"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </a>
                )}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="navbar-right">
          <form onSubmit={handleSearch} className="search-container">
            <img src={assets.search_icon} alt="Search" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link to="/cart" className="navbar-cart-icon" onClick={closeAllMenus}>
              <img src={assets.basket_icon} alt="Cart" />
              {getTotalCartAmount() > 0 && (
                <motion.div 
                  className="cart-dot"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <span>{getTotalCartAmount()}</span>
                </motion.div>
              )}
            </Link>
          </motion.div>

          {!token ? (
            <motion.button
              onClick={() => {
                setShowLogin(true);
                closeAllMenus();
              }}
              className="signin-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Sign In</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          ) : (

          //   <div className="navbar-profile">
          //   <img src={assets.profile_icon} alt="" />
          //   <ul className="nav-profile-dropdown">
          //     <li onClick={()=>navigate("/myorders")}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
          //     <hr />
          //     <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          //   </ul>
          // </div>

            <div className="navbar-profile">
              <motion.img 
                src={assets.profile_icon} 
                alt="Profile" 
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              />
              
                {showProfileDropdown && (
                  <motion.ul 
                    className="navbar-profile-dropdown"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.li 
                      onClick={() => { 
                        navigate('/myorders'); 
                        closeAllMenus(); 
                      }}
                      whileHover={{ x: 5 }}
                    >
                      <img src={assets.orders_icon} alt="My Orders" /> <p>My Orders</p>
                    </motion.li>
                    <motion.li 
                      onClick={logout}
                      whileHover={{ x: 5 }}
                    >
                      <img src={assets.logout_icon} alt="Logout" /> <p>Logout</p>
                    </motion.li>
                  </motion.ul>
                )}
              
            </div>
          )}

          {/* Hamburger menu for mobile */}
          <div className="hamburger-menu" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <div className={`bar ${showMobileMenu ? 'open' : ''}`}></div>
            <div className={`bar ${showMobileMenu ? 'open' : ''}`}></div>
            <div className={`bar ${showMobileMenu ? 'open' : ''}`}></div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      onClick={() => {
                        setActiveMenu(item.name);
                        setShowMobileMenu(false);
                      }}
                      className={activeMenu === item.name ? "active" : ""}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a 
                      href={item.hash}
                      onClick={(e) => {
                        handleAnchorClick(e, item.hash);
                        setActiveMenu(item.name);
                        setShowMobileMenu(false);
                      }}
                      className={activeMenu === item.name ? "active" : ""}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
              {!token ? (
                <li>
                  <button 
                    onClick={() => {
                      setShowLogin(true);
                      setShowMobileMenu(false);
                    }}
                    className="signin-btn"
                  >
                    Sign In
                  </button>
                </li>
              ) : (
                <>
                  <li onClick={() => {navigate('/myorders'); setShowMobileMenu(false);}}>My Orders</li>
                  <li onClick={() => {logout(); setShowMobileMenu(false);}}>Logout</li>
                </>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
