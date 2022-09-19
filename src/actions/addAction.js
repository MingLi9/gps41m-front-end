import {ADD_PRODUCT_CART} from './types';

export const addProductCart = (product) => {
    return (dispatch) => {
        console.log("Adding to cart");
        dispatch({
            type: ADD_PRODUCT_CART,
            payload: product
        })
    }
}