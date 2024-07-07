/* eslint-disable no-unused-vars */
import React from 'react';
import './Contact.css';
import NavBar from '../../Home/NavBar/NavBar';
import Footer from '../../Footer/Footer';
import { FaEnvelope, FaPhone, FaUser, FaBuilding, FaMapMarkerAlt, FaComments } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Not sure what you need? The team at Square Events will be happy to listen to you and suggest event ideas you had not considered.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <FaEnvelope />
              <span>Francisngumah91@gmail.com</span>
            </div>
            <div className="contact-detail">
              <FaPhone />
              <span>Support: (+233) 599 422 525</span>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h3>Wed love to hear from you! Lets get in touch</h3>
          <form>
            <div className="form-group">
              <div className="input-icon">
                <FaUser />
                <input type="text" placeholder="Full Name" />
              </div>
              <div className="input-icon">
                <FaBuilding />
                <input type="text" placeholder="Company" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-icon">
                <FaEnvelope />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-icon">
                <FaPhone />
                <input type="text" placeholder="Phone number" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-icon">
                <FaMapMarkerAlt />
                <input type="text" placeholder="Address" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-icon">
                <FaComments />
                <textarea placeholder="Your Message"></textarea>
              </div>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
