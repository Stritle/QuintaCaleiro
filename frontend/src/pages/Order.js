import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsOrder, payOrder } from "../actions/orderActions";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";
import { getError } from "../utils";
import { toast } from "react-toastify";

function Order(props) {
  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;
  const dispatch = useDispatch();

  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

  function createOrder(data, actions) {
    return actions.order
      .create({
        purchase_units: [
          {
            amount: { value: order.totalPrice },
          },
        ],
      })
      .then((orderID) => {
        return orderID;
      });
  }

  function onApprove(data, actions) {
    return actions.order.capture().then(async function (details) {
      try {
        dispatch({ type: "PAY_REQUEST" });
        const { data } = await axios.put(
          `/api/orders/${order._id}/pay`,
          details,
          {
            // headers: { authorization: ` ${userInfo.token}` },
          }
        );
        dispatch({ type: "PAY_SUCCESS", payload: data });
        toast.success("Order is paid");
      } catch (err) {
        dispatch({ type: "PAY_FAIL", payload: getError(err) });
        toast.error(getError(err));
      }
    });
  }
  function onError(err) {
    toast.error(getError(err));
  }

  useEffect(() => {
    if (order) {
      const loadPayPalScript = async () => {
        const { data: clientID } = await axios.get("api/config/paypal", {
          // headers: { authorization: { userInfo } },
        });
        paypalDispatch({
          type: "resetOptions",
          value: {
            "client-id": clientID,
            currenncy: "EUR",
          },
        });
        paypalDispatch({ type: "setLoadingStatus", value: "pending" });
      };
      loadPayPalScript();
    }

    if (successPay) {
      props.history.push("/profile");
    } else {
      dispatch(detailsOrder(props.match.params.id));
    }
    return () => {};
  }, [successPay, dispatch, paypalDispatch]);

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
                  <p className="p-small">(Unidade)</p>
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
                <div>
                  {isPending ? (
                    <h1>Loading</h1>
                  ) : (
                    <div>
                      <PayPalButtons
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                      ></PayPalButtons>
                    </div>
                  )}
                </div>
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
