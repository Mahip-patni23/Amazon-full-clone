import React from 'react'
import './Navbar.css';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import {useGlobalContext} from './Context';

function Navbar() {
    const {user, closeSubmenu} = useGlobalContext();
    return <div className="navbar" onMouseOver={closeSubmenu}>
            <div className="navbar_option">
                <MenuOutlinedIcon></MenuOutlinedIcon>
                <p>All</p>
            </div>
            <div className="navbar_option">
                <p>{user?"Fresh":"Best Sellers"}</p>
            </div>
            <div className="navbar_option">
                <p>{user? "Browsing History":"Mobiles"}</p>
            </div>
            <div className="navbar_option">
                <p>{user?"Amazon Pay":"Fashion"}</p>
            </div>
            <div className="navbar_option">
                <p>{user? "Gift Cards":"Amazon Pay"}</p>
            </div>
            <div className="navbar_option option_7">
                <p>{user? "Home improvements":"Electronics"}</p>
            </div>
            <div className="navbar_option option_6">
                <p>{user? "Health, Household & Personal Care":"Prime"}</p>
            </div>
            {!user && <div className="navbar_option option_5">
                <p>Customer Service</p>
            </div>}
            <div className="navbar_option option_4">
                <p>{user? "Gift Ideas":"New Releases"}</p>
            </div>
            <div className="navbar_option option_3">
                <p>{user?"Sports, Fitness & Outdoors":"Computers"}</p>
            </div>
            {!user && <div className="navbar_option option_2">
                <p>Today's Deal</p>
            </div>}
            {!user && <div className="navbar_option option_1">
                <p>Home & Kitchen</p>
            </div>}
            <div className="navbar_option">
                <img className="navbar_prime_logo" src="http://assets.stickpng.com/images/5f4924f968ecc70004ae7066.png" alt="" />
                <div>
                    <p>FREE delivery, </p>
                    <p>movies & more</p>
                </div>
                <ChevronRightOutlinedIcon></ChevronRightOutlinedIcon>
            </div>
        </div>
}

export default Navbar
