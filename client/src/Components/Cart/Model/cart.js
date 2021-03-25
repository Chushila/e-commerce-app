import {CartContext} from '../../../Contexts/context'
import {useContext} from 'react'


export const forEachFunction  = (el)=> {
    let total = 0
    if(el.quantityInCart>0) total+= el.price * el.quantityInCart;
    return total;
}