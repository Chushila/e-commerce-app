import {useState,useContext} from 'react'
import {ProductContext} from './../../Products/Model/productContex'
import './search.css'
function Search(){
    const [inputValue,setInputValue]=useState();
    const {setSearch} = useContext(ProductContext)
    
const handleChange = (e)=>{
    setInputValue(e.target.value)
}
function handleSubmit(){
    if(inputValue==='') {
        setSearch({isOn:false, term:''})
        return
};
    setSearch({isOn:true, term: inputValue.toLowerCase()})
}

    return(
        <div className='Search'>
            <input type = 'text' onChange = {handleChange} value = {inputValue} placeholder='Search for a product here'></input>
            <button onClick={handleSubmit}/>
        </div>
    )
}

export default Search;