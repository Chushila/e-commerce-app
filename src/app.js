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
import indexRouter from './routes/index.js';
import { userByNamePass, getUserById } from './controllers/user.js';
import initializePass from './utils/passport-config.js';



initializePass(passport, userByNamePass, getUserById);

const app = express();
app.set('view-engine', 'ejs');
app.use('/v1', indexRouter);
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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.cwd(), 'client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'client/build/index.html'));
});
export default app;
