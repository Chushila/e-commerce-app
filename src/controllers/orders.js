import Model from '../models/model';

const orderModel = new Model('orders');
export const ordersPage = async (req, res) => {
  try {
    const data = await orderModel.select('id, time_ordered, users');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const addOrder = async (req, res) => {
  const {username } = req.body;
  const columns = 'time_ordered,users';
  const date = new Date(Date.now());
  const values = `'${date.toUTCString()}','${username}'`;
  try {
    const data = await orderModel.insertWithReturn(columns, values);
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const orderById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await orderModel.select(
      'id, time_ordered, users',
      ` WHERE id = ${id.slice(1)}`
    );
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
export const orderByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await orderModel.select(
      'id, time_ordered, users',
      ` WHERE users = '${id.slice(1)}'`
    );
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
