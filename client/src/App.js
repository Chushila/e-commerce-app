import './App.css';
import Login from './Components/userLogin/view/login'
import ProductPage from './Components/Products/View/productPage'
import Register from './Components/userLogin/view/register'
import {useState, useContext, useEffect} from 'react'
import React from 'react'
import {CartContext} from './Components/Cart/Model/cartContex'
import Search from './Components/Search/View/search'
import {ProductContext} from './Components/Products/Model/productContex'

function App() {
  const [cart,setCart] = useState([])
  
  const [search,setSearch] = useState({isOn:false, term:''});
  return (
    <div className="App">
      <CartContext.Provider value={{cart,setCart}}>
      <ProductContext.Provider value={{search,setSearch}}>
      <header>
        <Search/>
        <nav>
          <a>Login</a>
          <a>Cart</a>
        </nav>
      </header>
      <ProductPage/>
      </ProductContext.Provider>
     </CartContext.Provider>
    </div>
  );
}

export default App;
