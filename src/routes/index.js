import express from 'express';
import passport from 'passport';
import { addAddress } from '../controllers/address.js';
import { orderByUser } from '../controllers/orders.js';
import { addUser, userByName, alterUser } from '../controllers/user.js';
import { productsOrdersPage } from '../controllers/product-orders.js';
import {
  checkAuthenticated,
  checkNotAuthenticated,
} from '../middleware/middleware.js';
import { productsPage, addProductsToOrder } from '../controllers/products.js';

const indexRouter = express.Router();
// products

indexRouter.get('/products', productsPage);
// users

indexRouter.get('/myinfo', checkAuthenticated, userByName);
indexRouter.put('/myinfo', checkAuthenticated, alterUser);
indexRouter.delete('/logout', (req, res) => {
  req.logOut();
  res.redirect('/login');
});

indexRouter.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/login',
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
