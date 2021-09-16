import React,{useEffect, useRef} from 'react'
import './Submenu.css'
import { useGlobalContext } from './Context';
import {Link} from'react-router-dom';
import {auth} from './firebase';

function Submenu() {
    const{isSubmenuOpen, location, user} = useGlobalContext();
    const container = useRef(null);

    const userAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

    useEffect(() => {
        const submenu = container.current;
        const {center, bottom} = location
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom+3}px`
    }, [location])

    return (
        <div className={`${isSubmenuOpen ? 'submenu show':'submenu'}`} ref={container}>
            {!user && <div className="submenu_signIn">
                <Link to='/login'>
                     <button className="submenu_signIn_btn">Sign In</button>
                </Link>
                <div className="submenu_newCustomer">
                    <p>New Customer?</p>
                    <Link to="/login" className="link">
                         <p className="submenu_startHere">Start here.</p>
                    </Link>
                </div>
            </div>}
            <div className="submenu_content">
                <div className="submenu_col submenu_col_1">
                    <h3>Your Lists</h3>
                    {user && <p className="submenu_shoppingList">Shopping List</p>}
                    <p>Create a Wish List</p>
                    <p>Wish from Any Website</p>
                    <p>Baby Wish List</p>
                    <p>Discover Your Style</p>
                    <p>Explore Showroom</p>
                </div>

                <div className="submenu_col submenu_col_2">
                    <h3>Your Account</h3>
                    <p>Your Orders</p>
                    <p>Your Wish List</p>
                    <p>Your recommendations</p>
                    <p>Your Prime Membership</p>
                    <p>Explore Showroom</p>
                    <p>Your Prime Video</p>
                    <p>Your Subscribe and Save Items</p>
                    <p>Membership & Subscriptions</p>
                    <p>Your Amazon Business Account</p>
                    <p>Your Seller Account</p>
                    <p>Manage Your Content & Devices</p>
                    {user && <div className="submenu_signout">
                        <p>Switch Accounts</p>
                        <p onClick={userAuthentication}>Sign Out</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Submenu
