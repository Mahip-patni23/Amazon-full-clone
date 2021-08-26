import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import { useGlobalContext } from './Context';
import CheckoutItem from './CheckoutItem';

function Checkout() {
    const {basket, user} = useGlobalContext();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" alt="banner"/>
                <div className="checkout_titles">
                    <h2 className="checkout_title">Hello, {user?.email}</h2>
                    <h2 className="checkout_title">Shopping Cart</h2>
                </div>

                {
                    basket.map((item) => {
                        return <CheckoutItem key={item.id} {...item}></CheckoutItem>
                    })
                }
            </div>

            <div className="checkout_right">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="banner"/>
                <Subtotal></Subtotal>
            </div>
        </div>
    )
}

export default Checkout
