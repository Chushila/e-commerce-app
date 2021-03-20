export function getProductSearch (products,term) {
    const filter = products.filter(el=> Object.values(el)[1].toLowerCase().includes(term))
    return filter;
}