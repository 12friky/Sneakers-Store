/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import './ProductGrid.css';
import Sneakers from '../../../assets/Images/sneakers1.jpg';
import Sneakers2 from '../../../assets/Images/Sneakers2.jpg';
import Sneakers3 from '../../../assets/Images/Sneakers3.png';
import Sneakers4 from '../../../assets/Images/Sneakers4.png';
import { addItem } from '../../../Slices/cartSlice';

const products = [
    { id: 1, name: 'Sneaker summer wear', description: 'Air Force 1 Low NOCTA Certified nice for sunny day ', price: 100.00, image: Sneakers, Discount: '40%' },
    { id: 1, name: 'Sneaker summer wear', description: 'Air Force 1 Low NOCTA Certified nice for sunny day ', price: 100.00, image: Sneakers, Discount: '40%' },
    { id: 2, name: 'Formal Shoe', description: 'Classic Black Leather cool for summerggggg, protect u from th ', price: 120.00, image: Sneakers2, Discount: '50%' },
    { id: 3, name: 'Casual Shoe', description: 'Comfy Everyday Wear nice to wear love teghggeguegiguijeguigegeguieguigeigui', price: 80.00, image: Sneakers3, Discount: '10%' },
    { id: 4, name: 'Casual Shoe', description: 'Comfy Everyday Wear gea the spirit', price: 80.00, image: Sneakers4, Discount: '35%' },
    { id: 5, name: 'Casual Shoe', description: 'Comfy Everyday Wear', price: 80.00, image: Sneakers3, Discount: '35%' },
    { id: 5, name: 'Casual Shoe', description: 'Comfy Everyday Wear', price: 80.00, image: Sneakers3, Discount: '35%' },
    { id: 4, name: 'Casual Shoe', description: 'Comfy Everyday Wear gea the spirit', price: 80.00, image: Sneakers4, Discount: '35%' },
    // Add more products as needed
];

const ProductGrid = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
    };

    return (
        <div>
            <p className='LatestSneakers'>Our Latest Sneakers</p>
            <div className="product-grid">
                {products.map(product => (
                    <div className="product-card" key={product.id}>
                        <div className='discount'>
                            <span className='DiscountSpane'>{product.Discount}</span>
                            <span className='DiscountText'>Off</span>
                        </div>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-details">
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price">Price: GHC{product.price.toFixed(2)}</p>
                        </div>
                        <div className="product-buttons">
                            <button className="buy-now">Buy Now</button>
                            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Add To Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductGrid;
