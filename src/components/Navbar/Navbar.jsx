
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/images/TGcleaningservicelogo.jpeg';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
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
    if (typeof path === 'string') navigate(path);
  };
  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleDrawer = (open) => setDrawerOpen(open);
  const handleDrawerNav = (path) => {
    setDrawerOpen(false);
    handleNav(path);
  };
  return (
    <nav className="navbar curved-navbar">
      <div className="navbar-svg-bg">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 C360,40 1080,20 1440,60 L1440,0 L0,0 Z" fill="#2196f3" />
        </svg>
      </div>
      <div className="navbar-content">
        <div className="navbar-logo" onClick={() => handleNav('/')} style={{cursor:'pointer'}}>
          <img src={logo} alt="GlossyaPro Cleaners Logo" className="logo-img" />
          <span className="logo-text">GlossyaPro Cleaners</span>
        </div>
        <button className="navbar-burger" aria-label="Open menu" onClick={() => handleDrawer(true)}>
          <span className={drawerOpen ? 'burger-bar open' : 'burger-bar'}></span>
          <span className={drawerOpen ? 'burger-bar open' : 'burger-bar'}></span>
          <span className={drawerOpen ? 'burger-bar open' : 'burger-bar'}></span>
        </button>
        <ul className="navbar-menu landing-menu desktop">
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
      </div>
      {/* Drawer overlay */}
      <div className={drawerOpen ? 'navbar-drawer-overlay open' : 'navbar-drawer-overlay'} onClick={() => handleDrawer(false)} />
      {/* Sidebar drawer */}
      <aside className={drawerOpen ? 'navbar-drawer open' : 'navbar-drawer'}>
        <button className="drawer-close" aria-label="Close menu" onClick={() => handleDrawer(false)}>&times;</button>
        <ul className="drawer-menu">
          {navItems.map((item) => (
            <li
              key={item.label}
              className={isActive(item.path) ? 'active' : ''}
              onClick={() => handleDrawerNav(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  );
}
