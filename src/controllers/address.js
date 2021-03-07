import Model from '../models/model';

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
  const {
    id,
    street_num,
    street_name,
    apt_number,
    city,
    state,
    zip_code,
  } = req.body;
  const columns = 'id, street_num,street_name,apt_number,city,state,zip_code';
  const values = `'${id}', '${street_num}','${street_name}','${apt_number}','${city}','${state}','${zip_code}'`;
  try {
    const data = await addressModel.insertWithReturn(columns, values);
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
