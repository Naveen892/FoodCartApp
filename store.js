 import {combineReducers, createStore} from 'redux'
 import { cartReducers } from '/home/naveen/FoodCart/reducers/cartReducers.js'
 import AsyncStorage from '@react-native-async-storage/async-storage';

 const cartItemsFromStorage = AsyncStorage.getItem('cartItems') == null ?
     JSON.parse(AsyncStorage.getItem('cartItems')) : []

const reducer = combineReducers({
    cart: cartReducers,
})

 const initialState = { cart: {cartItems: cartItemsFromStorage}}

 export const store = createStore(reducer,initialState)