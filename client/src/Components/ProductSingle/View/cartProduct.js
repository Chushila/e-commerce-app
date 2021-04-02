import './cartProduct.css';
import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../../Contexts/context';

function CartProduct(props) {
  const [quantity, setQuantity] = useState(props.info.quantityInCart);
  const [price, setPrice] = useState(0);
  const [tax, setTax] = useState(0);
  const { cart, setCart } = useContext(CartContext);

  function priceCounter() {
    let newPrice = quantity * props.info.price;
    setTax(newPrice * 0.11);
    newPrice += newPrice * 0.11;
    setPrice(newPrice);
  }
  function handleClick() {
    setQuantity(quantity - 1);
    props.info.quantityInCart -= 1;
  }
  useEffect(() => {
    priceCounter();

    if (quantity <= 0) {
      setCart(cart.filter((el) => el.id !== props.info.id));
    }
  }, [quantity, setCart, props.info.id]);

  return (
    <div className="cartProduct" id={`${props.info.id}`}>
      <img src={props.info.image} alt="product" />
      <div className="infoContainer">
        <figcaption>{props.info.name}</figcaption>
        <span className="price">{props.info.price}$</span>
        {window.innerWidth < 600 ? (
          <span>x{quantity}</span>
        ) : (
          <span>Quantity: x{quantity}</span>
        )}
        <button onClick={handleClick}></button>
      </div>
      <div className="money">
        <p>{price}$</p>
        <p className="Tax">Tax: {tax}$</p>
      </div>
    </div>
  );
}
export default CartProduct;
