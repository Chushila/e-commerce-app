import {useState,useContext, useEffect} from 'react'
import {CartContext} from './../../../Contexts/context'
import CartProduct from '../../ProductSingle/View/cartProduct'
import {PriceContext} from '../../../Contexts/context'
import './cart.css'
import {forEachFunction} from '../Model/cart'
import { sum } from 'mathjs'

function Cart(){
    const {cart,setCart} = useContext(CartContext);
    const [total,setTotal] = useState([]);
    useEffect(()=>{
        setTotal(sum(cart.map((el)=>el.quantityInCart*el.price)))
    },[cart])
    return(
        <div className='Cart'>
            <section className = 'productDisplay'>
                {cart.map(el=> {
                   return <CartProduct key = {el.id} info = {el}  />
                })}
            </section>
            <footer>
                <p>Total: {cart[0] && total+total*.11}$</p>
                <button>CheckOut</button>
            </footer>
        </div>
    )
}

export default Cart;