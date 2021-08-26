export const reducer = (state, action) => {


    if(action.type==='ADD ITEM'){
        return {...state, basket: [...state.basket, action.payload]}
    }


    if(action.type === 'REMOVE ITEM'){

        const index = state.basket.findIndex((item) => {
            return item.id === action.payload;
        })
        const newItems = [...state.basket];
        if(index >=0 ){
            newItems.splice(index , 1);
        }else{
            console.warn(`Can't remove product(id: ${action.payload}) as its not present in basket`);
        }
        
        return {...state, basket: newItems}

        /* Basically what it does is it removes all the items with the same id!! So If we have more than one item of same id, If we remove
        it from the basket, it will remove basically all the items with that id, So If we want to remove only one items, we need to target
        the first index that is encountered with that id.*/

        /* const newItems = state.basket.filter((item) => {
            return item.id!==action.payload;
        })
        return {...state, basket: newItems} */
    }

    if(action.type === 'ADD USER'){
        return {...state, user: action.payload};
    }

    if(action.type === 'EMPTY BASKET'){
        return {...state, basket: []};
    }

    return state;
}