/* eslint-disable no-unused-vars */
import React from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import Footer from '../../../Footer/Footer';
import NavBar from '../../../Home/NavBar/NavBar';
import Sneaker from '../../../../assets/Images/new2.jpeg';
import GooglePng from '../../../../assets/Icons/google.png';
import FacebookPng from '../../../../assets/Icons/facebook.png';
import './Login.css';

const Login = () => {
  return (
    <div>
      <NavBar />
      <div className="login-container">
        <div className="login-box">
          <div className="login-left">
            <h2>Welcome back</h2>
            <form>
              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="input-group">
                <FaLock className="input-icon" />
                <input type="password" placeholder="Password" required />
              </div>
              <div className="login-options">
                <label>
                  <input type="checkbox" />
                  Keep me logged in
                </label>
                <a href="/forgot-password">Forgot password?</a>
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
          <div className="login-right">
            <img src={Sneaker} alt="Sneaker" className="sneaker-image" />
            <div className="overlay">
              <div className="social-login">
                <span>or</span>
                <div className="social-icons">
                  <button className="social-btn">
                    <img src={GooglePng} alt="Google" />
                  </button>
                  <button className="social-btn">
                    <img src={FacebookPng} alt="Facebook" />
                  </button>
                </div>
                <p>Dont have an account? <a href="/signup">Sign Up</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
