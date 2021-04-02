import './App.css';
import Login from './Components/userLogin/view/login';
import ProductPage from './Components/Products/View/productPage';
import Register from './Components/userLogin/view/register';
import Orders from './Components/Orders/View/Orders';
import { useState, useEffect } from 'react';
import { callApi } from './Components/Products/Model/productApi';
import React from 'react';
import {
  CartContext,
  UserContex,
  SearchContext,
  AllProductsContext,
} from './Contexts/context';
import Search from './Components/Search/View/search';
import { Link, Route, Switch } from 'react-router-dom';
import User from './Components/User/View/user';
import Cart from './Components/Cart/View/cart';
import ChangeInfo from './Components/userLogin/view/changeInfo';
import { useCookies } from 'react-cookie';
import Nav from './Components/Nav/Nav';
import { smallNavHandler, changeOrientation } from './media/utils';

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});
  const [search, setSearch] = useState({ isOn: false, term: '' });
  const [products, setProducts] = useState([]);
  const [cookies, setCookie] = useCookies([]);

  useEffect(() => {
    smallNavHandler();
    callApi(setProducts);
  }, []);
  useEffect(() => {
    setCookie('cart', cart, {
      path: '/',
    });
  }, [cart, setCookie]);
  useEffect(() => {
    changeOrientation();
  }, [window.innerWidth]);
  useEffect(() => {
    if (!cart[0] && cookies.cart[0]) {
      setCart(cookies.cart);
    }
  }, []);

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart }}>
        <SearchContext.Provider value={{ search, setSearch }}>
          <UserContex.Provider value={{ user, setUser }}>
            <header>
              <Search />
              <button id="navButton" onClick={smallNavHandler}></button>
              <Nav />
              <nav>
                <Link id="orderLink" to="/orders">
                  {' '}
                  Orders
                </Link>
                <div className="columnInfo">
                  {user[0] ? (
                    <Link to="/user">{user[0].customer_name} </Link>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                  {user[0] && (
                    <form
                      action="/logout?_method=DELETE"
                      method="POST"
                      id="logoutForm"
                      onClick={() =>
                        document.getElementById('logoutForm').submit()
                      }
                    >
                      Logout
                    </form>
                  )}
                  <Link
                    to="/"
                    onClick={() => {
                      setSearch({ isOn: false, term: '' });
                    }}
                  >
                    Home
                  </Link>
                  <Link to="/cart">Cart</Link>
                </div>
              </nav>
            </header>
            <article id="mainDisplay">
              <AllProductsContext.Provider value={{ products, setProducts }}>
                <Switch>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/checkout">{/* <Checkout/> */}</Route>
                  <Route path="/register">
                    <Register />
                  </Route>
                  <Route path="/changeInfo">
                    <ChangeInfo />
                  </Route>
                  <Route path="/user">
                    <User />
                  </Route>
                  <Route path="/orders">
                    {user[0] ? <Orders /> : <Login />}
                  </Route>
                  <Route path="/cart">
                    <Cart />
                  </Route>
                  <Route path="/" exact>
                    <ProductPage />
                  </Route>
                </Switch>
              </AllProductsContext.Provider>
            </article>
          </UserContex.Provider>
        </SearchContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
