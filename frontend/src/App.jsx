import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Shared Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Sidebar from './components/Sidebar/Sidebar';

// User Pages
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './pages/MyOrders/MyOrders';
import Verify from './pages/Verify/Verify';

// Admin Pages
import Add from './pages/Add/Add';
import List from './pages/List/List';
import Orders from './pages/Orders/Orders';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <ToastContainer />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div className="app">
        <Navbar setShowLogin={setShowLogin} />

        {/* Optional Sidebar for Admin Routes */}
        <div className="app-content">
          <Routes>
            {/* User Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/myorders" element={<MyOrders />} />
            <Route path="/verify" element={<Verify />} />

            {/* Admin Routes */}
            <Route
              path="/add"
              element={
                <>
                  <Sidebar />
                  <Add />
                </>
              }
            />
            <Route
              path="/list"
              element={
                <>
                  <Sidebar />
                  <List />
                </>
              }
            />
            <Route
              path="/orders"
              element={
                <>
                  <Sidebar />
                  <Orders />
                </>
              }
            />
          </Routes>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;
