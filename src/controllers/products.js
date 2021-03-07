import Model from '../models/model';

const productModel = new Model('products');
export const productsPage = async (req, res) => {
  try {
    const data = await productModel.select('name, price, quantity');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
