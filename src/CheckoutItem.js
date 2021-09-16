
import React from 'react'
import './CheckoutItem.css';
import { useGlobalContext } from './Context';

function CheckoutItem({id, image, price, title, rating}) {
    const { removeFromCart } = useGlobalContext();

    const truncate = (string, num) => {
        if(string.length>num){
            return string.substr(0, num-1)+"...."
        }
        return string;
    }

    return (
        <div className="checkoutItem">
            <img className="checkoutItem_image" src={image} alt="product"/>
            <div className="checkoutItem_info">
                <p className="checkoutItem_title">{truncate(title, 88)}</p>
                <p className="checkoutItem_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="checkoutItem_inStock">In Stock</p>
                <p className="checkoutItem_eligibility">Eligible For FREE Shipping</p>
                <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="in Stock" />
                <div className="checkoutItem_rating">
                    {
                       Array(rating).fill().map((_, index) => {
                          return <p key={index}>⭐</p>
                        })
                    }
                </div> 
                <button onClick={() => removeFromCart(id)}>Delete</button>
            </div>
            
        </div>
    )
}

export default CheckoutItem
