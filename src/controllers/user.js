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
  const columns = 'customer_name, customer_surname, email, username, password,id';

  try {
    const hashedPas = await bcrypt.hash(password, 10);
    const values = `'${name}', '${surname}', '${email}', '${username}', '${hashedPas}','${uuidv4()}'`;
    await userModel.insertWithReturn(columns, values);
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
    const { username } = await req.user;
    const data = await userModel.select(
      'customer_name, customer_surname, username,verification',
      ` WHERE username = '${username}'`
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

export const alterUser = async (req, res) => {
  const input = req.body;
  const { username } = await req.user;
  try {
    if (input.password) {
      input.password = await bcrypt.hash(input.password, 10);
    }
    await userModel.alterTable(input, `WHERE username = '${username}';`);
    res.status(201).send('changed');
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const alterUserLocally = async (input, username) => {
  try {
    await userModel.alterTable(input, `WHERE username = '${username}';`);
  } catch (err) {
    console.log(err);
  }
};
