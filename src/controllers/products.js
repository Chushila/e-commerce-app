import Model from '../models/model';
import { lastOrderId } from './orders';

const productModel = new Model('products');
export const productsPage = async (req, res) => {
  try {
    const data = await productModel.select('id, name, price, price, quantity');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const addProductsToOrder = async (req, res) => {
  try {
    const { username } = await req.user;
    const id = await lastOrderId(username);
    const { products } = await req.body;
    products.forEach((element) => {
      const value = [ id, Number(element) ];
      productModel.insertInCustomTable('products_orders', value);
    });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
