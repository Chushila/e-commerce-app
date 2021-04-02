import './orders.css';
import { callOrdersApi } from '../Model/orderAPI';
import { useEffect, useState } from 'react';
import OrderSingle from './OrderSingle';

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    callOrdersApi(setOrders);
  }, []);
  return (
    <div className="Orders">
      {orders.map((el) => {
        return <OrderSingle key={el.id} info={el} />;
      })}
    </div>
  );
}

export default Orders;
