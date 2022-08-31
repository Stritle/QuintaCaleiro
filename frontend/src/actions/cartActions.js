import axios from 'axios'
import Cookie from 'js-cookie'

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

const addToCart = (vinhoId, qty) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get("/api/vinhos/" + vinhoId);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                vinho: data._id,
                nome: data.nome,
                image: data.image,
                price: data.price,
                qty
            }
        })
        const { cart: { cartItems } } = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    } catch (error) {

    }
}

const removeFromCart = (vinhoId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: vinhoId })

    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}

export { addToCart, removeFromCart }