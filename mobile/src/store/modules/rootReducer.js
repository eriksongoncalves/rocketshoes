import { combineReducers } from 'redux';

import cartReducer from './cart/reducers';
import favoritesReducer from './favorites/reducers';

export default combineReducers({
    cart: cartReducer,
    favorites: favoritesReducer
});