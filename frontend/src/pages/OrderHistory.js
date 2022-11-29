import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrders } from "../actions/orderActions";

const OrderHistory = (props) => {
  const myOrderList = useSelector((state) => state.myOrderList);
  const { loading, error, orders } = myOrderList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch]);
  console.log(orders);
  return (
    <div>
      OrderHistory
      {loading ? (
        <div>loading</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.createAt}</td>
                <td>{order.totalPrice}</td>
                <td>{order.isPaid ? order.piadAt : "Não"}</td>
                <td>{order.isDelivered ? order.deliveredAt : "Não"}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      props.history.push(`/order/${order._id}`);
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistory;
