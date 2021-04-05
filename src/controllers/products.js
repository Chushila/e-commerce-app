import { v4 as uuidv4 } from 'uuid';
import Model from '../models/model.js';
import { orderModel } from './orders.js';

const productModel = new Model('products');
export const productsPage = async (req, res) => {
  try {
    const data = await productModel.select(
      'id, name, price, price, quantity,image'
    );
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const addProductsToOrder = async (req, res) => {
  try {
    const { username } = await req.user;
    const { cart, total } = await req.body;
    const columns = 'time_ordered,users,id,total';
    const date = new Date(Date.now());
    const id = uuidv4();
    const values = `'${date.toUTCString()}','${username}','${id}',${total}`;
    const order = await orderModel.insertWithReturn(columns, values);
    cart.forEach((element) => {
      const value = [
        Number(element.id),
        `'${id}'`,
        Number(element.quantityInCart),
      ];
      productModel.insertInCustomTable('products_orders', value);
    });
    res.status(204).redirect('/orders');
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const getProductsOfOrder = async (req, res) => {
  try {
    const data = await productModel.select(
      'id, name, price, price, quantity, image'
    );
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
