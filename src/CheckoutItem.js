
import React from 'react'
import './CheckoutItem.css';
import { useGlobalContext } from './Context';

function CheckoutItem({id, image, price, title, rating}) {
    const { removeFromCart } = useGlobalContext();

    return (
        <div className="checkoutItem">
            <img className="checkoutItem_image" src={image} alt="product"/>
            <div className="checkoutItem_info">
                <p className="checkoutItem_title">{title}</p>
                <p className="checkoutItem_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutItem_rating">
                    {
                       Array(rating).fill().map((_, index) => {
                          return <p key={index}>⭐</p>
                        })
                    }
                </div>
                <button onClick={() => removeFromCart(id)}>Remove from The Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutItem
