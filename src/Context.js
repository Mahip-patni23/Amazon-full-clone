import React from 'react';
import { useReducer, useState } from 'react';
import { useContext } from 'react';
import { reducer } from './Reducer';

const AppContext = React.createContext();

const initialState = {
    basket: [],
    user: null
}

/* Calculating total amount in basket */
export const getBasketTotal = (basket) => {
    const totalAmount = basket?.reduce((amount, item) => {
        return item.price+amount;
    }, 0)
    return totalAmount;
}
/* ------------------------------------ */



const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});

    const openSubmenu = (text, coordinates) => {
        setLocation(coordinates);
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    const addToCart = (item) => {
        /* console.log(item); */
        dispatch({type: 'ADD ITEM', payload: item})
    }

    const removeFromCart = (id) => {
        /* console.log(id); */
        dispatch({type: 'REMOVE ITEM', payload: id})
    }

    /* const authorizeUser = (user) => {
        dispatch({type: 'SET USER', payload: user})
    } */

    const authorizeUser = (user) => {
        dispatch({type: 'ADD USER', payload: user});
    }

    const clearBasket = () => {
        dispatch({type: "EMPTY BASKET"});
    }

    return <AppContext.Provider value={{...state, addToCart, removeFromCart, authorizeUser, clearBasket, openSubmenu, isSubmenuOpen, location, closeSubmenu}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider};