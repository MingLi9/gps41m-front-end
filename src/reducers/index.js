import {combineReducers} from 'redux';
import shoppingcartReducer from './shoppingcartReducer';

export default combineReducers({
    shoppingcartState: shoppingcartReducer
});