export function callApi(setProducts) {
  fetch('/products', {
    credentials: 'include',
    mode: 'cors',
  })
    .then((res) => res.json())
    .then((res) => setProducts(res.messages))
    .catch((err) => err);
}
