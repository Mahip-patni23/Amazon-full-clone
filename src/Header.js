import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useGlobalContext } from './Context';
import {auth} from './firebase';


function Header() {
    const {basket, user} = useGlobalContext();

    const userAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to='/'>
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo"/>
            </Link>

            <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>

            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div onClick={userAuthentication} className="header_option">
                       <span className="header_optionOne">
                           Hello, {user? user.email:"Sign in"}
                        </span>
                        
                        <span className="header_optionTwo">
                           {user?"Sign out":"Account & Lists"}
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
