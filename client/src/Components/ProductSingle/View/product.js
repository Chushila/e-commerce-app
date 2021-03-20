import './product.css'
import {CartContext} from '../../Cart/Model/cartContex'
import {useContext} from 'react'

function Product (props){
    const {cart, setCart} = useContext(CartContext);
    return(
        <div className='Product'>
            <img src='https://cdn11.bigcommerce.com/s-4lc6bqzzwx/images/stencil/640w/products/6281/5426/00747479001175_front__63024.1578714655.jpg?c=1'  alt='product'/>
           <div className = 'infoContainer'> 
            <figcaption>{props.info.name}</figcaption>
            <button onClick = {()=>{setCart([...cart, props.info])}}></button>
           </div>
        
        </div>

    )
}
export default Product;