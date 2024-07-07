/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaFacebookF, FaGoogle, FaLinkedinIn, FaTwitter, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <div className='footer-section about'>
                    <h1 className='logo-text'>Isko Sneakers</h1>
                    <p>Your One stop Sneaker Shop</p>
                    <h2>About Us</h2>
                    <p>We want to help bring talented students and unique startups together.</p>
                    <div className='contact'>
                        <span><FaPhone /> +233599422525</span>
                        <span><FaEnvelope /> francisngumah91@gmail.com</span>
                    </div>
                </div>

                <div className='footer-section links'>
                    <h2>Information</h2>
                    <ul>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>More Search</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Testimonials</a></li>
                        <li><a href='#'>Events</a></li>
                    </ul>
                </div>

                <div className='footer-section links'>
                    <h2>Helpful Links</h2>
                    <ul>
                        <li><a href='#'>Services</a></li>
                        <li><a href='#'>Supports</a></li>
                        <li><a href='#'>Terms & Condition</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                    </ul>
                </div>

                <div className='footer-section subscribe'>
                    <h2>Subscribe More Info</h2>
                    <div className='subscribe-form'>
                        <input type='email' placeholder='Enter your Email' />
                        <button className='subscribe-btn'>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className='footer-bottom'>
                <div className='social-icons'>
                    <FaFacebookF />
                    <FaGoogle />
                    <FaLinkedinIn />
                    <FaTwitter />
                </div>
                <p>&copy; 2024 @ IskoTeck. All Rights Reserved</p>
            </div>
            <FaArrowUp className='scroll-up' />
        </div>
    );
}

export default Footer;
