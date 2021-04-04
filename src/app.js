import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import flash from 'express-flash';
import session from 'express-session';
import cryptoRandomString from 'crypto-random-string';
import cors from 'cors';
import path from 'path';
import methorOverride from 'method-override';
// import app from './routes/index.js';
import initializePass from './utils/passport-config.js';
import { addAddress } from './controllers/address.js';
import { orderByUser } from './controllers/orders.js';
import { addUser, userByName, alterUser, userByNamePass, getUserById  } from './controllers/user.js';
import { productsOrdersPage } from './controllers/product-orders.js';
import {
  checkAuthenticated,
  checkNotAuthenticated,
} from './middleware/middleware.js';
import { productsPage, addProductsToOrder } from './controllers/products.js';





initializePass(passport, userByNamePass, getUserById);

const app = express();
app.set('view-engine', 'ejs');
// app.use('/v1', app);
app.use(flash());
app.use(
  session({
    secret: cryptoRandomString({ length: 10 }),
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    credentials: true,
    origin: 'https://e-commerce-app-chushila.herokuapp.com',
  })
);
app.use(methorOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.stack });
  next();
});

app.get('/products', productsPage);
// users

app.get('/myinfo', checkAuthenticated, userByName);
app.put('/myinfo', checkAuthenticated, alterUser);
app.delete('/logout', (req, res) => {
  req.logOut();
  res.redirect('/login');
});

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/login',
    failureFlash: true,
  })
);
app.post('/register', addUser);

// orders

app.get('/orders:id', checkAuthenticated, productsOrdersPage);
app.get('/orders', checkAuthenticated, orderByUser);
app.post('/orders', checkAuthenticated, addProductsToOrder);

// address

app.post('/addressinfo', checkAuthenticated, addAddress);








if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.cwd(), 'client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'client/build/index.html'));
});
export default app;
