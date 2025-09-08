// Sidebar.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaUser, FaTachometerAlt, FaCalendarAlt, FaBullhorn, FaSignOutAlt } from 'react-icons/fa';


const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`side-bar ${isMinimized ? 'minimized' : ''}`}>
      <div className="sidebar-header">
        <h2 className="logo">{isMinimized ? '' : 'FLAMINGO'}</h2>
        <button onClick={toggleSidebar} className="toggle-btn">
          
          <FaBars />
        </button>
      </div>

      <div className="list">
        <NavLink to="/" exact className="nav-item">
          <FaTachometerAlt className="icon" />
          {!isMinimized && <span>Dashboard</span>}
        </NavLink>

          <NavLink to="/profile" className="nav-item">
          <FaUser className="icon" />
          {!isMinimized && <span>Profile</span>}
        </NavLink>

        <NavLink to="/user/events" className="nav-item">
          <FaCalendarAlt className="icon" />
          {!isMinimized && <span>Events</span>}
        </NavLink>

        <NavLink to="/user/announcements" className="nav-item">
          <FaBullhorn className="icon" />
          {!isMinimized && <span>Announcements</span>}
        </NavLink>

        <NavLink to="/user/requests" className="nav-item">
          <FaUser className="icon" />
          {!isMinimized && <span>Requests</span>}
        </NavLink>
      </div>

      <div className="sidebar-footer">
        <NavLink to="/user/logout" className="nav-item">
          <FaSignOutAlt className="icon" />
          {!isMinimized && <span>Log out</span>}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;