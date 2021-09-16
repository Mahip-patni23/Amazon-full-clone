import React from 'react'
import './Payment.css';
import {useGlobalContext} from './Context';
import {Link, useHistory} from'react-router-dom';
import CheckoutItem from './CheckoutItem';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';
import {getBasketTotal} from './Context';
import CurrencyFormat from 'react-currency-format';
import { useEffect } from 'react';
import axios from './axios';
import { db } from './firebase';


function Payment() {
    const {basket, user, clearBasket, closeSubmenu} = useGlobalContext();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState("");
    const [success, setSuccess] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //Whenever we have a payment process or payment platform, we need to basically tell stripe that we have a payment suppose $50 so
        //Can u give us a client secret so that i can use to run by a card.Therefore, we cannot have transaction without a client secret.
        //So first we need to get it from the stripe before charging any payment.
        //Hence, It Generate the special stripe secret that allows us to charge a customer.

        //Axios is a very popular fetch library which allows us to fetch or make request like a post or a get request.It generally allows
        //us to interact with API's.

        const getClientSecret = async() => {
            const response = await axios({
                method: 'post',
                //Stripe expects the total in a currencies subunits.
                url:`/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();

    },[basket])

    console.log("The Secret Is: >>>", clientSecret);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation

            /* db 
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  created: paymentIntent.created
              }) */
            console.log(paymentIntent);

            setSuccess(true);
            setError(null);
            setProcessing(false);

            clearBasket();

            history.replace('/orders');
        })

    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error? e.error.message:"");
    }
    
    return (
        <div className="payment" onMouseOver={closeSubmenu}>
            <h1>Checkout <Link to='/checkout'>({basket.length} items)</Link></h1>
            <div className="payment_container">
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>Flat No-1907, Tower-B24</p>
                        <p>Supertech Ecovillage 3</p>
                        <p>Sector 16B, Gautam Budh Nagar</p>
                        <p>Greater Noida West, UTTAR PRADESH</p>
                        <p>201009</p>
                        <p>India</p>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {
                            basket.map((item) => {
                                return <CheckoutItem key={item.id} {...item}></CheckoutItem>
                            })
                        }
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}></CardElement>

                            <div className="payment_priceContainer">
                                <CurrencyFormat renderText={(value) =>(
                                    <>                
                                    <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"} 
                                thousandSeparator={true}
                                prefix={"$"}
                                ></CurrencyFormat>

                                <button disabled={processing || disabled || success}>
                                    <span>{processing? <p>Processing</p>:'Buy Now'}</span>
                                </button>
                                
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Payment
