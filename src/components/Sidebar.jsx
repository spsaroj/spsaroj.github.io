import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Sidebar.css';
import profilePic from '../assets/images/profile.png';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-photo">
        <img src={profilePic} alt="Saroj Paudel" />
      </div>
      <nav className="nav-links">
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          About
        </NavLink>
        <NavLink 
          to="/works" 
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          Works
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          Projects
        </NavLink>
        <NavLink 
          to="/skills" 
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          Skills
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? 'active-link' : ''}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
