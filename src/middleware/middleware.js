import axios from 'axios';

export const modifyMessage = (req, res, next) => {
  req.body.message = `SAYS: ${req.body.message}`;
  next();
};

export const performAsyncAction = async (req, res, next) => {
  try {
    await axios.get('https://picsum.photos/id/0/info');
    next();
  } catch (err) {
    next(err);
  }
};

export const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/v1/login');
};

export const checkNotAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.redirect('/v1/orders');
  }
  next();
};
