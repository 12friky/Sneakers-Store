/* eslint-disable no-unused-vars */
import React from 'react'
import './BigBanner.css';
import MyImage from '../../assets/Images/MiddleBanner.png'
import { FaPlayCircle } from 'react-icons/fa';
import Sneakers from '../../assets/Images/Sneakers3.png'

const BigBanner = () => {
  return (
    <div className='BigBanners'>
      <img src={MyImage} className='Images' alt='Banner' />
      <div className='Descriptions'>
        <h2 className='h3Decriptions'>More Than <br /> a Sneakers</h2>
        <p className='ProductQuote'>Your Dream Shoe is here. Shop the <br /> collection and make part of perfect style</p>
        <button className='shopNow'>Shop Now</button><br />
        <div className='VideoReview'>
          <FaPlayCircle className='FaFilmIcon' size={20} />
          <a className='WatchLink' href=''>Watch Review of videos</a>
        </div>
      </div>
      <img src={Sneakers} className='SneakersImage' alt='Sneakers' />
    </div>
  )
}

export default BigBanner
