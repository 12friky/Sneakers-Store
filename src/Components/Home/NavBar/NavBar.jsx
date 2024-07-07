/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux'; // Import useSelector hook
import './NavBar.css';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.items); // Access cart items from Redux state

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-header">
                {/* <Link to="/" className="navbar-logo">E-Shoes</Link> */}
                <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            <ul className={`nav-list ${isMobileMenuOpen ? 'nav-list-mobile' : ''}`}>
                <li className="nav-item"><Link to="/"><FaHome /> Home</Link></li>
                <li className="nav-item"><Link to="/men">Men</Link></li>
                <li className="nav-item"><Link to="/women">Women</Link></li>
                <li className="nav-item"><Link to="/new-arrivals">New Arrivals</Link></li>
                {/* <li className="nav-item"><Link to="/sales">Sales</Link></li> */}
                <li className="nav-item"><Link to="/contact-us">Contact Us</Link></li>
                <li className="nav-item dropdown">
                    <Link to="/account"><FaUser /> Account</Link>
                    <ul className="dropdown-menu">
                        <li className="dropdown-item"><Link to="/login">Login</Link></li>
                        <li className="dropdown-item"><Link to="/account/register">Register</Link></li>
                        <li className="dropdown-item"><Link to="/account/profile">Profile</Link></li>
                        <li className="dropdown-item"><Link to="/account/orders">Order History</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                    <Link to="/cart"><FaShoppingCart /> Cart ({cartItems.length})</Link> {/* Display cart items length */}
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
