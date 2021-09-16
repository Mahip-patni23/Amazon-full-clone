import React from 'react'
import './Product.css'
import { useGlobalContext } from './Context';

function Product({id, title, price, rating, image}) {
    const { addToCart, isSubmenuOpen } = useGlobalContext();

    const truncate = (string, count) => {
        if(string.length > count){
            return string.substr(0, count-1)+"....";
        }
        return string;
    }

    return (
        <div className="product">
            <img className="product_image" src={image} alt="product"/>
            <div className="product_info">
                <p>{truncate(title, 100)}</p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, index) => {
                        return <p key={index}>⭐</p>
                    })}
                </div>
                <p className="product_deal">Deal of the Day</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p> 
                <div className="product_delivery">
                   <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="alternate" />
                   <p>Get it by <span>Tommorrow</span></p>
                </div>
                <p className="product_freeDelivery">FREE Delivery by Amazon</p>
            </div>

            <button onClick={() => addToCart({id, title, price, rating, image})}>Add To Basket</button>
        </div>
    )
}

export default Product
