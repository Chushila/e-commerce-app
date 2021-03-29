export function callOrdersApi(setOrders){
    fetch("http://localhost:3000/v1/orders",{
      credentials:'include',
      mode:'cors'
    })
    .then(res=>res.json()).then(res=>setOrders(res.messages))
    .catch(err => err)
  }

  export function findOrderProductsApi(setProducts){
    fetch("http://localhost:3000/v1/orders:",{
      credentials:'include',
      mode:'cors'
    })
  }