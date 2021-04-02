export const checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('http://localhost:3001/login');
};

export const checkNotAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.redirect('/v1/orders');
  }
  next();
};
