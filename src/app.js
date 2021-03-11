import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import flash from 'express-flash';
import session from 'express-session';
import indexRouter from './routes/index';
import { userByNamePass, getUserById } from './controllers/user';
import initializePass from './utils/passport-config';

const cryptoRandomString = require('crypto-random-string');

initializePass(passport, userByNamePass, getUserById);

const app = express();
app.set('view-engine', 'ejs');
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
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', indexRouter);
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.stack });
  next();
});

export default app;
