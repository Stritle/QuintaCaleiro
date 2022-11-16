import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createOrder, detailsOrder, payOrder } from "../actions/orderActions";
import PaypalButton from "../componentes/PaypalButton";

function Order(props) {
  const orderPay = useSelector((state) => state.orderPay);
  const {
    loading: loadingPay,
    success: successPay,
    error: errorPay,
  } = orderPay;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successPay) {
      props.history.push("/profile");
    } else {
      dispatch(detailsOrder(props.match.params.id));
    }
    return () => {};
  }, [successPay]);

  const handleSuccessPayment = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, order, error } = orderDetails;

  return loading ? (
    <div>Loading ...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <div className="placeorder">
        <div className="placeorderInfo">
          <div>
            <h3>Dados da Entrega</h3>
            <div>
              <h6>
                {order.shipping.address}, {order.shipping.city},
                {order.shipping.postalCode}, {order.shipping.country},
              </h6>
            </div>
            <div className="infoDestaque">
              {order.isDelivered
                ? "Entregue em:  " + order.deliveredAt
                : "Por entregar"}
            </div>
          </div>
          <div>
            <h3>Pagamento</h3>
            <div>
              <h6>Método de Pagamento:{order.payment.paymentMethod} </h6>
            </div>
            <div className="infoDestaque">
              {order.isPaid ? "Pago em:  " + order.paidAt : "Por pagar"}
            </div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <div>
                  <h3>Carrinho de Compras</h3>
                </div>
                <div>
                  <h6>Preço</h6>
                </div>
              </li>
              {order.orderItems.length === 0 ? (
                <div>Cart is empty</div>
              ) : (
                order.orderItems.map((item) => (
                  <li key={item._id}>
                    <div className="cart-image">
                      <div>
                        <img src={item.image} alt="product" />
                      </div>
                    </div>
                    <div className="cart-name">
                      <div>
                        <Link to={"/details/" + item.vinho}>{item.nome}</Link>
                      </div>
                      <div>
                        <h6>Quantidade: {item.qty}</h6>
                      </div>
                    </div>
                    <div className="cart-price">
                      <h6>{item.price} €</h6>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="placeorder-action">
          <ul>
            <li className="placeorder-actions-payment">
              {loadingPay && <div>Finishing Payment...</div>}
              {!order.isPaid && (
                <PaypalButton
                  amount={order.totalPrice}
                  onSuccess={handleSuccessPayment}
                />
              )}
            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>{order.itemsPrice}€</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>{order.shippingPrice}€</div>
            </li>
            <li>
              <div>Tax</div>
              <div>{order.taxPrice}€</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>{order.totalPrice}€</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Order;
