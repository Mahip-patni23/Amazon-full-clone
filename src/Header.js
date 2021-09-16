import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './Context';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


function Header() {
    const {basket, user, openSubmenu, closeSubmenu} = useGlobalContext();

    const displaySubmenu = (e) => {
        const currentPage = e.target.textContent;
        const currentBtn = e.target.getBoundingClientRect();
        const center = (currentBtn.left + currentBtn.right)/2;
        const bottom = currentBtn.bottom;
        openSubmenu(currentPage, {center, bottom});
    }

    const handleSubmenu = (e) => {
        if(!e.target.classList.contains("header_submenu_container")){
            closeSubmenu();
        }
    }

    return (
        <div className="header" onMouseOver={handleSubmenu}>
            <Link to='/'>
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo"/>
            </Link>

            <div className="header_option_location">
                <LocationOnOutlinedIcon fontSize="small"></LocationOnOutlinedIcon>
                <div>
                    <span className="header_optionOne">
                    {user? `Deliver to ${user?.email}`:"Hello"}
                </span>

                <span className="header_optionTwo">
                    Select your address
                </span>
                </div>
            </div>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>

            <div className="header_nav">
                <Link to={!user && '/login'} className="link">
                    <div className="header_option header_submenu_container">
                       <span className="header_optionOne header_submenu_container">
                           Hello, {user? user.email:"Sign in"}
                        </span>
                        
                        <span className="header_optionTwo header_submenu_container header_submenu_heading" onMouseOver={displaySubmenu}>
                           Account & Lists <ArrowDropDownIcon fontSize="small"></ArrowDropDownIcon>
                        </span>        
                     </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionOne">
                        Returns
                    </span>

                    <span className="header_optionTwo">
                        & Orders
                    </span> 
                </div>

                <div className="header_option">
                    <span className="header_optionOne">
                        Your 
                    </span>

                    <span className="header_optionTwo">
                        Prime
                    </span> 
                </div>
                
                <div className="header_optionBasket">
                    <Link to="./checkout">
                        <AddShoppingCartOutlinedIcon className="header_shoppingCart"></AddShoppingCartOutlinedIcon>
                        <span className="header_basketCount">{basket?.length}</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Header
