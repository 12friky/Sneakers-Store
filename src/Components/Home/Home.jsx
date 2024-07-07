/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from './NavBar/NavBar'
import ProductGrid from './ProductGrid/ProductGrid'
import './Home.css'
import BigBanner from '../BigBanner/BigBanner'
import Sliding from './Sliding/Sliding'

const Home = () => {
  return (
    <div>
      <>
        <NavBar/>
        <ProductGrid/>
        <BigBanner/>
        <Sliding/>
        
      </>
    </div>
  )
}

export default Home
