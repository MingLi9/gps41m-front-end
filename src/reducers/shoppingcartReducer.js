import { ADD_PRODUCT_CART, GET_ITEM_COUNT_CART } from "../actions/types";

const initialState = {
    shoppingcartNumbers: 0,
    products: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case ADD_PRODUCT_CART:
            let product = action.payload
            return{
                shoppingcartNumbers: state.shoppingcartNumbers + 1,
                products: [...state.products, product]
            }
        case GET_ITEM_COUNT_CART:
            return{
                ...state
            } 
        default:
            return state;
    }
}
