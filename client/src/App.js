import './App.css';
import Login from './Components/userLogin/view/login'
import ProductPage from './Components/Products/View/productPage'
import Register from './Components/userLogin/view/register'
import {useState, useContext, useEffect} from 'react'
import React from 'react'
import {CartContext,UserContex,ProductContext} from './Contexts/context'
import Search from './Components/Search/View/search'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import User from './Components/User/View/user'
import Cart from './Components/Cart/View/cart'

function App() {
  const [cart,setCart] = useState([])
  const [user,setUser] = useState({});
  const [search,setSearch] = useState({isOn:false, term:''});
  return (
    <div className="App">
      <CartContext.Provider value={{cart,setCart}}>
      <ProductContext.Provider value={{search,setSearch}}>
      <header>
        <Search/>
        <Link to = '/orders'> Orders</Link>
        <nav>
        {user[0] ? `hello,${user[0].customer_name}!` : <Link to= "/login">Login</Link>}
        {user[0] && <Link to= "/logout">Logout</Link>}
          <Link to= "/">Home</Link>
          <Link to= "/cart">Cart</Link>
        </nav>
      </header>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          {/* <Checkout/> */}
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/user">
          <UserContex.Provider value ={{user,setUser}}> 
            <User />
          </UserContex.Provider>
        </Route>
        <Route path="/orders">
          {/* <User /> */}
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      <Route path="/" exact>
      <ProductPage/>
    </Route>
  </Switch>
      </ProductContext.Provider>
     </CartContext.Provider>
    </div>
  );
}

export default App;
