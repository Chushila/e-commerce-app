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

export const addOrder = async (req, res, next) => {
  const { username } = req.user;
  const columns = 'time_ordered,users';
  const date = new Date(Date.now());
  const values = `'${date.toUTCString()}','${username.username}'`;
  try {
    await orderModel.insertWithReturn(columns, values);
    next();
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const orderById = async (req, res) => {
  try {
    const { id } = req.params;
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
      'id, time_ordered, users',
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
