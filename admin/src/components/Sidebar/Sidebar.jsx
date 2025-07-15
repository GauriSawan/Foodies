import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-header">
        <h3 className="sidebar-title">Admin Panel</h3>
      </div>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option" activeClassName="active">
          <div className="option-icon">
            <img src={assets.add_icon} alt="Add Items" />
          </div>
          <span className="option-text">Add Items</span>
        </NavLink>
        <NavLink to='/list' className="sidebar-option" activeClassName="active">
          <div className="option-icon">
            <img src={assets.list_icon || assets.order_icon} alt="List Items" />
          </div>
          <span className="option-text">List Items</span>
        </NavLink>
        <NavLink to='/orders' className="sidebar-option" activeClassName="active">
          <div className="option-icon">
            <img src={assets.order_icon} alt="Orders" />
          </div>
          <span className="option-text">Orders</span>
        </NavLink>
      </div>
      <div className="sidebar-footer">
        <div className="user-profile">
          <img src={assets.profile_icon} alt="Profile" />
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;