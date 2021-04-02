import './orderProduct.css';

function OrderProduct(props) {
  return (
    <div className="OrderProduct">
      <span>
        {props.info.name} x{props.amount}
      </span>
    </div>
  );
}

export default OrderProduct;
