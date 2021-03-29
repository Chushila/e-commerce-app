import './App.css';
import Login from './Components/userLogin/view/login'
import ProductPage from './Components/Products/View/productPage'
import Register from './Components/userLogin/view/register'
import Orders from './Components/Orders/View/Orders'
import {useState, useContext, useEffect, useRef} from 'react'
import {callApi} from './Components/Products/Model/productApi'
import React from 'react'
import {CartContext,UserContex,SearchContext,AllProductsContext} from './Contexts/context'
import Search from './Components/Search/View/search'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import User from './Components/User/View/user'
import Cart from './Components/Cart/View/cart'
import ChangeInfo from './Components/userLogin/view/changeInfo'
import { useCookies } from 'react-cookie';

function App() {
  const [cart,setCart] = useState([])
  const [user,setUser] = useState({});
  const [search,setSearch] = useState({isOn:false, term:''});
  const [products,setProducts] = useState([]);
  const [cookies,setCookie] = useCookies([])

  useEffect(()=>{
    callApi(setProducts)
   },[])
   useEffect(()=>{
     setCookie('cart',cart,{
       path:'/'
     })
   },[cart])
   useEffect(()=>{
      if(!cart[0]&&cookies.cart[0]){
        setCart(cookies.cart)
      }
   },[])

  return (
    <div className="App">
      <CartContext.Provider value={{cart,setCart}}>
      <SearchContext.Provider value={{search,setSearch}}> 
      <header>
        <Search/>
        <Link to = '/orders'> Orders</Link>
        <nav>
        {user[0] ?  <Link to= "/user">{user[0].customer_name} </Link> : <Link to= "/login">Login</Link>}
        {user[0] && <form action = "http://localhost:3000/v1/logout?_method=DELETE" method = "POST" id="logoutForm" onClick={()=>document.getElementById("logoutForm").submit()}>Logout</form>}
          <Link to= "/" onClick={()=>{setSearch({isOn:false, term:''})}}>Home</Link>
          <Link to= "/cart">Cart</Link>
        </nav>
      </header>
      <AllProductsContext.Provider value = {{products,setProducts}}>
      <UserContex.Provider value ={{user,setUser}}>
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
        <Route path="/changeInfo">
          <ChangeInfo />
        </Route>
        <Route path="/user">
            <User />
        </Route>
        <Route path="/orders">
          <Orders/>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      <Route path="/" exact>
      <ProductPage />
      </Route>
  </Switch>
  </UserContex.Provider>
  </AllProductsContext.Provider>
      </SearchContext.Provider>
     </CartContext.Provider>
    </div>
  );
}

export default App;
