import React from 'react'
import './Product.css'
import { useGlobalContext } from './Context';

function Product({id, title, price, rating, image}) {
    const { addToCart } = useGlobalContext();

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, index) => {
                        return <p key={index}>⭐</p>
                    })}
                </div>
            </div>
            <img src={image} alt="product"/>

            <button onClick={() => addToCart({id, title, price, rating, image})}>Add To Basket</button>
        </div>
    )
}

export default Product
