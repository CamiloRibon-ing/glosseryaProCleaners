import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/images/TGcleaningservicelogo.jpeg';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'SERVICES PRICES', path: '/prices' },
    { label: 'EMPLOYMENT APPLICATION', path: '/employment' },
    { label: 'CONTACT US', path: '/contact' },
    { label: 'BOOK NOW', path: '/book' },
  ];

  const handleNav = (path) => {
    setOpen(false);
    if (typeof path === 'string') navigate(path);
  };

  // Helper to check if current path matches nav item
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => handleNav('/')} style={{cursor:'pointer'}}>
        <img src={logo} alt="GlossyaPro Cleaners Logo" className="logo-img" />
        <span className="logo-text">GlossyaPro Cleaners</span>
      </div>
      <button className="navbar-burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span className={open ? 'burger-bar open' : 'burger-bar'}></span>
        <span className={open ? 'burger-bar open' : 'burger-bar'}></span>
        <span className={open ? 'burger-bar open' : 'burger-bar'}></span>
      </button>
      <ul className="navbar-menu desktop">
        {navItems.map((item) => (
          <li
            key={item.label}
            className={isActive(item.path) ? 'active' : ''}
            onClick={() => handleNav(item.path)}
          >
            {item.label}
          </li>
        ))}
      </ul>
      {/* Lateral Drawer Menu */}
      <div className={`navbar-drawer-overlay${open ? ' open' : ''}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1} aria-hidden={!open}></div>
      <aside className={`navbar-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        <div className="drawer-header">
          <div className="drawer-logo" onClick={() => handleNav('/')} style={{cursor:'pointer'}}>
            <img src={logo} alt="GlossyaPro Cleaners Logo" className="logo-img" style={{height:32, marginRight:8}} />
            <span className="logo-text" style={{fontSize:'1.1rem'}}>GlossyaPro Cleaners</span>
          </div>
          <button className="drawer-close" aria-label="Close menu" onClick={() => setOpen(false)}>&times;</button>
        </div>
        <ul className="drawer-menu">
          {navItems.map((item) => (
            <li
              key={item.label}
              className={isActive(item.path) ? 'active' : ''}
              onClick={() => handleNav(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
}
