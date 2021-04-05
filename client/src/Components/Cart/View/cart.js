import { useState, useContext, useEffect } from 'react';
import { CartContext, UserContex } from './../../../Contexts/context';
import CartProduct from '../../ProductSingle/View/cartProduct';
import './cart.css';
import { sum } from 'mathjs';
import { useHistory } from 'react-router';

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [total, setTotal] = useState([]);
  const { user } = useContext(UserContex);
  const history = useHistory();

  const postOrder = () => {
    if (!user[0]) history.push('/login');
    fetch('/orders', {
      method: 'POST',
      body: JSON.stringify({
        cart: cart,
        total: total.toFixed(2),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': 'https://e-commerce-app-chushila.herokuapp.com/cart',
      },
      credentials: 'include',
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((json) => setCart([])).then(()=>history.push('/orders'));
  };

  useEffect(() => {
    setTotal(sum(cart.map((el) => el.quantityInCart * el.price)) * 1.11);
  }, [cart]);
  return (
    <div
      className="Cart"
      onClick={() =>
        setTotal(sum(cart.map((el) => el.quantityInCart * el.price)) * 1.11)
      }
    >
      <section className="productDisplay">
        {cart.map((el) => {
          return <CartProduct key={el.id} info={el} />;
        })}
      </section>
      <footer>
        <p>Total: {total > 0 && total.toFixed(2)}$</p>
        <button onClick={postOrder}>CheckOut</button>
      </footer>
    </div>
  );
}

export default Cart;
