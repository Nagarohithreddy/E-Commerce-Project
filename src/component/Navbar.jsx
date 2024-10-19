import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './navbar.css'; 

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">E-Store</div>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link className="nav-link" to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link className="nav-link" to="/cart" onClick={() => setMobileMenuOpen(false)}>Cart</Link>
          <span className="cart-count">Cart Items: {items.length}</span>
        </div>

        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✖' : '☰'}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
