import './product.css';
import { CartContext } from '../../../Contexts/context';
import { useContext, useRef, useEffect } from 'react';

function Product(props) {
  const { cart, setCart } = useContext(CartContext);
  // const [quantityInCart,setQuantityInCart] = useState(1);
  const quantityInCart = useRef(1);
  if (props.info.image === null) {
    props.info.image =
      'https://cdn11.bigcommerce.com/s-4lc6bqzzwx/images/stencil/640w/products/6281/5426/00747479001175_front__63024.1578714655.jpg?c=1';
  }

  function handleClick() {
    props.info.quantityInCart = quantityInCart.current;
    if (!cart.find((el) => el.id === props.info.id)) {
      setCart([...cart, props.info]);
    } else {
      quantityInCart.current += 1;
      cart[cart.findIndex((el) => el.id === props.info.id)].quantityInCart =
        quantityInCart.current;
    }
  }
  useEffect(()=>{
    if(props.info.quantityInCart>0){document.getElementById(`button${props.info.id}`).style.backgroundImage=`url('/static/media/plus.png')`}
    else{
      document.getElementById(`button${props.info.id}`).style.backgroundImage=`url('/static/media/logo-shopping-cart-product-design-png-favpng-wF6d2kqQrVTa5YbjCvDeE30yT.528eee43.jpg')`
    }
  },[cart])
  return (
    <div className="Product">
      <img src={props.info.image} alt="product" />
      <div className="infoContainer">
        <figcaption>{props.info.name}</figcaption>
        <span>{props.info.price}$</span>
        {quantityInCart.current < props.info.quantity ? (
          <button id={`button${props.info.id}`} onClick={handleClick}></button>
        ) : (
          <span id="OutOfStock">Out of stock</span>
        )}
      </div>
    </div>
  );
}
export default Product;
