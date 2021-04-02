import { useContext, useEffect, useState } from 'react';
import './orderSingle.css';
import { AllProductsContext } from '../../../Contexts/context';
import OrderProduct from '../../ProductSingle/View/orderProduct';
import dateTime from 'date-time';

function OrderSingle(props) {
  const { products } = useContext(AllProductsContext);
  const [productsInfo, setProductsInfo] = useState([]);
  useEffect(() => {
    fetch(`/orders:${props.info.id}`, {
      credentials: 'include',
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((res) => setProductsInfo(res.messages))
      .catch((err) => err);
  }, [props.info.id]);
  return (
    <div className="Order">
      <section className="OrderInfo">
        <p id="orderId">{props.info.id}</p>
        {window.innerWidth > 600 && <span>Order Number</span>}
        <p>{dateTime({ date: new Date(props.info.time_ordered) })}</p>
        <span>Time Ordered</span>
      </section>
      <section className="ProductContainer">
        {productsInfo[0] &&
          products
            .filter((el) =>
              productsInfo.map((el) => el.product_id).includes(el.id)
            )
            .map((el) => {
              return (
                <OrderProduct
                  key={el.id}
                  info={el}
                  amount={
                    productsInfo.find((product) => product.product_id === el.id)
                      .product_amount
                  }
                />
              );
            })}
      </section>
      <section className="Total">
        <p>{props.info.total}$</p>
        <span>Total</span>
      </section>
    </div>
  );
}

export default OrderSingle;
