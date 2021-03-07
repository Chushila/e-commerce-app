import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import Model from '../models/model';

const userModel = new Model('customers');
export const userPage = async (req, res) => {
  try {
    const data = await userModel.select(
      'customer_name, customer_surname, username,verification'
    );
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const addUser = async (req, res) => {
  const {
    name, surname, email, username, password
  } = req.body;
  const columns = 'address_id,customer_name, customer_surname, email, username, password,id';

  try {
    const hashedPas = await bcrypt.hash(password, 10);
    const values = `'1', '${name}', '${surname}', '${email}', '${username}', '${hashedPas}','${uuidv4()}'`;
    const data = await userModel.insertWithReturn(columns, values);
    res.redirect('/v1/login');
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
export const userByNamePass = async (user) => {
  try {
    const data = await userModel.select(
      'username,password,id',
      ` WHERE username = '${user}'`
    );
    const output = { user: data.rows };
    return output.user[0];
  } catch (err) {
    console.log(err);
  }
};
export const userByName = async (req, res) => {
  try {
    const user = req.params.username;

    const data = await userModel.select(
      'customer_name, customer_surname, username,verification',
      ` WHERE username = '${user.slice(1)}'`
    );
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const getUserById = async (id) => {
  try {
    const data = await userModel.select(
      'username,password,id',
      ` WHERE id = '${id}'`
    );
    const output = { user: data.rows };
    
    return output.user[0];
  } catch (err) {
    console.log(err);
  }
};
