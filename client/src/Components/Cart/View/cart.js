import {useState} from 'react'
import './cart.css'

function Cart(){
    const [inputValue,setInputValue]=useState();

const handleChange = (e)=>{
    setInputValue(e.target.value)
}

    return(
        <div className='Cart'>
            <input type = 'text' onChange = {handleChange} value = {inputValue} placeholder='Search for a product here'></input>
            <button type='submit'/>
        </div>
    )
}

export default Cart;