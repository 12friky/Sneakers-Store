/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import NavBar from '../../Home/NavBar/NavBar';
import Footer from '../../Footer/Footer';
import LeftSide from '../../../assets/Images/showing boot.jpeg';
import RightSide from '../../../assets/Images/showing boot2.jpeg';
import { updateQuantity, removeItem } from '../../../Slices/cartSlice';
import './Cart.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, delta) => {
    dispatch(updateQuantity({ id, delta }));
  };

  const handleRemoveItem = id => {
    dispatch(removeItem(id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <NavBar />
      <div className="content">
        <img className="side-image left" src={LeftSide} alt="Left Side" />
        <div className="cart-container">
          <h2>Special Cart</h2>
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p> {/* Ensure description is rendered */}
                </div>
                <div className="item-quantity">
                  <button className='creaseBtn' onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  <span className="quantity-number">{item.quantity}</span>
                  <button className='creaseBtn' onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </div>
                <div className="item-price">
                  <span>GHC{(item.price * item.quantity).toFixed(2)}</span>
                  <FaTrashAlt className="delete-icon" onClick={() => handleRemoveItem(item.id)} />
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-item">
              <span>Subtotal</span>
              <span>GHC{calculateTotal()}</span>
            </div>
            <div className="summary-item total">
              <span>Total</span>
              <span>GHC{calculateTotal()}</span>
            </div>
          </div>
          <button className="checkout-button">Proceed to checkout</button>
          <button className="continue-shopping-button">Continue shopping</button>
        </div>
        <img className="side-image right" src={RightSide} alt="Right Side" />
      </div>
      <Footer />
    </>
  );
}

export default Cart;
