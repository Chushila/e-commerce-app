import Model from '../models/model.js';

const productOrdersModel = new Model('products_orders');

export const productsOrdersPage = async (req, res) => {
  try {
    const { id } = await req.params;
    const data = await productOrdersModel.select(
      'order_id, product_id, product_amount',
      ` WHERE order_id = '${id.slice(1)}'`
    );

    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
