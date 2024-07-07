/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import NavBar from '../../Home/NavBar/NavBar';
import Banner from '../../Banner/Banner';
import Footer from '../../Footer/Footer';
import Sneakers from '../../../assets/Images/new.jpeg';
import Sneakers2 from '../../../assets/Images/new2.jpeg';
import Sneakers3 from '../../../assets/Images/new3.jpeg';
import Sneakers4 from '../../../assets/Images/new4.jpeg';
import Sneakers5 from '../../../assets/Images/new5.jpeg';
import Sneakers6 from '../../../assets/Images/new6.jpeg';
import Sneakers7 from '../../../assets/Images/new7.jpeg';
import { addItem } from '../../../Slices/cartSlice'; // Adjust the import path as per your project structure
import './NewArrival.css';

const NewArrival = () => {
  return (
    <div>
      <>
        <Banner />
        <NavBar />
        <div className='MenCollection'>
          <Section title="Latest Arrival" products={popularProducts} />
          <Section title="New Products" products={newProducts} />
          <Section title="Available" products={availableProducts} />
        </div>
        <Footer />
      </>
    </div>
  );
}

const Section = ({ title, products }) => (
  <div className='ProductSection'>
    <div className='SectionHeader'>
      <h2>{title}</h2>
      <a href='#'>View All</a>
    </div>
    <div className='ProductGrid'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <div className='ProductCard'>
      <img src={product.image} alt={product.name} />
      <div className='ProductInfo'>
        <h3>{product.name}</h3>
        <p className='thePrice'>{product.price} GHC</p>
      </div>
      <div className='buttonBtn'>
        <button className='AddToCartButton' onClick={handleAddToCart}>Add to Cart</button>
        <button className='AddToCartButton'>Buy</button>
      </div>
      <button className='FavoriteButton'>&#9829;</button>
    </div>
  );
};

const popularProducts = [
  { id: 1, name: 'Brown shoes isolated', price: 700, image: Sneakers2 },
  { id: 2, name: 'Black leather', price: 500, image: Sneakers },
  { id: 3, name: 'Black leather isolated', price: 250, image: Sneakers3 },
  { id: 4, name: 'Brown leather slip', price: 450, image: Sneakers2 },
];

const newProducts = [
  { id: 5, name: 'New black shoes', price: 800, image: Sneakers },
  { id: 6, name: 'New brown shoes', price: 600, image: Sneakers },
  { id: 7, name: 'New casual shoes', price: 400, image: Sneakers6 },
  { id: 8, name: 'New formal shoes', price: 700, image: Sneakers7 },
];

const availableProducts = [
  { id: 9, name: 'Sneakers 1', price: 300, image: Sneakers },
  { id: 10, name: 'Sneakers 2', price: 350, image: Sneakers2 },
  { id: 11, name: 'Sneakers 3', price: 400, image: Sneakers3 },
  { id: 12, name: 'Sneakers 4', price: 450, image: Sneakers },
];

export default NewArrival;
