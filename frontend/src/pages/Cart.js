import React, { useEffect } from "react"
import { addToCart, removeFromCart } from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from "../componentes/Navbar";


const Cart = (props) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const vinhoId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const removeFromCartHandler = (vinhoId) => {
        dispatch(removeFromCart(vinhoId));
    }
    useEffect(() => {
        if (vinhoId) {
            dispatch(addToCart(vinhoId, qty));
        }
    }, [])

    return (
        <div className='cart'>
            <Navbar />
            <h3>Carrinho de Compras</h3>
            <div className="cart-list">
                <ul className="cast-list-container">
                    <li className="cabeçalho">
                        <div className="label-produtos"><small>Produtos</small></div>
                        <div className="label-price"><small>Preço</small></div>
                        <div className="label-qty"><small>Quantidade</small></div>
                        <div className="label-price-total"><small>Sub-Total</small></div>
                        <div className="label-remove"><small>Remover</small></div>
                    </li>
                    <li>
                        {
                            cartItems.lenght === 0 ?
                                <div>Carro vazio</div>
                                : cartItems.map(item =>
                                    <div className="cart-item">
                                        <div className="cart-image">
                                            <img src={item.image} alt="cartFoto"></img>
                                        </div>

                                        <div className="cart-name">
                                            <p>{item.nome}</p>
                                        </div>
                                        <div className="cart-price">
                                            <p>{item.price}€</p>
                                        </div>
                                        <div className="cart-qty">
                                            <p>{item.qty}</p>
                                        </div>
                                        <div className="cart-price-total">
                                            <p>{item.price * item.qty}€</p>
                                        </div>
                                        <div className="cart-remover">
                                            <button onClick={() => removeFromCartHandler(item.vinho)}>Remover</button>
                                        </div>
                                    </div>
                                )
                        }
                    </li>
                    <li className="cabeçalho-final">
                        <p>{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}€</p>
                    </li>

                </ul>
            </div>

        </div>
    )
}


export default Cart;