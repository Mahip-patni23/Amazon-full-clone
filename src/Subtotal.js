import React from 'react'
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useGlobalContext } from './Context';
import { getBasketTotal } from './Context';
import {useHistory} from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const { basket } = useGlobalContext();
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) =>(
                <>
                <div className="subtotal_text">
                    <CheckCircleIcon></CheckCircleIcon>
                    <p className="subtotal_text_p">Your first order qualifies for FREE Delivery. Select this option at checkout. <a href="https://www.amazon.in/b?node=15765571031&pop-up=1">Details</a></p>
                </div>
                
                <p>
                    Subtotal({basket.length} Items): <strong>{`${value}`}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" /> This Order contains a Gift 
                </small>
                </>
            )}
            decimalScale={2}
           /*  value={getBasketTotal(basket)} */
            value={getBasketTotal(basket)}
            displayType={"text"} 
            thousandSeparator={true}
            prefix={"$"}
            ></CurrencyFormat>

            <button onClick={() => history.push('/payment')}>Proceed To CheckOut</button>
            
        </div>
    )
}

export default Subtotal
