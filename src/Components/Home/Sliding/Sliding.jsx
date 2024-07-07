/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import './Sliding.css';
import { FaStar, FaStarHalf, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slid1 from '../../../assets/Images/Slid1.png';
import Slid2 from '../../../assets/Images/slid2.png';
import Slid3 from '../../../assets/Images/slid3.png';
import Slid4 from '../../../assets/Images/slid4.png';
import { useDispatch } from 'react-redux'; // Importing Redux hooks
import { addItem } from '../../../Slices/cartSlice'; // Adjust the import path as per your project structure

const Slidding = () => {
  // Array of objects with fake data
  const sneakerData = [
    {
      id: 1,
      name: 'Sneakers Jordan',
      price: 200, // Adjusted to be a number without 'GHC' or non-numeric characters
      colors: 3,
      image: Slid1,
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Air Max',
      price: 250, // Adjusted to be a number without 'GHC' or non-numeric characters
      colors: 2,
      image: Slid2,
      rating: 2,
    },
    {
      id: 3,
      name: 'Adidas Yeezy',
      price: 300, // Adjusted to be a number without 'GHC' or non-numeric characters
      colors: 5,
      image: Slid4,
      rating: 4.5,
    },
    {
      id: 4,
      name: 'Puma RS-X',
      price: 220, // Adjusted to be a number without 'GHC' or non-numeric characters
      colors: 4,
      image: Slid4,
      rating: 4,
    },
    {
      id: 5,
      name: 'Reebok Classic',
      price: 180, // Adjusted to be a number without 'GHC' or non-numeric characters
      colors: 2,
      image: Slid4,
      rating: 3.5,
    },
  ];

  const carouselRef = useRef(null);
  const dispatch = useDispatch(); // Redux dispatch hook

  const handlePrev = () => {
    carouselRef.current.scrollLeft -= 220; // Adjust the value to scroll by the desired amount
  };

  const handleNext = () => {
    carouselRef.current.scrollLeft += 50; // Adjust the value to scroll by the desired amount
  };

  const handleAddToCart = (product) => {
    dispatch(addItem(product)); // Dispatching addItem action with the product details
  };

  return (
    <div>
      <p className='OurCollection'>Our New Collection</p>
      <div className="MainCombo">

        <FaArrowLeft className="arrow left" onClick={handlePrev} />
        <div className="carousel" ref={carouselRef}>
          {sneakerData.map(sneaker => (
            <div key={sneaker.id} className="Box1">
              <div className="ImageCombo">
                <img
                  src={sneaker.image}
                  alt={sneaker.name}
                  className="slidImage"
                />
              </div>
              <div className="DesciptionBox">
                <h3 className="SnaekerName">{sneaker.name}</h3>
                <div className="Stars">
                  {[...Array(Math.floor(sneaker.rating))].map((_, i) => (
                    <FaStar key={i} color="gold" size={18} />
                  ))}
                  {sneaker.rating % 1 !== 0 &&
                    <FaStarHalf color="gold" size={18} />}
                </div>
                <h3 className="sneakerPrice"> GHC {sneaker.price}</h3> {/* Adjusted to include GHC prefix */}
                <h3 className="numberOfColurs">{sneaker.colors} COLOURS</h3>
                <button className="PlusBtn" onClick={() => handleAddToCart(sneaker)}>+</button>
              </div>
            </div>
          ))}
        </div>
        <FaArrowRight className="arrow right" onClick={handleNext} />
      </div>
    </div>
  );
};

export default Slidding;
