import Model from '../models/model';

export const orderModel = new Model('orders');
export const ordersPage = async (req, res) => {
  try {
    const data = await orderModel.select('id, time_ordered, users');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const orderById = async (req, res) => {
  try {
    const { id } = await req.params;
    const data = await orderModel.select(
      'id, time_ordered',
      ` WHERE id = ${id.slice(1)}`
    );
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
export const orderByUser = async (req, res) => {
  try {
    const { username } = await req.user;
    const data = await orderModel.select(
      'id, time_ordered, users, total',
      ` WHERE users = '${username}'`
    );
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const lastOrderId = async (username) => {
  try {
    const data = await orderModel.getLastId(username);
    return data.rows[0].id;
  } catch (err) {
    console.log(err);
  }
};
