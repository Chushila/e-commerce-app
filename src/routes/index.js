import express from 'express';
import passport from 'passport';
import { addAddress } from '../controllers/address';
import { addOrder, orderByUser } from '../controllers/orders';
import { addUser, userByName, alterUser } from '../controllers/user';
import {productsOrdersPage} from '../controllers/product-orders'
import {
  checkAuthenticated,
  checkNotAuthenticated,
} from '../middleware/middleware';
import { productsPage, addProductsToOrder } from '../controllers/products';

const indexRouter = express.Router();
// products

indexRouter.get('/products', productsPage);
// users

indexRouter.get('/myinfo', checkAuthenticated, userByName);
indexRouter.put('/myinfo', checkAuthenticated, alterUser);
indexRouter.delete('/logout', (req, res) => {
  req.logOut();
  res.redirect('http://localhost:3001/login');
});

indexRouter.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs');
});
indexRouter.get('/register', checkNotAuthenticated, (req, res) => {
  res.render('register.ejs');
});
indexRouter.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: 'http://localhost:3001/user',
    failureRedirect: 'http://localhost:3001/login',
    failureFlash: true,
  })
);
indexRouter.post('/register', addUser);

// orders

indexRouter.get('/orders:id', checkAuthenticated, productsOrdersPage);
indexRouter.get('/orders', checkAuthenticated, orderByUser);
indexRouter.post('/orders', checkAuthenticated, addProductsToOrder);

// address

indexRouter.post('/addressinfo', checkAuthenticated, addAddress);

export default indexRouter;
