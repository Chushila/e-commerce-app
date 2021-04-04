import { v4 as uuidv4 } from 'uuid';
import Model from '../models/model.js';
import { alterUserLocally } from './user.js';

const addressModel = new Model('delivery_address');
export const addressPage = async (req, res) => {
  try {
    const data = await addressModel.select('name, message');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const addAddress = async (req, res) => {
  const id = uuidv4();
  const { username } = await req.user;
  const {
    street_num,
    street_name,
    apt_number,
    city,
    state,
    zip_code,
  } = req.body;
  const columns = 'street_num,street_name,apt_number,city,state,zip_code,id';
  const values = `'${street_num}','${street_name}','${apt_number}','${city}','${state}','${zip_code}','${id}'`;
  try {
    const data = await addressModel.insertWithReturn(columns, values);
    const userData = { address_id: id };
    const userChange = await alterUserLocally(userData, username);
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
