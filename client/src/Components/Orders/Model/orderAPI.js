export function callOrdersApi(setOrders) {
  fetch('v1/orders', {
    credentials: 'include',
    mode: 'cors',
  })
    .then((res) => res.json())
    .then((res) => setOrders(res.messages))
    .catch((err) => err);
}

export function findOrderProductsApi(setProducts) {
  fetch('v1/orders:', {
    credentials: 'include',
    mode: 'cors',
  });
}
