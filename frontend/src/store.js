import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { vinhoListReducer, vinhoDetailsReducer, vinhoSaveReducer } from './reducers/vinhoReducer';
import { cartReducer } from './reducers/cartReducer';
import Cookie from 'js-cookie'
import { userRegisterReducer, userSigninReducer } from './reducers/userReducer';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;


const initialState = { cart: { cartItems }, userSignin: { userInfo } };
const reducer = combineReducers({
    vinhoList: vinhoListReducer,
    cart: cartReducer,
    vinhoDetails: vinhoDetailsReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    vinhoSave: vinhoSaveReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;