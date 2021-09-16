import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import { useGlobalContext } from './Context';
import CheckoutItem from './CheckoutItem';
import { getBasketTotal } from './Context';
import { useHistory } from 'react-router-dom';

function Checkout() {
    const {basket, user, isSubmenuOpen, closeSubmenu} = useGlobalContext();
    let value = getBasketTotal(basket);
    const history = useHistory();

    const isEmpty = () => {
        if(basket.length === 0){
            return true;
        }
        return false;
    }
    

    return (
        <div className={`checkout ${isSubmenuOpen && "checkout_dark_background"}`} onMouseOver={closeSubmenu}>
            <div className="checkout_left">
                <div className={`checkout_cart ${(!user && isEmpty()) && "checkout_empty_cart"}`}>
                    {(!user && isEmpty()) && <img className="checkout_cart_image" src="https://m.media-amazon.com/images/G/31/cart/empty/animated/cart-fallback-desaturated._CB405720499_.svg" alt="cart" />}
                    <div className="checkout_titles">
                       {user && <h2 className="checkout_title">Hello, {user.email}</h2>}
                       <h2 className="checkout_title">{isEmpty() ?"Your Amazon Cart is Empty":"Shopping Cart"}</h2>
                       {(!user && isEmpty()) && <button onClick={() => history.push('/login')} className="checkout_signIn">Sign in to your account</button>}
                    </div>

                    <div className="checkout_items">
                    {
                        basket.map((item) => {
                           return <CheckoutItem key={item.id} {...item}></CheckoutItem>
                        })
                    }
                    </div>
                   {!isEmpty() && <p className="checkout_total">Subtotal({basket.length} Items): <strong>${`${value.toFixed(2)}`}</strong></p>}
                </div>

                <div className="checkout_left_blank">
                </div>

                <div className="checkout_left_info">
                    <p>The price and availability of items at Amazon.in are subject to change. The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.
                       Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.</p>
                </div>
                
            </div>

            <div className="checkout_right">
                {(user || !isEmpty()) && <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="banner"/>}
                {!isEmpty() && <Subtotal></Subtotal>}
            </div>
        </div>
    )
}

export default Checkout
