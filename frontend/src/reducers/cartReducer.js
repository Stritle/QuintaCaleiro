import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";



function cartReducer(state = { cartItems: [] }, action) {

    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;
            const vinho = state.cartItems.find(x => x.vinho === item.vinho);
            if (vinho) {
                return {
                    cartItems: state.cartItems.map(x => x.vinho === vinho.vinho ? item : x)
                };
            }
            return { cartItems: [...state.cartItems, item] }
        case CART_REMOVE_ITEM:
            return {
                cartItems: state.cartItems.filter(x => x.vinho !== action.payload)
            };
        default:
            return state


    }
}
export { cartReducer }