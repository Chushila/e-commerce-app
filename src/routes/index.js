import express from 'express';
import { testEnvironmentVariable } from '../settings';
import { ordersPage, addOrder,orderById,orderByUser } from '../controllers/orders';
import { userPage, addUser, userByName, userByNamePass } from '../controllers/user';
import { checkAuthenticated, checkNotAuthenticated  } from '../middleware/middleware';
import {productsPage} from '../controllers/products';
import passport from 'passport';




const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));

//products

indexRouter.get('/products', productsPage);

//users

indexRouter.get('/myinfo', userByName);

indexRouter.delete('/logout', (req, res)=>{
    req.logOut()
    req.redirect('/login')
})

indexRouter.get('/login',checkNotAuthenticated, (req,res)=>{
    res.render('login.ejs')
});
indexRouter.get('/register',checkNotAuthenticated, (req,res)=>{
    res.render('register.ejs')
});
indexRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/v1/products',
    failureRedirect: '/v1/login',
    failureFlash: true
}));
indexRouter.post('/register', addUser);

//orders

indexRouter.get('/orders:id', orderById);
indexRouter.get('/users:id/orders', checkAuthenticated, orderByUser);
indexRouter.post('/orders', addOrder);
indexRouter.get('/orders', ordersPage);


export default indexRouter;
