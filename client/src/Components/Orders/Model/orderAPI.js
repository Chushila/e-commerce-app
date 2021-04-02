export function callOrdersApi(setOrders) {
  fetch('/orders', {
    credentials: 'include',
    mode: 'cors',
  })
    .then((res) => res.json())
    .then((res) => setOrders(res.messages))
    .catch((err) => err);
}

export function findOrderProductsApi(setProducts) {
  fetch('/orders:', {
    credentials: 'include',
    mode: 'cors',
  });
}
