/* eslint-disable no-unused-vars */
import React from 'react'
import MyBanner from  '../../assets/banner2.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className='BigBanner'>
    <img
     src={MyBanner}
     className='banner'
    />
      
    </div>
  )
}

export default Banner
