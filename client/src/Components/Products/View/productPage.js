import {useState,useEffect,useContext} from 'react'
import Product from '../../ProductSingle/View/product'
import {SearchContext,AllProductsContext} from '../../../Contexts/context'
import './productPage.css'
import {getProductSearch} from '../Model/productSearch'

function ProductPage (){
    const {search} = useContext(SearchContext)
    const {products} = useContext(AllProductsContext)
    const [makingSearch,setMakingSearch] = useState();
      useEffect(()=>{
        try{
          setMakingSearch(getProductSearch(products,search.term))
      }
        catch(e){
        }
      },[search.term,products])
    return(
        <div className = 'ProductPage'>
          {makingSearch ? makingSearch.map(el=>{
             return  <Product key = {el.id} info = {el}/> 
         }):
         products ? products.map(el=>{
             return  <Product key = {el.id} info = {el}/> 
         }) : 'loading'}
        </div>
    )
}

export default ProductPage;