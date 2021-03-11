export const insertMessages = `
INSERT INTO messages(name, message)
VALUES ('chidimo', 'first message'),
      ('orji', 'second message')
`;

export const getPrice = `with get_price (price) as (SELECT SUM(products.price) 
FROM products
JOIN products_orders
ON products.id = products_orders.product_id)


SELECT order_id, get_price.price as price
FROM products_orders,get_price
GROUP BY 1,2;
`;
