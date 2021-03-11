import express from 'express';
import passport from 'passport';
import { testEnvironmentVariable } from '../settings';
import { addAddress } from '../controllers/address';
import { addOrder, orderById, orderByUser } from '../controllers/orders';
import { addUser, userByName, alterUser } from '../controllers/user';
import {
  checkAuthenticated,
  checkNotAuthenticated,
} from '../middleware/middleware';
import { productsPage, addProductsToOrder } from '../controllers/products';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));

// products

indexRouter.get('/products', productsPage);
// users

indexRouter.get('/myinfo', checkAuthenticated, userByName);
indexRouter.put('/myinfo', checkAuthenticated, alterUser);
indexRouter.delete('/logout', (req, res) => {
  req.logOut();
  req.redirect('/login');
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
    successRedirect: '/v1/myinfo',
    failureRedirect: '/v1/login',
    failureFlash: true,
  })
);
indexRouter.post('/register', addUser);

// orders

indexRouter.get('/orders:id', orderById);
indexRouter.get('/orders', checkAuthenticated, orderByUser);
indexRouter.post('/orders', checkAuthenticated, addOrder, addProductsToOrder);

// address

indexRouter.post('/addressinfo', checkAuthenticated, addAddress);

export default indexRouter;
