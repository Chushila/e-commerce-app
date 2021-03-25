export function callApi(setProducts){
    fetch("http://localhost:3000/v1/products",{
      credentials:'include',
      mode:'cors'
    })
    .then(res=>res.json()).then(res=>setProducts(res.messages))
    .catch(err => err)
  }