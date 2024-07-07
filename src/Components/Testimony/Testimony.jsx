/* eslint-disable no-unused-vars */
import React from 'react';
import Images from '../../assets/Laptops2.jpeg'
import './Testimony.css';

const Testimony = () => {
  return (
    <div className="testimony-container">
      <h2 className="testimony-header">Customer reviews</h2>
      <p className="testimony-subheader">What our customers are saying..</p>
      <div className="testimony-grid">
        <div className="testimony-card">
          <div className="quote">“</div>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat, sapien vitae congue fringilla, sem eros consequat tellus,
            quis volutpat leo enim.
          </p>
          <div className="profile">
            <img src={Images} alt="Lance Jarvis" />
            <div className="profile-info">
              <p className="name">Lance Jarvis</p>
              <div className="social">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="testimony-card">
          <div className="quote">“</div>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat, sapien vitae congue fringilla, sem eros consequat tellus,
            quis volutpat leo enim.
          </p>
          <div className="profile">
            <img src={Images} alt="Ericka Lynda" />
            <div className="profile-info">
              <p className="name">Kelvin Adjan</p>
              <div className="social">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="testimony-card">
          <div className="quote">“</div>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            consequat, sapien vitae congue fringilla, sem eros consequat tellus,
            quis volutpat leo enim.
          </p>
          <div className="profile">
            <img src={Images} alt="Neil Wilford" />
            <div className="profile-info">
              <p className="name">Francis Ngumah</p>
              <div className="social">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
