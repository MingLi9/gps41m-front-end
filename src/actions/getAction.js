import {GET_ITEM_COUNT_CART} from './types';

export const getItemsCountCar = () => {
    return (dispatch) => {
        console.log("get items in cart counted");
        dispatch({
            type: GET_ITEM_COUNT_CART
        })
    }
}